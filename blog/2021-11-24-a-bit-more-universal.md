---
authors: pieroproietti
slug: a-bit-more-universal
title: A bit more universal
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

eggs in questo momento ha raggiunto praticamente la totalità delle distribuzioni basate su Debian e da queste derivate: Devuan, Ubuntu e le innumerevoli altre.

Un buon successo, per un software di sistema ed in particolare della rimasterizzazione del sistema stesso al fine di ottenere da un sistema installato una sua immagine installabile ed avviabile. Tuttavia da quando è stato pensato, la sua indole è stata sempre quella di essere per così dire "universale" ed allora come fare per includere le altre famiglie di Linux?

Vi sono almeno altre due famiglie Linux ampiamente diffuse: sono quelle di derivazione Fedora/Redhat e quelle di derivazione Arch. Ce ne sono anche altre, nondimento importati storicamente o che lo potrebbero diventare in seguito: penso a slackware, gnuix ed nixos in questo momento, ma sicuramente c'è e ci sarà, ancora dell'altro. 

Bisognerebbe trovare qualcosa di comune a tutte esse, innanzitutto per distribuire il programma.

AppImage e flatpack potrebbero essere interessanti per questo. Se eggs fosse rilasciato come appImage, potremmo prescindere da apt e portarci direttamente su appImage alcuni degli strumenti di cui abbiamo bisogno:
* dosfstools 
* parted 
* rsync
* squash-tools 
* xorriso

In aggiunta, credo che i seguenti pacchetti siano universalmente installti: 
* coreutils (normalmente presenti)
* cryptsetup (normalmente presenti)


Abbiamo quindi, per la famiglia Debian le seguenti necessità:
* isolinux // indispensabile per boot
* syslinux-common
* live-boot 
* live-boot-initramfs-tools

Occorre capire come nella famiglia redhat ed arch tutto ciò potrebbe realizzarsi e dovrebbe essere piuttosto fattibile visto che sia redhat che arch hanno strumenti validi di rimasterizzazione.


# Arch linux

Dalla pagina di [archiso](https://gitlab.archlinux.org/archlinux/archiso)

The following packages need to be installed to be able to create an image with the included scripts:

* arch-install-scripts
* awk
* dosfstools
* e2fsprogs
* erofs-utils (optional)
* findutils
* gzip
* libarchive
* libisoburn
* mtools
* openssl
* pacman
* sed
* squashfs-tools

Il problema di Arch linux è che è si un sistema pulito e documentato, ma è ... palloso!!!

Mandato alla malora Arch linux, ho scelto la prima distribuzione basata su Arch linux presente in distrowatch: [EndeavourOS](https://endeavouros.com/) e non ho potuto che stupirmi.

Ho sempre utilizzato calamares per installare sistemi live e pensavo che fosse questo il modo, in EndeavourOS viene utilizzato in maniera diversa e permette - a partire dallo stesso disco di installazione, di installare l'interfaccia grafica che più ci aggrada.

Non dovendo andare troppo per il sottile, necessitando giusto di qualcosa di maneggiabile ho scelta xfce4 e dopo un breve minutaggio necessario a scaricare ed installare i vari pacchetti il sistema si è installato.

Da notare anche nella loro configurazione di calamares la presenza di un tasto per la visualizzazione della finestra di debug, utilissima a noi sviluppatori.

![EndeavourOS](/images/EndeavourOS.png)

# niente da dire... mi sto innamorando!
Pulito, bella grafica, snello. Me lo immagino installato su computer leggeri e datati... 


Oggi ho provato a far girare eggs su Arch... risultati? Soddisfacenti, ma c'è lavoro da fare e, non voglio inguaiare la parte stable di eggs.

Sulla macchina di test, sono riuscito a far funzionare eggs dad -d ed iniziare la produzione. Ho però problemi con la comprensione di pacman, ad esempio sudo pacman -S calamares dovrebbe installare, appunto calamares, ma semplicemente non lo trova.

Una buona idea che replicherò sulla versione di eggs in linea, almeno sulla 14.18 che dovrà evolvere per abbracciare archlinux è quella di introdurre per ogni distribuzione il concetto di familyId, con tre possibilità: debian, fedora, arch.

Questo mi consente una migliore gestione dei processi di installazione, rimozione, controllo del pacchetto.

Un altro grosso problema è la non uniformità dei nomi dei pacchetti, così la famiglia debian ha dei nomi, la famiglia fedora degli altri ed anche la famiglia arch.

Dovrei, a priori tenere traccia di tutto quello che occorre - poche cose in verità - e organizzare una tabella a tre per ogni famiglia.

Per oggi basta così, s'è fatta 'na certa...

# Appunti sparsi

## pacchetti Debian utilizzati attualmente

Abbiamo dei pacchetti comuni, alcuni già di norma installati, alcuni necessari semplicemente per la pacchettizzazione, altri necessari per comprimere e generare la immagine iso, boot etc. Li ho denominati common. Altri pacchetti invece, variano a seconda della architettura i386, amd64, armel o arm64. Altri pacchetti ancora variano a seconda della versione della distribuzione in uso. I pacchetti più "particolari" sono i pacchetti live-boot e live-config che sono perltro tipici di Debian e non presenti in altre distro.

### common
* coreutils // indispensabile whoami
* cryptsetup // indispensabile
* dosfstools // indispensabile creazione disco EFI
* dpkg-dev // necessario per la creazione della repository locale yolk
* isolinux // indispensabile per boot
* live-boot 
* live-boot-initramfs-tools
* parted // indispensabile 
* rsync // indispensabile
* squashfs-tools // indispensabile
* syslinux-common
* xorriso // indispensabile

### dipendenti dalla architettura
* package: syslinux, arch: ['amd64', 'i386']
* package: 'syslinux-efi', arch: ['arm64', 'armel']

### dipendenti dalla versione
* package: 'live-config', versions: ['jessie', 'stretch']
* package: 'live-config-systemd', versions: ['jessie', 'stretch', 'buster']
* package: 'live-config-sysvinit', versions: ['beowulf', 'chimaera', 'daedalus']
* package: 'open-infrastructure-system-config',versions: ['bionic']

## Pacchetti live

### live-boot
live-boot contains the components to configure a live system during the boot process (early userspace). Do not install this package on your regular system, it is only meant to be used in a live image.

**live-boot-initramfs-tools** Live System Boot Components (initramfs-tools backend)


### live-config
live-config contains the components to configure a live system during the boot process (late userspace).
