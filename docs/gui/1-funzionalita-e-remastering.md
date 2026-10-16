---
sidebar_position: 2
title: Remastering e Strumenti
description: Creazione di ISO Standard, Clone e Crypted LUKS, configurazione di Calamares, /etc/skel e avvio ISO da GRUB in penguins-gui.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Voli di Remastering e Strumenti di Sistema

Dalla finestra principale di `penguins-gui` e dalla barra degli strumenti rapida, hai accesso immediato a tutte le fasi del ciclo vitale di una *live*: preparazione dell'ambiente, pulizia, compressione in ISO e collaudo diretto al riavvio.

---

## 🚀 1. Le Tre Modalità di Volo (`Create ISO`)

Selezionando la modalità desiderata e premendo **Create ISO** (o dal menu *File → Create ISO*), puoi avviare tre tipi di rimasterizzazione:

1. **Standard Live:** Genera un'immagine ISO ibrida pulita e generalizzata, priva dei dati personali dell'utente corrente, pronta per essere distribuita o condivisa con nuovi utenti.
2. **System Clone (`--clone`):** Fotografa il sistema in esecuzione preservando gli account utente reali, le password e l'intero contenuto delle cartelle `/home`. Ideale per migrare il proprio habitat su un nuovo computer o per creare un backup avviabile fedele al 100%.
3. **Crypted Clone (`--crypted`):** Crea un'immagine live con filesystem SquashFS cifrato tramite **LUKS2** (supportato nativamente sulla famiglia Debian). Una finestra di dialogo grafica dedicata richiede la passphrase di cifratura, passandola in modo sicuro al motore.

### Log in Tempo Reale e Scoperta Automatica della ISO
- **Stream di Esecuzione Live:** L'output standard e gli errori del processo vengono ripuliti dalle sequenze ANSI e mostrati in tempo reale nell'area log scorrevole, dotata dei pulsanti rapidi **Clear** e **Copy**.
- **Process Guard:** Finché un volo di rimasterizzazione è in corso, la GUI impedisce la chiusura accidentale della finestra per evitare mount chroot orfani.
- **Scoperta dell'Artefatto:** Al termine della compilazione, `penguins-gui` scansiona `/home/eggs`, individua il file `.iso` appena generato (mostrandone percorso e dimensione) e offre un pulsante diretto per aprire la cartella nel file manager del desktop (`xdg-open`).

---

## 🛠️ 2. Strumenti di Preparazione e Manutenzione

La barra degli strumenti e i menu **Edit** / **Tools** integrano gli aiutanti di sistema per preparare la macchina senza passare dal terminale:

### 🎨 Installa Calamares (con rilevamento automatico Qt5/Qt6)
- Installa l'installer grafico **Calamares** tramite il gestore pacchetti nativo della distribuzione.
- Ispeziona automaticamente il binario installato tramite `ldd` per determinare se è compilato su **Qt 5** o **Qt 6**.
- Installa di conseguenza i moduli runtime QML e Quick Controls corrispondenti, garantendo il perfetto funzionamento delle slideshow durante l'installazione (`slideshowAPI: 2`).

### 👤 Aggiorna `/etc/skel` (`Update /etc/skel`)
- Esegue `eggs tools skel` per clonare la configurazione visiva, i temi, le icone e le impostazioni del desktop dell'utente corrente dentro `/etc/skel`.
- In questo modo, sia l'utente della sessione live sia i nuovi utenti creati dopo l'installazione erediteranno esattamente l'aspetto del tuo desktop.

### 💿 Avvia ISO da Disco senza USB (`Boot ISO…` / `grub40`)
- Configura automaticamente **GRUB** (`/etc/grub.d/40_custom`) per avviare l'immagine ISO generata direttamente dal disco fisso in modalità *loopback*, senza bisogno di masterizzare una chiavetta USB.
- Sostituisce in modo pulito i blocchi contrassegnati da Eggs con la nuova ISO selezionata, creando backup non eseguibili per evitare voci duplicate nel menu di avvio, e ricorda di aggiornare la configurazione di GRUB (`sudo update-grub`).

### 🧹 Pulizia e Recupero (`Clean` e `Kill`)
- **Clean System (`eggs tools clean`):** Ripulisce le cache dei gestori pacchetti (`apt`, `pacman`, ecc.) e i log di sistema prima di creare l'immagine ISO, riducendo le dimensioni dell'uovo finale.
- **Kill / Destroy (`eggs destroy`):** Smonta in sicurezza i filesystem virtuali (`MNT_DETACH`) e rimuove la directory di lavoro temporanea nel caso in cui un processo di remastering sia stato interrotto.

### 🔍 Zoom dei Caratteri e Accessibilità (`View`)
- Dal menu **View** (o con le scorciatoie `Ctrl +`, `Ctrl -`, `Ctrl 0`) puoi scalare dinamicamente la dimensione dei font dell'interfaccia (dall'85% al 200%). La preferenza viene salvata automaticamente tra le sessioni.
