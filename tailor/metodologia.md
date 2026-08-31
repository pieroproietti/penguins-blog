---
sidebar_position: 3
title: Wardrobe 👗
description: automatizzare la creazione del tuo sistema con i costumi
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# 👗 Wardrobe & Tailor: La metodologia di vestizione

L'ecosistema per la personalizzazione e l'allestimento di distribuzioni Linux adotta una chiara separazione delle responsabilità tra il **Sarto** (`tailor`), il **Guardaroba** (`wardrobe`) e la **Rimasterizzazione** (`eggs`).

---

## 🔄 Il Flusso di Lavoro Modulare

Con `penguins-tailor` e `penguins-eggs`, il ciclo di vita per creare la propria distribuzione personalizzata (Respin) è completamente modulare:

1. **SISTEMA NAKED**: Si parte da un'installazione Linux minimale da riga di comando (Debian, Devuan, Ubuntu, o derivate).
2. **ALLERSTIMENTO (Tailor & Wardrobe)**: Con `tailor` si applica un "costume" dal guardaroba per installare desktop environment, applicazioni, pacchetti e configurazioni.
3. **PRODUZIONE ISO (Eggs)**: Una volta configurato e testato il sistema, si utilizza `eggs` per generare l'immagine Live ISO avviabile e installabile.

> **Schema riassuntivo:**
> `Sistema Minimo (CLI) --> Tailor Wear (Vestizione) --> Sistema Personalizzato --> Eggs (ISO Live)`

---

## 🎭 La Metafora dell'Atelier Sartoriale

* **Il Sarto (`penguins-tailor` / `tailor`)**: Lo strumento CLI autonomo scritto in **Go** che interpreta le ricette, gestisce l'installazione dei pacchetti e applica le personalizzazioni.
* **Costume (`v2/costumes/`)**: La ricetta completa per allestire un Desktop Environment (es. `colibri`, `duck`, `eagle`, `quirinux`, `chicks`).
* **Accessory (`v2/accessories/`)**: Componenti software modulari (es. `base`, `eggs-dev`, `firmwares`, `flatpak`, `graphics`, `office`, `multimedia`) riutilizzabili su più costumi.
* **Preseed Debconf (`packages.preseed`)**: File facoltativo presente in ogni costume o accessorio per azzerare qualsiasi richiesta interattiva debconf durante l'installazione dei pacchetti.
* **Themes / Vendors (`v2/vendors/`)**: Personalizzazioni grafiche per il boot live (GRUB/Isolinux) e il branding dell'installer Calamares.

---

## 🛠️ I Comandi Principali (`tailor`)

Il guardaroba si gestisce tramite il comando **`tailor`**:

### 1. Scarica o aggiorna il guardaroba (`tailor get`)
Clona o aggiorna il repository dei costumi in `~/.wardrobe`:
```bash
# Guardaroba ufficiale
tailor get

# Oppure un atelier personalizzato / fork
tailor get https://github.com/charliemartinez/penguins-wardrobe
```

### 2. Elenca e Ispeziona i Costumi (`tailor list` / `tailor show`)
Visualizza i costumi disponibili e i relativi dettagli:
```bash
tailor list
tailor show colibri
```

### 3. Indossa il Costume (`sudo tailor wear`)
Avvia l'allestimento del sistema in tempo reale con interfaccia TUI Split-Screen:
```bash
# Simulazione preventiva sicura
tailor wear colibri --dry-run

# Applicazione reale
sudo tailor wear colibri
```

---

## 🎨 Temi e Branding per la Live ISO

Mentre `tailor` veste il sistema installato, i **Vendors/Themes** definiscono il branding dell'immagine Live e dell'installer Calamares generati da `eggs`:

```bash
sudo eggs produce --theme vendors/educaandos-plus
```

---

:::tip Perché usare questa metodologia?
Allestire un sistema partendo da una base minimale (*naked*) garantisce un sistema finale leggero, riproducibile e perfettamente documentato nelle ricette YAML. Per approfondire tutte le funzionalità, consulta la [Guida Completa di Penguins' Wardrobe e Tailor](./wardrobe-users-guide).
:::