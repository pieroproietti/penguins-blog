---
sidebar_position: 1
title: Introduzione a Penguins' Eggs
description: Il motore universale di remastering e clonazione Linux basato sull'architettura ibrida in Go (coa) e C (oa).
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# 🥚 Penguins' Eggs: il motore della rimasterizzazione

**`penguins-eggs`** è la suite di remastering di nuova generazione che trasforma un sistema Linux in esecuzione in un'immagine ISO ibrida avviabile (UEFI + BIOS), pronta per viaggiare su chiavetta USB, rete o disco fisso ed essere installata tramite **Krill** (TUI) o **Calamares** (GUI).

Il motore è costruito attorno a due binari statici che incarnano il modello Master-Worker:
- **`coa`** (in Go) — **la mente**: legge i template, analizza il sistema ospite e compila il piano di volo formale (`oa-plan.json`), oltre a fornire il tecnico specializzato **`coa ell`**;
- **`oa`** (in C) — **il braccio**: esegue il piano a stretto contatto con il kernel e il metallo della macchina, governando mount point, OverlayFS e chroot con zero dipendenze.

Supporta nativamente le principali famiglie Linux (**Debian, Ubuntu, Devuan, Arch Linux, Manjaro, Fedora, openSUSE, Alpine**) su architetture **x86_64, ARM64 e RISC-V**.

---

## 🧭 Percorso di lettura

### 1. Filosofia e visione
- **[Premessa: un famoso dialogo...](./manifestum.md)** — Salviati, Sagredo e Simplicio discutono di materia, silicio ed evoluzione del software.
- **[Genesi e filosofia di eggs](./1.md)** — Dal "brain inquinato" in Bash al modello a tre attori (`coa`, `oa`, `ell`), il principio di trasparenza e la strategia universale (*Eggs & Bananas*).
- **[La triade organica: Eggs, Chef e GUI](./2.md)** — Come cooperano il motore di remastering (`eggs`), la cucina dichiarativa ([`penguins-chef`](../chef/index.md)) e l'interfaccia grafica desktop ([`penguins-gui`](../gui/index.md)).

### 2. Manuale utente e amministratore di sistema
- **[Guida rapida: dalla sorgente all'uovo in 5 passi](./quickstart.md)** — Dal bootstrap del pacchetto e del repository fino alla produzione della prima ISO o di un clone in 5 passi.
- **[Riferimento dei comandi (CLI)](./reference.md)** — Guida completa ai comandi `eggs remaster`, `eggs wizard`, `eggs config`, `eggs coexist`, `eggs tools`, `eggs sysinstall`, `eggs export` ed `eggs mcp`.
- **[Avvio multiplo con Krill Coexist](./coexist.md)** — Far convivere più distribuzioni Linux indipendenti su un unico disco UEFI con l'architettura a slot puri (*Pure Slots*).
- **[Chromebook: dare nuova vita al ferro rigido (FixIt!)](./fixit.md)** — Dare nuova vita all'hardware rigido o con storage eMMC ridotto.

### 3. Architettura interna e sviluppo (`coa` + `oa`)
Il percorso segue l'ordine cronologico esatto di un volo di rimasterizzazione, dalla lettura dei template fino al collaudo automatizzato:
1. **[Panoramica architetturale: mente, braccio e tecnico](./architecture/1.md)** — L'orchestratore `coa`, l'esecutore `oa` e il tecnico `coa ell`.
2. **[Compilazione e sviluppo: strumenti e pacchettizzazione](./architecture/2.md)** — Requisiti di compilazione (Go 1.25+, GCC), `Makefile` e generazione pacchetti con `eggs tools build`.
3. **[Il navigatore: l'analizzatore (`parser`)](./architecture/5.md)** — Come `DetectAndLoad()` identifica la distro e compila i modelli Go nella struct `Profile`.
4. **[L'ingegnere: il pianificatore (`planner` e `oa-plan.json`)](./architecture/6.md)** — Compilazione dei compiti `OATask`, iniezione della pipeline LUKS e lista di esclusione `excludes.list`.
5. **[Il braccio in C: il modulo `oa`](./architecture/3.md)** — Lo smistatore in C, la gestione utenti (`oa-yocto.c`) e lo smontaggio sicuro (`MNT_DETACH`).
6. **[Il tecnico in Go: il modulo `coa ell`](./architecture/4.md)** — Il protocollo a busta su STDIN e i moduli esecutori (`mksquashfs`, `xorriso`, `template`, `autologin-gui`).
7. **[L'installatore unificato: Krill e Calamares](./architecture/7.md)** — Un solo motore (`/etc/penguins-eggs.d/installer.d/`), due volti (TUI e GUI) e la strategia bootloader.
8. **[Il server MCP: integrazione nativa con agenti IA](./architecture/8.md)** — Il demone JSON-RPC 2.0 integrato per agenti IA (Antigravity, Claude, Cursor, Zed, Roo-Cline).
9. **[Integrazione continua: Hammers, Furnace e Incubator](./ci/1.md)** — La triade di automazione tra container GitHub Actions e macchine virtuali Proxmox VE.
