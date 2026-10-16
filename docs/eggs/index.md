---
sidebar_position: 1
title: Introduzione a Penguins' Eggs
description: Il motore universale di remastering e clonazione Linux basato sull'architettura ibrida in Go (coa) e C (oa).
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# 🥚 Penguins' Eggs: Il motore della rimasterizzazione

**`penguins-eggs`** è la suite di remastering di nuova generazione che trasforma un sistema Linux in esecuzione in un'immagine ISO ibrida avviabile (UEFI + BIOS), pronta per viaggiare su chiavetta USB, rete o disco fisso ed essere installata tramite **Krill** (TUI) o **Calamares** (GUI).

Il motore è costruito attorno a due binari statici che incarnano il modello Master-Worker:
- **`coa`** (in Go) — **La Mente**: legge i template, analizza il sistema ospite e compila il piano di volo formale (`oa-plan.json`), oltre a fornire il tecnico specializzato **`coa ell`**;
- **`oa`** (in C) — **Il Braccio**: esegue il piano a stretto contatto con il kernel e il metallo della macchina, governando mount point, OverlayFS e chroot con zero dipendenze.

Supporta nativamente le principali famiglie Linux (**Debian, Ubuntu, Devuan, Arch Linux, Manjaro, Fedora, openSUSE, Alpine**) su architetture **x86_64, ARM64 e RISC-V**.

---

## 🧭 Percorso di lettura

### 1. Filosofia e Visione
- **[Manifestum: Un famoso dialogo](./manifestum.md)** — Salviati, Sagredo e Simplicio discutono di materia, silicio ed evoluzione del software.
- **[I Fondamenti Filosofici di Eggs](./1.md)** — Il modello a tre attori (`coa`, `oa`, `ell`), il Principio di Trasparenza e la Strategia Universale.
- **[L'orizzonte evolutivo](./2.md)** — La sinergia attuale tra `eggs`, [`penguins-chef`](../chef/index.md) e [`penguins-gui`](../gui/index.md).

### 2. Manuale Utente
- **[Quickstart: Dalla sorgente all'uovo](./quickstart.md)** — Produrre la prima ISO personalizzata o un clone in 5 passi.
- **[Command Reference (CLI)](./reference.md)** — Guida completa ai comandi `eggs remaster`, `eggs config`, `eggs tools`, `eggs sysinstall` ed `eggs mcp`.
- **[Multi-Boot con Krill Coexist](./coexist.md)** — Far convivere più distribuzioni Linux indipendenti su un unico disco con l'architettura *Pure Slots*.
- **[Chromebook e recupero hardware (FixIt!)](./fixit.md)** — Dare nuova vita all'hardware rigido o con storage eMMC ridotto.

### 3. Architettura e Sviluppo
- **[Panoramica Architetturale: Mente e Braccio](./architecture/1.md)**
- **[Compilazione e Sviluppo (Building)](./architecture/2.md)**
- **[Il modulo `oa` (Il Braccio in C)](./architecture/3.md)**
- **[Il modulo `ell` (Il Tecnico in Go)](./architecture/4.md)**
- **[Il Parser (L'Interprete dei Piani)](./architecture/5.md)**
- **[Il Planner (La Strategia di Volo)](./architecture/6.md)**
- **[L'Installer: Krill e Calamares](./architecture/7.md)**
- **[Model Context Protocol (MCP) Server](./architecture/8.md)**
- **[Continuous Integration (CI) e Automazione](./ci/1.md)**
