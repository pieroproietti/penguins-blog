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
- **[Filogenesi e Fondamenti di Eggs](./1.md)** — Dal "Brain inquinato" in Bash al modello a tre attori (`coa`, `oa`, `ell`), il Principio di Trasparenza e la Strategia Universale (*Eggs & Bananas*).
- **[La Triade Organica: Eggs, Chef e GUI](./2.md)** — Come cooperano il motore di remastering (`eggs`), la cucina dichiarativa ([`penguins-chef`](../chef/index.md)) e il sensore grafico ([`penguins-gui`](../gui/index.md)).

### 2. Manuale Utente e Sysadmin
- **[Quickstart: Dalla sorgente all'uovo](./quickstart.md)** — Dal bootstrap del pacchetto e del repository fino alla produzione della prima ISO o di un clone in 5 passi.
- **[Command Reference (CLI)](./reference.md)** — Guida completa ai comandi `eggs remaster`, `eggs wizard`, `eggs config`, `eggs coexist`, `eggs tools`, `eggs sysinstall`, `eggs export` ed `eggs mcp`.
- **[Multi-Boot con Krill Coexist](./coexist.md)** — Far convivere più distribuzioni Linux indipendenti su un unico disco UEFI con l'architettura *Pure Slots*.
- **[Chromebook e recupero hardware (FixIt!)](./fixit.md)** — Dare nuova vita all'hardware rigido o con storage eMMC ridotto.

### 3. Architettura Interna e Sviluppo (`coa` + `oa`)
Il percorso segue l'ordine cronologico esatto di un volo di rimasterizzazione, dalla lettura dei template fino al collaudo automatizzato:
1. **[Panoramica Architetturale: Mente e Braccio](./architecture/1.md)** — L'orchestratore `coa`, l'esecutore `oa` e il worker `coa ell`.
2. **[Compilazione e Sviluppo (Building)](./architecture/2.md)** — Requisiti della toolchain (Go 1.25+, GCC), `Makefile` e generazione pacchetti con `eggs tools build`.
3. **[Il Parser (Rilevamento e Template del Brain)](./architecture/5.md)** — Come `DetectAndLoad()` identifica la distro e compila i template Go nella struct `Profile`.
4. **[Il Planner (La Strategia di Volo e `oa-plan.json`)](./architecture/6.md)** — Compilazione dei task `OATask`, iniezione della pipeline LUKS e lista di esclusione `excludes.list`.
5. **[Il modulo `oa` (Il Braccio in C)](./architecture/3.md)** — Il dispatcher in C, la gestione utenti (`oa-yocto.c`) e lo smontaggio sicuro (`MNT_DETACH`).
6. **[Il modulo `coa ell` (Il Tecnico Specializzato in Go)](./architecture/4.md)** — L'*Envelope Protocol* su STDIN e i moduli worker (`mksquashfs`, `xorriso`, `template`, `autologin-gui`).
7. **[L'Installer Unificato: Krill e Calamares](./architecture/7.md)** — Un solo motore (`/etc/penguins-eggs.d/installer.d/`), due volti (TUI e GUI) e la strategia bootloader.
8. **[Model Context Protocol (MCP) Server](./architecture/8.md)** — Il demone JSON-RPC 2.0 integrato per agenti IA (Antigravity, Claude, Cursor, Zed, Roo-Cline).
9. **[Continuous Integration: Hammers, Furnace e Incubator](./ci/1.md)** — La triade di automazione tra container GitHub Actions e macchine virtuali Proxmox VE.
