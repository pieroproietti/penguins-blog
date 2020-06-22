---
title: Guide eggs enghish
layout: page
date: 2020-06-20 07:38:32
lang: it_IT
---
# Indice
* [Introduction](#introduzione)
* [Installation](#installazione)
* [Prerequisites e configurazione](#prerequisiti-e-configurazione)
* [I comando](#i-comandi)
* [Creiamo una nostra remix](#creiamo-una-nostra-remix)
* [Scarica le immagini ISO](#scarica-le-immagini-iso)


# Introduction

A reproductive system for penguins!

Penguin's eggs was born with the idea of ​​"reproduction" and "selection of populations" applied to operating systems.

It was the time of Remastersys and Systemback, two of the most popular programs to remaster an operating system - at some point - both Remastersys, which had always suffered from maintenance problems by its author, and Systemback were somehow discontinued. _See note**_

Actually, for a while there was no problem, but when the "first pains" began to not be able to remaster the latest versions of my favorite distros, essentially Debian and derivatives, what was an idea, began to take shape.

I wanted a new tool, written in a modern language common to multiple distributions, with its own packaging system. The choice fell on nodejs, with javascript, then I switched to typescript as a development language.

I imagined an egg production process, called **produce**, the hatching operation - that is, the **installation** - originally called hatch. The other commands came by themselves with preferred **kill** to abort to get the ISOs out of the way, **updates** for updates, **prerequisites** to install the .deb packages necessary for the process, **calamares** for the installation and configuration of the graphic installer.

Sooner or later, since it is an egg, I will also find a way to implement a PXE server that distributes it through the local network, at the moment besides the intention there is the name and it could only be **cuckoo** (cuckoo), from the behavior of the cuckoo who has his eggs hatched by others.



** Note **: _The situation of Systemback is in fact no longer that of the beginnings of eggs. I recently met the good Franco Conidi \ (Edmond \) who still takes care of the updates._

# Installation

Things to do before starting "egg" production.

### Debian package

Installation from the Debian package is undoubtedly the simplest. Just download the latest version of eggs from the [sourceforge] website (https://sourceforge.net/projects/penguins-eggs/files/packages-deb/) and install it with the command:

```
sudo dpkg -i eggs-7.5.81-1.deb
```

The .deb version includes nodejs inside, so it is not necessary to have this package.

### Package npm (nodejs)

Being eggs a software developed with nodejs, the original and preferable version, and always the most updated. Furthermore, once installed, this version can always be updated simply with the `sudo eggs update` command.

In order to install this version, you must first install the nodejs package. The description of which nodejs to use and how to install nodejs are reported in the README file, md included in the [eggs repository](https://github.com/pieroproietti/penguins-eggs).

The installation of eggs from the npm package is simple and safe, only these commands:
```
sudo npm config set unsafe-perm true
sudo npm install penguins-eggs -g
```

To update the package - once installed - to subsequent versions, just the command:


```
sudo eggs update
```

### Use of eggs from source code

Using eggs from sources can be extremely useful for both debugging and collaborating in development. Once downloaded the source with the command:

```
git clone https://github.com/pieroproietti/penguins-eggs
```

then enter the penguins-eggs directory and give the command:


```
npm install
```

At this point, from the penguins-eggs directory itself, you can use the source directly. Eg:

```
sudo ./eggs produce -fv
```

For developers or the curious, it will be possible to view, report or correct the code.


---

# Prerequisites and configuration

Once the package is installed as on the previous page, we will have a new command on our system:

`eggs`

We start eggs without any command and we will get the list of available commands:


![eggs-senza-parametri](/images/eggs-senza-parametri.png)


The first thing we need to do at this point is to allow eggs to download the Debian packages needed for it to work. To do this, just run the command:

```
sudo eggs prerequisites
```

![eggs-prerequisites](/images/eggs-prerequisites-yes-no.png)

Selecting Yes will accept the installation of the packages necessary for the functioning of eggs and the production of iso images. Essentially we can divide the installed packages into three:

* Packages to boot on UEFI machines
* Packages for creating the ISO image
* Packages for the calamares graphic installer

All the packages for the functioning of eggs and the production of ISO are installed by the command:

```
sudo eggs prerequisites
```

which will then install the following packages:

`isolinux, live-boot, live-boot-initramfs-tools, lvm2, squashfs-tools, xorriso, xterm, whois`

### sudo eggs calamares

At this point, if we need it, it will be better to install the calamares graphic installer, with the command:


```
sudo eggs calamares
```

which will install calamares and the `qml-module-qtquick2, qml-module-qtquick-controls` modules needed to view the slides during system installation.

### Realizzazione di immagini iso compatibili UEFI

Se vogliamo che le nostre iso vengano create compatibili UEFI - _attenzione: questo è stato testato solamente con Debian Buster, probabilmente in Ubuntu ancora non va_ - dobbiamo installare il pacchetto grub-efi-amd64, con il comando:

```
sudo apt install grub-efi-amd64
```

vedi **Nota**

### File di configurazione penguins-eggs.conf

Normalmente non è necessario intervenire su /etc/penguins-eggs.conf,  eggs si autoconfigura e adattandosi alle bisogna della distro presente. Ad ogni modo per la documentazione si rimanda ai commenti presenti sullo stesso file.

Mi preme solo segnalare che editando questo file si può modificare sia nome dell'utente della live, che la sua password e quella di amministrazione.

Se avete scelto di non toccare per il momento /etc/penguins-eggs.conf, si ricorda che per default eggs è configurato con user **live** e password **evolution**, la stessa password è impostata per il login di root.

Se invece avete modificato o cancellato il file di configurazione, potete sempre ripristinarlo con il comando:

```
sudo eggs prerequisites -c
```

### eggs è pronto!

Bene, adesso siamo finalmente pronti ad utilizzare eggs per la riproduzione del nostro pinguino.

_**Nota**: nel caso desideriamo creare una immagine avviabile in modalità UEFI ed abbiamo installato grub-efi-amd64 dopo aver installato i prerequisiti, occorre andare ad editare il file /etc/penguins-eggs.conf ed impostare make\_efi=yes._

---

# I comandi

### Comandi ed opzioni 

Eggs necessita dei diritti di root, quindi - tranne per eggs info - DEVE essere chiamato preceduto da`sudo`

* adjust
* calamares
* help
* howto
* info
* install
* kill
* prerequisites
* produce
* skel
* sterilize
* update

Non vi fate spaventare da questi pochi comandi, quelli che utilizzerete sono essenzialmente due: produce per creare la iso e kill per cancellarla.

Ogni comando può avere alcuni flag,di questi, il più importante, è il flag -f o --fast del comando produce che consentirà ad eggs di utilizzare come algoritmo di compressione lz4 invece del default xz permettendovi così di risparmiare non poco tempo durante le fasi di sviluppo della vostra remix. 

Altro flag importante e presente nella quasi totalità dei casi è il flag -v o --verbose che vi mostrerà a video il susseguirsi delle vari comandi.

Andiamo ad illustrare i comandi in rigoroso ordine alfabetico, per comodità dello scrivente. Tenete a mente che i comandi che utilizzerete normalmente sono kill e produce.

### eggs adjust

Adatta il video alle capacità del monitor o alla grandezza della finestra in caso di macchina virtuale. Lo trovo molto comodo per ridimensionare le macchine virtuali con interfacce grafiche diverse da cinnamon gnome3 e kde per la quale non è necessario. In pratica eggs richiama xrandr per adattare lo schermo alla risoluzione corrente.

### sudo eggs calamares

Installa e configura l'installatore grafico universale calamares. Può essere utilizzato anche in caso di una iso realizzata senza calamares e che, in sede di installazione si voglia installare con esso.

### eggs help

Come dice il comando stesso genera la lista dei comandi disponibili. A sua volta ogni comando con il flag -h o --help emette usa sua descrizione.

### eggs howto

Mostra a video dei brevissimi suggerimenti. Al momento boot da grub rescue e come configurare eggs.

#### eggs howto:grub

Come avviare da grub rescue.

#### eggs howto:configure

Come configurare eggs.

### eggs info

Mostra a video la configurazione di eggs e del sistema. E' l'unico comando che può essere usato senza sudo.

### sudo eggs install

Lancia l'installaler cli di eggs. 

In alternativa con l'opzione -g o --gui lancia invece calamares.

Attenzione, l'installatore cli è più veloce di calamares, però è MOLTO rudimentale e non raccomandato per i non esperti. Cancellerà compleamente il disco rigido di destinazione! Utilizzatelo solo su macchine virtuali o computer puliti o da pulire.

### sudo eggs kill

Cancella le immagini realizzate e la directory di lavoro di eggs \(il nido\). Esegue rm /home/eggs -rf per cancellare tutte le iso create. Presenta anche un utile flag -u che, prima di procedere alla rimozione tenta smonta i filesystem eventualmente presenti in essa.

### sudo eggs prerequisites

Installa i pacchetti deb necessari al funzionamento di eggs. In particolare, vengono installati:

`isolinux, live-boot, live-boot-initramfs-tools, live-config-systemd, squashfs-tools, xorriso, xterm, whois`

e, nel caso si sia scelto di installare calamares

`calamares, qml-module-qtquick2, qml-module-qtquick-controls`

Oltre a questo vengono creati i file di configurazione.

### sudo eggs produce

E' questo il comando che più utilizzerete, di fatto sostanzialmente l'unico insieme a kill che serve invece a sbarazzarsi delle immagini iso create.

Usato senza parametri produce la iso con compressione di tipo xz. Controlla pure se sono o non sono installati i prerequisiti e creati i file di configurazione e, di fatto, produce la iso.

Presenta alcuni flag utilizzabili:

`-b, --basename=basename basename egg`

 `-c, --compress max compression` 

`-f, --fast compression fast` 

`-h, --info show CLI help` 

`-v, --verbose verbose`

Di gran lunga la modalità d'uso che preferisco, personalmente è

```
sudo eggs produce -fv
```

che mi consente si avere una veloce rimasterizzazione ed osservare a video i vari comandi lanciati.

### sudo eggs skel

Con questo comando si ricrea la directory /etc/skel della nostra remix. E' utile per dare una veste coerente e personalizzata all'utente live ed ai futuri utenti che creeremo una volta che il nostro sistema sarà installato. Essenzialmente copia le configurazioni dell'utente primario o di quello passato con il flag -u nella cartella /etc/skel che verrà quindi utilizzata per generare lo scheletro della home degli utenti creati.

Considerando che esistono diversi desktop manager, gnome2, gnome3, cinnamon, mate, kde, lxqt, lxde, etc e che viene fatta una operazione di pulizia dei possibili dati sensibili, è un comando sempre in evoluzione. Attualmente è abbastanza affidabile per cinnamon e, per le prove che ho fatto anche con gli altri Desktop Manager.

### sudo eggs sterilize

E' il comando inverso di prerequisites, sostanzialmente rimuove i pacchetti sopra elencati rendendo il nostro sistema non più in grado di riprodursi.

### sudo eggs update

Aggiorna il pacchetto eggs alla versione corrente. Attenzione, eggs update funziona solo con la versione pacchettizata npm, per la versione rilasciata come pacchetto deb avremmo bisogno di un repository al momento non disponibile.

---
# Creiamo una nostra remix
La creazione di una iso nostra remix è un processo che richiede pazienza e passione ma può darci grandi soddisfazioni ed in molti casi, in ultima analisi, farci risparmiare tempo e fatica.

## Prerequisiti

Installiamo la nostra distribuzione preferita Debian Buster o derivata ed andiamo ad installare eggs con uno dei metodi descritti in precedenza. 

Installiamo eggs ed assicuriamoci di caricare i prerequisiti e creare i file di configurazione dando il comando

```
sudo eggs prerequisites
```

Oltre all'installazione dei vari pacchetti Debian necessari, verrà creato il file di configurazione con le impostazioni di default.  Trovate il file di configurazione in /etc/penguins-eggs.conf e potete eventualmente editarlo per modificare le impostazioni. Trovate la documentazione delle opzioni utilizzate direttamente nei commenti del file stesso.

A questo punto eggs è pronto a funzionare e creare l'immagine iso del nostro sistema. 

### Aggiunta dell'installer grafico Calamares

Nel caso si desideri utilizzare calamares come installer grafico, conviene installarlo adesso. 

Basterà procedere con il comando:

```
sudo eggs calamares
```

In alternativa, se non volte calamares,   editate il file di installazione `/etc/penguins-eggs.conf` ed impostare `force_installer=No` altrimenti eggs lo installerà per suo conto.

Successivamente questa immagine dovrà essere posta su una chiavetta o un disco DVD e potrà essere reinstallarla o con l'installer grafico calamares oppure - in maniera più spartana - con il proprio installer cli. Per l'installer grafico calamares basterà lasciare il file di configurazione così come è, mentre se si decide di non usare calamares occore editare il file di configurazione  /etc/penguins-eggs.com e porre force-installer=no-

Consiglio, inoltre di installare bleachbit perchè ci consentirà di pulire facilmente le nostre remix senza masterizzare dati inutili. Potete falrlo anche da terminale con il comando:

```
sudo apt install bleachbit
```

### Ripuliamo il nostro sistema

Per prima cosa - per questo abbiamo installato bleachbit - vi suggerisco di pulire il vostro sistema. 

Normalmente faccio pulire tutto a bleachbit tranne le localizzazione - altrimenti non funzionano le lingue estere - libera spazio su disco e Memoria. 

![bleachbit-selezione](/images/bleachbit-selezione.png)

Si risparmiano almeno 200 MB che non sono pochi e sarebbero solamente zavorra.

### Produzione della iso

Una volta installato eggs ed i suoi prerequisiti, siamo pronti al grande salto.

```
sudo eggs produce
```

Con questo comando si avvia la costruzione dell'_uovo di pinguino_ che consiste sostanzialmente in tre fasi:

* creazione di una immagine del fs montata con overlayfs - che è istantanea e senza alcuna copia dei dati - per permettere le modifiche per la realizzazione del filesystem per l'immagine;
* compressione dell'intero filesystem in /home/eggs/work/iso/live/filesystem.squashfs;
* generazione dell'immagine iso dalla struttura precedente in /home/eggs/basename-X64\_AAAA-MM-GG-HHMM.iso

Il processo ha una certa pesantezza - inutile nasconderlo - non ve la prendete ne' con la copia del filesystem che non si effettua proprio e neppure con l'interfaccia grafica - visto che non ne facciamo uso. 

La pesantezza è data dal fatto che dobbiamo comprimere l'intero filesystem. 

Durante le prove però o comunque quando lo riteniate opportuno, vi consiglio di usare produce con l'opzione -f  o --fast. Facendo così si utilizzerà l'algoitmo di compressione lz4 invece di del più "pesante" xz e si dimezzerà il tempo di esecuzione. Per la versione finale, una volta controllato che sia tutto a posto potremo invece utilizzare la compressione di default per ottenere una iso più snella, oppure l'opzione -c  --compress che comprime ancora un po' di più, al prezzo di una ulteriore lentezza.

Come era inizialmente riportato anche nel codice, il suggerimento è prendersi un caffè nel frattempo e cercare di riservare abbastanza potenza di elaborazione alla macchina. Nel mio caso - utilizzo una macchina virtuale con 4 core e 4 GB di memoria - per un filesystem di 7/8 GB occorrono circa _dieci minuti_ con la compressione xz, mentre utilizzando la compressione lz4 si riduce moltissimo l'attesa solo un _minuto e mezzo_.  Per il caffè non facciamo più in tempo, una sigaretta fa male e l'immagine ottenuta passa a _3,0 GB_ a fronte dei _2.00_ GB della compressione xz \(Vedi **nota**\).

Una sola raccomandazione. Normalmente si da questo comando sulla macchina dove si lavora e magari si è già prodotta una versione precedente. Raccomando di cancellare le immagini precedenti con il comando `sudo eggs kill` che rimuove l'intero albero di directory sotto /home/eggs\).

**Nota**: _Non tutto il male vien per nuocere però. Se consideriamo che attualmente i DVD  si usano relativamente poco e le chiavette stanno diventando sempre più veloci, vi sono  casi la nostra remix potrebbe essere risultare più ottimizzata con un filesystem più grande ma meno compresso! Difatti, tenuto conto che durante l'uso - nascosto ai nostri occhi - ci sarà un continuo processo di lettura e decompressione del filesystem,  la decompressioone xz risulta comunque più lenta di quella lz4._ 

_Tenendo pure presente che non esiste più il limite delle dimensioni delle immagini iso a 4 GB, la soluzione di utilizzare sempre lz4 potrebbe rivelarsi doppiamente vantaggiosa, soprattutto in caso  di utilizzo con le macchine virtuali che  - quasi sempre - leggono direttamente  il file immagine su disco fisso invece di un reale DVD.  Inoltre, tutti i principali programmi per la creazione di chiavette avviabili  leggono i file iso._ 

_Perchè produrre , quindi, formati diversi ?_

_Eventualmente, si potrebbe creare la iso con lz4 e, successivamente, comprimere  la stessa con xz per alleggerire gli upload  ed i download su internet_.

---
# Scarica le immagini ISO
Immagini delle remix realizzate dall'autore.

## Premessa

Sono qui riportate una serie di remix realizzate da me stesso e create con Penguin's eggs. Non è mio scopo quello di realizzare una nuova remix, preferisco piuttosto costruire e mantenere il pacchetto. Però anche in questo vale il detto: nasce prima l'uovo o la gallina? Ed alcune remix le faccio e continuo a proporle.

Si tratta essenzialmente di versioni di Debian Buster, anche se rilascerò una versione minima di ubuntu con gli strumenti per lo sviluppo Typescript. 

Attualmente sono on line delle derivate di Debian Buster, less è una versione leggera - solo il necessario per lo sviluppo, che normalmente uso. Debu, più comoda e rifinita, sempre con gli strumenti di sviluppo e tutto il necessario per office, disegno, sviluppo etc. Debu ha il solo torto - rispetto a less - che essendo relativamente grande, 1,9 GB a fronte dei 900KB di less impiega più tempo per la "riproduzione".

E' presente anche una versione ancora più leggera, denominata naked senza nessuna interfaccia grafica ma utile come base.

In sostanza consiglio debu o less per chi voglia partecipare allo sviluppo, naked per chi vuole partire da una base per poi procedere alla creazione propria remix. Infine, ma non sono esperto della materia, ho realizzato una versione denominata blockchain per lo studio della stessa. Potrebbe essere insteressante per gli esperti del settore, non tanto per l'uso personale ma per relizzare demo e chiavette eventualmente installabili per divulgazione.

### Dove posso scaricare le iso

Tutte le versioni sono scaricabili da **sourgeforge.net** cercando il progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/).

#### User e password

Tutte le distribuzioni qui riportate sono impostate con user live ed user di root.

* live/evolution
* root/evolution

### Video

Questo è un vecchio video, vorrei farne altri, magari prossimamente.

![debu](/images/debu.png)





