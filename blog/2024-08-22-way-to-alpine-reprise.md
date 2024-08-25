---
authors: pieroproietti
slug: way-to-alpine-reprise
title: "way to Alpine (reprise)"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

E' passato un mese, forse due dall'inizio dell'avventura con Alpine Linux visto che ho cominciato dopo metà giugno. 

## Punti di forza
Usare eggs con Alpine linux può essere veramente un piacere, rimasterizzare è un soffio, crearsi la propria versione con XFCE, plasma, gnome, etc veloce (per XFCE vi sono i costumi colibri ed albatros e funzionano egregiamente).

Per quanto riguarda l'hardware non ho modo di fare test, lavoro esclusivamente su macchine virtuali, ad ogni buon conto c'è un pacchetto `linux-firmware` che può essere aggiunto semplicemene con `doas apk add linux-firware` e che dovrebbe "renderla" compatibile con i maggiori hardware presenti.

Dal mio punto di vista, non di creatore di remix ma piuttosto di sviluppatore di penguins-eggs, non ho voluto includere questo pacchetto perchè pesa 700MB e rendel Alpine Linux più lenta da rimasterizzare anche se - a parotà di configurazione - comunque, meglio di Debian ed Arch.

## Ostacoli

Da una parte è stata una esperienza bellissima ed alcune cose sono venute più facili del previsto: costruire un colibri per sviluppare penguins-eggs direttamente su Alpine, constatare le dimensioni minime della distro - con ovvie conseguenze sul debug, etc.

D'altra parte ci sono alcuni scogli che mio malgrado ancora non riesco a superare:
* non ho ancora trovato il modo per avviare la ISO senza andare in recovery shell per montare overlayfs. Il risultato è aggirabile tramine uno script, ma per l'utente finale ed anche per me medesimo è una grande scocciatura.
* Ancora peggio con aport, sono al terzo tentativo di effettuare il merge su [aport](https://gitlab.alpinelinux.org/alpine/aports) per il momento ancora non se parla e, francamente di essere bloccato così dopo tanto impegno nello sviluppo è "pesante" anche se voglio continuare;
* calamares, per qualche ragione è presente sino alla version 3.18-8, non è presente ne' sull 3.19 e neppure sulla version 3.20-2 che è la versione corrente. Anche passando ad edge la situazioni non cambia.
.
## Conclusioni
A mio avviso penguins-eggs potrebbe essere lo strumento per portare Alpine Linux verso i desktop. 

Posso capire che attualmente tutti ci stiamo allontando dal desktop per andare su dispositivi touch ed Alpine da questo lato è ben fornita con PostmarketOS che gira su molti dispositivi, però è sempre una possibilità.

Ed ad ogni modo per gli smanettoni può essere sorprendente far girare le ultime versioni dei desktop su i696 con dimensioni parp a metà o meno di atre distribuzioni.

Ad esempio, la mia colibri, sotto Arch misura: 1,8 GB, la versione Debian boowwork è di 1.3 GB menre la versione Alpine sono solo 743 KB,




