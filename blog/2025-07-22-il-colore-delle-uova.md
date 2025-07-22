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

I pacchetti vengono creati ognuno sopra la relativa distribuzione. Per Debian e i "vecchi" - ma validi - tarballs, la fonte è Debian bookworm e la repository è giusto [penguins-eggs](https://github.com/pieroproietti/penguins-eggs) ed il comando per creare il pacchetto Debian è: `pnpm deb`.

Per Arch e Manjaro, ma anche per i pacchetti RPM di Fedora, openSUSE e RHEL0 la repository dei sorgenti è [penguins-packs](https://github.com/pieroproietti/penguins-packs), ogni distribuzione ha in proprio folder.

Per Alpine, ho preferito - al momento - tenere da parte il sorgente per il pacchetto e le modiche - deniminate `sidecar`. Il riferimento per i pacchetti Alpine è, quindi, la repository [penguins-alpine](https://github.com/pieroproietti/penguins-alpine/).


## Scaricare i pacchetti
I pacchetto possono essere trovati sia sulla pagina [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/Packages/) che nel [basker](https://penguins-eggs.net/basket/index.php/packages/?p=packages) di [èenguins-eggs.net](https://penguins-eggs.net).



