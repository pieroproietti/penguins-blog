---
title: Eggs users' guide
authors: pieroproietti
sidebar_position: 2
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

In case of problems with translation links, You can consult a detailed [README](https://github.com/pieroproietti/penguins-eggs-legacy#readme) in English on the repository.

Manuale aggiornato a `eggs-legacy v26.6.x` ultimo aggiornamento giugno 2026.

## Introduzione

![Un sistema riproduttivo per pinguini](/images/manjaro-uefi-booting.png)

`penguins' eggs` (edizione legacy) è uno strumento moderno per la rimasterizzazione di sistemi Linux, pensato come successore di Remastersys e Systemback. Il software nasce dall'idea della "riproduzione" applicata ai sistemi operativi: ogni sistema può "deporre le sue uova" per dare vita a nuovi sistemi identici o personalizzati.

Questa guida fa riferimento all'**Edizione Classica (Legacy TypeScript/Node)** del progetto, distribuita con il nome di pacchetto `penguins-eggs-legacy` ed il comando CLI `eggs-legacy`. Questa versione si affianca senza alcun conflitto alla nuova versione riscritta in Go/C (`penguins-eggs`, con comando `coa` / `eggs`).

**Caratteristiche principali:**
- Supporto per oltre 15 distribuzioni Linux (Almalinux, Arch, Debian, Devuan, Fedora, Manjaro, openSUSE, Rocky, Ubuntu).
- Creazione di ISO live avviabili ed installabili, con o senza i vostri dati.
- Installer CLI (krill) e GUI (calamares)
- Backup criptati e installazioni di rete (PXE)
- Sistema wardrobe per configurazioni predefinite

---

## Installazione ed integrazione

### Tramite script universale `fresh-eggs`
```bash
git clone https://github.com/pieroproietti/fresh-eggs
cd fresh-eggs
sudo ./fresh-eggs.sh
```

### Tramite AppImage (Standalone)
È possibile utilizzare e installare l'AppImage standalone senza alcuna interferenza con la versione Go/C:

```bash
# Rendi l'AppImage eseguibile
chmod +x penguins-eggs-legacy-*.AppImage

# Integra l'AppImage nel sistema (installa man pages, completamenti e binario come eggs-legacy)
sudo ./penguins-eggs-legacy-*.AppImage setup install
```

---

## Configurazione iniziale

Prima di iniziare ad usare lo strumento legacy, è necessario inizializzare la sua configurazione:

```bash
sudo eggs-legacy dad --default
```

Questo comando crea la directory `/etc/penguins-eggs-legacy.d/` con tutti i file di configurazione base.

---

## Primi passi

### 1. Produrre la prima ISO

```bash
sudo eggs-legacy produce --verbose
```

Questo comando crea una ISO live del vostro sistema corrente (senza includere i dati personali della home).

### 2. Installare calamares (opzionale)

Per abilitare l'installazione tramite interfaccia grafica (GUI):

```bash
sudo eggs-legacy calamares --install
```

### 3. Testare la ISO
Le ISO prodotte vengono salvate per impostazione predefinita all'interno della cartella `/home/eggs/`. L'utente live standard è `live` con password `evolution`.

---

## Comandi essenziali di `eggs-legacy`

### Produzione ISO

```bash
sudo eggs-legacy produce                    # Compressione veloce (default)
sudo eggs-legacy produce --max              # Massima compressione (impiega più tempo)
sudo eggs-legacy produce --pendrive         # Compressione zstd ottimizzata per chiavette USB
sudo eggs-legacy produce --standard         # Compressione xz standard (massima compatibilità)
```

### Produzione ISO con dati utente (Backup / Clone)

```bash
sudo eggs-legacy produce --clone            # Include dati utente in chiaro
sudo eggs-legacy produce --fullcrypt        # Cripta l'intero filesystem root con LUKS
sudo eggs-legacy produce --homecrypt        # Cripta solo la directory /home con LUKS
```

### Gestione del sistema

```bash
sudo eggs-legacy kill                      # Pulisce i chroot e le directory di lavoro precedenti
sudo eggs-legacy tools clean               # Rimuove file temporanei, cache e log inutilizzati
eggs-legacy status                         # Mostra lo stato di configurazione corrente
```

### Installazione del sistema
Dall'ambiente live, è possibile installare il sistema a destinazione usando l'installer TUI Krill:

```bash
sudo eggs-legacy krill                     # Avvia il wizard guidato
sudo eggs-legacy krill --unattended        # Avvia l'installazione automatica non interattiva
```

---

## Wardrobe - Configurazioni predefinite

Il sistema wardrobe consente di scaricare e applicare costumi (desktop preconfigurati e personalizzazioni) sul sistema:

```bash
eggs-legacy wardrobe get                   # Scarica o aggiorna il guardaroba
eggs-legacy wardrobe list                  # Elenca i costumi disponibili nel sistema
sudo eggs-legacy wardrobe wear colibri     # Applica il costume desktop colibri
```

---

## Configurazione avanzata

### File di configurazione
Tutti i file di configurazione risiedono all'interno di `/etc/penguins-eggs-legacy.d/`:

* **`eggs.yaml`**: contiene le opzioni principali relative alla compressione, directory snapshot, branding, e credenziali live.
* **`krill.yaml`**: definisce il layout di tastiera, lingua, fuso orario e password usati per l'installatore Krill (particolarmente utile per installazioni unattended).

---

## Supporto e Community

- **Sito Web & Blog**: [penguins-eggs.net](https://penguins-eggs.net)
- **Codice Sorgente Legacy**: [GitHub penguins-eggs-legacy](https://github.com/pieroproietti/penguins-eggs-legacy)
- **Facebook Group**: [penguin's eggs group](https://www.facebook.com/groups/128861437762355)

Buona cova con **penguins-eggs-legacy**!

---

*Copyright (c) 2017, 2026 Piero Proietti, dual licensed under the MIT or GPL Version 2 licenses.*