---
authors: pieroproietti
slug: state-of-the-art
title: "State of the art"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Quando ho cominciato `eggs` ho utilizzato javascript con nodejs per creare un programma CLI.

La ragione risiedeva nella difficoltà trovata ad effettuare manutenzione su script bash, dalla mancata conoscenza di python e dal fatto che javascript era molto diffuso e di moda.

Dopo i primi approcci, sono passato ad utilizzare [oclif](oclif.io) per tutta la struttura. oclif permette di gestire tutto insieme dal README.md ai vari comandi, il parse degli argomenti, etc.

Con oclif e con l'esplosione di typescript sono passato a quest'ultimo che trovo più semplice da gestire rispetto a javascript ed utile sia per rintracciare gli errori in fase di transplilazione che per un maggiore aiuto disponibile sull'editor.

Successivamente, sempre attraverso oclif sono riuscito a creare i primi pacchetti debian, quindi, in una enfasi di novità ho trovato il modo di utilizzare [ink](https://github.com/vadimdemedes/ink) per ottenere una interfaccia TUI più pulita e basata su [react](https://react.dev/).

Il programma cresceva e si dilungava il tempo di compilazione, così decisi di cominciare ad utilizzare [pnpm](pnpm.io) al posto di [npm](https://www.npmjs.com/). L'operazione non si mostrò affatto indolore, oclif non era compatibile con pnpm e decisi di fare un fork di oclif denominato [oclif-phpm](https://github.com/pieroproietti/oclif-pnpm) attualmente allineato alla versione di oclif v3.4.3.

Ho provato a chiedere ad oclif l'inclusione del supporto per pnpm, sembra non ve ne sia l'opportunità e, naturalmente, oclif - un progetto importante - va avanti e rilascia nuove versioni, non più pienamente compatibili con il mio fork.

La stessa cosa sta succedendo on ink che dalla versione 4.x.

