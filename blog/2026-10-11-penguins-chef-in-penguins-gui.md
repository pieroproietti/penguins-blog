---
title: "penguins-chef incontra penguins-gui: cucinare il proprio Linux con un clic"
authors: pieroproietti
tags: [Linux, penguins-chef, penguins-gui, penguins-eggs]
description: "Dalla riga di comando al desktop: con il nuovo Recipe Picker integrato in penguins-gui è possibile esplorare, simulare con dry-run e applicare le ricette di sistema direttamente dall'interfaccia grafica."
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Nei post recenti abbiamo esplorato due tasselli fondamentali della nostra idea di sistema su misura: da una parte **[penguins-gui](/blog/2026/09/28/penguins-gui-appimage-il-punto-di-partenza)**, l'interfaccia desktop che rende immediata e visuale la creazione di una live con Eggs; dall'altra **[penguins-chef](/blog/2026/10/09/penguins-chef-cucinare-il-proprio-linux)**, lo strumento dichiarativo a ricette YAML che permette di plasmare il sistema dal basso, componendo desktop, strumenti e costumi senza bloatware.

Mancava l'ultimo passo logico per unire questi due mondi: poter scegliere e cucinare le ricette direttamente dalla scrivania, senza dover passare per il terminale.

Oggi questo ponte c'è: **penguins-chef è integrato nativamente all'interno di penguins-gui**.

<!-- truncate -->

## Il pulsante "Cook" e il Recipe Picker

All'interno dell'interfaccia di `penguins-gui` fa ora bella mostra di sé una nuova azione sulla barra degli strumenti principale: il pulsante **Cook** (contrassegnato dall'icona della tavolozza dei colori 🎨, accessibile anche dal menu *Edit → Cook…*).

Facendo clic su **Cook**, si apre la nuova finestra di dialogo: **Penguins Chef — Recipe Picker**.

![Penguins Chef Recipe Picker in Penguins GUI](/images/penguins-chef-gui.png)

## Cosa troviamo nella dispensa visiva

L'interfaccia del Recipe Picker è stata progettata per essere immediata, pulita e al tempo stesso completa:

1. **Gestione trasparente delle ricette (`~/.chef`)**: se si avvia la funzione per la prima volta e la directory locale delle ricette non è ancora presente, `penguins-gui` lo rileva automaticamente e scarica il repository delle ricette ufficiali mostrando una barra di avanzamento. In basso a sinistra è inoltre sempre a disposizione il pulsante **⬇ Update Recipes** per sincronizzare e aggiornare le ricette a monte con un semplice tocco.
2. **Filtro istantaneo ("Filter recipes...")**: basta iniziare a digitare il nome di un pacchetto, di un desktop o di un ambiente per filtrare al volo l'albero delle ricette.
3. **Navigazione ad albero pulita e mirata**: le ricette sono organizzate secondo le categorie standard:
   - `development/`: strumenti di sviluppo, compilatori e IDE (come `devel`, `golang`, `vscode`);
   - `graphics/`: grafica e fotoritocco (`gimp`);
   - `multimedia/`: player e workstation audio (come `vlc` e la ricetta per musicisti `music-pro` di cui abbiamo parlato nel post precedente);
   - `office/`: produttività d'ufficio (`libreoffice`).

   *Nota bene:* all'interno di `penguins-gui`, le categorie strutturali di basso livello come `de`, `dm` e `costumes` vengono deliberatamente escluse. Visto che la GUI gira su un sistema che ha già il suo Desktop Environment e Display Manager attivi, questo filtro intelligente impedisce di sovrapporre configurazioni e scongiura l'effetto "Frankenstein" sul sistema! Per il provisioning profondo e la costruzione da zero di un sistema headless, la riga di comando di `penguins-chef` resta comunque sempre a disposizione con l'albero completo.

   Accanto a ogni cartella viene indicato il numero esatto di ricette disponibili.
4. **Ispezione dei dettagli**: selezionando una ricetta nella colonna sinistra, il pannello destro ne mostra la descrizione, i pacchetti previsti e le configurazioni incluse.

## Il superpotere del Dry Run... con un clic

Uno dei punti cardine della filosofia di `penguins-chef` è non agire mai alla cieca. Abbiamo voluto preservare questo principio anche nella GUI:

- Il pulsante **👁 Dry Run** permette di lanciare la simulazione della ricetta senza bisogno dei permessi di root e senza modificare alcun file di sistema.
- Il log dettagliato dell'analisi — verifica dei repository, pacchetti mancanti da installare, file di configurazione atomici, servizi abilitati — viene indirizzato direttamente nella finestra principale di `penguins-gui`.
- Una volta verificato che il piano corrisponde esattamente alle nostre intenzioni, basta premere **✓ Apply Recipe**: l'elevazione dei privilegi viene richiesta solo in questo momento (tramite Polkit/sudo) e la ricetta viene cucinata sul sistema reale.

## Il cerchio si chiude: il flusso completo dalla GUI

L'integrazione di Chef dentro `penguins-gui` completa il flusso operativo:

```text
[ Sistema base / naked ] 
         ↓
  penguins-gui: Cook (scegli e applichi le ricette)
         ↓
  penguins-gui: Edit → Update /etc/skel (propaghi il look utente)
         ↓
  penguins-gui: Create ISO (Eggs crea la live avviabile)
         ↓
  penguins-gui: Boot ISO (provi subito la ISO dal menu di avvio GRUB)
```

Tutto il percorso, dall'aggiunta dei singoli mattoncini software fino alla generazione dell'immagine ISO avviabile e distribuibile, può ora essere seguito direttamente con il mouse, con piena trasparenza su ogni operazione eseguita nel log.

Il codice sorgente aggiornato di `penguins-gui` è disponibile su GitHub:  
https://github.com/pieroproietti/penguins-gui

Buona cucina e buone uova a tutti! 🐧👨‍🍳🥚