---
authors: pieroproietti
slug: di-palo-in-frasca
title: "Di palo in frasca"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Non riesco a trovare ulteriori informazioni su come fare installare btrfs su una distribuzione tipo Debian o Arch, o meglio, non riesco a reperire quello che mi manca:

## quali pacchetti installare?
* btrfs-progs
* libbtrfs0  (userspace shared code library libbtrfs)
* libbtrfsutil1 (runtime util library)

## quali configurazioni occorrono?
God know, at the moment...

## Dove reperire informazioni
* [btrfs-archWiki](https://wiki.archlinux.org/title/btrfs)
* [btrfs-debianWiki](https://wiki.debian.org/Btrfs)

# Bodhi Linux
Ogni tanto, come molti, dò una occhiata a [distrowatch](https://distrowatch.com/) per vedere quello che succede.

Oggi ho trovato l'[annuncio](https://distrowatch.com/?newsid=11915) di una nuova release di [Bodhi Linux](https://www.bodhilinux.com/) ed ho provato a rimasterizzarla.

Bodhi Linux, è una distribuzione leggera con il desktop Moksha, veloce e completamente personalizzabile. La versione a 64 bit è basata su Ubuntu (22.04).

Cosa significa Bodhi?

Il termine sanscrito è pāli bodhi (devanāgarī बोधि) indica il "risveglio" buddhista inteso in senso spirituale, tradotto in Occidente anche con "illuminazione". Il termine bodhi indica quindi l'illuminazione spirituale nell'ambito della religione buddhista.

Che cosa è Moksha?

La parola "Moksha" (pronunciata "monk-shuh") è originale in sancrito proprio come Bodhi. Il suo significato è "emancipazione, liberazione o rilascio". Moksha è la continuazione di Enlightenment 17 desktop. Consiste nel back porting dei bug fix e delle caratteristiche dalla future release di Enlightenment, così come nella rimozione di parti parzialmente finite o rotte contenute in E17.


# Bhodi Linux rimasterizzato con eggs
Ho fatto la mia rimasterizzazione di Bodhi Linux lasciandolo il più possibile com'è in originale, in sostanza cambia solo il programma di installazione - eggs utilizza calamares.

Lo potete scaricare dalle pagine di sourceforge di penguins-eggs sotto la cartella [bhodi](https://sourceforge.net/projects/penguins-eggs/files/ISOS/bhodi/).




