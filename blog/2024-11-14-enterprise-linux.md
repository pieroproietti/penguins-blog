---
authors: pieroproietti
slug: enterprise-linux
title: "Enterprise Linux"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />
E' passato un po' di tempo dall'ultimo articolo del blog, ma non invano. 

Oltre a [fedora](https://www.fedoraproject.org/it/), sono finite nel [cestino delle uova](https://penguins-eggs.net/basket/index.php?p=isos) anche [AlmaLinux](https://almalinux.org) e [RockyLinux](https://rockylinux.org/), le due maggiori distribuzioni opensource compatibili con [RedHat Enterprise Linux](https://www.redhat.com).

Tutto questo naturalmente ha richiesto impegno e lavoro, abbiamo praticamente la possibilità di rimasterizzare qualsiasi distribuzione Linux.Ok mancano ancora [VoidLinux](https://voidlinux.org/) e [Gentoo](https://www.gentoo.org/), ma deve valerne la pena.

Programmare è un bel mestiere, ma difficilmente è fine a se stesso. Pur non guadagnando nulla da questo progetto, se non il piacere di avere amici sparsi praticamente in tutto il mondo, devo capire se c'è interesse.

AlmaLinux e RockyLinux sono adatti ad un uso professionale. Anche [OpenSuSE](https://www.opensuse.org/) è attualmente rimasterizzabile con penguins-eggs e [Debian](https://www.debian.org) ed [Ubuntu](https://ubuntu.com/) sono pure ottime soluzioni server spesso utilizzate. Però da esperienza personale ho notato, che almeno in Italia, molte organizzazioni tendono ad usare RedHat ed usano/usavano CentOS, per il loro funzionamento. 

Per queste grandi organizzazioni, avere la possibilità di creare delle ISO personalizzate ed installabili delle loro applicazioni server, potrebbe essere vista come una ottima opportunità.

Vediamo se c'è interesse, personalmente lo spero.

Per concludere, serviva una immagine su AlmaLinux e RockyLinux per introdurle. L'ho trovata e fa parte di un interessante articolo di [managedserver](https://managedserver.it): [AlmaLinux VS Rocky Linux, quali sono le differenze chiave?](https://managedserver.it/almalinux-vs-rocky-linux-quali-sono-le-differenze-chiave/#Differenze_chiave_tra_AlmaLinux_e_Rocky_Linux) Buona lettura!

![](https://cdn-gdbgh.nitrocdn.com/XsjHqdZrwNOTMrKVooDNBYYdgGozsmFz/assets/images/optimized/rev-c7dc79f/managedserver.it/wp-content/uploads/2022/09/almalinux-vs-rockylinux-1536x864.png)

## Red Hat Enterprise Linux 9.5

Novità: proprio mentre scrivevo questo post, ho scoperto che il 13 novembre [Red Hat Enterprise Linux 9.5](https://distrowatch.com/?newsid=12289) è stato rilasciato!

Oggi è il 15, vediamo come risponderanno ed in quanto tempo AlmaLinux e RockyLinux.

## AlmaLinux 9.5 beta

E la risposta è arrivata immadiatamente, AlmaLinux ha annunciato in data odierna [AlmaLinux 9.5 Beta](https://almalinux.org/blog/2024-10-15-announcing-95-beta/).

## Rimasterizziamo?

Ho scaricato l'attuale versione `AlmaLinux-9.5-beta-1-x86_64-minimal.iso` e proveremo a rimasterizzarla.

Il primo passo naturalmente è l'installazione. 

Selezionata l'installazione minima, ho definito una installazione su ext4 con una partizione di swap, veramente ho barato riutilizzando le partizioni della Debian installata sulla stessa VM. Ho assegnato la password all'utente root: `evolution`, quindi ho creato un utente `artisan` con la stessa password. Ho incluso artisan nel gruppo `wheel` per abilitare il `sudo`.

L'installazione sta andando, regolarmente.

![](/images/almalinux-9.5-beta-installing.png)

### Installazione di penguins-eggs
Una volta completata l'installazione e riavviato, installeremo `git`, quindi:

* `git clone https://github.com/pieroproietti/penguins-eggs`
* `cd penguins-eggs/PREREQUISITES/almalinux`
* `sudo ./nodesource.sh` # per installare nodejs >18
* `sudo ./install.sh`
* `cd ~/penguins-eggs`
* `sudo ./install-eggs-dev`

Finita l'installazione di penguins-eggs, non ci resta che rimasterizzare la nostra 
AlmaLinux 9.5 beta. 

Un solo comando:

`eggs love`

![](/images/almalinux-9.5-beta-producing.png)

Alla fine del processo otterremo la nostra ISO, denominata: `egg-of_almalinux-9.5-naked_amd64_2024-11-15_2029.iso`

## Installare la nostra versione
Per effettuare una successiva installazione tutto quello che dovremo fare è inserire l'immagine in una VM o copiarla su DVD o chiavetta, ed avviare il nuovo sistema.

Saremo automaticamente loggati, e non ci resta che far partire l'installazione!

![](/images/almalinux-9.5-beta-reinstalling.png)


Potete scaricare l'esperimento direttamente dal [cestino delle uova](https://penguins-eggs.net/basket/index.php?p=isos) e, mi raccomando, fresche! 

**egg-of_almalinux-9.5-naked_amd64_2024-11-15_2029.iso**.

## Vestiamo la nostra naked

Possiamo customizzare la nostra versione anche utilizzando il `wardrobe` di eggs,
non dobbiamo far altro che:

* `eggs wardrobe get`
* `sudo eggs wardrobe wear colibri`

Ecco il risultato!

![](/images/almalinux-9.5-colibri.png)

## Due parole sul wardrobe

Il wardrobe è costituito essenzialmente da un file `.YAML`, in questo caso [fedora.yml](https://github.com/pieroproietti/penguins-wardrobe/blob/main/costumes/colibri/fedora.yml) e da una `sysroot`
nella quale vanno copiate le varie customizzazione.

Il file YAML è utilizzato per installare i pacchetti, la sysroot viene 
copiata in /.

Tutta questa è la magia!

Potete trovare il `wardrobe` su [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe),
eseguire il fork e farvene uno vostro, oltre che - naturalmente - usare l'originale.

## Aggiornamento del 19 novembre 2024

AlmaLinux è già uscita con la release 9.5 definitiva, mentre sul sito di RockyLinux non si vedono ancora annunci.

Ho rimasterizzato la nuova AlmaLinux 9.5 e la potete trovare nel [basket](https://penguins-eggs.net/basket/index.php?p=isos)

![](https://almalinux.org/blog-images/2024/2024-11-18-almalinux-9-5-stable.png)
