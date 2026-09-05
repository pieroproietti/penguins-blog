---
slug: /
sidebar_position: 1
title: Penguins' Tailor & Wardrobe 👔
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Penguins' Tailor & Wardrobe

**Penguins' Tailor è il sarto; Penguins' Wardrobe è il guardaroba.** Insieme permettono di partire da un'installazione Linux minimale e vestirla con programmi, grafiche e configurazioni, seguendo ricette riutilizzabili. Sono progetti creati da Piero Proietti.

Un **costume** prepara un sistema completo, per esempio un desktop XFCE. Un **accessorio** aggiunge una funzione, come gli strumenti per la grafica o la suite da ufficio. Il programma `tailor` legge queste ricette dall'atelier e le applica al sistema.

## Installare e usare Tailor

Su Debian e derivate, con il repository di eggs già configurato:

```bash
sudo apt update
sudo apt install penguins-tailor
```

Poi scegli il costume:

```bash
tailor get
tailor list
tailor show colibri
sudo tailor wear colibri
```

Il gestore pacchetti attualmente implementato per la vestizione è APT. Verifica le distribuzioni previste dal costume scelto. La [guida utente](./wardrobe-users-guide.md#installare-tailor) spiega anche come aggiungere il repository tramite eggs e come compilare Tailor dai sorgenti.

## Come il costume dà forma al sistema

La ricetta YAML indica i pacchetti da installare, gli accessori da aggiungere e gli script da eseguire. La cartella **`sysroot/`** contiene invece i file da distribuire: sfondi, icone, temi e configurazioni.

Durante la vestizione, il contenuto di `sysroot/` viene copiato su **`/`**, mantenendo i percorsi. Per esempio:

```text
sysroot/usr/share/backgrounds/mio-sfondo.png
    → /usr/share/backgrounds/mio-sfondo.png
```

Le impostazioni sotto `sysroot/etc/skel/` arrivano in `/etc/skel` e vengono poi sincronizzate nella home dell'utente individuato da Tailor. `sysroot/` può contenere file per qualsiasi parte del sistema, ma conviene includere soltanto ciò che serve al costume.

Il **branding**, conservato in `v2/branding/`, definisce l'aspetto del boot live e dell'installer. Il costume lo seleziona con la proprietà `branding`; Tailor ne installa il contenuto in `/etc/penguins-eggs.d/branding/`.

## Dal sistema vestito alla live

Dopo aver verificato il desktop e le configurazioni, usa penguins-eggs C/Go per creare una ISO live avviabile:

```bash
sudo eggs remaster
```

## Documentazione comune

- [Guida utente di Wardrobe e Tailor](./wardrobe-users-guide.md): installazione, comandi, creazione di un costume, sysroot e diagnosi.
- [Metodologia di vestizione](./metodologia.md): il percorso dalla base minimale al sistema personalizzato.
- [Branding della live e di Calamares](./branding.md): struttura, precedenze, immagini e `branding.desc`.
- [Penguins' Tailor su GitHub](https://github.com/pieroproietti/penguins-tailor): codice del programma.
- [Penguins' Wardrobe su GitHub](https://github.com/pieroproietti/penguins-wardrobe): ricette e sorgente della guida comune.
