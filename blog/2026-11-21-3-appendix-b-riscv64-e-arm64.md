---
title: "2026 OpenAtom Developer Conference Zhengzhou - Appendice B: RISC-V ed ARM64"
authors: pieroproietti
tags: [openkylin, penguins-eggs]
description: "Adattamenti necessari per rendere penguinseggs pienamente compatibile con openKylin"
lang: it
enableComments: true
---

import Translations from '@site/src/components/Translations';

<Translations />

# Stato del Supporto Multi-Architettura: RISCV64 e ARM64

## 1. Supporto RISCV64
Il supporto e la build per l'architettura `riscv64` sono stati creati e integrati nel codebase.

### Compilazione & Packaging (`build.go:42-46`)
* L'architettura `riscv64` è gestita nel builder con le sue dipendenze specifiche (tra cui `gdisk` e `genimage`).
* Nella pipeline CI (`.github/workflows/hammers.yml`) è presente il job per `debian-riscv64` con cross-compilazione (`gcc-riscv64-linux-gnu`, `qemu-riscv64-static`).

### Remastering & Bootloader
* Gestione DTB e rilevamento **SpacemiT K1 / MuseBook M1** durante il remastering (`coa/pkg/cmd/remaster.go`).
* Copia e mapping dei binari UEFI (`BOOTRISCV64.EFI`) in `bootloader-copy.sh:53-64` e GRUB target `riscv64-efi` per i template Debian, Arch, Fedora, openSUSE e Alpine.
* Boot UEFI puro con `xorriso` per `riscv64`.

### Installer Krill & Hardware Dedicato
* Supporto specifico per il layout a 6 partizioni e `bootfs` per SoC SpacemiT K1 / MuseBook in `partition.go:35-45`.
* Supporto scansione NVMe e flash U-Boot (`spacemit/`).

---

## 2. Supporto ARM64 (`aarch64`)
Anche `arm64` è completamente supportato e integrato.

### Compilazione & CI ("The Furnace")
* In `hammers.yml:217-266` è presente la pipeline dedicata `debian-arm64` che compila con cross-toolchain (`gcc-aarch64-linux-gnu`, `libcrypt-dev:arm64`, QEMU `qemu-aarch64-static`) e produce il pacchetto `.deb` nativo:
  ```bash
  make package GOOS=linux GOARCH=arm64 CC=aarch64-linux-gnu-gcc RUNNER=qemu-aarch64-static
  ```

### Builder & Dipendenze (`build.go:40-41`)
* Gestione delle dipendenze Debian per `arm64`, `armhf`, `armel` con `genimage` e `grub-efi-arm64-bin`.
* Il nome del pacchetto Debian rispetta la convenzione nativa `arm64`.

### Bootloader & Remastering
* Generazione e copia dei binari UEFI `BOOTAA64.EFI` (`grubaa64.efi`) via `bootloader-copy.sh:58-75`.
* Modalità *Pure UEFI boot* in `xorriso.go:69`.
* Target GRUB `arm64-efi` integrato nei moduli template di installazione per tutte le distribuzioni (Debian/Ubuntu, Arch/Manjaro, Fedora, openSUSE, Alpine).
* Filtro di compressione `xz` ottimizzato per evitare filtri BCJ x86 su `arm64`.

---

## 3. Generazione delle Immagini (ISO vs Raw Image)

### Su ARM64 (Pronto)
* I moderni sistemi e schede ARM64 (server, VM QEMU/KVM, Mac Apple Silicon con Asahi/Linux, Raspberry Pi con firmware UEFI EDK2, Oracle Ampere, ecc.) utilizzano lo standard UEFI (AArch64).
* La pipeline ISO con `xorriso` (*Pure UEFI boot*, `BOOTAA64.EFI`) è già predisposta e funzionante nativamente.

### Su RISCV64 (Da perfezionare)
* Le board RISC-V attuali (come SpacemiT K1 / MuseBook M1) non utilizzano un firmware UEFI standard per il boot da ISO CD-ROM tradizionale: usano **U-Boot/OpenSBI** con Device Tree (`.dtb`) e richiedono immagini raw disco (`.raw` / `.img`) a partizioni multiple (`bootinfo`, `fsbl`, `env`, `opensbi`, `uboot`, `bootfs`, `rootfs`) tramite `genimage`.
* Nel codice è già presente la logica che intercetta `riscv64` (`generate-plan.go:142-165`) per sostituire lo step `xorriso` con `make-img` (`genimage`), ma resta da perfezionare e testare:
  * La creazione di un'immagine effettivamente avviabile sia come **ISO ibrida UEFI** (per hardware RISC-V UEFI-compliant) sia come **immagine raw disco** (`.img` flashabile) per SBC e laptop come SpacemiT K1 / MuseBook.


# Supporto hardware

Prima di concludere, voglio condividere una realtà molto concreta dello sviluppo open-source indipendente.

Oggi il nostro software è letteralmente più avanti dell'hardware che ho sulla scrivania. Nel nostro codebase, il supporto per ARM64 e RISC-V 64 è già scritto, compilato e integrato. Abbiamo preparato le pipeline di cross-compilazione, i bootloader Pure UEFI — BOOTAA64.EFI e BOOTRISCV64.EFI — e persino il supporto al partizionamento dedicato per le prime schede RISC-V come lo SpacemiT K1.

Tuttavia, generare e validare filesystem live, compressioni squashfs e installer bare-metal tramite emulazione software è un'operazione proibitiva, che si scontra con i limiti dell'emulazione proprio dove serve testare il comportamento reale della macchina.

Chiudo quindi questo intervento con una richiesta diretta ai produttori di hardware e ai partner dell'ecosistema presenti qui oggi. Per portare il remastering universale di Debian, Arch, Fedora, openSUSE e openKylin sulle vostre architetture, a penguins-eggs mancano solo due macchine reali sul banco di prova:

Un sistema RISC-V conforme allo standard RVA23 e BRS (Boot and Runtime Services) — come il nuovo SpacemiT K3 — per validare sul ferro il boot diretto da ISO UEFI standard.

Un sistema ARM64 conforme a SystemReady per la verifica nativa delle ISO AArch64.

Il codice è già pronto. Se ci mettete a disposizione il silicio, io mi assicurerò che qualsiasi utente o sviluppatore Linux possa rimasterizzare, clonare e installare il proprio sistema sul vostro hardware con un solo comando. 

Grazie.