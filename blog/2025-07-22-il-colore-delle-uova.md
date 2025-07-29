---
authors: pieroproietti
slug: il-colore-delle-uova
title: "Il colore delle uova"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Il colore delle uova

Il colore del guscio d'uovo è un affascinante dettaglio determinato dalla genetica della gallina. Che un uovo sia bianco, marrone o persino blu, il guscio è semplicemente il suo imballaggio protettivo. All'interno, il valore nutrizionale — le proteine, le vitamine e i minerali — rimane identico. Un uovo marrone non è più nutriente di uno bianco; sono solo "pacchetti" diversi per lo stesso contenuto di qualità.

Questo stesso principio può essere applicato alla distribuzione del software. Il mio progetto, penguins-eggs, è ora disponibile in una varietà di formati di pacchetto: dal classico DEB per Debian e Ubuntu, al PKGBUILD per Arch Linux e Manjaro, APKBUILD per Alpine e ora, come RPM per Fedora, distribuzioni basate su Red Hat (RHEL, CentOS, etc.) e openSUSE.

Come il colore di un guscio d'uovo, ogni formato di pacchetto (.deb, .rpm, .pkg.tar.zst, etc.) è su misura per la sua specifica "razza" o distribuzione Linux. Ognuno ha le sue caratteristiche uniche ed è gestito da un sistema diverso. Ma all'interno di ciascuno di questi pacchetti, il cuore di penguins-eggs rimane invariato: le stesse funzionalità, la stessa qualità e lo stesso impegno nel fornire un potente strumento per la creazione di backup di sistema e installatori personalizzati.

Il "colore" del pacchetto cambia, ma la "nutrizione" essenziale del software all'interno non varia. Questa espansione garantisce che, indipendentemente dalla vostra distribuzione preferita, possiate ottenere la stessa, identica esperienza affidabile ed efficace con penguins-eggs.

![](/images/eggs-packages.png)

## Maggiori informazione e sorgenti dei pacchetti

I pacchetti vengono creati ognuno sulla relativa distribuzione. Per Debian e i "vecchi" - ma tuttora validi - tarballs, la fonte è Debian bookworm e la repository è [penguins-eggs](https://github.com/pieroproietti/penguins-eggs), il comando di creazione del pacchetto è: `pnpm deb`, mentre per creare una tarball: `pnpm tarballs`.

Per Arch e Manjaro, ma anche per Fedora, openSUSE ed RHEL9 (Rocky ed Almalinux versioni 9.6) la repository per il build è [penguins-packs](https://github.com/pieroproietti/penguins-packs) ed ogni distribuzione ha una propria cartella.

Per Alpine, ho preferito tenere da parte il sorgente per il pacchetto e la modifica - denominata `sidecar` - necessaria per modificare l'init Alpine. Il riferimento è, quindi, la repository [penguins-alpine](https://github.com/pieroproietti/penguins-alpine/).

## Scaricare i pacchetti
Tutti i pacchetto possono essere trovati sia sulla pagina [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/Packages/) che nel [basket](https://penguins-eggs.net/basket/index.php/packages/?p=packages) di [penguins-eggs.net](https://penguins-eggs.net).


## Lista delle distribuzioni supportate
Ieri, ho creato una lista delle distribuzioni supportate, prendendo le prime 100 distribuzioni su [distrowatch](https://distrowatch.com/). 

Sono rimasto impressionato: penguins-eggs è - al momento - il più sofisticato sistema di rimasterizzazione esistente e supporta praticamente più del 90% di quallo che conta.

Trovate la lista, con la possibilità di scaricare delle versioni rimasterizzate e consigli specifici per alcune distro su [SUPPORTED-DISTROS](https://github.com/pieroproietti/get-eggs/blob/main/SUPPORTED-DISTROS.md).




