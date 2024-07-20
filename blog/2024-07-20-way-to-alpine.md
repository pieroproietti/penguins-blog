---
authors: pieroproietti
slug: way-to-alpine
title: "way to Alpine"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Da qualche giorno sto impegnandomi, sarà il caldo, a portare penguins-eggs su Alpine Linux.

Naturalmente non è un processo semplice, Alpine è una distribuzione non derivata da Debian o da Arch e, pertanto, abbastanza diversa.

# Costruzione di una macchina di sviluppo

Per fare esperienza e saggiare le mie capacità, ho iniziato con il crearmi una macchina di sviluppo, il mio famigerato `colibri`, avvero una macchina abbastanza leggera con xfce, code, nodejs e pnpm per lo sviluppo di penguins-eggs.

Lo scopo ormai può dirsi riuscito, dispongo di una VM configurata perfettamente allo scopo ed è tracciato tutto quanto il percorso sul documento [WAY-TO-ALPINE.md](https://github.com/pieroproietti/penguins-eggs/blob/master/WAY-TO-ALPINE.md).


# A che punto siamo con la creazione di una ISO?
Se avete già letto [WAY-TO-ALPINE.md](https://github.com/pieroproietti/penguins-eggs/blob/master/WAY-TO-ALPINE.md) avete già una risposta: `filesystem.squashfs` completo, ISO avviabile da BIOS, mancanza di un `initramfs` che monti il `filesystem.squashfs` ed esegua il chroot in eggs.

# A chi posso rivolgermi per una collaborazione?
Pure se sto continuando ad andare avanti, è evidente che mi servirebbe la collaborazione di una persona esperta di Alpine Linux, per trovare la soluzione.

Se qualcuno è in linea batta un colpo, avere penguins-eggs su Alpine Linux potrebbe facilitare la diffuzione della Distribuzione e permetterne una customizzazione a portata degli utenti finale. Inoltre, data la sua leggerezza sarebbe possibile effettuare nuomerosi test.

Mi serve aiuto però... magari anche da uno sviluppatore.

![](/images/alpine-penguins-eggs.png)
