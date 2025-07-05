---
authors: pieroproietti
slug: qualcuno-volo-sul-nido-del-cuculo
title: "Qualcuno volò su nido del cuculo"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

![Qualcuno volà sul nido del cuculo](https://www.billyrivistacinematografica.it/wp-content/uploads/2021/07/kesey-16-932x618.jpeg)

## Qualcuno volò su nido del cuculo

Chi non ricorda la potente metafora di "Qualcuno volò sul nido del cuculo"? 

Lo vidi proiettato per la prima volta in una arena estiva nel mio paese d'origine, era il primo di una serie dedicata a Jack Nicholson, il successivo fu un altro classico: Easy Rider.

Un manicomio - un sistema chiuso, rigido, quasi immutabile - viene sconvolto dall'arrivo di un elemento esterno che ne cambia per sempre le regole e porta un'inaspettata ventata di libertà.

Ricordando questa immagine, che qua prendo a prestito, per introdurre uno dei comandi più potenti e innovativi di penguins-eggs: il comando cuckoo.

Proprio come il protagonista del film, il nostro "cuckoo" non si limita a entrare in un sistema esistente (la vostra rete locale, il nostro "nido"), ma lo trasforma. Come? Deponendo "uova" – ovvero il vostro sistema operativo perfettamente personalizzato – su tutte le altre macchine, liberandole dalla tirannia dell'installazione manuale, una per una.

## Cosa fa cuckoo?
cuckoo è un comando che, eseguito da un sistema live avviato da una ISO creata con penguins-eggs, trasforma temporaneamente quella macchina in un server PXE (Preboot Execution Environment). Questo server è in grado di avviare e installare il sistema operativo su altri computer collegati alla stessa rete locale, il tutto senza la necessità di creare chiavette USB o DVD di installazione per ogni postazione.

## Come funziona l'installazione via LAN?
Il processo è sorprendentemente semplice:

Crea la tua ISO personalizzata: Utilizza penguins-eggs per generare un'immagine ISO del tuo sistema operativo configurato e personalizzato.

Avvia il sistema in modalità live: Su un computer della rete, avvia il sistema dalla ISO appena creata.

Lancia il comando cuckoo: Apri un terminale e digita il comando:

```Bash

sudo eggs cuckoo
```
Avvia i client dalla rete: Sugli altri computer che desideri installare, accedi alle impostazioni del BIOS/UEFI e imposta l'avvio da rete (Network Boot o PXE Boot).

Installazione: I computer client si avvieranno caricando l'ambiente di installazione direttamente dal computer su cui è in esecuzione cuckoo. A questo punto potrai procedere con l'installazione standard del sistema.

## Vantaggi dell'utilizzo di cuckoo
Efficienza: Installa simultaneamente il sistema su più macchine, risparmiando una notevole quantità di tempo.

Semplicità: Non è richiesta una complessa configurazione di un server PXE dedicato. penguins-eggs si occupa di tutto in modo automatico.

Coerenza: Assicura che ogni macchina installata sia una copia esatta del sistema che hai personalizzato.

Flessibilità: Ideale per amministratori di sistema, insegnanti e chiunque abbia bisogno di distribuire rapidamente un ambiente software standardizzato.

Con penguins-eggs e il suo comando cuckoo, la distribuzione di sistemi operativi su una rete locale diventa un'operazione rapida, efficiente e, perché no, un piccolo atto di ribellione contro le procedure macchinose.

![Easy Rider](https://www.hollywoodreporter.com/wp-content/uploads/2019/07/easy_rider_1_-_h_-_1969.jpg?w=1296&h=730&crop=1)


## Il team di [Repurp-OS](https://repurpose-it.github.io/Repurp-OS/)

Lascio a loro la parola, per aggiungere altro.

![team](https://github-production-user-asset-6210df.s3.amazonaws.com/199755/462317216-de9d01d0-3e5d-4f94-a846-297d1fe5eb57.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250705T035011Z&X-Amz-Expires=300&X-Amz-Signature=5ca8fe7eec402398af3a54880f01253d9706e35cdbf9991885111fc2c82ada5a&X-Amz-SignedHeaders=host)