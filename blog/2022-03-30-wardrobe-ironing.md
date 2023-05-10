---
authors: pieroproietti
slug: wardrobe-ironing
title: 'wardrobe: ironing'
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />


Ho pensato di utilizzare un file yaml per definire i pacchetti e le modifiche da attuare per passare da una configurazione generica, senza interfaccia grafica ne' servizi, ad una customizzazione, anche spinta come andremo a vedere.

L'idea è nata sulla scorta della mia partecipazione al progetto di BlissOS per portare Android su Linux, parlando con Jon West che avrebbe avuto il bisogno che includessi un particolare driver sulla mia immagine iso.

Normalmente, preferendo sviluppare eggs, non mi occupo molto di firmware, tendo a preferire l'uso di macchine virtuali che mi accorciano e rendono possibile il mio lavoro di testing.

Pensando a come risolvere il problema, ed essendo passato un po' anche su majaro, ho pensato di utilizzare un file .yaml per la gestione dei pacchetti, qualcosa di semplice da mantenere, poi di metterlo in una directory chiamata "costume" e, quindi, aggiungere tutti i costumes creati in un "wardrobe".

Insomma ho immaginato un armadio con una serie di vestiti da indossare su una installazione naked, ovvero senza GUI.

A questo punto, per ottenere lo scopo, ho aggiunto anche una cartella dirs, nella quale vado a porre tutti i file che voglio nel sistema finale. Sostanzialmente dirs viene copiata con rsync sulla /, inoltre per ```dirs/etc/skel``` ho pensato di copiare i files anche nella home utente.

Ho previsto anche una cartella ```debs```, dove porre i pacchetti *.deb non reperibili da repository, e qualcos'altro.

Poi mi sono messo a programmare un sistema per vestirsi (wear) in una classe denominata sarto (tailor).

tailor analizza il file index.yml e la directory del costume stesso ed esegue le operazione specificate in index.yml. 

Ecco un semplice esempio di index.yml per una banale installazione lamp:

```
 costume: lamp
# tailor: artisan
---
name: lamp
description: 'LAMP: linux, apache2, mysql, php example, completely untested!'
author: artisan
release: 0.0.2
distroId: Debian
codenameId: booksworm
releaseId: unstable
applyTo: naked
sequence:
  repositories:
    sourcesList:
      main: true
      contrib: true
      nonFree: true
    sourcesListD:
      - curl -fsSL "https://pieroproietti.github.io/penguins-eggs-ppa/KEY.gpg" | gpg --dearmor -o /usr/share/keyrings/penguins-eggs-ppa.gpg
      - echo "deb [signed-by=/usr/share/keyrings/penguins-eggs-ppa.gpg]  https://pieroproietti.github.io/penguins-eggs-ppa ./ " | tee /etc/apt/sources.list.d/penguins-eggs-ppa.list > /dev/null
    update: true
    full-upgrade: true
  packages:
    - apache2
    - mysql-server
    - php
    - phpmyadmin
  debs: false
  dirs: false
  hostname: true
  customizations:
    scripts:
    - null
  reboot: true
```

Dovrebbe risultare immediato, 

Questo è l'esempio per una piccola installazione lamp. l'esempio più completo è quello di hen,

Fino a che questi index.yml erano abbastanza corti, me li ordinavo da solo con l'editor.

Avendo preso per il costume hen, le repository, i package ed il firmware dal progetto quirinux-os ben più fornito del mio, mi sono reso conto che ci voleva qualcosa per suddividere la sequenza ed ordinare i pacchetti all'interno delle varie tipologie, così oggi ho aggiunto un nuovo comando ironing (stirare).

Naturalmente è un lavoro in corso, praticamente sto decidendo che nomi e quali tipologie passi utilizzare. Ad esempio ho suddiviso firmwares in:
* drivers_wifi
* codecs
* drivers_various
* drivers_video_amd
* drivers_video_nvidia
* drivers_graphics_tablet
* drivers_printer
* drivers_network


prendendo spunto dal tuo script https://github.com/quirinux-so/instalar-quirinux

Mi sembra che stia funzionando abbastanza... almeno per hen - la mia stazione di sviluppo - ma anche per gwaydroid ed i due tre esempi.

Che ne pensate?


Un breve video...
<iframe width="560" height="315" src="https://www.youtube.com/embed/R44gvjOMWLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
