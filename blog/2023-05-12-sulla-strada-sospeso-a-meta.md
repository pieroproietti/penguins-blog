---
authors: pieroproietti
slug: sulla-strada-sospeso-a-meta
title: sulla strada sospeso a metà
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# exclude.list

Escludere file dalla riproduzione è sempre stato previsto da `eggs`, grazie agli strumenti ereditati da `refracta-snapshot`. Quello che non avevo sinora capito è che eggs aveva perso questa capacità nel momento stesso in cui avevo scelto di non copiare più il file system originale per creare il `file system live` ma di procedere con il file system originale montato `--bind` ed `overlay` per permettere le variazioni.

La tecnica permette di risparmiare veramente tanto tempo e tanto spazio sul disco, ma - quello che non avevo notato - ha ed aveva pure un impatto sul funzionamento della exclude.list che era pensata, per l'appunto, per escludere i file dalla copia fatta con `rsync`.

Nella mia beata  ignoranza, l'avevo presa così com'era e la chiamavo ogni volta per `mksqushfs`. Non sortiva - ovviamente - effetto alcuna, ma fondamentalmente utilizzando poco `eggs` per casi reali, non mi ero ancora reso conto del problema.

Qualche giorno fa ho ricevuto una issue su github: 
```
Hi,
I am running encrypted linuxmint-21.1 on btrfs filesystem and using also swapfile. Swapfile 4GB needs its own subvolume, which is mount under folder "/swap". I added "/swap" to "/usr/local/share/penguins-eggs/exclude.list" but It is added to the ISO (~8GB) instead. It seems the exclude.list is not observed for building the squashfs (?!)
```
ed ho voluto provare a riprodurre il problema-

Esisteva, certo che esisteva come avevo fatto a non accorgermente?

# La soluzione
Una volta compreso che l'`exclude.list` originale era scritta per `rsync` e, quindi, non funzionante, l'ho proprio eliminata del tutto e sono ripartito da zero.

Ho ripreso l'ultima versione dell'`exclude.list` originale di `refracta-snapshot` e l'ho trasformata per essere utilizzata con `mksquashfs`.

A questo punto, sono lieto di annunciare che adesso si, funziona benissimo ed è estendibile ed adattabile alle vostre necessità.

# Morale
Uno sviluppatore non può mai lavorare da solo, come un poeta ha bisogno di compagnia.

```
ha bisogno di Pace, 
ha bisogno di Luce,
ha bisogno di un altra città',
ma un poeta è un poeta, 
anche quando cammina,
sulla strada sospeso a metà!
```
