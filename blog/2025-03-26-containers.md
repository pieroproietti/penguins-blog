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

In buona sostanza, o sulla macchina locale o attraverso le azioni di github, viene creato un container a partire da una immagine minima della distribuzione da ri-creare, viene quindi installato penguins-eggs e le dipendenze necessarie, poi un set minimo di pacchetti. A questo punnto, lanciando eggs all'interno del container, di ottiene una immagine ISO che prescinde totalmente dal sistema installato!

## Si va bene, ma a che serve?

Serve a molto, ancora non lo scopro appieno e nemmeno ne vedo i limiti: al momento mi permette di avere delle CI su github che costruiscono sia i pacchetti che le ISO ad ogni commit o a richiesta e tracciano gli eventuali errori.

Provate a consultare questo [link](https://github.com/pieroproietti/penguins-eggs/actions) e divertitevi a vedere come una immagine venga creata e rimasterizzata in background con penguins-eggs.

Questo, naturalmente, è anche un ottimo sistema di debug.

Ringrazio molto [gnuhub](https://github.com/gnuhub) al secolo Wang Stallman, per avermi indicato la strada. 

![](/images/github-ci.png)