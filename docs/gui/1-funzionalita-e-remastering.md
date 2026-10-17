---
sidebar_position: 2
title: Rimasterizzazione e strumenti
description: Creazione di ISO Standard, Clone e Crypted LUKS, configurazione di Calamares, /etc/skel e avvio ISO da GRUB in penguins-gui.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Voli di rimasterizzazione e strumenti di sistema

Dalla finestra principale di `penguins-gui` e dalla barra degli strumenti rapida, hai accesso immediato a tutte le fasi del ciclo vitale di una *live*: preparazione dell'ambiente, pulizia, compressione in ISO e collaudo diretto al riavvio.

---

## 🚀 1. Le tre modalità di volo (`Create ISO`)

Selezionando la modalità desiderata e premendo **Create ISO** (o dal menu *File → Create ISO*), puoi avviare tre tipi di rimasterizzazione:

1. **Standard Live:** Genera un'immagine ISO ibrida pulita e generalizzata, priva dei dati personali dell'utente corrente, pronta per essere distribuita o condivisa con nuovi utenti.
2. **System Clone (`--clone`):** Fotografa il sistema in esecuzione preservando gli account utente reali, le password e l'intero contenuto delle cartelle `/home`. Ideale per migrare il proprio habitat su un nuovo computer o per creare un backup avviabile fedele al 100%.
3. **Crypted Clone (`--crypted`):** Crea un'immagine live con filesystem SquashFS cifrato tramite **LUKS2** (supportato nativamente sulla famiglia Debian). Una finestra di dialogo grafica dedicata richiede la passphrase di cifratura, passandola in modo sicuro al motore.

### Log in tempo reale e scoperta automatica della ISO
- **Stream di esecuzione live:** L'output standard e gli errori del processo vengono ripuliti dalle sequenze ANSI e mostrati in tempo reale nell'area log scorrevole, dotata dei pulsanti rapidi **Clear** e **Copy**.
- **Process Guard:** Finché un volo di rimasterizzazione è in corso, la GUI impedisce la chiusura accidentale della finestra per evitare mount chroot orfani.
- **Scoperta dell'artefatto:** Al termine della compilazione, `penguins-gui` scansiona `/home/eggs`, individua il file `.iso` appena generato (mostrandone percorso e dimensione) e offre un pulsante diretto per aprire la cartella nel file manager del desktop (`xdg-open`).

---

## 🛠️ 2. Strumenti di preparazione e manutenzione

Il menu **Edit** (per gli strumenti di preparazione: *Cook…*, *Install penguins-egg CLI*, *Install calamares*, *Update /etc/skel*, *Boot ISO…*) e la **barra degli strumenti principale (Toolbar)** (con i pulsanti rapidi *Create ISO*, *Cook*, *Boot ISO*, *Clean* e *Kill*) integrano gli aiutanti di sistema per preparare la macchina senza passare dal terminale:

### 🎨 Installa Calamares (`Edit → Install calamares`)
- Installa l'installer grafico **Calamares** tramite il gestore pacchetti nativo della distribuzione.
- Ispeziona automaticamente il binario installato tramite `ldd` per determinare se è compilato su **Qt 5** o **Qt 6**.
- Installa di conseguenza i moduli runtime QML e Quick Controls corrispondenti, garantendo il perfetto funzionamento delle slideshow durante l'installazione (`slideshowAPI: 2`).

### 👤 Aggiorna `/etc/skel` (`Edit → Update /etc/skel`)
- Esegue `eggs tools skel` per clonare la configurazione visiva, i temi, le icone e le impostazioni del desktop dell'utente corrente dentro `/etc/skel`.
- In questo modo, sia l'utente della sessione live sia i nuovi utenti creati dopo l'installazione erediteranno esattamente l'aspetto del tuo desktop.

### 💿 Avvia ISO da disco senza USB (`Boot ISO` / `Edit → Boot ISO…`)
- Invoca `eggs tools grub40` e aggiorna con privilegi elevati `/etc/grub.d/40_custom` per avviare l'immagine ISO generata direttamente dal disco fisso in modalità *loopback*, senza bisogno di masterizzare una chiavetta USB.
- Sostituisce in modo pulito i blocchi contrassegnati da Eggs con la nuova ISO selezionata, creando backup non eseguibili per evitare voci duplicate nel menu di avvio.
- **Nota importante su GRUB (aggiornamento manuale):** per sicurezza e compatibilità multi-distribuzione, `penguins-gui` scrive la regola in `/etc/grub.d/40_custom` ma **non esegue automaticamente il ricalcolo di `grub.cfg`**. Al termine dell'operazione, una finestra di dialogo ti ricorderà di eseguire manualmente nel terminale il comando di aggiornamento GRUB della tua distribuzione prima di riavviare:
  - **Debian / Ubuntu / Devuan / Mint:** `sudo update-grub`
  - **Arch Linux / Manjaro:** `sudo grub-mkconfig -o /boot/grub/grub.cfg`
  - **Fedora / openSUSE:** `sudo grub2-mkconfig -o /boot/grub2/grub.cfg`

### 🧹 Pulizia e recupero (pulsanti `Clean` e `Kill` sulla barra degli strumenti)
- **Clean (`eggs tools clean`):** Ripulisce le cache dei gestori pacchetti (`apt`, `pacman`, ecc.) e i log di sistema prima di creare l'immagine ISO, riducendo le dimensioni dell'uovo finale.
- **Kill (`eggs destroy`):** Smonta in sicurezza i filesystem virtuali (`MNT_DETACH`) e rimuove la directory di lavoro temporanea nel caso in cui un processo di remastering sia stato interrotto.

### 🔍 Zoom dei caratteri e accessibilità (menu `View`)
- Dal menu **View** (o con le scorciatoie `Ctrl +`, `Ctrl -`, `Ctrl 0`) puoi scalare dinamicamente la dimensione dei font dell'interfaccia (dall'85% al 200%). La preferenza viene salvata automaticamente tra le sessioni.
