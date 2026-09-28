---
title: "penguins-gui in AppImage: il punto di partenza per Eggs"
authors: pieroproietti
tags: [Linux, penguins-eggs]
description: "Da un'AppImage alla prima ISO su Linux Mint: penguins-gui prepara il repository e installa Eggs attraverso il gestore pacchetti della distribuzione."
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Ho provato l'AppImage di **penguins-gui** su Linux Mint. L'ho avviata, le ho fatto configurare il repository nativo di penguins-eggs e installare Eggs. Poi ho creato la ISO.

Spettacolare!

La soddisfazione è vedere funzionare tutto il percorso, dal primo avvio alla rimasterizzazione. È anche il momento in cui una scelta di distribuzione del software comincia ad avere senso: **l'AppImage della GUI può diventare il punto di partenza più semplice per avvicinarsi a penguins-eggs da un desktop Linux.**

<!-- truncate -->

## Si comincia dalla GUI

Chi vuole creare una ISO del proprio sistema deve prima procurarsi gli strumenti. Finora questo primo passo poteva richiedere di capire quale pacchetto scaricare, come aggiungere il repository e come installare Eggs.

Con [penguins-gui](/gui) in formato AppImage il percorso che ho provato su Mint è questo:

1. Scaricare l'AppImage di **penguins-gui**, renderla eseguibile e avviarla.
2. Dal menu **Edit**, scegliere la voce per installare la CLI di Penguins' Eggs.
3. Autorizzare l'operazione: la GUI configura il repository della distribuzione e installa **penguins-eggs**.
4. Terminata l'installazione, scegliere la modalità di rimasterizzazione e creare la ISO seguendo l'output nella finestra.

La GUI può quindi partire anche quando Eggs non è ancora installato. È lei ad accompagnarti fino al momento in cui puoi usarlo.

## AppImage per la GUI, pacchetto nativo per Eggs

Questa è la combinazione che mi convince.

L'AppImage contiene l'interfaccia grafica e si avvia senza installare un pacchetto della GUI. **Eggs viene invece installato nel sistema attraverso il suo gestore pacchetti**, usando il repository appropriato. Rimane così gestibile e aggiornabile con gli strumenti della distribuzione.

I due componenti mantengono il proprio ruolo: penguins-gui presenta le operazioni e richiama la CLI; penguins-eggs svolge il lavoro di rimasterizzazione. Per configurare i repository, installare i pacchetti e creare la ISO vengono richieste le autorizzazioni amministrative necessarie.

Per questo percorso, le altre AppImage — quelle di **penguins-eggs** e di **penguins-eggs-legacy** — a me non servono più. La scelta che voglio proporre a chi parte dal desktop è l'AppImage di **penguins-gui**, con Eggs installato dai pacchetti nativi.

Questo riguarda il formato con cui iniziare: la CLI continua ad avere il suo posto per chi lavora da terminale, sui server o con gli script.

## Una prova concreta, da allargare

Su Linux Mint ho verificato la sequenza completa: avvio dell'AppImage, configurazione del repository, installazione di Eggs e creazione della ISO. Il passo successivo sarà ripetere l'esperienza sulle altre distribuzioni.

L'AppImage attuale è per **x86_64** e richiede un desktop Linux con librerie di base e driver grafici compatibili. Gli strumenti amministrativi e il gestore pacchetti restano quelli del sistema ospite. La prova riuscita su Mint è un ottimo inizio; la compatibilità con gli altri ambienti va verificata sul campo.

Anche la produzione entra nel normale flusso del progetto: **Hammers** è ora configurato per costruire l'AppImage insieme ai pacchetti nativi e allegarla alle release, con il relativo checksum.

L'idea per chi arriva è semplice: **comincia da penguins-gui, installa Eggs dalla sua finestra e crea la tua prima ISO.** Su Mint, oggi, ho fatto proprio questo.


https://github.com/pieroproietti/penguins-gui/releases/tag/v26.9.23

![penguins-gui](/images/linuxmint-penguins-gui-appimage.png)
