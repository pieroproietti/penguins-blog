---
sidebar_position: 1
title: Introduzione a Penguins GUI
description: Il cruscotto grafico indipendente in Go e Fyne per governare penguins-eggs e penguins-chef dalla scrivania.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Penguins GUI: Il sensore grafico 🖥️🐧

Nell'anatomia di `penguins-eggs`, l'efficienza nasce dalla divisione rigorosa dei compiti tra **il motore** (la CLI rocciosa e scriptabile) e **il sensore** (il cruscotto grafico leggero e reattivo).

**`penguins-gui`** è l'interfaccia grafica desktop minimale e indipendente per l'ecosistema Penguins, sviluppata in **Go** utilizzando il toolkit cross-platform **[Fyne](https://fyne.io)**.

Porta la potenza della rimasterizzazione di `eggs` e della cucina dichiarativa di `penguins-chef` direttamente sulla scrivania: permette di lanciare i voli di creazione ISO, cucinare ricette software con anteprima *dry-run*, configurare l'avvio di ISO da disco fisso senza chiavetta USB e preparare il sistema senza dover digitare comandi nel terminale.

![penguins-gui](/images/linuxmint-penguins-gui-appimage.png)

---

## 📦 Installazione e Primo Avvio (anche senza `eggs` preinstallato)

Uno dei punti di forza di `penguins-gui` è il suo **ciclo di vita indipendente**: puoi scaricarla e avviarla anche su una distribuzione Linux appena installata in cui `penguins-eggs` non è ancora presente.

### 1. Avvio tramite AppImage (Universale)
Scarica l'ultima **AppImage** dalla pagina delle [release ufficiali su GitHub](https://github.com/pieroproietti/penguins-gui/releases/latest), rendila eseguibile e avviala come normale utente desktop:
```bash
chmod +x penguins-gui-*.AppImage
./penguins-gui-*.AppImage
```

### 2. Installazione tramite Pacchetti Nativi
Se preferisci il pacchetto nativo per la tua distribuzione, sono disponibili i pacchetti `.deb`, `.rpm` e `.pkg.tar.zst`:
- **Debian / Ubuntu / Devuan / Linux Mint:**
  ```bash
  sudo apt install ./penguins-gui_*_amd64.deb
  ```
- **Fedora:**
  ```bash
  sudo dnf install ./penguins-gui-*.fc44.x86_64.rpm
  ```
- **openSUSE (Leap / Tumbleweed / Slowroll):**
  ```bash
  sudo zypper install ./penguins-gui-*.opensuse.x86_64.rpm
  ```
- **Arch Linux / Manjaro:**
  ```bash
  sudo pacman -U ./penguins-gui-*-x86_64.pkg.tar.zst
  ```

### 3. Configurazione automatica di `penguins-eggs`
Se avvii `penguins-gui` su una macchina ancora priva del motore `eggs`:
1. Apri il menu **Edit** (o **Tools**) e seleziona **Install penguins-eggs CLI**.
2. La GUI rileverà automaticamente la tua distribuzione (Debian, Ubuntu, Devuan, Arch, Manjaro, Fedora, openSUSE, Alpine), configurerà i repository ufficiali e le chiavi GPG, e installerà `penguins-eggs`.
3. Non appena l'installazione termina, la GUI sblocca istantaneamente i controlli di remastering senza bisogno di riavviare l'applicazione.

---

## 🏗️ Posizionamento Architetturale

`penguins-gui` è progettata con una separazione modulare netta:

```text
penguins-gui (Desktop GUI) ──► eggs (CLI) ──► coa (La Mente in Go) ──► oa (Il Braccio in C)
                           └─► chef (CLI)
```

- **Zero Accoppiamento Interno:** La GUI non importa pacchetti interni di `eggs` o `chef`; comunica esclusivamente attraverso le loro interfacce pubbliche a riga di comando.
- **Separazione dei Privilegi:** L'applicazione grafica gira sempre nello spazio dell'utente ordinario. Solo i singoli comandi che modificano il sistema vengono elevati al momento dell'esecuzione tramite **Polkit (`pkexec`)** o `sudo`.
- **Trasparenza Totale:** Ogni comando eseguito e ogni riga di output vengono mostrati in tempo reale nel terminale integrato della finestra principale.

---

## 🗺️ Esplora la documentazione di Penguins GUI

- **[Voli di Remastering e Strumenti di Sistema](./1-funzionalita-e-remastering.md):** Le modalità di creazione ISO (Standard, Clone, Crypted LUKS), la gestione di `/etc/skel`, Calamares e l'avvio diretto da disco (`Boot ISO…`).
- **[Cook: Penguins Chef dentro Penguins GUI](./2-chef-in-gui.md):** Come esplorare, simulare in *dry-run* e applicare le ricette YAML di `penguins-chef` con un clic tramite il **Recipe Picker** integrato.
- **[Architettura, Requisiti e Sviluppo](./3-architettura-e-sviluppo.md):** Architettura interna Fyne + `CLIAdapter`, requisiti di sistema e compilazione dei pacchetti da sorgente.
