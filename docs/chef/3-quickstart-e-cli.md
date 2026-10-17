---
sidebar_position: 2
title: Quickstart e CLI Reference
description: Guida rapida e riferimento completo dei comandi del binario chef.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Quickstart e Command Reference (`chef`)

Tutti i comandi di `penguins-chef` vengono eseguiti tramite il binario **`chef`**. Di seguito trovi il percorso rapido per iniziare subito a cucinare il tuo sistema e il riferimento completo della CLI.

---

## 🚀 Quickstart: Dalla `naked` alla ISO finita

### Passo 0. Installa il binario `chef`
Se parti da una ISO `naked` ufficiale o hai già abilitato il repository nativo di `penguins-eggs` (`sudo eggs tools repo add`), puoi installare `penguins-chef` direttamente tramite il gestore pacchetti della tua distribuzione:
- **Debian / Ubuntu / Devuan / Mint:** `sudo apt update && sudo apt install penguins-chef`
- **Arch Linux / Manjaro:** `sudo pacman -Syu penguins-chef`
- **Fedora:** `sudo dnf install penguins-chef`
- **openSUSE:** `sudo zypper install penguins-chef`

In alternativa, puoi scaricare il pacchetto nativo (`.deb`, `.rpm`, `.pkg.tar.zst`) dalla pagina delle [release ufficiali su GitHub](https://github.com/pieroproietti/penguins-chef/releases/latest) o dal [basket di penguins-eggs.net](https://penguins-eggs.net/basket/).

### Passo 1. Scarica o aggiorna la dispensa delle ricette
Come **utente normale** (non usare `sudo`!), scarica l'albero ufficiale delle ricette nella tua home (`~/.chef`):
```bash
chef get
```

### Passo 2. Simula la ricetta con `--dry-run`
Prima di modificare il sistema, controlla il piano di esecuzione completo senza toccare alcun file:
```bash
chef apply ~/.chef/recipes/costumes/colibri/colibri.yaml --dry-run
```

### Passo 3. Cucina la ricetta sul sistema reale
Quando sei soddisfatto del piano mostrato dal dry-run, applica la ricetta con i privilegi di amministratore:
```bash
sudo chef apply ~/.chef/recipes/costumes/colibri/colibri.yaml
```

> [!WARNING] Attenzione a `sudo` e all'espansione di `~/.chef`
> Esegui sempre `chef get` come **utente ordinario** (in modo che le ricette risiedano in `/home/<tuo-utente>/.chef` con i tuoi permessi).
> Quando lanci `sudo chef apply ~/.chef/...` dalla tua normale shell utente, è la tua shell a espandere `~` in `/home/<tuo-utente>` *prima* di invocare `sudo`, e tutto funziona regolarmente.
> Se invece apri una **shell di root** (`sudo -i` o `su -`), il simbolo `~` punterà a `/root/.chef`! Da una shell di root usa sempre il percorso esplicito `/home/<tuo-utente>/.chef/recipes/...`.

### Passo 4. Genera la tua ISO live con `eggs`
Una volta plasmato il sistema, congela il tuo nuovo habitat in un'immagine ISO avviabile e installabile:
```bash
sudo eggs remaster
```

---

## 📖 Riferimento Comandi (`chef`)

### 1. Applicazione e Simulazione (`chef apply`)

* ``sudo chef apply `<percorso/ricetta.yaml>` ``
  * **Descrizione:** Applica la ricetta al sistema reale (`/`). Richiede i privilegi di root (`sudo`).
* ``chef apply `<percorso/ricetta.yaml>` --dry-run``
  * **Descrizione:** Risolve l'intero piano di esecuzione (include, repository, disponibilità pacchetti, file, hostname, servizi, sysroot) e lo stampa a video senza toccare il sistema. **Non richiede `sudo`.**
* ``chef apply `<percorso/ricetta.yaml>` --dry-run --family `<famiglia>` ``
  * **Descrizione:** Simula la risoluzione della ricetta per un'altra famiglia di distribuzioni a partire da qualsiasi macchina ospite.
  * **Valori supportati per `--family`:** `archlinux`, `debian`, `devuan`, `fedora`, `opensuse`, `openkylin`.
  * **Esempi:**
    ```bash
    # Simula la ricetta LightDM per Arch Linux
    chef apply ~/.chef/recipes/dm/lightdm.yaml --dry-run --family archlinux

    # Simula la ricetta per Fedora
    chef apply ~/.chef/recipes/dm/lightdm.yaml --dry-run --family fedora

    # Simula la ricetta per Devuan (usa automaticamente sysvinit)
    chef apply ~/.chef/recipes/dm/lightdm.yaml --dry-run --family devuan
    ```
* ``sudo chef apply `<percorso/ricetta.yaml>` --sysroot `<percorso/overlay-sorgente>` ``
  * **Descrizione:** Sovrascrive la cartella sorgente `sysroot` predefinita della ricetta utilizzando un percorso locale personalizzato.
  * **Nota bene:** a differenza di altri tool di sistema, in `penguins-chef` `--sysroot` **non indica una destinazione chroot**, bensì la **directory sorgente dell'overlay** della ricetta (contenente i file di configurazione, sfondi o `/etc/skel` che verranno copiati sopra la radice `/` del sistema vivo).

---

### 2. Gestione delle Ricette (`chef get`)

* `chef get`
  * **Descrizione:** Clona (se assente) o aggiorna (`git pull`) il repository ufficiale delle ricette di `penguins-chef` all'interno della cartella utente `~/.chef`. Non richiede `sudo`.

---

### 3. Gestione del Repository Ufficiale (`chef tools repo`)

* `sudo chef tools repo add`
  * **Descrizione:** Configura automaticamente le chiavi GPG ufficiali e aggiunge il repository nativo di `penguins-eggs` per il gestore pacchetti della distribuzione in uso (`apt`, `pacman`, `dnf`, `zypper`).
* `sudo chef tools repo rm`
  * **Descrizione:** Rimuove la configurazione del repository ufficiale dal sistema.

---

### 4. Versione (`chef version`)

* `chef version`
  * **Descrizione:** Mostra la versione installata di `penguins-chef`.
