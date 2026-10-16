---
sidebar_position: 4
title: Quickstart e CLI Reference
description: Guida rapida e riferimento completo dei comandi del binario chef.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Quickstart e Command Reference (`chef`)

Tutti i comandi di `penguins-chef` vengono eseguiti tramite il binario **`chef`**. Di seguito trovi il percorso rapido per iniziare subito a cucinare il tuo sistema e il riferimento completo della CLI.

---

## 🚀 Quickstart: Dalla `naked` alla ISO finita in 4 passi

### 1. Scarica o aggiorna la dispensa delle ricette
Come utente normale (non serve `sudo`), scarica l'albero ufficiale delle ricette nella tua home (`~/.chef`):
```bash
chef get
```

### 2. Simula la ricetta con `--dry-run`
Prima di modificare il sistema, controlla il piano di esecuzione completo:
```bash
chef apply ~/.chef/recipes/costumes/colibri/colibri.yaml --dry-run
```

### 3. Cucina la ricetta sul sistema reale
Quando sei soddisfatto del piano mostrato dal dry-run, applica la ricetta con i privilegi di amministratore:
```bash
sudo chef apply ~/.chef/recipes/costumes/colibri/colibri.yaml
```

### 4. Genera la tua ISO live con `eggs`
Una volta plasmato il sistema, congela il tuo nuovo habitat in un'immagine ISO avviabile e installabile:
```bash
sudo eggs remaster
```

---

## 📖 Riferimento Comandi (`chef`)

### 1. Applicazione e Simulazione (`chef apply`)

* `sudo chef apply <percorso/ricetta.yaml>`
  * **Descrizione:** Applica la ricetta al sistema reale (`/`). Richiede i privilegi di root (`sudo`).
* `chef apply <percorso/ricetta.yaml> --dry-run`
  * **Descrizione:** Risolve l'intero piano di esecuzione (include, repository, disponibilità pacchetti, file, hostname, servizi, sysroot) e lo stampa a video senza toccare il sistema. **Non richiede `sudo`.**
* `chef apply <percorso/ricetta.yaml> --dry-run --family <famiglia>`
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
* `sudo chef apply <percorso/ricetta.yaml> --sysroot <percorso/sysroot>`
  * **Descrizione:** Sovrascrive la cartella `sysroot` predefinita della ricetta utilizzando un percorso personalizzato.

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
