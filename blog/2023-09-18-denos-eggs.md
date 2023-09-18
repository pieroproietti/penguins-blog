---
authors: pieroproietti
slug: denos-eggs
title: "Deno's eggs"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Ho iniziato le `denos' eggs` come un esperimento per capire se [cliffy](https://deno.land/x/cliffy@v1.0.0-rc.3) potesse essere utilizzata per rifare `eggs`. L'esperimento sembrerebbe riuscito.

Praticamente ho reimplementatao in `deno` con `cliffy` l'intero sistema di menu di `penguins'eggs`, inclusi gli argomenti, i flag e l'help.

La procedura al momento non fa assolutamente nulla, ma sicuramente ho dimostrato che non c'è uno specifico problema [oclif](https://oclif.io/).

# I prossimi passi
Non ho ancora ben chiaro quali potranno essere i prossimi passi: potrei partire dalla classe `settings` e replicare la configurazione di `eggs`. 

Al momento mi sembra uno sforzo difficile, quindi ho provveduto a vedere se era possibile "limare" da qualche parte ed, in effetti, ho ridotto di qualche funzione non più utilizzata il codice di [penguins'eggs](https://github.com/pieroproietti/penguins-eggs) stesso.

Ad ogni modo, potete seguire e forkare la repository di [denos'eggs](https://github.com/pieroproietti/denos-eggs), controllare voi stessi o darmi una mano.

![deno](/images/DenoLogo3D-Anim.gif)

Credits: [MasterJames](https://github.com/MasterJames/high-res-deno-logo)

