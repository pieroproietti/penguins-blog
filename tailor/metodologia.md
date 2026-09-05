---
sidebar_position: 3
title: La metodologia di vestizione
description: Preparare il proprio sistema con costumi e accessori
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Dal sistema minimale al proprio desktop

Un costume permette di descrivere e ripetere l'allestimento del sistema: quali programmi installare, quali configurazioni applicare e quale aspetto dare al desktop. **Tailor** esegue la vestizione usando le ricette conservate in **Wardrobe**, l'atelier.

## 1. Preparare la base

Si parte da una distribuzione compatibile con il costume, per esempio Debian o Devuan con un'installazione minimale. Su un sistema con il repository di eggs configurato, installa il sarto:

```bash
sudo apt update
sudo apt install penguins-tailor
```

La [guida utente](./wardrobe-users-guide.md#installare-tailor) descrive installazione e compatibilità attuale.

## 2. Scegliere il costume

```bash
tailor get
tailor list
tailor show colibri
```

Il costume raccoglie programmi e impostazioni per un allestimento completo. Gli accessori permettono di condividere gruppi di programmi e configurazioni tra più costumi.

Prima della vestizione leggi la ricetta e guarda la sua cartella `sysroot/`: il suo contenuto sarà copiato su `/`. Qui trovi sfondi, icone e configurazioni; i percorsi nella cartella corrispondono a quelli del sistema di destinazione.

## 3. Vestire il sistema

```bash
sudo tailor wear colibri
```

Tailor installa i pacchetti, applica gli accessori, copia i file di `sysroot/` e avvia i comandi previsti dalla ricetta. Al termine sincronizza `/etc/skel` nella home dell'utente individuato, così anche l'utente esistente riceve le impostazioni del costume.

Per esaminare in anticipo le operazioni puoi usare `sudo tailor wear colibri --dry-run --linear`. La versione attuale salta l'applicazione della ricetta, ma esegue comunque l'aggiornamento iniziale degli indici APT e può scrivere log o recuperare l'atelier.

Controlla il report finale e prova la sessione desktop: programmi, pannelli, sfondo e icone devono corrispondere al risultato desiderato. Se è stato installato un nuovo kernel, riavvia prima di rimasterizzare.

## 4. Dare un'identità alla live

Il costume può selezionare un bundle nella directory `v2/branding/`:

```yaml
name: my-desktop
branding: quirinux
```

Tailor copia il contenuto di quel bundle in `/etc/penguins-eggs.d/branding/`. Eggs lo usa per il boot della live e per l'installer. Un costume senza `branding` rimuove il bundle precedentemente attivo; applicare direttamente un accessorio lo conserva.

Le grafiche del desktop distribuite con `sysroot/` e il branding della live hanno destinazioni diverse. La [guida al branding](./branding.md) spiega come prepararli, compreso il comportamento di `branding.desc` per Calamares.

## 5. Creare la ISO

Quando il sistema è pronto, con penguins-eggs C/Go installato:

```bash
sudo eggs remaster
```

Il percorso completo è:

```text
Sistema minimale → tailor wear → Sistema personalizzato → eggs remaster → ISO live
```

Per costruire il tuo costume, segui l'esempio passo passo nella [guida comune di Wardrobe e Tailor](./wardrobe-users-guide.md#scrivere-una-ricetta).
