---
authors: pieroproietti
slug: containers
title: containers
lang: it
comments: true # giscus
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Era da molto tempo che Sebastien, un mio amico canadese, mi sollecitava di lavorare con i containers. 

Per qualche anno mi sono chiesto che significato potesse avere, in qualche modo mi ero creato eggs che mi replicava quasi con la stessa semplicità sistemi completi, perchè usare dei container?

Il mio lavoro, è molto ristretto, contrariamente a quanto si può supporre non conosco Linux come le mie tasche, o meglio, forse si! Dato che ogni tanto perdo qualcosa... Ma bando alle chiacchiere, studiare un argomento nuovo e complesso senza sapere manco dove si va a parare, mantenento contemporaneamente penguins-eggs - con tutti i problemi di aggiornamento che  comporta - era abbastanza lontano dalle mie intenzioni e sono fuggito a lungo. 
Poi, giusto una settimana fa mi scrive nel gruppo tale `gnuhub` chiedendomi come creare il pacchetto Debian di eggs. Uno domanda piuttosto semplice, la risposta è semplcemente: `pnpm deb` e ti aspetti che sia stata formulata da un utente comune, un beginner/advanced. Così dopo avergli risposto, il giorno dopo gli chiedo: come è andata, sei riuscito?

![](/images/gnuhub.png)

Ecco, da questo "incontro" sta nascendo una nuova generazione di penguins-eggs, capace di produrre una ISO Arch da un sistema Debian o Ubuntu. Per il futuro sarà possibile anche il cosidetto "viceversa" ovvero creare da  Arch o Ubuntu, una ISO Debian o altro tra le distro che saranno supportate.

## Che cosa sto creando?

Sto usando podman, non lo conoscevo affatto, è una alternativa opensource a Docker creata da RedHat ed usata in molti progetti main stream. La cosa che me lo ha fatto scegliere è podman viene usato anche per i container delle CI su github.

In buona sostanza, o sulla macchina locale o attraverso le azioni di github, viene creato un container a partire da una immagine minima della distribuzione da "ri-creare", viene quindi installato penguins-eggs e le dipendenze necessarie, poi un set minimo di pacchetti. A questo punto, lanciando `eggs` all'interno del container, di ottiene una immagine ISO che prescinde totalmente dal sistema installato!

## Si va bene, ma a che serve?

Serve a molto, ancora non lo scopro appieno ma nemmeno ne vedo i limiti: al momento mi permette di avere delle CI su github che costruiscono sia i pacchetti che le ISO ad ogni commit oppure a richiesta e tracciano gli eventuali errori.

Provate a consultare questo [link](https://github.com/pieroproietti/penguins-eggs/actions) e divertitevi a vedere come una immagine venga creata e rimasterizzata in background con penguins-eggs.

Questo, naturalmente, è anche un ottimo sistema di debug.

Ringrazio molto [gnuhub](https://github.com/gnuhub) al secolo Wang Stallman, per avermi indicato la strada. 

![](/images/github-ci.png)

## Semplificazione
Il processo creato da Wang su github, prevede l'uso di due container: il primo un container Ubuntu per creare la CI ed un secondo che carica la distribuzione di cui creare l'immagine ISO.

Inizialmente gli script specificavano sia la creazione del container Ubuntu, sia quella dei vari container delle distribuzioni. Ora ho appena riorganizzato il codice creando uno script `10000-ubuntu-container-base.sh` che non fa altro che configurare il container Ubuntu, rendendolo capace di reperire le immagini necessarie, che poi uso nei vari container di test.

Così abbiamo, nella root del progetto:
* `10000-ubuntu-container-base.sh`
* `10000-ubuntu-vm-test.sh`
* `10002-ubuntu-container-test.sh`
* `10003-debian-container-test.sh`
* `...`


]`10000-ubuntu-container-base.sh`](https://github.com/pieroproietti/penguins-eggs/blob/master/10000-ubuntu-container-base.sh) non viene mai lanciato da solo, ma viene chiamato con `source` dai vari script. Ad asempio:

```
#!/usr/bin/env bash

set -x
source ./10000-ubuntu-container-base.sh

cd $CMD_PATH
which podman 
podman --version
df -h

podman run \
        --hostname minimal \
        --privileged \
        --cap-add all \
        --ulimit nofile=32000:32000 \
        --pull=always \
        -v $PWD/mychroot/ci:/ci \
        -v /dev:/dev \
        debian:12.9 \
        /ci/run-on-debian.sh

df -h
date
```

Questo costituisce una semplificazione notevole.

## La vendemmia

Terminata la configurazione delle CI in maniera soddisfacente, è tempo di aspettare che l'uva maturi per la vendemmia.

Personalmente, avendone avuto  diretta esperienza, l'ho sempre reputata una attività estremamente faticosa ma d'altra parte quando giunge è l'ora del raccolto e, dall'antichità in poi è considerata una festa.

Occorre capire come "vendemmiare" ovvero come tirare fuori da queste CI o da altre, i pacchetti, le tarballs e le ISO create!

Non ne ho idea, c'è qualche esperto che può consigliarmi?

### Preparativi
Prima di vendemmiare bisogna preparare i recipienti per raccogliere il vino, ovvero sistemare le botti. Non mi dilungo sull'argomento.

Fortunatamente un grande aiuto, ancora una volta, è venuto dal buon Wang Stallman - esperto vignaiuolo cinese - che mi ha modificato gli script per la raccolta dei cosidetti `artifact`.

Sono riuscito, quindi ad esportare le prime ISO ed i primi tarballs, ma occorre ancora pefezionare. Inoltre con questo, sono stati aggiunti gli script per Fedora, Openmamba, OpenSuse e Rocky Linux.

Sono partito da Rocky, il più facile data la quasi sovrapposizione ad Almalinux. Via, via affronteremo gli altri,ma ci vuole tempo. 

Rocky mi ha richiesto comunque qualche ora - e sto imparando cose nuove - vedremo gli altri.
