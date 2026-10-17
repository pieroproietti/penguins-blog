---
sidebar_position: 4
title: Architettura e Contratto
description: Il contratto di esecuzione in 8 passi, i backend multi-distribuzione e la gestione automatica dell'init system in penguins-chef.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Architettura e Contratto di Esecuzione

`penguins-chef` esegue ricette autonome attraverso una pipeline rigorosa, deterministica e verificabile. A differenza dei gestori di configurazione tradizionali basati su checkpoint astratti, `chef` interroga sempre **lo stato reale del sistema vivo** prima e dopo ogni operazione.

---

## ⚙️ Il Contratto di Esecuzione in 8 passi

Ogni volta che viene invocato `chef apply`, il motore attraversa otto fasi sequenziali:

1. **Read & Select (Lettura e Selezione):** Analizza lo schema YAML della ricetta (risolvendo ricorsivamente eventuali direttive `include`) e seleziona il profilo corrispondente alla famiglia della distribuzione ospite (o a quella indicata con `--family`).
2. **Validate Profile (Validazione):** Verifica la coerenza sintattica e strutturale di tutte le definizioni prima di apportare qualsiasi modifica al sistema.
3. **Configure Repositories (Repository):** Aggiunge i file di repository dichiarati (es. `.list` o `.sources` per APT) e aggiorna gli indici del gestore pacchetti.
4. **Pre-check Packages (Verifica preliminare):** Controlla che **tutti** i pacchetti richiesti esistano effettivamente nei repository configurati *prima* di avviare l'installazione, prevenendo transazioni lasciate a metà.
5. **Atomic Transaction (Transazione pacchetti):** Ispeziona i pacchetti già presenti sul sistema, installa esclusivamente quelli mancanti in un'unica transazione nativa e verifica l'esito per ciascun pacchetto.
6. **Deploy Configuration Files (File di configurazione):** Confronta, scrive in modo atomico (tramite file temporaneo e rinomina nella stessa directory, con permessi predefiniti `0644`) e verifica i file di configurazione. Per sicurezza, le destinazioni che puntano a **symlink vengono rigorosamente rifiutate**.
7. **Manage Hostname (Gestione nome host):** Quando dichiarato nella ricetta o nel costume, imposta e verifica l'hostname di sistema aggiornando atomicamente `/etc/hosts` per la risoluzione locale in loopback.
8. **Manage Services & Sysroot (Servizi e Overlay):** Abilita e verifica i servizi di avvio (senza avviarli forzatamente durante il provisioning) e sincronizza la directory sorgente `sysroot/` della ricetta sopra `/` preservando permessi e metadati, senza **mai cancellare** file preesistenti sul sistema.

> **Nota sull'idempotenza:** Rieseguire `sudo chef apply` con la stessa ricetta è un'operazione idempotente. Il motore rileva che pacchetti, file e servizi sono già conformi allo stato desiderato senza ripetere operazioni ridondanti.

---

## 🌍 Famiglie Supportate e Gestori Pacchetti

`penguins-chef` disaccoppia la definizione logica della ricetta dai comandi specifici di ciascuna famiglia Linux:

| Famiglia | Distribuzioni | Gestore Pacchetti | Preparazione e Verifica |
| :--- | :--- | :--- | :--- |
| **`debian`** | Debian, Ubuntu, Linux Mint | `apt-get` / `dpkg` | Aggiorna con `apt-get update --error-on=any`, verifica disponibilità con `apt-cache policy` e stato con `dpkg-query` (init `systemd`). |
| **`devuan`** | Devuan | `apt-get` / `dpkg` | Come Debian, ma con rilevamento e gestione nativa `sysvinit` (`/etc/init.d`) ed esclusione automatica dei pacchetti `systemd`. |
| **`openkylin`** | openKylin | `apt-get` / `dpkg` | Profilo dedicato basato su APT/dpkg per l'ecosistema desktop openKylin (incluso UKUI). |
| **`archlinux`** | Arch Linux, Manjaro | `pacman` | Sincronizza con `pacman -Syu --noconfirm` (evitando *partial upgrade*), verifica con `pacman -Si` e installa con `pacman -S --needed`. |
| **`fedora`** | Fedora | `dnf` (incluso DNF5) | Aggiorna cache con `dnf --refresh makecache`, interroga disponibilità con `dnf repoquery --available` e installa con `dnf install -y`. |
| **`opensuse`** | openSUSE Tumbleweed / Leap | `zypper` / `rpm` | Aggiorna con `zypper --non-interactive refresh`, ricerca esatta XML nei repository e verifica installazione tramite `rpm`. |

---

## ⚡ Gestione dell'Init System: la regola dei 2 casi

Nello sviluppo di `penguins-chef` è stata eliminata ogni complessità artificiale legata al sistema di init. Il panorama reale delle distribuzioni supportate si riassume in due soli casi:

1. **`systemd` (Standard predefinito):** Utilizzato da Arch Linux, Fedora, openSUSE, Debian, Ubuntu e Manjaro. I servizi vengono abilitati e verificati tramite `systemctl` (`is-enabled` / `enable`) e il target predefinito tramite `systemctl set-default` (es. `graphical.target`).
2. **`sysvinit` (Devuan):** L'eccezione storica non-systemd supportata nativamente. Su Devuan, gli script in `/etc/init.d` vengono configurati direttamente da APT durante l'installazione dei pacchetti; i pacchetti specifici di systemd (come `systemd-timesyncd` o `systemd-resolved`) e le chiamate a `systemctl` vengono **esclusi automaticamente** dal motore per garantire zero attriti.

### Rilevamento diretto a runtime (`sd_booted`)

Non è mai necessario specificare un parametro `--init`:
- **Sulla macchina reale**, `chef` controlla direttamente l'esistenza della directory `/run/systemd/system`: se è presente usa `systemd`, altrimenti adotta `sysvinit`.
- **In simulazione cross-family (`--dry-run --family ...`)**, ogni famiglia adotta automaticamente il proprio init nativo (`systemd` per Arch, Fedora, openSUSE, Debian; `sysvinit` per Devuan).
