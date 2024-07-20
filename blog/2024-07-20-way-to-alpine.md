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

![])https://private-user-images.githubusercontent.com/958613/350071720-e74d1ce4-b9ed-423f-80a8-1f8718596c32.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE0NzMwMjAsIm5iZiI6MTcyMTQ3MjcyMCwicGF0aCI6Ii85NTg2MTMvMzUwMDcxNzIwLWU3NGQxY2U0LWI5ZWQtNDIzZi04MGE4LTFmODcxODU5NmMzMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyMFQxMDUyMDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMTcwNTlkNmFlYTE0YWExYWU4YjI3MDhkY2RkNzg2MGRmMzQyZmRjMDIwZWRmNmRkMjVkMTI5OWI3NWJiMTJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5LXazkDbFIERenMn6grXn4At0zJXKnWulz71CILfx3E)