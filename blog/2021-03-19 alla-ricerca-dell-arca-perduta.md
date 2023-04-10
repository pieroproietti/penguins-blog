---
authors: pieroproietti
slug: alla-ricerca-dell-arca-perduta
title: Alla ricerca dell'arca perduta
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Da un paio di giorni - ormai una settimana fa - sto cercando di far funzionare versioni "antiche" Debian con eggs.

Per il momento mi è riuscito di arrivare sino a Debian stretch ed ad Ubuntu xenial, niente da fare invece con Debian jessie che, pure avrei in animo di rendere compatibile.

Il tutto è nato dal tentativo - non riuscito - di installare una distro moderna pur se leggera su un vecchio pc con arhitettura amd64 e "solo" due gigabyte di RAM. 

Lo avevo preparato bene, forse quattro o cinque anni fa, con Debian jessie e cinnammon e l'avevo rimesso in moto cercando di installare qualcosa di più aggiornato.

L'intenzione era quella di installare [So.Di.Linux Orizzonti 2025](https://sodilinux.itd.cnr.it/course/view.php?id=4&section=1) per un ragazzo che va o dovrebbe andare a scuola. [So.Di.Linux](https://sodilinux.itd.cnr.it/) è una distribuzione basata su Linux Mint con mate come interfaccia grafica, in teoria avrebbe dovuto girare con due GB in pratica era impossibile da installare con Calamares, poca memoria RAM

Ho ovviato al problema installando con l'installer a riga di comando, ovviamente si è installato ma sono incappato in una scheda grafica nvidia vecchia e non più aggiornata e sono stato costretto a desistere.

Precedentemente sulla macchina era installato Debian jessie con una delle prime versioni di cinnamon ed era discretamente usabile. Ancora di più lo sarebbe stato installandoci xfce, mate, lxqt, etc.

Questo mi ha portato a ripensare alle versioni supportate, sinora avevo sempre cercato di andare avanti senza mai voltarmi le spalle e rendendo incompatibili con eggs versioni vecchie, ma tutto sommato, ancora utilizzabili di Debian ed ubuntu,

# Compatibilità di eggs

## Debian

* Debian 8 jessie OK, ma senza la compressione fast (zstd), no calamares (vedi nota)
* Debian 9 stretch OK, ma senza la compressione fast (zstd), no calamares  (vedi nota)
* Debian 10 buster OK
* Debian 11 bullseye OK


## Devuan
* Devian beowulf OK

## Ubuntu
* Ubuntu xenial OK, ma senza la compressione fast (zstd), no calamares (vedi nota)
* Ubuntu bionic OK
* Ubuntu focal OK
* Ubuntu groovy OK

## Derivate
Naturalmente è possibile rimasterizzare anche le derivate dalle distribuizioni sopra menzionate: LinuxMint dalla versione tricia (basata su bionic) a quelle odierne (ulyana ed ulyssa), deepin, netrunner-core e netrunner-xoxo, ed innumerevoli altre.

## Nota su Debian 9 stretch (*)
In questa versione non è possibile utilizzare l'algoritmo zstd per la compressione fast, procedere con compressione normale.

## Nota su Debian 8 jessie (**)
Su Debian 8 jessie non è possibile utilizzare eggs per la mancanza di overlayfs nel kernel 3.16.x tale caratteristica è resente solo dalla versione 3.19 del kernel. Ho dovuto quindi sostituire il kernel originale con altro di provenienza ubuntu in versione 3.19, in effetti avevo precedentemente installato un kernel bpo debian, questo permetteva la generazione della iso ma purtroppo aveva dei problemi a convivere con la restante parte di jessie.

A questo punto, risolto il problema di overlayfs lato kernel che mi impediva di creare la iso, mi sono scontrato con il fatto che i pacchetti live di jessie utilizzano aufs e non overlayfs, per cui la iso era perfettamente avviabile ma non riusciva comunque a montare filesystem.squashfs.

Ho risolto, installando live-boot dalla versione stretch, finalmente abbiamo la nostra live avviabile.

I pacchetti di strecth installati sono questi:

live-boot_20170112_all.deb  live-boot-initramfs-tools_20170112_all.deb 

Rimaneva però un ulteriore problema, il pacchetto eggs utilizza un pacchetto npm che va compilato e che si rilevava incompatibile con la versione di libstdc++ 

E' stato, quindi, stato necessario ricompilare il pacchetto eggs su jessie e, finalmente, TUTTO FUNZIONA!

In attesa di sostituire il pacchetto drivelist di eggs con altro, vi segnalo che se in questo momento aggiornate eggs con la versione standard eggs non riuscirà ad installare la iso. 

![jessie](/images/jessie.png)
