---
authors: pieroproietti
slug: raspberry-pi5
title: "Raspberry Pi4 e Pi5"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Oggi, dopo molto tempo, torno a scrivere qualcosa sul blog, tanto tempo è passato da fine gennaio, quando ho presentato PenGUI ancora in stato non funzionante.

Nel tempo l'ho corretta e vedo che attualmente marcia spedita a download su sourceforge, presto sarò libero da altri impegni e la potremo perfezionare.

Ma oggi voglio semplicemente descrivere le mie impressioni di utilizzo di Raspberry. Possiedo da tempo un Raspberry 4 che ho utilizzato per creare le ISO per ARM e per la compilazione di PenGUI su arm64 e, sto svrivendo attualment da una Raspberry PI con 8 GB di RAM connesso alla rete domestica.

Rete domestica un corno, perchè comprende una server Proxmox VE su amd64 sul quale sinora ho svolto il mio lavoro, una Pi 4 con 4 G di RAM, che mi funge sia da server per le macchine virtuali arm64 che da git domestico con l'ottimo [Forgejo](https://forgejo.org/).

# I so impiegati
Naturalmente essendo col tempo diventato un esperto della customizzazione di sistemi operativi Linux, con sommo piacere opero su tutte e tre le macchine, più le svariate macchine virtuali con la mia customizzazione colibri.

Devo dire che è comodo, ho sempre una certa difficoltà - sarà anche l'età - a passare da un Desktop ad un altro. Per anni ho utilizzato di tutto, simo a stabilizzarmi su cinnamon di Linux Mint. Attualmente, anche per problemi di vista, mi viene comodo xfce che ha il vantaggio di ridimensionare i caratteri del terminale. Si, lo sò che basta installare un altro terminale su cinnamon e si campa tale e quale, ma mi trovo meglio ed è più leggero. Inoltre, da tempo ho "standardizzato" il mio ambiente di lavoro e lo posso installare con un sol colpo di `eggs wardrobe wear colibri`.

# amd64
Su comune PC, parto dalla netinstall di Debian 12 bookworm che installo come dire "naked" ovvero con il minimo indispensabile e senza GUI,

# arm64
Per rasberry sto utilizzando la versione lite di Raspberry Pi OS - basata su Debian 12 bookworm - senza interfaccia grafica, che customizzo successivamente utilizzando eggs.

L'ambiente che viene fuori è esattamente lo stesso, poi è chiaro che su raspberry mi troverò raspi-config ed il boot con uboot da configurare con /boot/firmware/cmdline.txt, mentre su PC avremo grub.

In sostanza, sto scrivendo dalla stessa tastiera e lo stesso monitor di sempre: tra farlo da raspberry Pi 5 o dalla mia quotidiana stazione di lavoro non cambia nulla.

# I cavi, la vista e la vecchiaia
Odio attaccare e staccare i cavi, averne troppi, etc. Naturalmente sinora ho sempre staccato ed attaccato tastiera, mouse, monitor e cavo di rete da un PC ad un altro.

Ora, visto che tutto sommato mi viene comodo, sto provando ad utilizzare il nuovo Rasberry come unico computer da utilizzare direttamente. Si ha il vantaggio di non attacare e staccare cavi, abbassarsi per collegare la rete, etc. Il rasberry è naturalmete connesso in WIFI e va onestamente, per caricare e scaricare le ISO posso farlo con la rete cablata sul fisso e da Raspberry utilizzare quest'ultimo.

Ah, naturalmente al diavolo le MicroSD - sto lavorando con un drive ssd portatile attaccato alla USB3 ed alimentato direttamente dal Raspberry.

Vediamo come procede, per il momento, sarà un'oretta che il mio Pi 5 è attaccato. non scada affatto, ero molto preoccupato.


![raspberry](/images/raspberry.png)
