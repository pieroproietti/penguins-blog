---
title: Guida utente
layout: page
date: 2020-06-20 07:38:32
lang: it_IT
---
# Indice
* [Introduzione](#introduzione)
* [Installazione](#installazione)
* [Prerequisiti e configurazione](#prerequisiti-e-configurazione)
* [I comando](#i-comandi)
* [Creiamo una nostra remix](#creiamo-una-nostra-remix)
* [Scarica le immagini ISO](#scarica-le-immagini-iso)


# Introduzione

Un sistema riproduttivo per pinguini!

Penguin's eggs nasce con l'idea della "riproduzione" e "selezione delle popolazioni" applicata ai sistemi operativi. 

Erano i tempi di Remastersys e Systemback, due dei più diffusi programmi per rimasterizzare un sistema operativo - ad un certo punto - sia Remastersys, che aveva sempre sofferto di problemi di manutenzione da parte del suo autore, che Systemback furono in qualche modo dismessi. _Vedi **nota**_

Per la verità per un po' non vi fu problema alcuno, ma quando cominciarono i "primi dolori" per non poter più rimasterizzare le ultime versioni delle mie distro preferite, essenzialmente Debian e derivate, quella che era una idea, cominciò a prendere forma.

Volevo uno strumento nuovo, scritto con un linguaggio moderno e comune a più distribuzioni, provvisto di un proprio sistema di pacchettizzazione. La scelta cadde su nodejs, con javascript, successivamente sono passato a typescript come linguaggio di sviluppo.

Immaginai un processo di produzione dell'uovo, denominato produce, l'operazione di cova - ovvero l'installazione - originalmente denominata hatch. Gli altri comandi vennero da sè con kill preferito ad abort per togliere di mezzo le iso prodotte, update per gli aggiornamenti, prerequisites per installare i pacchetti .deb necessari al processo, calamares per l'installazione e la configurazione dell'installer grafico.

Prima o poi, trattandosi di un uovo, troverò anche il modo di implementare un server PXE che lo distribuisca attraverso la rete locale, al momento oltre all'intenzione c'è il nome e non poteva essere che cuckoo \(cuculo\), dal comportamento del cuculo che fa covare le proprie uova da altri.



**Nota**: _la situazione  di Systemback  in effetti non è più quella degli inizi di eggs,. Ho conosciuto recentemente il buon Franco Conidi  \(Edmond \) che  ne cura tutt'ora gli aggiornamenti._

# Installazione

Cose da fare prima di cominciare la produzione delle "uova".

### Pacchetto Debian

L'installazione da pacchetto Debian è senz'altro la più semplice. Basta scaricare l'ultima versione di eggs dal sito di [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/) ed installarla con il comando:

```
sudo dpkg -i eggs-7.5.81-1.deb
```

La versione .deb  comprende al suo interno nodejs per cui non è necessario disporre di questo pacchetto. 

### Pacchetto npm \(nodejs\)

Essendo eggs un software sviluppato con nodejs, la versione originale e quella preferibile,  e sempre la più aggiornata. Inoltre, una volta installata, questa versione è sempre aggiornabile semplicemente con il comando `sudo eggs update`.

Per poter installare questa versione è necessario quindi installare prima il pacchetto nodejs. La descrizione di quale nodejs utilizzare e le modalità di installazione di nodejs sono riportare nel file README,md compreso nella [repository di eggs](https://github.com/pieroproietti/penguins-eggs).

L'installazione di eggs da pacchetto npm è semplice e sicura, solo questi comandi:

```
sudo npm config set unsafe-perm true
sudo npm install penguins-eggs -g
```

Per aggiornare il pacchetto - una volta installato - alle successive versioni, basterà il comando

```
sudo eggs update
```

### Utilizzo di eggs da codice sorgente

Utilizzare eggs a partire dai sorgenti può essere estremamente utile sia per debug che collaborare allo sviluppo. Una volta scaricato il sorgente con il comando

```
git clone https://github.com/pieroproietti/penguins-eggs
```

entrare, quindi, nella directory penguins-eggs e dare il comando

```
npm install
```

A questo punto, dalla directory penguins-eggs stessa, si potrà utilizzare il sorgente direttamente. Ad esempio:

```
sudo ./eggs produce -fv
```

Per gli sviluppatori od i curiosi, sarà possibile vedere, segnalare o correggere il codice. 


---

# Prerequisiti e configurazione

Una volta installato il pacchetto come nella pagina precedente, disporremo sul nostro sistema di un nuovo comando: 

`eggs`

Avviamo eggs senza alcun comando ed otterremo la lista dei comandi disponibili:

![eggs-senza-parametri](/images/eggs-senza-parametri.png)


La prima cosa che dobbiamo fare a questo punto è permettere ad eggs di scaricare i pacchetti Debian necessari al suo funzionamento. Per far questo basterà avviare il comando

```
sudo eggs prerequisites
```

![eggs-prerequisites](/images/eggs-prerequisites-yes-no.png)

Selezionando Yes verrà accettata l'installazione dei pacchetti necessari al funzionamento di eggs ed alla produzione delle immagini iso. Essenzialmente possiamo divide in tre i pacchetti installti:

* Pacchetti per avvio su macchine UEFI
* Pacchetti per la creazione dell'immagine iso
* Pacchetti per l'installer grafico calamares

Tutti i pacchetti per il funzionamento di eggs e la produzione di iso sono installati dal comando:

```
sudo eggs prerequisites
```

che installerà, quindi, i seguenti pacchetti:

`isolinux, live-boot, live-boot-initramfs-tools, lvm2, squashfs-tools, xorriso, xterm, whois`

### sudo eggs calamares

A questo punto, se ne abbiamo la necessità converrà installare anche l'installer grafico calamares, con il comando 

```
sudo eggs calamares
```

che installerà calamares ed i moduli `qml-module-qtquick2, qml-module-qtquick-controls` necessari per la visualizzazione delle slide durante l'installazione del sistema.

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





