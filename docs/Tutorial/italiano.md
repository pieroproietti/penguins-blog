---
title: Guida utente
authors: pieroproietti
slug: italiano
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions path="docs/Tutorial/italiano"/>

Manuale aggiornato a `eggs v9.4.x`

# Introduzione

![Un sistema riproduttivo per pinguini!](/images/manjaro-uefi-booting.png)

`penguins' eggs` nasce con l'idea della "riproduzione" e "selezione delle popolazioni" applicata ai sistemi operativi. 

Erano i tempi di Remastersys e Systemback, due dei più diffusi programmi per rimasterizzare un sistema operativo - ad un certo punto - sia Remastersys, che aveva sempre sofferto di problemi di manutenzione da parte del suo autore, che Systemback furono in qualche modo dismessi. _Vedi **nota**_

Per la verità per un po' non vi fu problema alcuno, ma quando cominciarono i "primi dolori" per non poter più rimasterizzare le ultime versioni delle mie distro preferite, essenzialmente Debian e derivate, quella che era una idea, cominciò a prendere forma.

Volevo uno strumento nuovo, scritto con un linguaggio moderno e comune a più distribuzioni, provvisto di un proprio sistema di pacchettizzazione. La scelta cadde su nodejs, con javascript, successivamente sono passato a typescript come linguaggio di sviluppo.

Immaginai un processo di produzione dell'uovo, denominato produce, l'operazione di cova - ovvero l'installazione - originalmente denominata `hatch`. Gli altri comandi vennero da sè con `kill` preferito ad `abort` per togliere di mezzo le iso prodotte, `update` per gli aggiornamenti, `prerequisites` per installare i pacchetti .deb necessari al processo, [`calamares`](https://calamares.io/) per l'installazione e la configurazione dell'installer grafico.

Prima o poi, trattandosi di un uovo, troverò anche il modo di implementare un server PXE che lo distribuisca attraverso la rete locale, al momento oltre all'intenzione c'è il nome e non poteva essere che `cuckoo`, dal comportamento del cuculo che fa covare le proprie uova da altri.

# Installazione

Prima di cominciare a produrre le "uova" occorre fornirsi di un sistema riproduttivo. 

Abbiamo diverse possibilità per l'installazione di `penguins-eggs`: 
* pacchetto precompilati
  * formato .deb per Debian/Devuan/Ubuntu
  * formato PKGBUILD per `Arch Linux` e Manjaro
* pacchetti npm: non più utilizzati
* codice sorgente

Per la maggior parte degli utenti l'installazione del pacchetto precompilato è quella più indicata.

## Pacchetti .deb (Debian/Devuan/Ubuntu)

Se non desiderate includere penguins-eggs-ppa fra le repository del vostro sistema, potete semplicemente scaricare l'ultima versione di eggs dal sito di [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/) ed installarla con il comando:

```
sudo dpkg -i eggs-9.4.x.deb
```

Se si tratta della prima installazione, il pacchetto non verrà installato per la mancanza delle dipendenze. Vi basterà dare il comando:

```
sudo apt install -f
```

Naturalmente se sul vostro sistena è presente ```gdebi```, potete tranquillamente effettuare l'installazione in modalità grafica.

Una volta installato il pacchetto, si può utilizzare il comando **eggs tools ppa --add** per aggiungere la repository **penguins-eggs-ppa** ed ottenere tutti gli aggiornmenti di eggs tramite il comando ```apt```. Per fare questo è sufficiente dare il comando:

```
sudo eggs tools ppa --add
```

## Arch 
Per Arch Linux possiamo installare penguins-eggs con yay:
```
yay penguins-eggs
```
oppure, più tradizionalmente:
```
git clone https://aur.archlinux.org/penguins-eggs.git penguins-eggs-aur
cd penguins-eggs-aur
pkgbuild -si
```

### `Calamares on Arch Linux`
E' possibile installare [`calamares`](https://aur.archlinux.org/packages/calamares-git) con yay, 
tuttavia - al momento - c'è un problema sul pacchetto [`ckbcomp`](https://aur.archlinux.org/packages/ckbcomp), 
così per installare `Calamares`, dovete fare questo piccolo workaround:
```
git clone https://github.com/pieroproietti/penguins-eggs-pkgbuilds
cd penguins-eggs-pkgbuilds/aur/cbkcomp
makepkg -si
```
Installato cbkcomp, potete tranquillamente installare calamares utilizzando yay:
```
yay calamares
```

### Manjaro 

Su Manjaro, `penguins-eggs` è presente nella repository community di Manjaro, per cui possiamo sia installare `penguins-eggs` con i comandi:

```
sudo pamac upgrade
sudo pamac install penguins-eggs
```
Sia installare `Calamares` direttamente da `eggs` con il comando:
```
sudo eggs calamares --install
```

## Pacchetti `npm`

Essendo `eggs` un software sviluppato con `nodejs`, esiste la possibilità di installare `penguins-eggs` direttamente come pacchetto `npm`.

Però, poichè i pacchetti `npm` necessitano comunque dei pacchetti delle dipendenze, pur se inizialmente avevo puntato su questo formato - pressochè universale - ed avevo scritto degli appositi moduli per l'installazione dei pacchetti nativi, con l'utilizzo della pacchettizzazione `.deb` e nei vari `PKGBUILD`, si è venuta a creare una inutile duplicazione di codice.

Pertanto, attualmente i pacchetti `npm` non sono più consigliati. 

E' comunque possibile installarli, curando però separatamente l'installazione delle varie dipendenze.

## Utilizzo di `eggs` da codice sorgente

Utilizzare `eggs` a partire dai sorgenti può essere estremamente utile sia per il debug che per modificare eggs stesso. Può anche garantire una maggiore sicurezza - in caso di dubbi - vedere il codice che sta girando sulla vostra macchina e, col tempo, sarete capaci di modificarlo.

E' necessario installare a priori i pacchetti `nodejs` ed `pnpm`. L'esempio seguente è per manjaro.

```
sudo pamac install nodejs pnpm devel-base
```

Su Debian/Devuan/Ubuntu si consiglia la versione `node16.x` dalla repository https://github.com/nodesource/distributions, mentre per installare `pnpm`, una volta installati `nodejs` ed `npm`, sarà sufficiente:

```
sudo npm i pnpm -g
```

A questo punto andiamo a scaricare il sorgente di `penguins-eggs` con il comando:
```
git clone https://github.com/pieroproietti/penguins-eggs
```

si entra nella directory penguins-eggs ```cd penguins-eggs``` e si immette:

```
pnpm install
```
(*) notare l'uso di **pnpm** invece del classico **npm**, ciò permette una più veloce compilazione.

Fatto questo, dalla stessa directory, si potrà utilizzare `eggs` direttamente dai sorgenti. 

Ad esempio:

```
sudo ./eggs produce --verbose
```

**Nota**: _Potete constatare che l'unica differenza d'uso rispetto ai pacchetti precompilati è che dovrete indicare il path per `eggs`: `./eggs` e dovrete lanciarlo dalla directory `~/penguins-eggs`. Il funzionamento rimane tuttavia esattamente lo stesso, ma si ha il vantaggio di poter agire in maniera interattiva con il codice. Per lo sviluppo, personalmente utilizzo [code](https://code.visualstudio.com/), ma potete scegliere altri editor [atom](https://atom.io/), [sublime](https://www.sublimetext.com/), etc)_.

# `eggs`: `autocomplete`, pagina `man` ed aiuto

Una volta installato il pacchetto disporremo, sul nostro sistema, di un nuovo comando: 

```
eggs
```

si otterrà la seguente schermata:

```
VERSION
  penguins-eggs/9.4.3 linux-x64 node-v16.19.1

USAGE
  $ eggs [COMMAND]

TOPICS
  export    export deb/docs/iso to the destination host
  tools     clean system log, apt, etc
  wardrobe  get warorobe

COMMANDS
  adapt         adapt monitor resolution for VM only
  analyze       analyze for syncto
  autocomplete  display autocomplete installation instructions
  calamares     configure calamares or install or configure it
  config        Configure and install prerequisites deb packages to run it
  cuckoo        PXE start with proxy-dhcp
  dad           ask help from daddy - TUI configuration helper
  help          Display help for eggs.
  install       krill: the CLI system installer - the egg became a penguin!
  kill          kill the eggs/free the nest
  mom           ask help from mommy - TUI helper
  produce       produce a live image from your system whithout your data
  status        informations about eggs status
  syncfrom      restore users and user data from a LUKS volumes
  syncto        saves users and user data in a LUKS volume inside the iso
  update        update the Penguins' eggs tool
  version
```


Se avete già chiuso e riaperto la finestra del terminale, potrete incominciare ad apprezzare anche l'autocomplete. 

Digitanto ```eggs``` e premento ```TAB```, vi appariranno i vari comandi disponibili:

```
$ eggs 
adapt         config        help          produce       tools
analyze       cuckoo        install       status        update
autocomplete  dad           kill          syncfrom      version
calamares     export        mom           syncto        wardrobe
```

Se inserite un comando e date ```TAB``` appariranno invece i flags supportati dal comando stesso. 
Ad esempio: comando ```eggs produce --```

```
$ eggs produce --
--addons         --help           --release        --verbose
--basename       --max            --script         --yolk
--clone          --nointeractive  --standard       
--cryptedclone   --prefix         --theme          
```

Inoltre, come per ogni applicazione CLI che si rispetti, `eggs` è fornito di una apposita pagina `man` sempre a vostra disposizione:

```
man eggs
```

Di più: una pagina di aiuto è disponibile per tutti i comandi CLI.

Tuttavia non v'è pulcino che non abbia una propria chioccia come guida! Così ho pensato di aggiungere il comando:

```
eggs mom
```

![eggs-mom](/img/book/eggs-mom.png)

La "mamma" ci mette a disposizione una interfaccia interattiva per accompagnarci nei primi passi.

---

# Configurazione di `eggs`

Per funzionare `eggs` ha bisogno di vari pacchetti installati: i cosidetti `prerequisities`, inoltre necessita di creare ed installare le pagine di `man` di `eggs` ed installare l'autocomplete di `eggs` stesso. Tutto questo viene curato dal processo di pacchettizzazione `.deb` o `PKGBUILD` che a sua volta sarà basato sul gestore di pacchetti della distribuzione in uso: `apt` o `pacman`.

Questo, tra l'altro, ha reso obsoleto il comando ```eggs config``` prima necessario che viene sostituito da ```eggs dad``` combinato, eventualmente, con il flag ```--default```

Segnalo la presenza in `/etc/penguins-eggs.d` di tre differenti file di configurazione che vengono generati automaticamente durante l'installazione.

* ```/penguins-eggs.d/eggs.yaml``` (configurazioni generali di eggs)
* ```/penguins-eggs.d/krill.yaml``` (configurazioni per installazione unattended)
* ```/penguins-eggs.d/tools.yaml``` (principalmente per sviluppatori)

## `eggs.yaml`

`eggs.yaml` contiene le variabili principali utilizzate durante il processo di rimasterizzazione.

```
# Penguin's eggs
# eggs.yaml
---
version: '' 

# eggs nest, default: /home/eggs
snapshot_dir: /home/eggs/

# Default '', dad -d put it at egg-of-distro-version-
snapshot_prefix: ''

# You can edit this rsync excludes file
snapshot_excludes: /usr/local/share/penguins-eggs/exclude.list

# snapshot_basename, default: ''
snapshot_basename: ''

# user liveCD, default: live
user_opt: live

# user liveCD password, default: evolution
user_opt_passwd: evolution

# root liveCD password, default: evolution
root_passwd: evolution

# theme to be used, default: eggs
theme: eggs

# Ask for installation calamares
force_installer: true

# make_efi, default: true
make_efi: true

# Create md5sum file, default true
make_md5sum: true

# make_isohybrid, default true
make_isohybrid: true

# Compression algorithm, default xz
compression: zstd -b 256K -Xcompression-level 1

# Allow password login to ssh for users (not root).
ssh_pass: true

# timezone
timezone: Europe/Rome

# locales_default, default env.LANG or en_US.UTF-8
locales_default: it_IT.UTF-8

# locales, default: locales_default + en_US.UTF-8
locales:
  - it_IT.UTF-8
  - en_US.UTF-8

# it's still used?
pmount_fixed: false

# machine_id: default /etc/machine-id (eg: c297d3d858334abe99b719fc33415324)
machine_id: ''

# vmlinuz, default: /path/to/vmlinuz (eg: /boot/vmlinuz-5.10.0-16-amd64)
vmlinuz: ''

# initrd_img, default: /path/to/initrd_img (eg: /boot/initrd.img-5.10.0-16-amd64)
initrd_img: ''
```

## `krill.yaml`
`krill.yaml` contiene i valori di default o i valori per l'installazione unattended con ```eggs install -u```

```
# Penguin's eggs
# krill.yaml
---
# welcome (put your language, example: it_IT.UTF-8)
language: 'en_US.UTF-8'

# location (put your location, example region: "Europe", zone: "Rome")
region: 'America'
zone: 'New_York'

# keyboard (put your values example: keyboardModel: "pc105", keyboardLayout: "it")
keyboardModel: 'pc105'
keyboardLayout: 'us'
keyboardVariant: ''
keyboardOption: ''

# partition (leave it unchanged)
installationDevice: ''
installationMode: 'standard'
filesystemType: 'ext4'
userSwapChoice: 'small'

# users (Here you can put your default user, password, etc)
name: 'artisan'
fullname: 'artisan'
password: 'evolution'
rootPassword: 'evolution'
autologin: true
hostname: ''

# network (leave it unchanged)
iface: ""
addressType: 'dhcp'
address: ''
netmask: ''
gateway: ''
domain: ''
dns: ''
```


## `tools.yaml`
Lo scopo delle variabili di `tools.yaml` è quello di aiutare lo sviluppo di `eggs`, in sostanza mi sono molto utili per sviluppare, esportare pacchetti ed ISO ed eseguire aggiornamenti di `eggs` direttamente dalla rete locale. Generalmente il contenuto di questo file non viene utilizzato durante il normale funzionamento di `eggs`.

```
# Penguin's eggs
# tools.yaml
---
penguins_eggs_conf: /etc/penguins-eggs.d/eggs.yaml

# you can adapt this configuration to your needs
remoteHost: 192.168.1.2

# user to be used in remote host
remoteUser: artisan

# path in remote host
remotePathDeb: /home/artisan/sourceforge/packages-deb/
remotePathDoc: /home/artisan/sourceforge/DOCS/
remotePathIso: /home/artisan/sourceforge/iso/


# local directories - only for developers 
localPathDeb: ~/penguins-eggs/perrisbrewery/workdir/
localPathDoc: ~/penguins-eggs/docs
localPathIso: /home/eggs

# filter package files
filterDeb: eggs_9.*.*_
```



## `sudo dad --default`
Come ogni pulcino non ha un solo genitore, oltre alla "mamma" non poteva mancare il "papà"! 

Avete delle difficoltà ad editare i file di configurazione di eggs? 

Niente paura, `dad` ci accompagna e può dare una mano!

```
sudo eggs dad --default
```
Non solo configurerà automaticamente `eggs`, ma pulirà eventuali dati precedenti e ci proporrà addirittura di ottenere direttamente una veloce iso del nostro sistema, come primo "assaggio"!

Questo comando crea o ricrea la configurazione di eggs nella directory ```/etc/penguins-eggs.d```.

![eggs-dad-d](/images/book9.2/eggs-dad-d.png)


![eggs-dad-d](/images/book9.2/eggs-status.png)


# I comandi di `eggs`
`eggs` necessita dei diritti di root, quindi - tranne per `eggs mom`, `eggs info` ed i comandi di esportazione - DEVE essere chiamato preceduto da `sudo`

```
TOPICS
  export    export deb/docs/iso to the destination host
  tools     clean system log, apt, etc
  wardrobe  get warorobe

COMMANDS
  adapt         adapt monitor resolution for VM only
(*) analyze       analyze for syncto
  autocomplete  display autocomplete installation instructions
  calamares     calamares or install or configure it
(*) config        Configure and install prerequisites deb packages to run it
  cuckoo        start a PXE boot server serving the live image
  dad           ask help from daddy - configuration helper
  help          Display help for eggs.
  install       command-line system installer - the egg became a penguin!
  kill          kill the eggs/free the nest
  mom           ask for mommy - gui helper
  produce       produce a live image from your system whithout your data
  status        informations about eggs status
  syncfrom      restore users and user data from a LUKS volumes
  syncto        saves users and user data in a LUKS volume inside the iso
  update        update the penguin's eggs tool
  version
```

Non vi fate spaventare da questi pochi comandi, quelli che utilizzeremo sono essenzialmente due: `eggs produce` per creare la iso ed `eggs kill` per cancellarla.

Ogni comando può avere alcuni flag. Alcuni sono comuni a tutti i comandi: `--verbose` ed `--help`. Naturalmente `--verbose` mostrerà una descrizione delle operazioni più dettagliata delle operazioni in corso, mentre `--help` o `-h` visualizzerà una breve descrizione del comando stesso.

Tra i vari comandi `produce` è quello che presenta il maggior numero di opzioni. Utilizzato senza un flag di compressine: `--standar` o `--max` userà l'algoritmo di compressione `zstd-level-1`, permettendovi così di risparmiare non poco tempo durante le fasi di sviluppo e test. Sempre in `produce` sono presenti i flag `--clone` e `--cryptedclone` che consentono di avere una copia completa del proprio sistema con i dati utente in chiaro o criptati.

Andiamo ad illustrare i comandi in rigoroso ordine alfabetico, per comodità dello scrivente. 

Tenete presente che i comandi che utilizzerete saranno soprattutto: `produce` e `kill`.

## `eggs adapt`

Adatta il video alle alla grandezza della finestra di una macchina virtuale. Lo trovo molto comodo per ridimensionare le macchine virtuali con interfacce grafiche diverse da cinnamon, gnome3, e KDE per la quali non è necessario. In pratica `eggs` richiama `xrandr` per adattare lo schermo alla risoluzione corrente. Non è strettamente relato alla produzione di ISO, è però comodissimo lavorando con le macchine virtuali.

## `eggs autocomplete`
Produce i file ```eggs.bash``` ed ```_eggs``` per il funzionamento dell'autocomplete di `bash` e `zsh`. Normalmente non è necessario utilizzarlo, perchè viene automaticamente configurato in fase di installazione. Se l'autocomplete non vi funziona, la ragione sarà probabilmente nella mancanza del pacchetto ```bash-completion``` o ```zsh-completions```.

## `sudo eggs calamares`
Installa e/o configura l'installatore grafico `calamares`. Può essere utilizzato anche per configurare una ISO che - prodotta senza `calamares` - la si voglia installare con esso. Basterà dare il comando: `sudo eggs calamares --install` e si avrà sia l'installazione del pacchetto, la sua configurazione e la configurazione di `calamares` per l'utilizzo senza necessità di inserire la password.

```
eggs calamares -h
```


## `sudo eggs cuckoo`
`cuckoo` offre una grande versatilità per le installazioni da eseguire su una rete locale. Il comando avvia un server PXE che permette a tutte le macchine della LAN di avviarsi dalla rete; questo ci risparmia la creazione di chiavette USB di avvio e, nella maggior parte dei casi, è anche più veloce e pratico.
Deve essere presente in rete un server dhcp reale che fornisca gli indirizzi ip. Il comando `eggs cuckoo` aggiungerà un servizio `proxy-dhcp` per fornire i dati aggiuntivi necessari al funzionamto PXE.

Tutto ciò che occorre fare è avviare un computer in rete - anche da live - ed eseguire il comando: 
```eggs sudo cuckoo```

A questo punto sarà possibile avviare le varie macchine da installare direttamente tramite il boot da rete locale. Il metodo funziona sia su computer con BIOS standard che su macchine UEFI.

## `sudo eggs dad`
Chiedi a papà come configurare `eggs` e generare la tua ISO!

Questo comando riassume in forma essenziale, i task necessari a produrre una ISO del sistema con `eggs`. 

Analizza la presenza o meno della configurazione, i pacchetti installati e, quindi fornisce la possibilità di configurare un prefisso alla vostra ISO, il suo nome, il nome dell'utente live e la sua password, la password di root sempre per il sistema live, il tipo di compressione e l'eventuale tema da utilizzare. Questi dati vengono salvati e prelevati dal suddetto file di configurazione `eggs.yaml`, per cui una volta configurati saranno utilizzati come default per tutte le operazioni successive.

```
E G G S: the reproductive system of penguins

      penguins-eggs       Perri's Brewery edition        ver. 9.2.3       
command: dad -d

Daddy, what else did you leave for me?
- creating configuration dir...
- distro template install...
```

## `eggs export`
Questo è un comando che, alla stragrande maggioranza degli utenti, non serve! 

Non fa altro che generare a partire dai parametri di configurazione, quali ISO cancellare ed esportare nell'host. Mi spiego, durante la scrittura di `eggs`, sono costretto a generare una moltitudine di immagini ISO a partire da macchine virtuali ed, ad esportarle sulla mia stazione di lavoro. Per farlo utilizzo il comando scp, tuttavia digitare continuamente il comando e cancellare tutte le precedenti versioni di ISO presenti, è - diciamo così - fastidioso. Allo scopo, ho ideato questo comando.

L'esportazione delle ISO generate avviene a seconda dei parametri inseriti in ```/etc/penguins-eggs.d/tools.yaml```. Potete liberamente modificare questo file per adattarlo alle vostre esigenze.

Nel mio caso, utilizzo una stazione di lavoro con Proxmox VE e delle macchine virtuali, ho dovuto definire un `remoteHost`, `remoteUser`, etc per ogni tipologia di esportazione, nel mio caso esporto di volta in volta:
* pacchetti Debian
* immagini ISO

Naturalmente, nel caso siate facendo la riproduzione direttamente sul sistema e non di una macchina virtuale, avrete tutto nello stesso disco ed il problema non si pone. In questo caso i comandi di esportazione rimarranno inutilizzati.

```

 E G G S: the reproductive system of penguins

      penguins-eggs       Perri's Brewery edition        ver. 9.2.3       
command: export:iso -c

eggs >>> export iso in the destination host.
eggs >>> cleaning destination....
ssh root@192.168.1.2 rm -rf /home/artisan/sourceforge/iso/egg-of-debian-bullseye-colibri-amd64_*
root@192.168.1.2's password: 
```

### `eggs export deb`
Esporta i pacchetti deb. Notate che questo comando è utilizzato esclusivamente per lo sviluppo di eggs.

### `eggs export iso`
Esporta l'immagine iso. Potete modificare a piacere sia l'host di esportazione che il path associato nel file **tools.yaml**. 

## `eggs help`

Come dice il comando stesso genera la lista dei comandi disponibili. A sua volta ogni comando con il flag -h o --help emette usa sua descrizione.

Ad esempio:

```
calamares
```

## `sudo eggs install`

Lancia l'installaler CLI del sistema operativo con krill.

E' possibile eseguire una installazione unattended, semplicemente con il comando:

```
sudo eggs install --unattended
```
![eggs-krill-unattended-on-arch](/images/book9.2/eggs-install-u.png)


### Presentazione dell'installer `krill` (`eggs install`)

Lo scopo di `krill` non è quello di entrare in concorrenza con un progetto molto più ampio come `calamares`, piuttosto quello di affiancarlo in ambiti dove la potenza e la sofisticazione di calamares non sono disponibili: ad esempio in ambito server. o in caso di sistemi desktop nei quali non sia possibile utilizzare calamares perchè non disponibile, come per le versioni di Debian jessie e stretch. 

Inoltre, `krill` permette una installazione unattended ed è, proprio perchè più parco, generalmente più veloce.

Potete, infine, utilizzare `krill` su macchine desktop leggere con 2 GB di RAM o meno, nelle quali l'installazione con `krill`, in questi casi, risulterà particolarmente più veloce.

In tutti gli altri casi è consigliato utilizzare `calamares` che offre molte più possibilità: in particolare l'installazione dual-boot.

Vi è però una eccezione a questo schema generale, ed è la necessità utilizzare `krill` per ripristinare i backup criptati fatti con `eggs`. In questo caso l'utilizzo di `krill` è - al momento - indispensabile.

Utilizzate quindi `krill` solo quando è necessario ed opportuno  e, sono comunque abbastanza casi: installazioni unattended, installazioni si sistemi solo CLI, sistemi basati su Debian jessie o Debian stretch, installazioni su macchine con meno di 2GB di RAM. Per tutti gli altri casi è generalmente preferibile utilizzare [calamares](https://calamares.io/). 

### Interfaccia di `krill`

`krill` è stato pensato per essere il più possibile simile ad un installer GUI anche se è un installer a riga di comando. La sua realizzazione è stata possibile grazie all'utilizzo della libreria [`ink`](https://github.com/vadimdemedes/ink) una libreria che porta [`react`](https://react.dev/) in ambito CLI.

Già dal nome, che identifica dei piccoli crostacei diffusi ai poli, prende spunto dal ben più famoso installer grafico `calamares` e ne ricalca sostanzialmente lo stesso schema visuale.

Abbiamo una finestra principale che è suddivisa sulla sinistra con i vari passi della procedura, mentre le varie tab: `welcome`, `location`, `keyboard`, `partitions`, `users`, `network`, `summary` ed `finish` aprono, ognuna, i propri form per la visualizzazione o l'immissione e modifica dei dati necessari.

L'insieme è ordinato e cerca di ricordare `calamares` ed `ubiquity` - ben più blasonati installer - e questo per un semplice installer TUI è già molto.

Naturalmente siamo in ambiente CLI e, quindi, niente mouse ma esclusivamente tastiera, utilizzando però i tasti di direzione ed invio.

Per l'introduzione dei dati verrà utilizzata la parte sottostante dove andremo ad immettere o selezionare i nostri dati ed avanzeremo accettando i valori immessi,

Si procederà quindi da `welcome` sino a `summary` ed una volta accettate le scelte in `summary` partirà la nostra installazione.

**Nota**: _in attesa che scriva un apposito modulo per `calamares` per il restore dei dati creato da `eggs`, l'installazione con l'installer `krill` al momento è indispensabile per il restore automatico dei backup realizzati con `eggs`._

### `krill`: i vari passi dell'installazione
L'installazione con `krill` procede attraverso alcuni step, comuni  a calamares ed aventi la stessa denominazione, che conducono sino alla schermata finale ed alla richiesta di riavvio.

#### `krill: welcome`
`welcome` è la prima schermata di krill ed è il posto dove potremo cambiare la lingua. Disporremo solo delle lingue incluse nella nostra iso, per cui normalmente accetteremo il default.

![eggs-krill-welcome](/images/book9.2/eggs-install-welcome.png)

#### `krill: location`

In `location` potremo selezionare e variare la nostra area geografica e la nostra zona per l'impostazione del fuso orario. Le aree e le zone sono complete, non è così per le lingue che non verranno neppure proposte (vengono preselezionate dall'impostazione della lingua in `welcome`).

![eggs-krill-location](/images/book9.2/eggs-install-location.png)

#### `krill: keyboard`
Stiamo trattando di un programma per l'installazione a misura per le nostre customizzazioni, quindi, se vogliamo avere altre lingue, dobbiamo ricordarci di aggiungerle attraverso `dpkg-reconfigure locales`. `krill` permetterà la selezione solo delle lingue già presenti ed, per il momento, non è un dramma per lo scopo di questo installer. Anche se non è escluso che in futuro faremo di meglio.

![eggs-krill-keyboard](/images/book9.2/eggs-install-keyboard.png)

#### `krill: partition`

In `partitions` il discorso si fa più ampio. krill vuole un dispositivo sul quale installare il nostro sistema. L'installazione con `krill` cancellerà il dispositivo in questione, non è possibile partizionare manualmente il disco.

La prima cosa che `krill` riporta nella schermata è che cancellerà completamente il disco di destinazione, meglio essere chiari. Subito dopo ci mostra se siamo su un sistema con boot BIOS o UEFI.

In questa schermata pure sono presenti quattro campi, tutti selezionabili: 
* installation device: /dev/sda
* installation mode: standard
* filesystem: ext4
* user swap choice: small

E' quindi possibile selezionare un dispositivo che krill rileverà tra quelli disponibili, una modalità di installazione - al momento solo la modalità standard, ma sto lavorando per la full-encrypts, la formattazione del filesystem e la grandezza della partizione di swap.

Sarà però krill a decidere come partizionare il device a seconda del tipo di boot e dell'installazione scelta, non è possibile per ora utilizzare uno schema di partizioni manuale.

![eggs krill partitions](/images/book9.2/eggs-install-partitions.png)

#### `krill: users`

In questo form `users` andrà indicato l'utente principale del sistema, la sua password, la conferma della stessa e l'eventuale utilizzo dell'autologin; password e conferma per l'utente di root ed, infine, il nome dell'host.

![eggs krill users](/images/book9.2/eggs-install-users.png)

#### `krill: network`

In `network` è possibile scegliere l'interfaccia di rete tra quelle disponibili e selezionare per essa la modalità tra dhcp e static. Nel caso di static si potranno impostare indirizzo `ip`, la `netmask`, il `gateway`, `domain` e `dns`.

![network](/images/book9.2/eggs-install-network.png)

#### `krill: summary`

`summary` è un semplice riepilogo delle varie scelte effettuate, permette un rapido controllo visivo ed attende per una conferma o una rinuncia.

![eggs krill summary](/images/book9.2/eggs-install-summary.png)

#### `krill: installation`

Dopo aver accettato la finestra `summary`, parte l'installazione del sistema. In `installation` avremo la possibiità di seguire passo - passo le varie fasi dell'installazione sino al passaggio alla fase finale.

![installation](/images/book9.2/eggs-install-unpackfs.png)

#### `krill finish`
`finish` è una semplice schermata che ci notifica la fine della installazione e la necessità di un riavvio.

![eggs krill finished](/images/book9/eggs-krill-finished.png)


## `sudo eggs kill`

Cancella le immagini realizzate e la directory di lavoro di `eggs`. 

```
 E G G S: the reproductive system of penguins

      penguins-eggs       Perri's Brewery edition        ver. 9.2.3       
command: kill 

Disk space used: 7.5 GB
Space available: 19.2 GB
There are 0 snapshots taking 0 GB of disk space.

The free space should  be sufficient to hold the
compressed data from the system
? Select yes to continue...  (Use arrow keys)
❯ No 
  Yes 
```

**Nota**: _in caso per interruzione del comando produce, sarà impossibile cancellare le directory montate. Il metodo più veloce è semplicemente eseguire un riavvio del sistema e lanciare nuovamente il comando `sudo eggs kill`_.


## `eggs mom`
`eggs mom` è una interfaccia realizzata con [easybashgui](https://github.com/BashGui/easybashgui), che utilizza [whiptail](https://linux.die.net/man/1/whiptail= disponibile praticamente su ogni versione Linux anche CLI, oppure [xdialog](http://xdialog.free.fr/), [zenity](https://help.gnome.org/users/zenity/stable/) o [kdialog](https://github.com/KDE/kdialog) che permette di avere una interfaccia grafica o simil grafica, nella quale ho raggruppato tutti i comandi eggs e la documantazione.


### `eggs mom`

Una immagine vale più di mille parole, questa è la schermata iniziale di ```eggs mom```

![eggs-mom](/images/book9.4/eggs-mom.png)

Dal menu principale si accede a tutti i comandi eggs ed ai sottomenu Documentation, Export e Tools.

### `mom`: Documentation
In questo menù potete consultare sia il sito che i manuali, sia in formato html che man. 

![eggs-mom](/images/book9.2/eggs-mom-documentation.png)

Ecco ad esempio come risulta la schermata della pagina man di eggs in formato html, consultabile anche in assenza di connessione.

```
Aggiungere schermata eggs mom
```

Attenzione: per gli utenti arch e manjaro: non sono riuscito a trovare un equivalente di sensible_browser che utilizzo in DEBIAN per individuare il browser di default installato. Se qualcuno ha un suggerimento, sarà gradito.

Naturalmente se state operando su una stazione solo cli, avrete comunque disponibili le vostre informazioni in formato man.

### `mom export`
Da questo menu potete raggiungere tutti i comandi di esportazione:

* eggs export:deb
* eggs export:iso

![eggs mom export](/images/book9.2/eggs-mom-export.png)

### mom tools
In tools troverete, ovviamente, tutti i gli strumenti di eggs, raccolti sotto eggs:tools.

![eggs mom tools](/images/book9.2/eggs-mom-tools.png)

Potete tornare indietro da ogni menù selezionando **quit** (basta premere il tasto "q" seguito da invio).

`mom` rappresenta una versatile guida per l'apprendimento di `eggs` ed un sicuro riferimento. 

Naturalmente con il tempo ogni "pulcino" viene svezzato ed impara a camminare da solo e sarà più comodo immettere direttamente i comandi da terminale.

A questo proprosito ricordate che eggs presenta l'autocomplete dei comandi, quindi, ad esempio digitando:
```sudo eggs [TAB][TAB]```
vi verranno mostrati i possibili comandi;
```sudo eggs i [TAB][TAB]```
vi verranno mostrati solo i comandi che iniziano per i: info ed install;
'''sudo eggs produce --[TAB][TAB]```
vi verranno mostrati tutti i possibili flag del comando.
E così via discorrendo.

## `sudo eggs produce`

E' questo il comando che più utilizzerete. 

Sostanzialmente `produce` è l'unico comando usato quotidianamente, insieme a `kill` che ci consente di sbarazzarci delle immagini iso precedentemente create.

Usato senza parametri produce la iso con i parametri di default che sono quelli specificati con `sudo eggs dad` o impostati editanto il file /etc/penguins-eggs/eggs.yaml. 

Al suo avvio `produce` esegue velocemente un controllo sulla corretta inizializzazione di `eggs`, quindi, produce la ISO.

Presenta diversi flag utilizzabili:


```
produce a live image from your system whithout your data

USAGE
  $ eggs produce [--addons <value>] [--basename <value>] [-c] [-C]
    [-h] [-m] [-n] [-p <value>] [--release] [-s] [-f] [--theme <value>] [-v]
    [-y]

FLAGS
  -C, --cryptedclone    crypted clone
  -c, --clone           clone
  -f, --standard        standard compression
  -h, --help            Show CLI help.
  -m, --max             max compression
  -n, --nointeractive   don't ask for user interctions
  -p, --prefix=<value>  prefix
  -s, --script          script mode. Generate scripts to manage iso build
  -v, --verbose         verbose
  -y, --yolk            -y force yolk renew
  --addons=<value>...   addons to be used: adapt, ichoice, pve, rsupport
  --basename=<value>    basename
  --release             release: max compression, remove penguins-eggs and
                        calamares after installation
  --theme=<value>       theme for livecd, calamares branding and partitions

DESCRIPTION
  produce a live image from your system whithout your data

EXAMPLES
  sudo eggs produce

  sudo eggs produce --standard

  sudo eggs produce --max

  sudo eggs produce --max --basename=colibri

  sudo eggs produce --cryptedclone

  sudo eggs produce --clone

  sudo eggs produce --basename=colibri

  sudo eggs produce --basename=colibri --theme /path/to/theme --addons adapt

```

Di gran lunga la modalità d'uso che utilizzo è `sudo eggs produce` o `sudo eggs produce --adapt` se sono su xfce o mate, che mi consente si avere una veloce rimasterizzazione - eggs da questa versione utilizza la compressione fast di default - ed avere sul desktop del live il link per ridimensionare la finestra video della mia macchina virtuale. Se voglio controllare cosa sta succedendo, invece aggiungo ```--verbose```

Tra i flag disponibili c'è --theme che imposta il tema per grub ed isolinux sull'immagine iso e per l'installer GUI calamares. 

Potete creare un tema personalizzato semplicemente copiandone uno esistente e cambiandone nome e contenuto. Scaricate il wardrobe con: `eggs wardrobe get`, i temi si trovano in ```.wardrobe/themes/vendor```, dove vendor è il nome da passare al flag --theme. 

I temi consentono una customizzazione di calamares e la possibilità di avere un proprio splashscreen durante l'avvio del sistema live.

Un altro flag, importante per gli utenti che vogliono realizzare una distro è `--release` che configura calamares e krill a disinstallare calamares e penguins-eggs a fine installazione.

Abbiamo poi due flag per la copia completa del sistema: ```--clone``` e ```--cryptedclone```, che sostanzialmente producono una iso nella quale sono presenti i dati utente. La differenza tra questi due flag è che mentre clone produce una iso nella quale i dati utente sono in chiaro ed utilizzabili anche dal sistema live, il flag ```--cryptedclone``` invece crea all'interno della iso un volume LUKS nel quale i dati saranno cryptati e, questi non disponibili immediatamente da live. Per reinstallare un clone criptato si utilizza krill.


Uso spesso anche il flag `--addons` per inserire sul desktop il link per `adapt` o altri links nelle iso realizzate.

### `eggs produce --cryptedclone / --clone`

Per molto tempo ho esitato ad aggiungere una modalità per la copia completa del sistema, non perchè fosse complicato, ma perchè temevo il caso che un utente possa inserire nella iso dei propri dati sensibili. Tuttavia, in seguito ad una discussione con un utente, al quale avrebbe fatto comodo per poter trasferire in toto i propri server, mi sono deciso ad aggiungerla prima in modalità criptata con un volume LUKS interno alla iso stessa e successivamente anche in chiaro.

Difatti `eggs` durante l'utilizzo normale esclude sempre dal filesystem della live l'intera cartella /home, inoltre, rimuove tutti gli account presenti sull'host, aggiungendo solo l'utente live.

Con l'opzione `--cryptedclone` però, pur continuando a funzonare esattamente nello stesso modo, eggs inserisce un nuovo passo all'interno della produzione della iso e prima della sua chiusura. In questa fase viene creato un volume cryptato denominato `luks-users-data` sul quale si andranno a copiare i dati di tutti gli utenti presenti ed i loro relativi account.

Questo consente quindi di distribuire la propria iso con una ragionevole sicurezza.

Sarà possibile accedere ai dati degli utenti solo se si è a conoscenza della chiave di accesso, che però **non viene mai salvata** ed è quindi non scopribile se non con attacchi brute force.

La live che, per chiarezza, prende il suffisso ``crypted`` si avvia normalmente con il solo utente live e non carica in modalità live il volume criptato.

Però, nel caso di nuova installazione, `krill` controlla la presenza del volume `luks-users-data*` all'interno della immagine iso e, se viene rilevato, richiede la passphrase di accesso per montare tale volume e copiare i dati e gli account degli utenti nel sistema appena installato.

Riavviando il sistema, quindi, ci ritroveremo i nostri utenti ed i nostri dati presenti sulla nuova installazione.

Tutto questo, è possibile attualmente solo con l'installer `krill`. Utilizzando calamares invece, non venendo effettuato il controllo sulla eventuale esistenza dei dati degli utenti e verrà installato solo il sistema, con account ed /home vergine, proprio come succede per una iso normale.

### `eggs produce --clone`
La differenza tra l'opzione `--cryptedclone` e l'opzione `--clone` è che in quest'ultimo caso i dati utente non saranno salvati in un volume cryptato all'interno della immagine ISO, ma verranno direttamente copiati all'interno del `filesystem.squashfs`. Questo comporta vantaggi e svantaggi: il principale vantaggio è che si hanno i propri dati e le proprie configurazioni direttamente disponibili su live, lo svantaggio è che se pubblicate la vostra immagine, tutti i dati utente saranno direttamente a disposizione di chi scarica la ISO.

Anche se a prima vista, per me specialmente, questa soluzione - che è poi la più semplice - non appariva adatta, tuttavia grazie agli utenti mi sono reso conto che è invece estremamente versatile, in quanto molti customizzatori utilizzano spesso la propria home per le modifiche ed in questo modo non è necessario salvarle in `/etc/skel`.

## `eggs tools`
Sono raccolti sotto tools degli strumenti accessori di eggs, non sono fondamentali, ma possono far comodo.

Abbiamo ```tools clean``` che esegue la pulizia del sistema cancellando la cache del gestore dei pacchetti (apt o pacman) ed esegue la rotazione dei log, ```tools skel``` che permette di configurare l'aspetto del desktop live e del desktop di default dei nuovi utenti, ```tools yolk``` - solo per Debian/Devuan/Ubuntu - che aggiorna la repository inclusa in /usr/local/yolk che viene utilizzata da eggs per caricare i pacchetti indispensabili all'installazione in assenza di connessione internet. 

![eggs tools](/images/book9.2/eggs-mom-tools.png)

## `eggs status`

Mostra a video la configurazione di `eggs` e del sistema. 

![eggs-info](/images/book9.2/eggs-status.png)

Da notare sulla destra la presenza di bottoni rossi, che possono indicare problemi con le dipendenze, configurazione, etc.

### `sudo eggs tools clean`
Rimuove la cache del gestore di pacchetti (apt o pacman), esegue il logrotate, etc.


### `sudo eggs tools ppa`
Aggiunge o rimuove la repository di `eggs` alla nostra configurazione apt.
```
sudo eggs tool ppa --add
```
Aggiunge la repository [penguins-eggs-ppa](https://github.com/pieroproietti/penguins-eggs-ppa)

```
sudo eggs tool ppa --remove
```
Rimuove la stessa.



### `sudo eggs tools skel`
Con questo comando si ricrea la directory `/etc/skel` della nostra live. 

E' utile per dare una veste coerente e personalizzata all'utente della live ed ai futuri utenti che creeremo dopo che il nostro sistema sarà installato. 

Essenzialmente copia le configurazioni dell'utente primario o di quello passato con il flag `-u` nella cartella `/etc/skel` che verrà quindi utilizzata per generare lo scheletro della home dei nuovi utenti creati (compreso l'utente della live che è di fatto un nuovo utente).

```
update skel from home configuration

USAGE
  $ eggs tools skel [-h] [-u <value>] [-v]

FLAGS
  -h, --help          Show CLI help.
  -u, --user=<value>  user to be used
  -v, --verbose

DESCRIPTION
  update skel from home configuration

EXAMPLES
  $ eggs skel --user mauro
  desktop configuration of user mauro will get used as default

```


### `sudo eggs tools yolk`
Il comando `yolk` - valido solo per Debian/Devuan/Ubuntu - crea una piccola repository locale in `/usr/local/yolk` con i pacchetti strettamente necessari ad assicurare l'installazione del sistema anche in assenza di connessione internet. 

In assenza della repository locale che, ad esempio, viene cancellata da un aggiornamento di `eggs`, `yolk` viene automaticamente richiamato da `produce`. Inoltre, sempre in `produce`, con il flag `--yolk` se ne può forzare l'aggiornamento. La sua presenza di questo comando è quindi giustificata solo dalla comodità del suo utilizzo in sede di sviluppo.

```
configure eggs to install without internet

USAGE
  $ eggs tools yolk [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  configure eggs to install without internet

EXAMPLES
  $ eggs yolk -v
```

## `sudo eggs update`

Esegue l'aggiornamento di `eggs`, è un comando che è rimasto poichè spesso, durante lo sviluppo devo aggiornare eggs dalla rete locale, per gli utenti finali è senz'altro opportuno utilizzare il gestore di pacchetti della propria distribuzione.

# Creazione di una nostra remix
La creazione di una nostra remix è un processo che richiede pazienza e passione ma può darci grandi soddisfazioni ed in molti casi, farci risparmiare tempo e fatica.

Scarichiamo la nostra distribuzione che intendiamo customizzare, scegliendo tra Arch, Debian: buster, bullseye. bookworm;  Devuan: beowulf, chimaera; manjaro,  Ubuntu: bionic, focal, groovy, impish  o derivate.

Installiamola normalmente, aggiorniamola e facciamo qualche forma di customizzazione prima di passare alla creazione delle iso.

## Inizializzazione e prerequisiti

Installiamo quindi `eggs`, con uno dei metodi descritti in precedenza a seconda della nostra versione di Linux.

A questo punto, siamo ad un solo passo dalla nostra prima immagine ISO.

```
sudo eggs dad -d
```

L'aiuto di papà ci farò risparmiare tempo e fatica, impostando sui default la configurazione di eggs.

Alla fine del processo, basterà dare il comando:

```sudo produce```

per ottenere la nostra prima rimasterizzazione.

Se vogliamo che la nostra iso sia installabile con l'installer grafico calamares, dovremo aggiungerlo PRIMA di produrre la iso. Per Debian/Devuan/Ubuntu ci basterà lanciare il comando:

```sudo eggs calamares --install```

**Nota**: In Arch possiamo utilizzare ```yay penguins-eggs```, ma dovremo successivamente anche lanciare 
```
sudo eggs calamares --install
```
per avere anche la possibilà che il nostro utente live possa utilizzare calamare senza specificare la password di accesso.


## Produzione della ISO

Una volta installato `eggs`, siamo pronti al grande salto.

Consiglio di utilizzare il comando `sudo eggs dad -d` che configura eggs con i parametri standard.

Successivamente, si potrà utilizzare il più immediato `sudo eggs produce` con le varie opzioni.

Con questo comando si avvia la costruzione dell'_uovo di pinguino_ che consiste sostanzialmente in tre fasi:

* creazione di una immagine del filesystem live montata con overlayfs - che è istantanea e senza alcuna copia dei dati utente - per permettere le modifiche per la realizzazione del filesystem per l'immagine;
* compressione dell'intero filesystem in /home/eggs/ovarium/iso/live/filesystem.squashfs;
* generazione dell'immagine iso dalla struttura precedente in /home/eggs/basename-X64\_AAAA-MM-GG-HHMM.iso

Il processo ha una certa pesantezza, non ve la prendete ne' con la copia del filesystem che non si effettua proprio e neppure con l'interfaccia grafica - serve un po' di tempo e vi esorto a non esagerare con le dimensioni della vostra iso. Ho visto iso fino a 16 GB, a mio avviso a meno di casi particolare conviene tenersi sotto i 4 GB, meglio ancora sotto i 2GB anche se non esiste alcun limite. 

La pesantezza è data dal fatto che dobbiamo comprimere l'intero filesystem e quindi, più è piccolo il nostro sistema, più veloce è la compressione, dipende pure molto dall'algoritmo usato.

Durante le prove quindi o quando lo riteniate opportuno, vi consiglio di usare `produce` senza alcuna opzione di compressione. Facendo così si utilizzerà l'algoritmo di compressione `zsd` invece del più "pesante" `xz` e si ridurrà notevolmente il tempo necessario alla compressione. Per la versione finale, una volta controllato che sia tutto a posto potremo comunque utilizzare la compressione `--standard`  per ottenere una ISO più snella, oppure l'opzione `--max` che comprime ancora un po' di più, al prezzo di una ulteriore lentezza.

Inizialmente era riportato a video ma anche nel codice, il suggerimento è prendersi un caffè e cercare di riservare abbastanza potenza di elaborazione alla macchina. Nel mio caso - utilizzo normalmente delle macchine virtuali con 4 core e 4 GB di memoria - per un filesystem di 7/8 GB occorrono circa _dieci minuti_ con la compressione xz, mentre utilizzando la compressione zsd si riduce moltissimo l'attesa solo un _minuto e mezzo_.  

**Morale della favola**

Quindi niente caffè e/o sigaretta e l'immagine ottenuta passa a _3,0 GB_ a fronte dei _2.00_ GB della compressione xz \(Vedi **nota**\).

Una sola raccomandazione. Normalmente si utilizza più volte questo comando sulla macchina dove si lavora e magari si è già prodotta una versione precedente. Raccomando di cancellare le immagini precedenti con il comando `sudo eggs kill` che rimuove l'intero albero di directory sotto /home/eggs.

**Nota**: _Non tutto il male vien per nuocere però. Se consideriamo che attualmente i DVD  si usano relativamente poco e le chiavette stanno diventando sempre più veloci, vi sono  casi la nostra remix potrebbe essere risultare più ottimizzata con un filesystem più grande ma meno compresso! Difatti, tenuto conto che durante l'uso - nascosto ai nostri occhi - ci sarà un continuo processo di lettura e decompressione del filesystem,  la decompressioone xz risulta comunque più lenta di quella lz4._ 

_Tenendo pure presente che non esiste più il limite delle dimensioni delle immagini iso a 4 GB, la soluzione di utilizzare sempre lz4 potrebbe rivelarsi doppiamente vantaggiosa, soprattutto in caso  di utilizzo con le macchine virtuali che  - quasi sempre - leggono direttamente  il file immagine su disco fisso invece di un reale DVD.  Inoltre, tutti i principali programmi per la creazione di chiavette avviabili  leggono i file iso._ 

---
# Immagini ISO prodotte con `eggs`
Non è mio scopo quello di realizzare una nuova distribuzione Linux, preferisco piuttosto costruire e mantenere il pacchetto e supportare chi - con passione - si occupa di tale attività.

Però anche qua vale il detto: nasce prima l'uovo o la gallina? 

E così, alcune remix le faccio comunque e continuo, impunentemente a proporle.

## Immagini realizzate dall'autore

Sono qui riportate una serie di remix realizzate da me stesso e create con Penguin's eggs. 

### Immagini generiche

In genere, anche per i test, utilizzo essenzialmente Debian in genere la stable, Arch linux e manjaro.

Amando però sia l'interfaccia Cinnamon che la distribuzione Linuxmint, sovente la rimasterizzo, così come pure deepin, KDE neon ed altre. Se una distribuzioni mi sembra interessante, cercare di riprodurla è anche un po' il mio metodo di analizzarla.

Però preferisco lasciare questo compito agli appassionati che su sulla customizzazione possono concentrare il proprio ingegno. Considerate pure le iso da me rilasciate come semplici esempi ad eccezione dell'aspetto tecnico.

### Immagini naked
Sono ottenute da una installazione minimale e senza interfaccia grafica. Solo i pacchetti di base e poco altro, un netinstall per intenderci. 

Però una versione naked contiene comunque il minimo indispensabile per la riproduzione.

A partire da queste immagini, ovviamente leggere, si può fare di tutto e dare inizio all'evoluzione. 

Possiamo installarci pacchetti desktop oppure server e disporremo sempre e comunque di un completo sistema di riproduzione, che permette quindi di rimasterizzarle ancora ed ancora. 

Utilizzando ```eggs wardrobe``` è possibile per Debian/Devuan/Ubuntu vestire la propria installazione naked con un "vestito" pre-confezionato. Ad esempio:

```eggs wardrobe get```

```sudo eggs wardrobe wear colibri```

Il nostro wardrobe è una repository [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe) che contiene alcune configurazioni, sia server che desktop, utilizzabili come base ed esempio.

Nel caso di Arch e manjaro, anche se non ho propriamente definito le customizzazioni come file .yaml, sono comunque disponibili degli script bash per la configurazione.

Si rimando alla documentazione di [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe#general-informations) per riferimento.

Mi aspetto un feedback dal wardrobe ed un certo interesse, a mio avviso potrebbe permettere di scambiare facilmente grosse moli di lavoro tra un customer ed un altro. Non esitate a forkare la repository e crearne una per le vostre necessità, questo renderebbe possibile successivamente integrarle nella repository principale e disponibili per altri sviluppatori.

### User e password

Tutte le remix create dal sottoscritto sono impostate con user live denominato **live** e password **evolution** valido sia per live che per root. 

* `live/evolution`
* `root/evolution`

### Scaricare `eggs` e le ISO

Tutte le versioni di `eggs` e le ISO realizzate dall'autore sono scaricabili da `sourgeforge.net` cercando il progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/).

## Immagini iso realizzate da terzi

Per un uso d'ufficio posso raccomandare [UfficioZero](https://www.ufficiozero.org/), una serie di più distribuzioni derivate da Debian, Devuan, Ubuntu e Linuxmint tutte finalizzate ad un orientamento professionale.

Mentre per un utilizzo più ludico, una versione interessante e che posso raccomandare perchè la utilizzo tutti i giorni, anche per scrivere queste note, è senz'altro [TeLOS](https://sourceforge.net/projects/teloslinux/) una snella distribuzione proveniente dalla Grecia.

Esiste anche una versione Ubuntu con [Waydroid](https://waydro.id/) pre-installato rilasciata da [BlissOS](https://blissos.org/) che è molto interessante e veloce per avere Android sul proprio PC.

**Nota:** Non esitate ad includere le vostre soluzioni!

# Supporto e segnalazioni

`eggs` è un progetto che, al momento, consente di rimasterizzare diverse versioni di Linux:

* `Arch`
* `Debian buster/bullseyes/bookworm + stretch/jessie`
+ `Devuan beowulf/chimaera`
* `manjaro`
* `Ubuntu bionic/focal/jammy`

e la maggior parte delle derivate, ne cito solo alcune: deepin, linux mint, lmde 4, KDE neon, pop-os!, zorin, etc.

E' evidente, che lo sviluppatore non può materialmente testare ogni release su tutte le versioni considerate.

E' perciò vitale che venga a crearsi una comunità di utenti, indipendentemente dall'attuale sviluppatore.

Potete segnalare le varie problematiche sulla pagina [issue](https://github.com/pieroproietti/penguins-eggs/issues) del progetto penguins-eggs su github.com.

# Comunità
Una comunità di utenti è fondamentale per la crescita di un progetto, creare qualcosa di versatile e pratico in fondo serve relativamente a poco se la gente non conosce il prodotto e, d'altra parte, avere un buon numero di utenti, fornisce feedback e motivazioni agli sviluppatori, migliorando quindi la qualità il progetto stesso.

Potete facilitare la diffusione di eggs e contribuire alla sua crescita in diversi modi:

* iscriversi al gruppo facebook [penguin's eggs](https://www.facebook.com/groups/128861437762355)

* contrassegnare con una stella il progetto su [github.com](https://github.com/pieroproietti/penguins-eggs);

* valutare questo progetto su [sourceforge](https://sourceforge.net/projects/penguins-eggs/) e/o creare una review sulla pagina stessa pagina.

Naturalmente, anche sponsorizzare o finanziare lo sviluppo potrebbe essere una opportunità.

# Ringraziamenti
Se siete giunti fino a questo passo, senza l'ausilio del tasto di scorrimento rapido, avete utilizzato parte del Vostro tempo - risorsa preziosa - per seguirmi su questo percorso e, quindi, è mio dovere e - ancor di più desiderio - ringraziarvi per il vostro interesse. 

Grazie a tutti e... happy hacking!

**Per favore**  collaborate se potete al progetto, condividetelo e consigliatelo, è importante giungere ad una certa diffusione perchè il progetto resti valido ed aggiornato. Grazie.

Piero Proietti


# Appendice: dipendenze di eggs

## Debian/Devuan/Ubuntu
Essenzialmente possiamo dividere i pacchetti da cui eggs dipende, in:

### pacchetti comuni
Questi pacchetto sono i prerequisiti di eggs per tutte le versioni installate.
 * `cryptsetup`
 * `dosfstools`
 * `dpkg-dev`
 * `isolinux`
 * `live-boot`
 * `live-boot-initramfs`
 * `lvm2`
 * `net-tools`
 * `parted`
 * `pxelinux`
 * `rsync`
 * `squashfs-tools`
 * `whois`
 * `xorriso`

### pacchetti dipendenti dalla architettura
A seconda della architettura sulla quale eggs è installato verranno selezionati differenti pacchetti. Le architetture possono essere: i386, amd64, armel ed arm64:
 * `syslinux`:  i386 / amd64;
 * `syslinux-efi`:  armel / amd64;
 * `ipxe`: armel / amd64;

### pacchetti dipendenti dalla versione
Questi pacchetti sono specifici della versione in uso. si noti che mentre è relativamente semplice cambiare il nome della distribuzione, non è affatto lo stesso per quanto riguarda la versione che è univoca.

Le versioni gestite da eggs sono: jessie, stretch, buster, bullsyes, bionic, focal, hirsute e beowulf.

Per alcune distribuzioni come linuxmint, ufficiozero ed altre che pur essendo delle derivate utilizzano dei nomi di versione diversi, sono ricondotte alla versione originale, così ad esempio linuxmint uma viene configurato come Ubuntu focal, mentre linuxmint tricia viene configurato come Ubuntu bionic.

 * `live-config: jessie, stretch, buster, bullseye, focal, groovy, hirsute`
 * `live-config-systemd: jessie, stretch, buster, bullseye, focal, groovy, hirsute`
 * `live-config-sysvinit: beowulf`
 * `open-infrastructure-system-config: bionic`

### pacchetti dipendenti dal tipo di init
Abbiamo bisogno di questo tipo di pacchetti, perchè alcune derivate di Debian buster - principalmente MX Linux - utilizzano sysvinit come init al posto di systemd anche se sono contraddistinte dalla stessa versione: buster.

 * `live-config-sysvinit sysvinit`

Mentre i pacchetti comuni e quelli dipendenti dalla architettura sono sempre installati automaticamente dagli script di preinstallazione, non è così per i pacchetti che dipendono dalla versione o dal tipo di inizializzazione. Per questi pacchetti è necessario il comando eggs config.

**Nota**: _I pacchetti per l'installer grafico calamares, non essendo indispensabili per la creazione della iso, non vengono installati automaticamente, semplicemente vengono proposti se ```force_installer: true``` durante la creazione della iso._

Potete comunque sempre installare calamares con il comando:

* ```sudo eggs calamares --install```

## `Arch linux`
Le dipendenze di penguins-eggs per Arch possono essere rilevate dal [PKGBUILD](https://github.com/pieroproietti/penguins-eggs-arch/blob/master/PKGBUILD)

* `arch-install-scripts`
* `dosfstools`
* `erofs-utils`
* `findutils`
* `grub`
* `libarchive`
* `libisoburn`
* `lsb-release`
* `lvm2`
* `mtools`
* `mkinitcpio-archiso`
* `mkinitcpio-nfs-utils`
* `nbd`
* `nodejs`
* `pacman-contrib`
* `parted`
* `python`
* `procps-ng`
* `pv`
* `rsync`
* `syslinux`
* `squashfs-tools`
* `xdg-utils`

## `Manjaro linux`
Le dipendenze di penguins-eggs per manjaro possono essere rilevate dal [PKGBUILD](https://github.com/pieroproietti/penguins-eggs-manjaro/blob/master/PKGBUILD)

* `arch-install-scripts`
* `awk`
* `dosfstools`
* `e2fsprogs`
* `erofs-utils`
* `findutils`
* `glibc-locales`
* `gzip`
* `libarchive`
* `libisoburn`
* `lvm2`
* `manjaro-tools-iso`
* `mtools`
* `nodejs`
* `openssl`
* `pacman`
* `parted`
* `rsync`
* `sed`
* `syslinux`
* `squashfs-tools`

# Uso di eggs con kernel diversi

Nomalmente non vi è alcun problema ad utilizzare eggs con Liquorix o Proxmox, l'unica avvertenza è che DOPO aver installato o aggiornato il kernel - PRIMA - di produrre la iso riconfigurare eggs con ```sudo eggs dad -d``` oppure procedere a mano modiifcando oppurtunamente il file ```/etc/penguins-eggs.d/eggs.yaml```.

Questo è l'esempio della mia stazione di lavoro, con kernel proxmox.

```
artisan@pve:~/Immagini$ cat /etc/penguins-eggs.d/eggs.yaml 
version: 9.3.8
snapshot_dir: /home/eggs/
snapshot_prefix: egg-of-debian-bullseye-
snapshot_excludes: /usr/local/share/penguins-eggs/exclude.list
snapshot_basename: pve
user_opt: live
user_opt_passwd: evolution
root_passwd: evolution
theme: eggs
force_installer: true
make_efi: true
make_md5sum: false
make_isohybrid: true
compression: zstd -b 256K -Xcompression-level 1
ssh_pass: true
timezone: America/New_York
locales_default: it_IT.UTF-8
locales:
  - it_IT.UTF-8
  - en_US.UTF-8
pmount_fixed: false
machine_id: 26cc5d34a162448cad5b47d861b579da
vmlinuz: /boot/vmlinuz-5.15.74-1-pve
initrd_img: /boot/initrd.img-5.15.74-1-pve
```
