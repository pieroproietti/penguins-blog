---
title: "OADC 2026 - Appendice A: openKylin e penguins-eggs"
authors: pieroproietti
tags: [openkylin, penguins-eggs]
description: "Adattamenti necessari per rendere penguinseggs pienamente compatibile con openKylin"
lang: it
enableComments: true
---

import Translations from '@site/src/components/Translations';

<Translations />

Per rendere `penguins-eggs` pienamente compatibile con **openKylin**, sono stati necessari interventi mirati per gestire le peculiarità introdotte dalla distribuzione rispetto a una normale derivata Debian o Ubuntu. Le modifiche hanno riguardato in particolare la fase di avvio (`initramfs`), l'installazione del bootloader (GRUB) e la gestione grafica in macchina virtuale.

Ecco il riepilogo dettagliato delle modifiche e delle relative motivazioni tecniche.

---

### 1. Il blocco del bootloader e l'ESP Lock di openKylin

**La peculiarità di openKylin:**
In openKylin, `/usr/sbin/grub-install` non è il consueto script shell di GNU GRUB, bensì un wrapper in Python 3 scritto dal team di sviluppo della distribuzione. Questo script effettua un controllo di sicurezza preventivo confrontando l'UUID della partizione montata in `--efi-directory` con un valore cablato nel codice (`2C9D-17A5`). Quando un installer (come `krill` o Calamares) partiziona un nuovo disco generando un UUID casuale, il wrapper di openKylin interrompe il processo con un errore bloccante:

```text
Refusing to update an ESP belonging to another installation
```

**Cosa è stato modificato in `eggs`:**
* **Ripristino del vero `grub-install`:** Durante l'installazione (`install.bash.tmpl`), `eggs` verifica la presenza del binario originale (`/usr/sbin/grub-install.openkylin-original` o tramite gestione `dpkg-divert`) e lo ripristina al posto del wrapper Python, consentendo a `krill` e Calamares di scrivere regolarmente il bootloader EFI sul nuovo disco.
* **Pulizia degli hook OEM:** Vengono rimossi automaticamente gli hook residui dell'installer OEM di openKylin:
  * `/etc/grub.d/42_openkylin_multiboot`
  * `/etc/openkylin-installer`
* **Esclusioni di remastering:** Gli stessi percorsi sono stati inseriti tra le esclusioni predefinite in `create-exclude-list.go`, evitando che artefatti e blocchi dell'installer del sistema sorgente finiscano nell'immagine ISO live.

---

### 2. Generazione dell'Initramfs e moduli Live

**La peculiarità di openKylin:**
Essendo una derivata Debian con forti personalizzazioni del kernel e del set di pacchetti base, la generazione dell'`initramfs` richiedeva l'inclusione esplicita dei componenti per lo stack live e per il supporto dei controller di archiviazione in ambiente virtualizzato (KVM/QEMU/Proxmox). Inoltre, il pacchetto BusyBox per l'`initramfs` può presentarsi nei repository con nomenclature differenti.

**Cosa è stato modificato in `eggs`:**
* **Iniezione dei moduli kernel live:** In `remaster.bash.tmpl`, prima di invocare `mkinitramfs`/`update-initramfs`, `eggs` forza in `/etc/initramfs-tools/modules` i moduli indispensabili per montare l'overlay e avviare il sistema live:
  * `virtio_pci`, `virtio_blk`, `virtio_scsi` (storage e virtualizzazione)
  * `isofs`, `overlay` (filesystem della live)
* **Dipendenze di pacchettizzazione:** In `build.go`, il campo delle dipendenze per la famiglia Debian è stato aggiornato con `busybox-initramfs | busybox-static`, garantendo la corretta risoluzione dei pacchetti necessari alla creazione dell'`initramfs` live anche sui repository di openKylin.

---

### 3. Riconoscimento e Sensing della Distribuzione

**Cosa è stato modificato in `eggs`:**
* **Mappatura nativa:** In `distro.go`, `openkylin` è stata mappata esplicitamente come distribuzione di prima classe appartenente alla famiglia `debian`.
* **Ereditarietà delle configurazioni:** In `index.yaml`, `openkylin` è indicizzata per ereditare dinamicamente le ricette, i template e i moduli di provisioning della famiglia `debian`.

---

### 4. Display e Disallineamento del Mouse (`eggs adapt` / UKUI)

**La peculiarità di openKylin:**
Nell'ambiente desktop UKUI (basato sul compositore KWin) eseguito in macchina virtuale tramite protocollo SPICE, il ridimensionamento della finestra con `xrandr` non ricalcolava la matrice delle coordinate del puntatore, provocando uno scarto visivo tra la posizione del cursore grafico e l'effettiva area di clic.

**Cosa è stato modificato in `eggs`:**
* **Riavvio automatico dell'agent SPICE:** Nel comando `eggs adapt`, subito dopo l'esecuzione di `xrandr`, viene riavviato automaticamente il servizio `spice-vdagent` (sia a livello di demone di sistema se eseguito da root, sia a livello di istanza utente tramite `pkill -x spice-vdagent && spice-vdagent`), riallineando all'istante le coordinate del mouse senza dover terminare la sessione grafica.

---

### 5. Validazione Continua in CI ("The Furnace")

Per garantire che nessun aggiornamento futuro comprometta la compatibilità raggiunta, openKylin è stata integrata nella pipeline di Continuous Integration automatica su Proxmox VE tramite un workflow dedicato (`furnace-openkylin.yml`), che esegue regolarmente il remastering end-to-end e il test di avvio su snapshot pulito.

