title: Guida utente
layout: page
date: 2020-08-29 20:00:00
lang: it_IT
---
# Indice
* [Introduzione](#introduzione)
* [Installazione](#installazione)
* [Prerequisiti e configurazione](#prerequisiti-e-configurazione)
* [I comandi](#i-comandi)
* [Creiamo una nostra remix](#creiamo-una-nostra-remix)
* [Scarica le immagini ISO](#scarica-le-immagini-iso)

# Aggiornamento
Questo manuale utente di penguin's eggs, è aggiornato al 9 ottobre 2020, eggs-7.6.57-1.deb. 

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
sudo dpkg -i eggs-7.6.39-1.deb
```

La versione .deb  comprende al suo interno nodejs per cui non è necessario disporre di questo pacchetto. 

### Pacchetto npm \(nodejs\)

Essendo eggs un software sviluppato con nodejs, la versione originale può essere quella preferibile, è sempre la più aggiornata. Inoltre, una volta installata, è aggiornabile alle versioni successive con il comando `sudo eggs update`.

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

```
eggs
```

Avviamo eggs senza alcun comando ed otterremo la lista dei comandi disponibili:

![eggs-senza-parametri](/images/eggs-senza-parametri.png)

### Realizzazione di immagini iso compatibili UEFI

Pur se nelle versioni precedenti, l'intallazione dei prerequisiti era necessaria prima di poter produrre una iso, attualmente è possibile anche avviare direttamente con:
```
sudo eggs produce 
```

eggs, rilevata l'assenza dei prerequisiti necessari procederà all'installazione. Durante questa fase, verrà inoltre richiesto, se stiamo in una ambiente grafico, se si vuole installare calamare. Consiglio fortemente di rispondere "yes" e verranno caricati i prerequisiti, eventualmente i pacchetti per EFI, calamares ed i collegamenti necessari. 

### sudo eggs prerequisites

Per funzionare eggs ha bisogno di alcuni tool installati, i prerequisiti. Per scaricare i pacchetti Debian necessari al suo funzionamento, basterà avviare il comando

```
sudo eggs prerequisites
```
![eggs-prerequisites](/images/eggs-prerequisites.png)

Selezionando Yes verrà accettata l'installazione dei pacchetti necessari al funzionamento di eggs ed alla produzione delle immagini iso. Essenzialmente possiamo divide in quattro i pacchetti installti:

* pacchetti per avvio su macchine UEFI
* pacchetti per la creazione dell'immagine iso
* pacchetti per l'installer grafico calamares
- pacchetti per la localizzazione

Tutti i pacchetti per il funzionamento di eggs e la produzione di iso sono installati dal comando:

```
sudo eggs prerequisites
```

che installerà, quindi, i seguenti pacchetti:

* grub-efi-amd64
* isolinux, syslinux, rsync, squashfs-tools, xorriso, xterm, whois, live-boot, live-boot-initramfs-tools
* calamares, qml-module-qtquick2, qml-module-qtquick-controls
* live-task-localisation, task-italian, task-english, task-spanish, task-brazilian-portuguese, task-french, task-german

I file per la localizzazione saranno installati solamente per Debian/Devuan, inoltre, gli stessi verranno installati con l'opzione 
`–no-install-recommends`, altrimenti verrebbero installate tutte le lingue.

### Directory di configurazione penguins-eggs.d

Normalmente non è necessario intervenire su /etc/penguins-eggs.d/eggs.conf.  eggs si autoconfigura adattandosi alle bisogna della distro presente. Ad ogni modo per la documentazione si rimanda ai commenti presenti sullo stesso file ed al README.md presente nella directory.

Mi preme solo segnalare che editando /etc/penguins-eggs.d/eggs.conf si può modificare sia nome dell'utente della live, che la sua password e quella di amministrazione.

Al momento non è possibile modificare le variabili locale e locales, aggiungendo o rimuovendo delle nuove lingue da installare nella versione live. Sarà comunque sempre possibile ottenere il sistema installato in ogni lingua disponibile.

Se avete scelto di non toccare per il momento /etc/penguins-eggs.d/eggs.conf, si ricorda che per default eggs è configurato con user **live** e password **evolution**, la stessa password è impostata per il login di root.

Se invece avete modificato, rovinato o cancellato il file di configurazione, potete sempre ripristinarlo con il comando:

```
sudo eggs prerequisites -c
```

### eggs è pronto!

Bene, adesso siamo finalmente pronti ad utilizzare eggs per la riproduzione del nostro pinguino.

---

# I comandi

### Comandi ed opzioni 

Eggs necessita dei diritti di root, quindi - tranne per eggs info - DEVE essere chiamato preceduto da `sudo`

* calamares
* export
* help
* info
* install
* kill
* prerequisites
* produce
* sterilize
* tools
* update

Non vi fate spaventare da questi pochi comandi, quelli che utilizzerete sono essenzialmente due: produce per creare la iso e kill per cancellarla.

Ogni comando può avere alcuni flag, di questi il più importante, è il flag -f o --fast del comando produce che consentirà ad eggs di utilizzare come algoritmo di compressione lz4 invece del default xz permettendovi così di risparmiare non poco tempo durante le fasi di sviluppo della vostra remix. 

Un altro flag certamente da conoscere e presente nella quasi totalità dei casi è il flag -v o --verbose che vi mostrerà a video il susseguirsi delle vari comandi. Per i restanti flag basterà digitare eggs comando -h per avere la lista e la descrizione.

Andiamo ad illustrare i comandi in rigoroso ordine alfabetico, per comodità dello scrivente. Tenete a mente che i comandi che utilizzerete normalmente saranno soprattutto produce e kill.

### sudo eggs calamares
Installa e configura l'installatore grafico calamares. Può essere utilizzato anche per configurare una iso che - prodotta senza calamares - la si voglia installare con esso. Basterà dare il comando: sudo eggs calamares -i e si avrà sia l'installazione del pacchetto che la configurazione.

```
command: calamares

USAGE
  $ eggs calamares

OPTIONS
  -h, --help     show CLI help
  -i, --install  install calamares and it's dependencies
  -v, --verbose

  --final        final: remove eggs prerequisites, calamares and all it's 
                 dependencies

  --theme=theme  theme/branding for eggs and calamares

EXAMPLES
  ~$ sudo eggs calamares 
  install calamares and create configuration
```

### eggs export
```
export package eggs-v7-6-x-1.deb in the destination host

USAGE
  $ eggs export:COMMAND

COMMANDS
  export:deb   export package eggs-v7-6-x-1.deb in the destination host
  export:docs  export docType documentation of the sources in the destination host
  export:iso   export iso in the destination host
```

esporta rispettivamente i pacchetti deb, la documentazione o l'immagine iso nell'host riportato in /etc/penguins-eggs.d/tools.conf

Potete modificare a piacere sia l'host di esportazione che il path associato, notate che questo comando è conveniente soprattutto per sviluppatori.

### eggs help

Come dice il comando stesso genera la lista dei comandi disponibili. A sua volta ogni comando con il flag -h o --help emette usa sua descrizione.

### eggs info

Mostra a video la configurazione di eggs e del sistema. E' l'unico comando che può essere usato senza sudo.

![eggs-info](/images/eggs-info.png)

### sudo eggs install

Lancia l'installaler cli di eggs. 

In alternativa con l'opzione -g o --gui lancia invece calamares.

Attenzione, l'installatore cli è più veloce di calamares, però è MOLTO rudimentale e non raccomandato per i non esperti. Cancellerà compleamente il disco rigido di destinazione! Utilizzatelo solo su macchine virtuali o computer puliti o da pulire.

### sudo eggs kill

Cancella le immagini realizzate e la directory di lavoro di eggs \(il nido\). Esegue rm /home/eggs -rf per cancellare tutte le iso create. 
In caso per interruzione del comando produce, sarà impossibile cancellare le directory montate. La strada più breve è un riavvio ed il successivo lancio del comando.

```
command: kill

kill the eggs/free the nest

USAGE
  $ eggs kill

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose

EXAMPLE
  $ eggs kill
  kill the eggs/free the nest
```

### sudo eggs prerequisites

Installa i pacchetti deb necessari al funzionamento di eggs. 

Possiamo suddividere i paccheti necessari in tre parti:
* pacchetti necessari al funzionamento di eggs:   isolinux, syslinux, rsync, squashfs-tools, xorriso, xterm, whois, live-boot, live-boot-initramfs-tools;
* pacchetti necessari al funzionamento dell'installer calamares: calamares, qml-module-qtquick2, qml-module-qtquick-controls
* pacchetti per le localizzazioni (solo debian e devuan). Attualmente abbiamo due variabili nel file eggs.cfg che definiscono la lingua; locale e locales. Queste variabili, con il tempo di "maturazione" necessario, diverranno modificabili dell'utente. Al momento si consiglia di non toccarle, e comprendono i locales per italiano, inglese, spagnolo, portoghese, francese e tedesco. Verranno installati inoltre i seguenti pacchetti: task-italian, task-english, task-spanish, task-brazilian-portuguese, task-french, task-german e task-live-localisation.

Oltre a questo vengono creati la directory /etc/penguins-eggs.d, tutti i file di configurazione ed i collegamenti necessari.

```
command: prerequisites

install packages prerequisites to run eggs

USAGE
  $ eggs prerequisites

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose

EXAMPLE
  ~$ eggs prerequisites
  install prerequisites and create configuration files
```

### sudo eggs produce

E' questo il comando che più utilizzerete, di fatto sostanzialmente l'unico usato quotidianamente, insieme a kill che serve invece a sbarazzarsi delle immagini iso create.

Usato senza parametri produce la iso con compressione di tipo xz. Al suo avvio, esegue un controllo della installazione dei prerequisiti, ,a non di calamares, e produce la iso.

Presenta alcuni flag utilizzabili:

```
command: produce

livecd creation. The system produce an egg

USAGE
  $ eggs produce

OPTIONS
  -b, --basename=basename  basename egg
  -c, --compress           max compression
  -f, --fast               fast compression
  -h, --help               show CLI help
  -s, --script             script mode. Generate scripts to manage iso build
  -v, --verbose            verbose
  --adapt                  adapt video resolution in VM

  --final                  final: remove eggs prerequisites, calamares and all 
                           it's dependencies

  --ichoice                allows the user to choose the installation type 
                           cli/gui

  --pve                    administration of virtual machines (Proxmox-VE)

  --rsupport               remote support via dwagent

  --theme=theme            theme/branding for eggs and calamares

ALIASES
  $ eggs spawn
  $ eggs lay

EXAMPLES
  $ sudo eggs produce 
  produce an ISO called [hostname]-[arch]-YYYY-MM-DD_HHMM.iso, compressed xz 
  (standard compression).
  If hostname=ugo and arch=i386 ugo-x86-2020-08-25_1215.iso

  $ sudo eggs produce -v
  the same as the previuos, but with more explicative output

  $ sudo eggs produce -vf
  the same as the previuos, compression lz4 (fast compression, but about 30%
  less compressed compared xz standard)

  $ sudo eggs produce -vc
  the same as the previuos, compression xz -Xbcj x86 (max compression, about 10%
  more compressed compared xz standard)

  $ sudo eggs produce -vf --basename leo --theme debian --adapt 
  produce an ISO called leo-i386-2020-08-25_1215.iso compression lz4,
  using Debian theme and link to adapt

  $ sudo eggs produce -v --basename leo --theme debian --adapt 
  produce an ISO called leo-i386-2020-08-25_1215.iso compression xz,
  using Debian theme and link to adapt

  $ sudo eggs produce -v --basename leo --rsupport 
  produce an ISO called leo-i386-2020-08-25_1215.iso compression xz, using eggs
  theme and link to dwagent

  $ sudo eggs produce -vs --basename leo --rsupport 
  produce scripts to build an ISO as the previus example. Scripts can be found
  in /home/eggs/ovarium and you can customize all you need

```

Di gran lunga la modalità d'uso che preferisco, personalmente è

```
sudo eggs produce -fv --adapt
```

che mi consente si avere una veloce rimasterizzazione, osservare a video i vari comandi lanciati ed avere sul desktop il link per ridimensionae la finesta video.

Tra i flag disponibili c'è theme che imposta un tema per eggs e calamares. Potete creare un tema personalizzato semplicemente copiandone uso esistente e cambiandone nome e contenuto. I themi di eggs sono in ./addons/${vendor}/theme, a breve aggiungerò anche la possibilità di variare il tema per isolinux e grub per il boot della live.

Un altro flag, introdotto è --final che predispone calamares alla rimozione dei programmi non necessari all'utente finale: esegue la stessa azione del comando eggs sterilize, ma attraverso calamares durante l'installazione del sistema.

### eggs tools

```
clean system log, apt, etc

USAGE
  $ eggs tools:COMMAND

COMMANDS
  tools:clean     clean system log, apt, etc
  tools:initrd    Test initrd
  tools:locales   install/clean locales
  tools:sanitize  sanitize
  tools:skel      update skel from home configuration
  tools:yolk      configure eggs to install without internet
```
tools è un raccoglitore di comandi contenente alcuni strumenti utili durante la lavorazione. Alcuni di questi, se non la maggior parte vendono direttamente chiamati da produce durante la creazione della ISO, in particolare: clean, locales, yolk.

* sudo tools:clean 
```
clean system log, apt, etc

USAGE
  $ eggs tools:clean

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose
```
Esegue la pulizia dei file di log, della cache apt, etc. Si salva spazio nella ISO che si viene a creare e si riducono i tempi di attesa per la creazione;

* tools:initrd 

```
Test initrd

USAGE
  $ eggs tools:initrd

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
  --check=check  check if necessary to clean initrd.img
  --clean=clean  clean the initrd.img
```
Al momento sperimentale) Rimuove cryptosetup e resume da initrd.img destinata al liveCd;

* toos:locales 

```
install/clean locales

USAGE
  $ eggs tools:locales

OPTIONS
  -h, --help       show CLI help
  -r, --reinstall  reinstall locales
  -v, --verbose    verbose

```

Al momento sperimentale) Configura solo su Debian/Devuan una serie di lingue specificate in /etc/penguins-eggs-d/eggs.conf che si vogliono supportare;

* tools:sanitize 

rimuove da un progetto esistente e file generati da versioni precedenti di eggs che possono nascondere bug o crearli (consigliato al cambio di versione);

* tools:skel
Con questo comando si ricrea la directory /etc/skel della nostra remix. E' utile per dare una veste coerente e personalizzata all'utente live ed ai futuri utenti che creeremo una volta che il nostro sistema sarà installato. Essenzialmente copia le configurazioni dell'utente primario o di quello passato con il flag -u nella cartella /etc/skel che verrà quindi utilizzata per generare lo scheletro della home degli utenti creati.

Considerando che esistono diversi desktop manager, gnome2, gnome3, cinnamon, mate, kde, lxqt, lxde, etc e che viene fatta una operazione di pulizia dei possibili dati sensibili, è un comando sempre in evoluzione. Attualmente è abbastanza affidabile per cinnamon e, per le prove che ho fatto anche con gli altri Desktop Manager.

```
update skel from home configuration

USAGE
  $ eggs skel

OPTIONS
  -h, --help       show CLI help
  -u, --user=user  user to be used
  -v, --verbose

EXAMPLE
  $ eggs skel --user mauro
  desktop configuration of user mauro will get used as default
```

* sudo tools:yolk

```
configure eggs to install without internet

USAGE
  $ eggs tools:yolk

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ eggs yolk -v

```
Il comando yolk crea una piccola repository locale in /usr/local/yolk con i pacchetti strettamente necessari ad assicurare l'installazione del sistema anche in assenza di connessione internet. Viene SEMPRE richiamata da produce, per cui il suo uso non è necessario se non per i più curiosi.



### sudo eggs sterilize

E' il comando inverso di prerequisites, sostanzialmente rimuove i pacchetti sopra elencati rendendo il nostro sistema non più in grado di riprodursi.

```
command: sterilize

remove all packages installed as prerequisites and calamares

USAGE
  $ eggs sterilize

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose
```

### sudo eggs update

Aggiornamento di eggs. Presenta un diverso funzionamento a seconda se l'installazione di eggs sia avvenuta con il pacchetto npm di nodejs oppure con il pacchetto debian. Nel primo caso, aggiorna direttamente eggs alla versione corrente, altrimenti suggerisce i passi per l'aggiornamento tramite apt (se la repo per eggs è inclusa) o scaricando il pacchetto ed installandolo via dpkg.



# Creiamo una nostra remix
La creazione di una iso nostra remix è un processo che richiede pazienza e passione ma può darci grandi soddisfazioni ed in molti casi, in ultima analisi, farci risparmiare tempo e fatica.

## Prerequisiti

Installiamo la nostra distribuzione preferita Debian Buster o derivata ed andiamo ad installare eggs con uno dei metodi descritti in precedenza. 

### Installer grafico 

Nel caso ci si trovi su un sistema che disponga di interfaccia grafica e si desideri utilizzare calamares come installer grafico, conviene installarlo adesso. 

Basterà procedere con il comando:

```
sudo eggs calamares
```

Successivamente quando questa immagine sarà avviata, potrà essere reinstallarla con l'installer grafico calamares. Se non installate calamares, sarà possibile comunque utilizzare l'installer cli di eggs a riga di comando.


## Prerequisiti

Assicuriamoci di caricare i prerequisiti e creare i file di configurazione dando il comando

```
sudo eggs prerequisites
```

Oltre all'installazione dei vari pacchetti Debian necessari, verrà creata la directory di configurazione /etc/penguins-eggs.d e configurato al suo interno il file eggs.conf con le impostazioni di default.  Trovate il file di configurazione in /etc/penguins-eggs.d/eggs.conf e potete eventualmente editarlo per modificare le impostazioni. Trovate la documentazione delle opzioni utilizzate direttamente nei commenti del file stesso.

A questo punto eggs è pronto a funzionare e creare l'immagine iso del nostro sistema. 

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
sudo eggs produce -v
```

Con questo comando si avvia la costruzione dell'_uovo di pinguino_ che consiste sostanzialmente in tre fasi:

* creazione di una immagine del fs montata con overlayfs - che è istantanea e senza alcuna copia dei dati - per permettere le modifiche per la realizzazione del filesystem per l'immagine;
* compressione dell'intero filesystem in /home/eggs/ovarium/iso/live/filesystem.squashfs;
* generazione dell'immagine iso dalla struttura precedente in /home/eggs/basename-X64\_AAAA-MM-GG-HHMM.iso

Il processo ha una certa pesantezza - inutile nasconderlo - non ve la prendete ne' con la copia del filesystem che non si effettua proprio e neppure con l'interfaccia grafica - visto che non se ne fa uso. 

La pesantezza è data dal fatto che dobbiamo comprimere l'intero filesystem. 

Durante le prove però o comunque quando lo riteniate opportuno, vi consiglio di usare produce con l'opzione -f  o --fast. Facendo così si utilizzerà l'algoritmo di compressione `lz4` invece di del più "pesante" `xz` e si dimezzerà il tempo di esecuzione. Per la versione finale, una volta controllato che sia tutto a posto potremo invece utilizzare la compressione di default per ottenere una iso più snella, oppure l'opzione -c  --compress che comprime ancora un po' di più, al prezzo di una ulteriore lentezza.

Come era inizialmente riportato anche nel codice, il suggerimento è prendersi un caffè nel frattempo e cercare di riservare abbastanza potenza di elaborazione alla macchina. Nel mio caso - utilizzo una macchina virtuale con 4 core e 4 GB di memoria - per un filesystem di 7/8 GB occorrono circa _dieci minuti_ con la compressione xz, mentre utilizzando la compressione lz4 si riduce moltissimo l'attesa solo un _minuto e mezzo_.  Per il caffè non facciamo più in tempo, una sigaretta fa male e l'immagine ottenuta passa a _3,0 GB_ a fronte dei _2.00_ GB della compressione xz \(Vedi **nota**\).

Una sola raccomandazione. Normalmente si da questo comando sulla macchina dove si lavora e magari si è già prodotta una versione precedente. Raccomando di cancellare le immagini precedenti con il comando `sudo eggs kill` che rimuove l'intero albero di directory sotto /home/eggs\).

**Nota**: _Non tutto il male vien per nuocere però. Se consideriamo che attualmente i DVD  si usano relativamente poco e le chiavette stanno diventando sempre più veloci, vi sono  casi la nostra remix potrebbe essere risultare più ottimizzata con un filesystem più grande ma meno compresso! Difatti, tenuto conto che durante l'uso - nascosto ai nostri occhi - ci sarà un continuo processo di lettura e decompressione del filesystem,  la decompressioone xz risulta comunque più lenta di quella lz4._ 

_Tenendo pure presente che non esiste più il limite delle dimensioni delle immagini iso a 4 GB, la soluzione di utilizzare sempre lz4 potrebbe rivelarsi doppiamente vantaggiosa, soprattutto in caso  di utilizzo con le macchine virtuali che  - quasi sempre - leggono direttamente  il file immagine su disco fisso invece di un reale DVD.  Inoltre, tutti i principali programmi per la creazione di chiavette avviabili  leggono i file iso._ 

_Perchè produrre , quindi, formati diversi ?_

_Eventualmente, si potrebbe creare la iso con lz4 e, successivamente, comprimere  la stessa con xz per alleggerire gli upload  ed i download su internet_.

### eggs adapt

Adatta il video alle capacità del monitor o alla grandezza della finestra in caso di macchina virtuale. Lo trovo molto comodo per ridimensionare le macchine virtuali con interfacce grafiche diverse da cinnamon, gnome3, e kde per la quali non è necessario. In pratica eggs richiama xrandr per adattare lo schermo alla risoluzione corrente.

---
# Scarica le immagini ISO
Immagini delle remix realizzate dall'autore.

## Premessa

Sono qui riportate una serie di remix realizzate da me stesso e create con Penguin's eggs. Non è mio scopo quello di realizzare una nuova remix, preferisco piuttosto costruire e mantenere il pacchetto. Però anche in questo vale il detto: nasce prima l'uovo o la gallina? Ed alcune remix le faccio e continuo a proporle.

Si tratta essenzialmente di versioni di Debian Buster, Devuan beowulf, Linux Mint, etc. 

Attualmente sono on line delle derivate di Debian Buster: 

* less è una versione molto leggera, lxde-core --no-install-reccomends e solo il necessario per lo sviluppo di eggs, che normalmente uso. 
* debu, più comoda e rifinita, cinnamon come desktop, sempre con gli strumenti di sviluppo e tutto il necessario per office, disegno, sviluppo etc. Questa distro più completa, ha il solo torto - rispetto a less - che essendo relativamente grande, 1,9 GB a fronte dei 900KB di less impiega più tempo per la "riproduzione".

E' presente anche una versione ancora più leggera di Debian buster, denominata naked senza interfaccia grafica e, proprio per questo, adatta come base per farci una propria remix.

In sostanza consiglio debu o less per chi voglia partecipare allo sviluppo, naked per chi vuole partire da una base per poi procedere alla creazione propria remix. Interessante anche incubator che è sostanzialmente una versione di buster con l'aggiunta dell'ambiente di virtualizzazione proxmox-ve, basato su kvm, virt-viewer e strumenti necessari.

Una nota a parte per alcune remix i386, sempre realizzate con eggs. Potrebbe essere interessante patricia-i386, un rifacimento di linux mint 19.3 tricia xfce, sufficientemente snella ed allo stesso tempo elegante, per essere utilizzata su computer datati. Ancora più leggera è bionic-i386 creata a partire da lubuntu-18.04 bionic ma, ovviamente, anche più scarna.

### Dove posso scaricare le iso

Tutte le versioni sono scaricabili da **sourgeforge.net** cercando il progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/).

#### User e password

Tutte le distribuzioni qui riportate sono impostate con user live ed user di root.

* live/evolution
* root/evolution

# Supporto e segnalazioni

eggs è un progetto che, al momento, consente di rimasterizzare diverse versioni di linux. 

- debian buster/bullseyes/stretch
- devuan beowulf
- ubuntu bionic/focal

è evidente, che lo sviluppatore non può materialmente testare ogni release su tutte le versioni considerate, aggiungendo perltro la necessità di test sia su macchine bios standard che uefi.

E' perciò importante che la segnalazione dei problemi da parte degli utenti.

Potete segnalare le varie problematiche sulla pagina [issue](https://github.com/pieroproietti/penguins-eggs/issues) del progetto penguins-eggs su github.com.

Potete anche contattarmi via chat, su https://gitter.im/penguins-eggs.

# Comunità
Una comunità di utenti è importante per la crescita di un progetto, creare qualcosa di versatile e pratico in fondo serve relativamente a poco se la gente non conosce il prodotto e, d'altra parte, avere un buon numero di utenti, fornisce feedback e motivazione agli sviluppatori, migliorando quindi il progetto stesso.

Potete facilitare la diffusione di eggs e contribuire alla sua crescita in diversi modi:

* iscriversi al gruppo facebook [penguin's eggs](https://www.facebook.com/groups/128861437762355)
* contrassegnare con una stella il progetto su [github.com](https://github.com/pieroproietti/penguins-eggs);
* valutare questo progetto su [sourceforge](https://sourceforge.net/projects/penguins-eggs/) e/o creare una review sulla pagina stessa pagina.

# Ringraziamenti
Se siete giunti fino a questo passo, senza l'ausilio del tasto di scorrimento rapido, avete utilizzato parte del Vostro tempo - risorsa preziosa - per seguirmi su questo percorso e, quindi, è mio dovere e desiderio ringraziarvi per il vostro interesse. 

Grazie a tutti e... happy hacking!

Piero Proietti 



