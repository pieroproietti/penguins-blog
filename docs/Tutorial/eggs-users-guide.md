---
title: Eggs users' guide
authors: pieroproietti
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

In case of problems with translation links, You can consult a detailed [README](https://github.com/pieroproietti/penguins-eggs#readme) in English on the repository.


Manuale aggiornato a `eggs v10.0.x` ultimo aggiornamento 2 gennaio 2025


## Introduzione

![Un sistema riproduttivo per pinguini](/images/manjaro-uefi-booting.png)

`penguins' eggs` nasce con l'idea della "riproduzione" e "selezione delle popolazioni" applicata ai sistemi operativi. 

Erano i tempi di Remastersys e Systemback, due dei più diffusi programmi per rimasterizzare un sistema operativo - ad un certo punto - sia Remastersys, che aveva sempre sofferto di problemi di manutenzione da parte del suo autore, che Systemback furono in qualche modo dismessi. _Vedi **nota**_

Per la verità per un po' non vi fu problema alcuno, ma quando cominciarono i "primi dolori" per non poter più rimasterizzare le ultime versioni delle mie distro preferite, essenzialmente Debian e derivate, quella che era una idea, cominciò a prendere forma.

Volevo uno strumento nuovo, scritto con un linguaggio moderno e comune a più distribuzioni, provvisto di un proprio sistema di pacchettizzazione. La scelta cadde su nodejs, con javascript, successivamente sono passato a typescript come linguaggio di sviluppo.

Immaginai un processo di produzione dell'uovo, denominato produce, l'operazione di cova - ovvero l'installazione - originalmente denominata `hatch`. Gli altri comandi vennero da sè con `kill` preferito ad `abort` per togliere di mezzo le iso prodotte, `update` per gli aggiornamenti, `prerequisites` per installare i pacchetti .deb necessari al processo, [`calamares`](https://calamares.io/) per l'installazione e la configurazione dell'installer grafico.

Prima o poi, trattandosi di un uovo, troverò anche il modo di implementare un server PXE che lo distribuisca attraverso la rete locale, al momento oltre all'intenzione c'è il nome e non poteva essere che `cuckoo`, dal comportamento del cuculo che fa covare le proprie uova da altri.

## Installazione

Prima di cominciare a produrre le "uova" occorre esistere e dotarsi di un sistema riproduttivo. 

Per "esistere" intendiamo che deve esserci un sistema genitore già installato. Su questo, abbiamo diverse possibilità per l'installazione di `penguins-eggs`: 

* pacchetto precompilati
  * formato .deb per Debian/Devuan/Ubuntu e derivate
  * formato PKGBUILD per Arch e Manjaro
  * formato rpm per Openmamba
* tarballs installabili: per Almalinux, fedora e Rocky
* codice sorgente

Per la maggior parte degli utenti l'installazione del pacchetto precompilato è quella più indicata.



### Pacchetti .deb per Debian/Devuan/Ubuntu e derivate

I pacchetti .deb sono disponibili per tutte le distribuzioni originali e deridate da: `Debian`, `Devuan` ed `Ubuntu`.

Note: Dalla versione 10.0.x sto utilizzando un diverso metodo per pacchetizzare penguins-eggs: nodejs non è più incluso nel pacchetto come in precedenza, ma dipende dalla disponibilità di nodejs>18 tra i pacchetti disponibili nelle repositories.

Tutto ciò è configurato nel pacchetto penguins-eggs, che attualmente richiede nodejs (>= 18), nel suo fileDEBIAN/control.

Non tutte le distribuzioni e derivate, però hanno di default nodejs >=18 disponibile, nelle loro repository originali.

In questo caso possiamo aggiungere la repository nodesource per nodejs 18 o migliore.

```
sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
```

A questo punto, saremo pronti per installare penguins-eggs al nostro sistema.


Se non desiderate includere penguins-eggs-ppa fra le repository del vostro sistema, potete semplicemente scaricare l'ultima versione di eggs dal sito di [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/) ed installarla con il comando:

```
sudo dpkg -i penguins_eggs-10.0.x.deb
```

Se si tratta della prima installazione, il pacchetto non verrà installato per la mancanza delle dipendenze. Per concludere l'installazione vi basterà dare il comando:

```
sudo apt install -f
```

Naturalmente se sul vostro sistena è presente ```gdebi```, potete tranquillamente effettuare l'installazione in modalità grafica.

Una volta installato il pacchetto, si può utilizzare il comando `eggs tools ppa --add` per aggiungere la repository `penguins-eggs-ppa` ed ottenere tutti gli aggiornmenti di eggs tramite il comando `apt`. Per fare questo è sufficiente dare il comando:

```
sudo eggs tools ppa --add
```

### Pacchetti PKGBUILD e precompilati per Arch e derivate
Il metodo più semplice è agire con `get-eggs`:
```
git clone https://github.com/pieroproietti/penguins-eggs
cd penguins-eggs
sudo ./get-eggs
```
Su Arch e ed Endeavour penguins-eggs viene installato e viene configurata la repository Chaotic-AUR. Se una distribuzione Arch based non viene riconosciuta provate ad aggiungere manualmente la repository Chaothic-AUR, ed installate penguins-eggs. Potete anche segnalarlo così cercheremo di aggiungerla.

#### Utilizzando `Chaotic-AUR`
penguins-eggs non è presente nelle repository standard di Arch, mentre esiste nella repository chaotic-AUS, tutto quello che dobbiamo fare è configurarla:

```
 pacman-key --recv-key FBA220DFC880C036 --keyserver keyserver.ubuntu.com
 pacman-key --lsign-key FBA220DFC880C036
 pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```

A questo punto, aggiungiamo alla fine di `/etc/pacman.conf` il seguente testo:
```
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

A questo punto possiamo installare penguins-eggs con il comando: `sudo pacman -Sy penguins-eggs`

#### Utilizzando `yay` o `pkgbuild`
Se non volete includere Chaotic-AUR, potete sempre utilizzare usare `yay` per installare `eggs`:
```
yay penguins-eggs
```
oppure, più tradizionalmente, clonare il paccetto da aur e costruirlo con `pkgbuild -si`
```
git clone https://aur.archlinux.org/penguins-eggs.git penguins-eggs-aur
cd penguins-eggs-aur
pkgbuild -si
```

#### `Calamares su Arch Linux`
Su Arch e derivate - in genere non è presente il pacchetto calamares - e sto utilizzando per fornire [calamares-eggs](https://github.com/pieroproietti/penguins-packs/tree/master/aur/calamares-eggs) un pacchetto creato da me stesso. 

Questo pacchetto però non è presente ne' nelle repository standard e neppure in Chaotic-AUR, ma viene semplicemente creato e caricato sul sito penguins-eggs.net.

Su Arch, quindi, utilizzate il comando: `sudo eggs calamares --install` per scaricarlo ed installarlo.

>NOTE: calamares-eggs utilizza un il pacchetto `ckbcomp` presente solo in Chaotic-AUR. Se non avete installata questa repository è necessario un ulteriore workaround.

```
git clone https://github.com/pieroproietti/penguins-eggs-pkgbuilds
cd penguins-eggs-pkgbuilds/aur/ckbcomp
makepkg -si
```
Installato `ckbcomp`, potete tranquillamente installare calamares utilizzando `sudo eggs calamares --install`

### Pacchetti precompilati per Manjaro

Su Manjaro, `penguins-eggs` e `calamares` sono entrambi presenti nelle repository di Manjaro, per cui possiamo sia installare `penguins-eggs` con i comandi:

```
sudo pamac upgrade
sudo pamac install penguins-eggs
```
Sia installare `calamares` direttamente da `eggs` con il comando:
```
sudo eggs calamares --install
```

### Pacchetti rpm per Openmamba
Poichè penguins-eggs è disponibile su Openmamba, il metodo consigliateo è:
```
sudo dnf install penguins-eggs
```

Per installare calamares, anche qui: 
```
sudo eggs calamares --install
```

### Pacchetti tarball per almalinux/fedora/opensuse e Rocky
I pacchetti tarball consistono semplicemente in un tarball che viene estratto in `/opt/penguins-eggs` e contengono nodejs al loro interno.

E' necessario però installare i REQUISITES che sono diversi a seconda della distribuzione in uso.

Per facilitare l'installazione, è suggerito procedere con get-eggs:

```
git clone https://github.com/pieroproietti/penguins-eggs
cd penguins-eggs
sudo ./get-eggs
```

## Utilizzo di `eggs` da codice sorgente

Utilizzare `eggs` a partire dai sorgenti può essere estremamente utile sia per il `debug` che per modificare `eggs` stesso e fare delle aggiunte/correzioni. Può infine garantire una maggiore sicurezza - in caso di dubbi sul progetto - potrete osservare il codice che sta girando sulla vostra macchina. 

Con un po' di esperienza, potrete anche collaborare al progetto stesso!

E' necessario installare sia le [dipendenze](#dependencies) che i pacchetti `nodejs` ed `pnpm`. 

L'esempio seguente è riferito a Debian bookworm:

```
sudo apt install nodejs npm build-essential
```

Su Debian non è presente il pacchetto `pnpm`. Una volta installati nodejs ed npm, dare il comando:
```
sudo npm i pnpm -g
```

Su Arch Linux avremo:
```
sudo pacman -S nodejs pnpm 
```

mentre su Manjaro:
```
sudo pamac install nodejs pnpm devel-base
```
Per le distribuzioni basate su rpm, non sono un esperto, ma probablimente troverete il modo voi stessi.

A questo punto possiamo scaricare il sorgente di `penguins-eggs` con il comando:
```
git clone https://github.com/pieroproietti/penguins-eggs
```

Si entra nella directory penguins-eggs ```cd penguins-eggs``` e si immette:
```
pnpm install
```

(*) notare l'uso di `pnpm` invece del classico `npm`, ciò permette una più veloce compilazione.

Fatto questo, dalla stessa directory, si potrà utilizzare `eggs` direttamente dai sorgenti. 

Ad esempio:

```
sudo ./eggs produce --verbose
```   

**Nota**: _Potete constatare che l'unica differenza d'uso rispetto ai pacchetti precompilati è che dovrete indicare il path per avviare `eggs`: `./eggs` e dovrete lanciarlo obbligatoriamente dalla directory `~/penguins-eggs`. 

Il funzionamento rimane tuttavia esattamente lo stesso, ma si ha il vantaggio di poter agire in maniera interattiva con il codice.

Per lo sviluppo, personalmente utilizzo [code](https://code.visualstudio.com/), ma potete scegliere altri editor [atom](https://atom.io/), [sublime](https://www.sublimetext.com/), etc)_.

## La praticità di una applicazione CLI
Una applicazione CLI non deve per forza essere difficile da utilizzare, anzi, spesso è molto intuitiva, presenta per ogni comando flag come `--help`, `--verbose`, un manuale sempre disponibile ed aggiornato `man eggs`, ed aiuti vari, come `mom` e `dad`. Se sul nostro sistema è installato il pacchetto `bash-completion` avremo, inoltre, a disposizione le funzioni di autocomplete dei vari comandi.

### `--help`

Una volta installato il pacchetto disporremo, sul nostro sistema, di un nuovo comando: 

```
eggs
```

si otterrà la seguente schermata:

```
VERSION
  penguins-eggs/10.0.3 linux-x64 node-v20.5.1

USAGE
  $ eggs [COMMAND]

TOPICS
  export    export deb/docs/iso to the destination host
  tools     clean system log, apt, etc
  wardrobe  get warorobe

COMMANDS
  adapt         adapt monitor resolution for VM only
  analyze       analyze for syncto
  autocomplete  Display autocomplete installation instructions.
  calamares     configure calamares or install or configure it
  config        Configure eggs to run it
  cuckoo        PXE start with proxy-dhcp
  dad           ask help from daddy - TUI configuration helper
  help          Display help for eggs.
  install       krill: the CLI system installer - the egg became a penguin!
  kill          kill the eggs/free the nest
  krill         krill: the CLI system installer - the egg became a penguin!
  mom           ask help from mommy - TUI helper
  produce       produce a live image from your system whithout your data
  status        informations about eggs status
  syncfrom      restore users and user data from a LUKS volumes
  syncto        Save users and users' data ENCRYPTED
  update        update the Penguins' eggs tool
  version

```

### `autocomplete`
Se avete già chiuso e riaperto la finestra del terminale, potrete incominciare ad apprezzare anche l'autocomplete. 

Digitanto `eggs` e premento `TAB`, vi appariranno i vari comandi disponibili:

```
$ eggs 
adapt         config        help          produce       tools
analyze       cuckoo        install       status        update
autocomplete  dad           kill          syncfrom      version
calamares     export        mom           syncto        wardrobe
```
Se inserite un comando e date `TAB` appariranno invece i flags supportati dal comando stesso. 

Ad esempio: comando `eggs produce --`

```
$ eggs produce --
--addons         --excludes       --noicon         --release        --udf
--basename       --help           --nointeractive  --script         --unsecure
--clone          --links          --pendrive       --standard       --verbose
--cryptedclone   --max            --prefix         --theme          --yolk
```

Introducendo, invece `eggs produce --help` otterremo la schermata di aiuto del comando.

### `man eggs`

Come per ogni applicazione CLI che si rispetti, `eggs` è fornito di una apposita pagina `man` sempre a vostra disposizione, che possimo ottenere semplicemente con il comando: `man eggs`
```
EGGS(1)                                                                                       EGGS(1)

NAME
       eggs - the reproductive system of penguins: eggs v10.0.3

SYNOPSIS
       Install Debian families (debian/devuan/ubuntu)

         $ sudo dpkg -i penguins-eggs_10.0.3-1_amd64.deb

       Install Arch families (Arch, manjaro Linux)

       Arch from AUR

         $ git clone https://aur.archlinux.org/penguins-eggs.git
         $ cd penguins-eggs.git
         $ makepkg -si

       Arch from development repo

         $ git clone https://github.com/pieroproietti/penguins-eggs-arch
         $ cd penguins-eggs-arch
         $ makepkg -si

```

### `mom`
Infine, non v'è pulcino che non abbia una propria chioccia come guida! Così ho pensato di introdurre il comando `eggs mom`.

![eggs-mom](/img/users-guide/mom.png)

La "mamma" ci mette a disposizione una interfaccia interattiva per accompagnarci nei primi passi. Selezionando un comando lo stesso viene chiamato con l'opzione `--help`. L'esempio è ottenuto selezionando `cuckoo`:

```
PXE start with proxy-dhcp

USAGE
  $ eggs cuckoo [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  PXE start with proxy-dhcp

EXAMPLES
  sudo eggs cuckoo
```

## Configurazione di `eggs`

Per funzionare `eggs` ha bisogno di vari pacchetti installati: le cosidette `dependencies`, inoltre necessita di creare ed installare le pagine di `man` di `eggs` ed installare l'autocomplete di `eggs` stesso. Tutto questo viene curato dal processo di pacchettizzazione `.deb` o `PKGBUILD` che a sua volta sarà basato sul gestore di pacchetti della distribuzione in uso: `apt` o `pacman`.

Questo, tra l'altro, ha reso obsoleto il comando ```eggs config``` prima necessario, che viene sostituito - quasi completamente - da ```eggs dad``` combinato, eventualmente, con il flag ```--default``` o con il flag ```--file``` ed un file yaml di configurazione come in questo esempio:

```
sudo eggs dad --file custom.yaml
```

dove il file custom.yaml, contiene:

```
# custom.yaml
---
root_passwd: secret
snapshot_basename: columbus
snapshot_prefix: '' # none
user_opt_passwd: secret
user_opt: user 
```

Segnalo la presenza in `/etc/penguins-eggs.d` di tre differenti file di configurazione che vengono generati automaticamente durante l'installazione.

* `eggs.yaml` (configurazioni generali di eggs)
* `krill.yaml` (configurazioni per installazione unattended)
* `/tools.yaml` (principalmente per sviluppatori)

### `eggs.yaml`

`eggs.yaml` contiene le variabili principali utilizzate durante il processo di rimasterizzazione.

```
# Penguin's eggs
# eggs.yaml
---
compression: fast
force_installer: false
initrd_img: /boot/initrd.img-6.2.16-20-pve
machine_id: 604f58a358594f6a8833daa259a8b663
make_efi: true
make_isohybrid: true
make_md5sum: false
pmount_fixed: false
root_passwd: evolution
snapshot_basename: father
snapshot_dir: /home/eggs/
snapshot_excludes: /etc/penguins-eggs.d/exclude.list
snapshot_mnt: /home/eggs/.mnt/
snapshot_prefix: egg-of_debian-bookworm-
ssh_pass: false
theme: eggs
timezone: Europe/Rome
user_opt: live
user_opt_passwd: evolution
version: 10.0.3
vmlinuz: /boot/vmlinuz-6.2.16-20-pve
```

### `krill.yaml`
`krill.yaml` contiene i valori di default o i valori per l'installazione unattended con ```eggs install -u```

```
# Penguins' eggs
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


### `tools.yaml`
Lo scopo delle variabili di `tools.yaml` è quello di aiutare lo sviluppo di `eggs`, in sostanza mi sono molto utili per sviluppare, esportare pacchetti ed ISO ed eseguire aggiornamenti di `eggs` direttamente dalla rete locale. Generalmente il contenuto di questo file non viene utilizzato durante il normale funzionamento di `eggs`.

```
# Penguins' eggs
# tools.yaml
---
penguins_eggs_conf: /etc/penguins-eggs.d/eggs.yaml

# you can adapt this configuration to your needs
remoteHost: 192.168.1.2

# path to remote host
remotePathDeb: /eggs/
remotePathIso: /var/lib/vz/template/iso/

# always root
remoteUser: root

# path to local host
localPathDeb: /home/artisan/penguins-eggs/perrisbrewery/workdir/
localPathIso: /home/eggs

# filter package files
filterDeb: penguins-eggs_10.?.*-?_
```



### `sudo dad --default`
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


Naturalmente, i valori di default, non vanno bene per tutti, possiamo rimpiazzarli creand in file yaml nel quale andremo ad inserire i nostri valori.
A questo punto, chiameremo dad in questo modo:

```
sudo eggs dad --file custom.yaml
```

Ottentendo una configurazione personalizzata per la nostra distro.


## I comandi di `eggs`
`eggs` necessita dei diritti di root, quindi - tranne per `eggs mom`, `eggs info` ed i comandi di esportazione - DEVE essere chiamato preceduto da `sudo`

```
A remaster system tool, compatible with Arch, Debian, Devuan, Ubuntu and others

VERSION
  penguins-eggs/10.0.3 linux-x64 node-v20.5.1

USAGE
  $ eggs [COMMAND]

TOPICS
  export    export deb/docs/iso to the destination host
  tools     clean system log, apt, etc
  wardrobe  get warorobe

COMMANDS
  adapt         adapt monitor resolution for VM only
  analyze       analyze for syncto
  autocomplete  Display autocomplete installation instructions.
  calamares     configure calamares or install or configure it
  config        Configure eggs to run it
  cuckoo        PXE start with proxy-dhcp
  dad           ask help from daddy - TUI configuration helper
  help          Display help for eggs.
  install       krill: the CLI system installer - the egg became a penguin!
  kill          kill the eggs/free the nest
  krill         krill: the CLI system installer - the egg became a penguin!
  mom           ask help from mommy - TUI helper
  produce       produce a live image from your system whithout your data
  status        informations about eggs status
  syncfrom      restore users and user data from a LUKS volumes
  syncto        Save users and users' data ENCRYPTED
  update        update the Penguins' eggs tool
  version
```

Non vi fate spaventare da questi pochi comandi, quelli che utilizzeremo sono essenzialmente due: `eggs produce` per creare la iso ed `eggs kill` per cancellarla.

Ogni comando può avere alcuni flag. Alcuni sono comuni a tutti i comandi: `--verbose` ed `--help`. Naturalmente `--verbose` mostrerà una descrizione delle operazioni più dettagliata delle operazioni in corso, mentre `--help` o `-h` visualizzerà una breve descrizione del comando stesso.

Tra i vari comandi `produce` è quello che presenta il maggior numero di opzioni. Utilizzato senza un flag di compressine: `--standar` o `--max` userà l'algoritmo di compressione `zstd-level-1`, permettendovi così di risparmiare non poco tempo durante le fasi di sviluppo e test. Sempre in `produce` sono presenti i flag `--clone` e `--cryptedclone` che consentono di avere una copia completa del proprio sistema con i dati utente in chiaro o criptati.

Andiamo ad illustrare i comandi in rigoroso ordine alfabetico, per comodità dello scrivente. 

Tenete presente che i comandi che utilizzerete saranno soprattutto: `produce` e `kill`.

### `eggs adapt`

Adatta il video alle alla grandezza della finestra di una macchina virtuale. Lo trovo molto comodo per ridimensionare le macchine virtuali con interfacce grafiche diverse da cinnamon, gnome3, e KDE per la quali non è necessario. In pratica `eggs` richiama `xrandr` per adattare lo schermo alla risoluzione corrente. Non è strettamente relato alla produzione di ISO, è però comodissimo lavorando con le macchine virtuali.

### `eggs autocomplete`
Produce i file ```eggs.bash``` ed ```_eggs``` per il funzionamento dell'autocomplete di `bash` e `zsh`. Normalmente non è necessario utilizzarlo, perchè viene automaticamente configurato in fase di installazione. Se l'autocomplete non vi funziona, la ragione sarà probabilmente nella mancanza del pacchetto ```bash-completion``` o ```zsh-completions```.

### `sudo eggs calamares`
Installa e/o configura l'installatore grafico `calamares`. Può essere utilizzato anche per configurare una ISO che - prodotta senza `calamares` - la si voglia installare con esso. Basterà dare il comando: `sudo eggs calamares --install` e si avrà sia l'installazione del pacchetto, la sua configurazione e la configurazione di `calamares` per l'utilizzo senza necessità di inserire la password.

```
eggs calamares -h
```

### `sudo eggs cuckoo`
`cuckoo` offre una grande versatilità per le installazioni da eseguire su una rete locale. Il comando avvia un server PXE che permette a tutte le macchine della LAN di avviarsi dalla rete; questo ci risparmia la creazione di chiavette USB di avvio e, nella maggior parte dei casi, è anche più veloce e pratico.
Deve essere presente in rete un server dhcp reale che fornisca gli indirizzi ip. Il comando `eggs cuckoo` aggiungerà un servizio `proxy-dhcp` per fornire i dati aggiuntivi necessari al funzionamto PXE.

Tutto ciò che occorre fare è avviare un computer in rete - anche da live - ed eseguire il comando: 
```eggs sudo cuckoo```

A questo punto sarà possibile avviare le varie macchine da installare direttamente tramite il boot da rete locale. Il metodo funziona sia su computer con BIOS standard che su macchine UEFI.

### `sudo eggs dad`
Chiedi a papà come configurare `eggs` e generare la tua ISO!

Questo comando riassume in forma essenziale, i task necessari a produrre una ISO del sistema con `eggs`. 

Analizza la presenza o meno della configurazione, i pacchetti installati e, quindi fornisce la possibilità di configurare un prefisso alla vostra ISO, il suo nome, il nome dell'utente live e la sua password, la password di root sempre per il sistema live, il tipo di compressione e l'eventuale tema da utilizzare. Questi dati vengono salvati e prelevati dal suddetto file di configurazione `eggs.yaml`, per cui una volta configurati saranno utilizzati come default per tutte le operazioni successive.

```
E G G S: the reproductive system of penguins

      penguins-eggs       Perri's Brewery edition        ver. 10.0.3       
command: dad -d

Daddy, what else did you leave for me?
- creating configuration dir...
configurationInstall: /etc/penguins-eggs.d
Due the lacks of calamares package set force_installer = false
- distro template install...

Your configuration was saved on: /etc/penguins-eggs.d

You can create a clean ISO with: sudo eggs produce
or a full personal clone: sudo eggs produce --clone

If you don't have enough space to remaster, you can mount
some remote or local space. Follow the samples:
- first, create an hidden mountpoint under the nest:
sudo mkdir /home/eggs/.mnt -p
- then, mount remote space:
sudo sshfs -o allow_other root@192.168.1.2:/zfs/iso /home/eggs/.mnt
- or, mount a local partition:
sudo mount /dev/sdx1 /home/eggs/.mnt

More help? eggs mom
```

### `eggs export`
Questo è un comando che, alla stragrande maggioranza degli utenti, non serve! 

Non fa altro che generare a partire dai parametri di configurazione, quali ISO cancellare ed esportare nell'host. Mi spiego, durante la scrittura di `eggs`, sono costretto a generare una moltitudine di immagini ISO a partire da macchine virtuali ed, ad esportarle sulla mia stazione di lavoro. Per farlo utilizzo il comando scp, tuttavia digitare continuamente il comando e cancellare tutte le precedenti versioni di ISO presenti, è - diciamo così - fastidioso. Allo scopo, ho ideato questo comando.

L'esportazione delle ISO generate avviene a seconda dei parametri inseriti in ```/etc/penguins-eggs.d/tools.yaml```. Potete liberamente modificare questo file per adattarlo alle vostre esigenze.

Nel mio caso, utilizzo una stazione di lavoro con Proxmox VE e delle macchine virtuali, ho dovuto definire un `remoteHost`, `remoteUser`, etc per ogni tipologia di esportazione, nel mio caso esporto di volta in volta:
* pacchetti Debian
* immagini ISO

Naturalmente, nel caso siate facendo la riproduzione direttamente sul sistema e non di una macchina virtuale, avrete tutto nello stesso disco ed il problema non si pone. In questo caso i comandi di esportazione rimarranno inutilizzati.

```
export iso in the destination host

USAGE
  $ eggs export iso [-C] [-c] [-h] [-v]

FLAGS
  -C, --checksum  export checksums md5 and sha256
  -c, --clean     delete old ISOs before to copy
  -h, --help      Show CLI help.
  -v, --verbose   verbose

DESCRIPTION
  export iso in the destination host

EXAMPLES
  $ eggs export iso

  $ eggs export iso --clean
```

#### `eggs export deb`
Esporta i pacchetti deb. Notate che questo comando è utilizzato esclusivamente per lo sviluppo di eggs.

#### `eggs export iso`
Esporta l'immagine iso. Potete modificare a piacere sia l'host di esportazione che il path associato nel file **tools.yaml**. 

### `eggs help`

Come dice il comando stesso genera la lista dei comandi disponibili. A sua volta ogni comando con il flag -h o --help emette usa sua descrizione.

Ad esempio:

```
calamares
```

### `sudo eggs install`

Lancia l'installaler CLI del sistema operativo con krill.

E' possibile eseguire una installazione unattended, semplicemente con il comando:

```
sudo eggs install --unattended
```
![eggs-krill-unattended-on-arch](/images/book9.2/eggs-install-u.png)


#### Presentazione dell'installer `krill` (`eggs install`)

Lo scopo di `krill` non è quello di entrare in concorrenza con un progetto molto più ampio come `calamares`, piuttosto quello di affiancarlo in ambiti dove la potenza e la sofisticazione di calamares non sono disponibili perche manca una GUI, ad esempio in ambito server, oppure in caso di sistemi desktop nei quali non sia possibile utilizzare calamares perchè non disponibile, come per le versioni di Debian jessie e stretch. 

Inoltre, `krill` permette una installazione unattended ed è, proprio perchè più parco, generalmente estremamente più veloce.

Potete, infine, utilizzare `krill` su macchine desktop leggere con 2 GB di RAM o meno.

In tutti gli altri casi è consigliato utilizzare `calamares` che offre molte più possibilità: in particolare l'installazione dual-boot.

Vi è però una eccezione a questo schema generale, ed è la necessità utilizzare `krill` per ripristinare i backup criptati fatti con `eggs`. In questo caso l'utilizzo di `krill` è - al momento - indispensabile.

Utilizzate quindi `krill` solo quando è necessario ed opportuno  e, sono comunque abbastanza casi: installazioni unattended, installazioni si sistemi solo CLI, sistemi basati su Debian jessie o Debian stretch, installazioni su macchine con meno di 2GB di RAM. Per tutti gli altri casi è generalmente preferibile utilizzare [calamares](https://calamares.io/). 

#### Interfaccia di `krill`

`krill` è stato pensato per essere il più possibile simile ad un installer GUI anche se è un installer a riga di comando. La sua realizzazione è stata possibile grazie all'utilizzo della libreria [`ink`](https://github.com/vadimdemedes/ink) una libreria che porta [`react`](https://react.dev/) in ambito CLI.

Già dal nome, che identifica dei piccoli crostacei diffusi ai poli, prende spunto dal ben più famoso installer grafico `calamares` e ne ricalca sostanzialmente lo stesso schema visuale.

Abbiamo una finestra principale che è suddivisa sulla sinistra con i vari passi della procedura, mentre le varie tab: `welcome`, `location`, `keyboard`, `partitions`, `users`, `network`, `summary`, `installation` and `finish` aprono, ognuna, i propri form per la visualizzazione o l'immissione e modifica dei dati necessari.

L'insieme è ordinato e cerca di ricordare `calamares` ed `ubiquity` - ben più blasonati installer -  questo, per un semplice installer TUI è già molto.

Naturalmente siamo in ambiente CLI e, quindi, niente mouse ma esclusivamente tastiera, utilizzando però i tasti di direzione ed invio.

Per l'introduzione dei dati verrà utilizzata la parte sottostante dove andremo ad immettere o selezionare i nostri dati ed avanzeremo accettando i valori immessi,

Si procederà quindi da `welcome` sino a `summary` ed una volta accettate le scelte in `summary` partirà la nostra installazione.

**Nota**: _in attesa che scriva un apposito modulo per `calamares` per il restore dei dati creato da `eggs`, l'installazione con l'installer `krill` al momento è indispensabile per il restore automatico dei backup realizzati con `eggs`._

#### `krill`: i vari passi dell'installazione
L'installazione con `krill` procede attraverso alcuni step, comuni  a `calamares` ed aventi la stessa denominazione, che conducono sino alla schermata finale ed alla richiesta di riavvio.

##### `krill: welcome`
`welcome` è la prima schermata di `krill` ed è il posto dove potremo cambiare la lingua. Disporremo solo delle lingue incluse nella nostra ISO, per cui normalmente accetteremo il default.

![eggs-krill-welcome](/images/book9.2/eggs-install-welcome.png)

##### `krill: location`

In `location` potremo selezionare e variare la nostra area geografica e la nostra zona per l'impostazione del fuso orario. Le aree e le zone sono complete, non è così per le lingue che non verranno neppure proposte (vengono preselezionate dall'impostazione della lingua in `welcome`).

![eggs-krill-location](/images/book9.2/eggs-install-location.png)

##### `krill: keyboard`
Stiamo trattando di un programma per l'installazione a misura per le nostre customizzazioni, quindi, se vogliamo avere altre lingue, dobbiamo ricordarci di aggiungerle attraverso `dpkg-reconfigure locales`. `krill` permetterà la selezione solo delle lingue già presenti ed, per il momento, non è un dramma per lo scopo di questo installer. Anche se non è escluso che in futuro faremo di meglio.

![eggs-krill-keyboard](/images/book9.2/eggs-install-keyboard.png)

##### `krill: partition`

In `partitions` il discorso si fa più ampio. `krill` vuole un dispositivo sul quale installare il nostro sistema. L'installazione con `krill` cancellerà interamente il dispositivo in questione, non è possibile partizionare manualmente il disco.

La prima cosa che `krill` riporta nella schermata è l'avviso di cancellazione totale del disco di destinazione, meglio essere chiari! Subito dopo ci mostra se siamo su un sistema con boot BIOS o UEFI.

In questa schermata pure sono presenti quattro campi, tutti selezionabili: 
* `installation device: /dev/sda`
* `installation mode: standard`
* `filesystem: ext4`
* `user swap choice: small`

E' quindi possibile selezionare un dispositivo che `krill` rileverà tra quelli disponibili, una modalità di installazione - al momento solo la modalità `standard`, ma sto lavorando per la `full-encrypt`, la formattazione del filesystem e la grandezza della partizione di swap.

Sarà però `krill` a decidere come partizionare il `device` a seconda del tipo di boot e dell'installazione scelta, non è possibile per ora utilizzare uno schema di partizioni manuale.

![eggs krill partitions](/images/book9.2/eggs-install-partitions.png)

##### `krill: users`

In questo form `users` andrà indicato l'utente principale del sistema, la sua password, la conferma della stessa e l'eventuale utilizzo dell'autologin; la password di root e conferma ed, infine, il nome dell'host.

![eggs krill users](/images/book9.2/eggs-install-users.png)

##### `krill: network`

In `network` è possibile scegliere l'interfaccia di rete tra quelle disponibili e selezionare per essa la modalità tra dhcp e static. Nel caso di static si potranno impostare indirizzo `ip`, la `netmask`, il `gateway`, `domain` e `dns`.

![network](/images/book9.2/eggs-install-network.png)

##### `krill: summary`

`summary` è un semplice riepilogo delle varie scelte effettuate, permette un rapido controllo visivo ed attende per una conferma o una rinuncia.

![eggs krill summary](/images/book9.2/eggs-install-summary.png)

##### `krill: installation`

Dopo aver accettato la finestra `summary`, parte l'installazione del sistema. In `installation` avremo la possibiità di seguire passo - passo le varie fasi dell'installazione sino al passaggio alla fase finale.

![installation](/images/book9.2/eggs-install-unpackfs.png)

#### `krill finish`
`finish` è una semplice quadro che ci notifica la fine della installazione e la necessità di un riavvio.

![eggs krill finished](/images/book9/eggs-krill-finished.png)


### `sudo eggs kill`

Cancella le immagini realizzate e la directory di lavoro di `eggs`. 

```
 E G G S: the reproductive system of penguins

      penguins-eggs       Perri's Brewery edition        ver. 10.0.3       
command: kill 

Disk space used: 330.6 GB
Space available: 505 GB
There are 0 snapshots taking 0 GB of disk space.

The free space should be sufficient to hold the
compressed data from the system
? Select yes to continue...  (Use arrow keys)
❯ No 
  Yes 
```

**Nota**: _in caso per interruzione del comando `eggs produce`, sarà impossibile cancellare le directory montate. Il metodo più veloce è semplicemente eseguire un riavvio del sistema e lanciare nuovamente il comando `sudo eggs kill`_.


### `eggs mom`
`eggs mom` è una interfaccia realizzata con [easybashgui](https://github.com/BashGui/easybashgui), che utilizza [whiptail](https://linux.die.net/man/1/whiptail= disponibile praticamente su ogni versione Linux anche CLI, oppure [xdialog](http://xdialog.free.fr/), [zenity](https://help.gnome.org/users/zenity/stable/) o [kdialog](https://github.com/KDE/kdialog) che permette di avere una interfaccia grafica o simil grafica, nella quale ho raggruppato tutti i comandi eggs e la documantazione.


#### `eggs mom`

Una immagine vale più di mille parole, questa è la schermata iniziale di ```eggs mom```

![eggs-mom](/img/users-guide/mom.png)

Dal menu principale si accede a tutti i comandi di `eggs` ed ai sottomenu Documentation, Export e Tools.

#### `mom`: `Documentation`
In questo menù potete consultare sia il sito che i manuali, sia in formato `html` che `man`. 

![eggs-mom-documentation](/img/users-guide/mom-documentation.png)

Ecco ad esempio come risulta la schermata della pagina man di eggs in formato html, consultabile anche in assenza di connessione.

![mon-man-html.png](/img/users-guide/mon-man-html.png)

Attenzione: per gli utenti `Arch Linux` e `Manjaro Linux`: non sono riuscito a trovare un equivalente di sensible_browser che utilizzo in Debian per individuare il browser di default installato. Se qualcuno ha un suggerimento, sarà gradito.

Naturalmente se state operando su una stazione solo cli, avrete comunque disponibili le vostre informazioni in formato man.

Potete tornare indietro da ogni menù selezionando **quit** (basta premere il tasto "q" seguito da invio).

`mom` rappresenta una versatile guida per l'apprendimento di `eggs` ed un sicuro riferimento. 

Naturalmente con il tempo ogni "pulcino" viene svezzato ed impara a camminare da solo e sarà più comodo immettere direttamente i comandi da terminale.

A questo proprosito ricordate che `eggs` fornisce l'autocomplete dei comandi, quindi, ad esempio digitando:

`sudo eggs [TAB][TAB]`
vi verranno mostrati i possibili comandi;

`sudo eggs i [TAB][TAB]`
vi verranno mostrati solo i comandi che iniziano per i: `info` ed `install`;

`sudo eggs produce --[TAB][TAB]`
vi verranno mostrati tutti i possibili flag del comando `produce`.

E così via discorrendo.

### `sudo eggs produce`

E' questo il comando che più utilizzerete. 

Sostanzialmente `produce` è l'unico comando usato quotidianamente, insieme a `kill` che ci consente di sbarazzarci delle immagini iso precedentemente create.

Usato senza parametri produce la iso con i parametri di default che sono quelli specificati con `sudo eggs dad` o impostati editanto il file `/etc/penguins-eggs/eggs.yaml`. 

Al suo avvio `produce` esegue velocemente un controllo sulla corretta inizializzazione di `eggs`, quindi, produce la ISO.

Presenta diversi flag utilizzabili:

```
E G G S: the reproductive system of penguins

      penguins-eggs       Perri's Brewery edition        ver. 10.0.3       
command: kill 

Disk space used: 330.6 GB
Space available: 505 GB
There are 0 snapshots taking 0 GB of disk space.

The free space should be sufficient to hold the
compressed data from the system
? Select yes to continue...  (Use arrow keys)
❯ No 
  Yes 
```

Di gran lunga la modalità d'uso che utilizzo è `sudo eggs produce` o `sudo eggs produce --adapt` se sono su XFCE o Mate ed avere sul desktop del live il link per ridimensionare la finestra video della mia macchina virtuale. `eggs` da questa versione utilizza la compressione veloce come default, non è quindi più presente il vecchio flag `--fast`. Se voglio controllare cosa sta succedendo, posso aggiungere `--verbose`.

```
produce a live image from your system whithout your data

USAGE
  $ eggs produce [--addons <value>...] [--basename <value>] [-c] [-C] [--excludes
    <value>...] [-h] [--links <value>...] [-m] [-N] [-n] [-p] [-P <value>] [--release] [-s] [-f]
    [--theme <value>] [-u] [-v] [-U] [-y]

FLAGS
  -C, --cryptedclone         crypted clone
  -N, --noicon               no icon eggs on desktop
  -P, --prefix=<value>       prefix
  -U, --udf                  use UDF format on ISO with genisoimage breacking 4.7 G limit
  -c, --clone                clone
  -f, --standard             standard compression: xz -b 1M
  -h, --help                 Show CLI help.
  -m, --max                  max compression: xz -Xbcj ...
  -n, --nointeractive        no user interaction
  -p, --pendrive             optimized for pendrive: zstd -b 1M -Xcompression-level 15
  -s, --script               script mode. Generate scripts to manage iso build
  -u, --unsecure             /root contents are included on live
  -v, --verbose              verbose
  -y, --yolk                 force yolk renew
      --addons=<value>...    addons to be used: adapt, ichoice, pve, rsupport
      --basename=<value>     basename
      --excludes=<value>...  use: static, homes, home
      --links=<value>...     desktop links
      --release              release: remove penguins-eggs, calamares and dependencies after
                             installation
      --theme=<value>        theme for livecd, calamares branding and partitions

DESCRIPTION
  produce a live image from your system whithout your data

EXAMPLES
  sudo eggs produce                    # fast compression

  sudo eggs produce --max              # max compression

  sudo eggs produce --pendrive         # compression optomized pendrive

  sudo eggs produce --clone            # clone

  sudo eggs produce --cryptedclone     # crypted clone

  sudo eggs produce --basename=colibri

  sudo eggs produce --theme lastos

  sudo eggs produce --excludes static  # you can customize it

  sudo eggs produce --excludes homes   # exclude /home/*

  sudo eggs produce --excludes home    # exclude ~/*
```


Tra i flag disponibili c'è `--theme` che imposta il tema per `grub` ed `isolinux` sull'immagine ISO e per l'installer GUI `calamares`. 

Potete creare un tema personalizzato semplicemente copiandone uno esistente e cambiandone nome e contenuto. Scaricate il `wardrobe` con: `eggs wardrobe get`, i temi si trovano in ```.wardrobe/themes/vendor```, dove vendor è il nome da passare al flag --theme. 

I temi consentono una customizzazione di `calamares` e la possibilità di avere un proprio `splash-screen` durante l'avvio del sistema live.

Un altro flag, importante per gli utenti che vogliono realizzare una distro è `--release` che configura calamares e krill per disinstallare `calamares` e `penguins-eggs` a fine installazione.

Abbiamo poi due flag per la copia completa del sistema: `--clone` e `--cryptedclone`, che sostanzialmente producono una iso nella quale sono presenti i dati utente. La differenza tra questi due flag è che mentre clone produce una iso nella quale i dati utente sono in chiaro ed utilizzabili anche dal sistema live, il flag `--cryptedclone` invece crea all'interno della ISO un volume `LUKS` nel quale i dati saranno cryptati e, questi non disponibili immediatamente da live. Per reinstallare un clone criptato si utilizza `krill`.


Uso spesso anche il flag `--addons` per inserire sul desktop il link per `adapt` o altri links nelle ISO realizzate.

#### `sudo eggs produce --clone / sudo eggs produce --cryptedclone`

Per molto tempo ho esitato ad aggiungere una modalità per la copia completa del sistema, non perchè fosse complicato, ma perchè temevo il caso che un utente possa inserire nella iso dei propri dati sensibili. Tuttavia, in seguito ad una discussione con un utente, al quale avrebbe fatto comodo per poter trasferire in toto i propri server, mi sono deciso ad aggiungerla prima in modalità criptata con un volume LUKS interno alla iso stessa e successivamente anche in chiaro.

Difatti `eggs` durante l'utilizzo normale esclude sempre dal filesystem della live l'intera cartella /home, inoltre, rimuove tutti gli account presenti sull'host, aggiungendo solo l'utente live.

Con l'opzione `--cryptedclone` però, pur continuando a funzonare esattamente nello stesso modo, eggs inserisce un nuovo passo all'interno della produzione della ISO e prima della sua chiusura. In questa fase viene creato un volume cryptato denominato `luks-users-data` sul quale si andranno a copiare i dati di tutti gli utenti presenti ed i loro relativi account.

Questo consente quindi di distribuire la propria iso con una ragionevole sicurezza.

Sarà possibile accedere ai dati degli utenti solo se si è a conoscenza della chiave di accesso, che però **non viene mai salvata** ed è quindi non scopribile se non con attacchi brute force.

La live che, per chiarezza, prende il suffisso `crypted` si avvia normalmente con il solo utente live e non carica in modalità live il volume criptato.

Però, nel caso di nuova installazione, `krill` controlla la presenza del volume `luks-users-data*` all'interno della immagine iso e, se viene rilevato, richiede la passphrase di accesso per montare tale volume e copiare i dati e gli account degli utenti nel sistema appena installato.

Riavviando il sistema, quindi, ci ritroveremo i nostri utenti ed i nostri dati presenti sulla nuova installazione.

Tutto questo, è possibile attualmente solo con l'installer `krill`. Utilizzando calamares invece, non venendo effettuato il controllo sulla eventuale esistenza dei dati degli utenti e verrà installato solo il sistema, con account ed /home vergine, proprio come succede per una iso normale.

#### `sudo eggs produce --clone`
La differenza tra l'opzione `--cryptedclone` e l'opzione `--clone` è che in quest'ultimo caso i dati utente non saranno salvati in un volume cryptato all'interno della immagine ISO, ma verranno direttamente copiati all'interno del `filesystem.squashfs`. Questo comporta vantaggi e svantaggi: il principale vantaggio è che si hanno i propri dati e le proprie configurazioni direttamente disponibili su live, lo svantaggio è che se pubblicate la vostra immagine, tutti i dati utente saranno direttamente a disposizione di chi scarica la ISO.

Anche se a prima vista, per me specialmente, questa soluzione - che è poi la più semplice - non appariva adatta, tuttavia grazie agli utenti mi sono reso conto che è invece estremamente versatile, in quanto molti customizzatori utilizzano spesso la propria home per le modifiche ed in questo modo non è necessario salvarle in `/etc/skel`.

### `sudo eggs tools`

Sono raccolti sotto tools degli strumenti accessori di eggs, non sono fondamentali, ma possono far comodo.
```
clean system log, apt, etc

USAGE
  $ eggs tools COMMAND

COMMANDS
  tools clean  clean system log, apt, etc
  tools ppa    add/remove repo
  tools skel   update skel from home configuration
  tools stat   get statistics from sourceforge
  tools yolk   configure eggs to install without internet
  ```

Abbiamo `tools clean` che esegue la pulizia del sistema cancellando la cache del gestore dei pacchetti (apt o pacman) ed esegue la rotazione dei log, `tools skel` che permette di configurare l'aspetto del desktop live e del desktop di default dei nuovi utenti, `tools yolk` - solo per Debian/Devuan/Ubuntu - che aggiorna la repository inclusa in `/usr/local/yolk` che viene utilizzata da eggs per caricare i pacchetti indispensabili all'installazione in assenza di connessione internet. 

#### `sudo eggs tools clean`
Rimuove la cache del gestore di pacchetti (apt o pacman), esegue il logrotate, etc.


#### `sudo eggs tools ppa`
Aggiunge o rimuove la repository di `eggs` alla nostra configurazione apt.
```
sudo eggs tool ppa --add
```
Aggiunge la repository [penguins-eggs-ppa](https://github.com/pieroproietti/penguins-eggs-ppa)

```
sudo eggs tool ppa --remove
```
Rimuove la stessa.

#### `sudo eggs tools skel`
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
  sudo eggs tools skel

  sudo eggs tools skel --user user-to-be-copied
```

#### `sudo eggs tools yolk`
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
  sudo eggs tools yolk
```

### `eggs status`

Mostra a video la configurazione di `eggs` e del sistema. 

```
E G G S: reproductive system of penguins


     penguins-eggs       Perri's brewery edition        ver. 10.0.3       
╭───────────────────────────╮  ╭───────────────────────────╮  ╭──────────────────────────────────────╮
│live user/  root passwd:   │  │nest: /ho  name: egg-of_   │  │kernel: /boot/vmli   initrd.img:      │
│passwd:     evolution      │  │me/eggs/   debian-bookwo   │  │nuz-6.2.16-20-pve    /boot/initrd.im  │
│live/evolu                 │  │           rm-father       │  │                     g-6.2.16-20-pve  │
│tion                       │  │                           │  │                                      │
╰───────────────────────────╯  ╰───────────────────────────╯  ╰──────────────────────────────────────╯
╭───────────────────────────────────────────╮  ╭─────────────────────────────────────────────────────╮
│distro: Debian 12    compatible: Debian    │  │configuration  uefi:   installer:    init system:    │
│bookworm             bookworm              │  │s: OK          OK      krill         systemd         │
╰───────────────────────────────────────────╯  ╰─────────────────────────────────────────────────────╯

╭────────────────────────────────────────────────────────────────────────────────────────────────────╮
│eggs install install your CLI iso with TUI installer krill, on GUI prefere calamares                │
│eggs wardrobe build your personal system starting from cli                                          │
│                                                                                                    │
│Info:  blog    https://penguins-eggs.net                                                            │
│       sources https://github.com/pieroproietti/penguins-eggs                                       │
│       wardrobe https://github.com/pieroproietti/penguins-wardrobe                                  │
╰────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

Da notare sulla destra la presenza di bottoni rossi, che possono indicare problemi con le dipendenze, configurazione, etc.

### `sudo eggs update`

Esegue l'aggiornamento di `eggs`, è un comando che è rimasto poichè spesso, durante lo sviluppo devo aggiornare eggs dalla rete locale, per gli utenti finali è senz'altro opportuno utilizzare il gestore di pacchetti della propria distribuzione.

### `eggs version`
Mostra la versione di eggs e del pacchetto node.

```
USAGE
  $ eggs version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that
    the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.1.4/src/commands/version.ts)_

### `eggs wardrobe get [REPO]`
Scarica il `wardrobe` dalla repository indicata in `REPO`, se non viene fornito alcun parametro, viene utilizzato il [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe).

```
et warorobe

USAGE
  $ eggs wardrobe get [REPO] [-h] [-v]

ARGUMENTS
  REPO  repository to get

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  get warorobe

EXAMPLES
  $ eggs wardrobe get

  $ eggs wardrobe get your-wardrobe
```

### `eggs wardrobe list [WARDROBE]`
Elenca i `costume` e gli `accessories` disponibili nel `WARDROBE` utilizzato.

```
USAGE
  $ eggs wardrobe list [REPO] [-d <value>] [-h] [-v]

ARGUMENTS
  REPO  wardrobe to get

FLAGS
  -d, --distro=<value>  distro
  -h, --help            Show CLI help.
  -v, --verbose

DESCRIPTION
  list costumes and accessoires in wardrobe

EXAMPLES
  $ eggs wardrobe list

  $ eggs wardrobe list your-wardrobe

  $ eggs wardrobe list --distro arch
```

### `eggs wardrobe show [COSTUME]`
Stampa a video il contenuto di `index.yaml` del `COSTUME`

```
show costumes/accessories in wardrobe

USAGE
  $ eggs wardrobe show [REPO] [-h] [-j] [-v] [-w <value>]

ARGUMENTS
  REPO  costume to show

FLAGS
  -h, --help              Show CLI help.
  -j, --json              output JSON
  -v, --verbose
  -w, --wardrobe=<value>  wardrobe

DESCRIPTION
  show costumes/accessories in wardrobe

EXAMPLES
  $ eggs wardrobe show colibri

  $ eggs wardrobe show accessories/firmwares

  $ eggs wardrobe show accessories/
```

### `eggs wardrobe wear [COSTUME]`
Indossa, per intendersi installa i pacchetti e le componenti del COSTUME indicato.

```
USAGE
  $ eggs wardrobe wear [COSTUME] [-h] [-a] [-f] [-s] [-v] [-w <value>]

ARGUMENTS
  COSTUME  costume

FLAGS
  -a, --no_accessories    not install accessories
  -f, --no_firmwares      not install firmwares
  -h, --help              Show CLI help.
  -s, --silent
  -v, --verbose
  -w, --wardrobe=<value>  wardrobe

DESCRIPTION
  wear costume/accessories from wardrobe

EXAMPLES
  sudo eggs wardrobe wear duck

  sudo eggs wardrobe wear accessories/firmwares

  sudo eggs wardrobe wear wagtail/waydroid
```

## Creazione di una nostra remix
La creazione di una nostra remix è un processo che richiede pazienza e passione ma può darci grandi soddisfazioni ed in molti casi, farci risparmiare tempo e fatica.

Scarichiamo la nostra distribuzione che intendiamo customizzare, scegliendo tra `Arch`, Debian: buster, bullseye. bookworm;  Devuan: beowulf, chimaera; manjaro,  Ubuntu: bionic, focal, groovy, impish  o derivate.

Installiamola normalmente, aggiorniamola e facciamo qualche forma di customizzazione prima di passare alla creazione delle iso.

### Inizializzazione e prerequisiti

Installiamo quindi `eggs`, con uno dei metodi descritti in precedenza a seconda della nostra versione di Linux.

A questo punto, siamo ad un solo passo dalla nostra prima immagine ISO.

```
sudo eggs dad -d
```

L'aiuto di papà ci farò risparmiare tempo e fatica, impostando sui default la configurazione di `eggs`, alla fine del processo, basterà dare il comando:

```sudo produce```

per ottenere la nostra prima rimasterizzazione.

Se vogliamo che la nostra ISO sia installabile con l'installer grafico `calamares`, dovremo aggiungerlo **PRIMA** di produrre la ISO. Per Debian/Devuan/Manjaro ed Ubuntu ci basterà lanciare il comando:

```sudo eggs calamares --install```

**Nota**: In Arch possiamo utilizzare ```yay penguins-eggs```, ma dovremo successivamente anche lanciare 
```
sudo eggs calamares --install
```
per avere anche la possibilà che il nostro utente live possa utilizzare calamare senza specificare la password di accesso.


### Produzione della ISO

Una volta installato `eggs`, siamo pronti al grande salto.

Consiglio di utilizzare il comando `sudo eggs dad -d` che configura eggs con i parametri standard.

Successivamente, si potrà utilizzare il più immediato `sudo eggs produce` con le varie opzioni.

Con questo comando si avvia la costruzione dell'_uovo di pinguino_ che consiste sostanzialmente in tre fasi:

* creazione di una immagine del filesystem `live` montata con `overlayfs` - che è istantanea e senza alcuna copia dei dati utente - per permettere le modifiche per la realizzazione del filesystem per l'immagine;
* compressione dell'intero filesystem in `/home/eggs/ovarium/iso/live/filesystem.squashfs`;
* generazione dell'immagine iso dalla struttura precedente in `/home/eggs/basename-X64\_AAAA-MM-GG-HHMM.iso`

Il processo ha una certa pesantezza, non ve la prendete ne' con la copia del filesystem che non si effettua proprio e neppure con l'interfaccia grafica - serve un po' di tempo e vi esorto a non esagerare con le dimensioni della vostra ISO. Ho visto ISO fino a 20 GB, a mio avviso a meno di casi particolare conviene tenersi sotto i 4/5 GB, meglio ancora sotto i 2GB anche se non esiste alcun limite. 

La pesantezza è data dal fatto che dobbiamo comprimere l'intero filesystem e quindi, più è piccolo il nostro sistema e più veloce è la compressione. Dipende pure molto dall'algoritmo usato per la compressione dei dati.

Durante le prove quindi o quando lo riteniate opportuno, vi consiglio di usare `produce` senza alcuna opzione di compressione. Facendo così si utilizzerà l'algoritmo di compressione `zstd-level-1` invece del più "pesante" `xz` e si ridurrà notevolmente il tempo necessario alla compressione. Per la versione finale, una volta controllato che sia tutto a posto potremo comunque utilizzare la compressione `--standard`  per ottenere una ISO più snella, oppure l'opzione `--max` che comprime ancora un po' di più, al prezzo di una ulteriore lentezza.

Inizialmente - era mostrato sia video che nel codice - il suggerimento è prendersi un caffè e cercare di riservare abbastanza potenza di elaborazione alla macchina. Nel mio caso - utilizzo normalmente delle macchine virtuali con 4 core e 4 GB di memoria - per un filesystem di 7/8 GB occorrono circa _dieci minuti_ con la compressione xz, mentre utilizzando la compressione zstd si riduce moltissimo l'attesa solo un _minuto e mezzo_.  

**Morale della favola**

Quindi niente caffè e/o sigaretta e l'immagine ottenuta passa a _3,0 GB_ a fronte dei _2.00_ GB della compressione xz.

Una sola raccomandazione. Normalmente si utilizza più volte questo comando sulla macchina dove si lavora e magari si è già prodotta una versione precedente. Raccomando di cancellare le immagini precedenti con il comando `sudo eggs kill` che rimuove l'intero albero di directory sotto `/home/eggs`.

**Nota**: _Non tutto il male vien per nuocere però. Se consideriamo che attualmente i DVD  si usano relativamente poco e le chiavette stanno diventando sempre più veloci, vi potrebbero essere  casi la in cui l'immagine live potrebbe essere risultare più ottimizzata con un filesystem più grande ma meno compresso! Difatti, tenuto conto che durante l'uso - nascosto ai nostri occhi - ci sarà un continuo processo di lettura e decompressione del filesystem,  la decompressioone xz risulta comunque più lenta di quella lz4._ 

_Tenendo pure presente che non esiste più il limite delle dimensioni delle immagini iso a 4 GB, la soluzione di utilizzare sempre lz4 potrebbe rivelarsi doppiamente vantaggiosa, soprattutto in caso  di utilizzo con le macchine virtuali che  - quasi sempre - leggono direttamente  il file immagine su disco fisso invece di un reale DVD.  Inoltre, tutti i principali programmi per la creazione di chiavette avviabili  leggono i file iso._ 

---
## Immagini ISO
Non è mio scopo quello di realizzare una nuova distribuzione Linux, preferisco piuttosto costruire e mantenere il pacchetto e supportare chi - con passione - si occupa di tale attività.

Però anche qua vale il detto: nasce prima l'uovo o la gallina? 

E così, alcune remix le faccio comunque e continuo - impunentemente - a proporle.

Sono qui riportate una serie di remix realizzate da me stesso e create con Penguin's eggs. 

### Immagini generiche

In genere, anche per i test, utilizzo essenzialmente Debian in genere la stable, `Arch Linux` e Manjaro.

Amando però sia l'interfaccia Cinnamon che la distribuzione Linuxmint, sovente la rimasterizzo, così come pure deepin, KDE neon e avariate altre. Se una distribuzioni mi sembra interessante, cercare di riprodurla è anche un po' il mio metodo di analizzarla.

Però preferisco lasciare questo compito agli appassionati che su sulla customizzazione possono concentrare il proprio impegno. Considerate pure le ISO da me rilasciate come semplici esempi piuttosto che come sistemi finiti.

### Immagini `naked`
Sono ottenute da una installazione minimale e senza interfaccia grafica. Solo i pacchetti di base e poco altro, un netinstall per intenderci. 

Però una versione `naked` contiene comunque il minimo indispensabile per la riproduzione.

A partire da queste immagini, ovviamente leggere, si può fare di tutto e dare inizio all'evoluzione. 

Possiamo installarci pacchetti desktop oppure server e disporremo sempre e comunque di un completo sistema di riproduzione, che permette quindi di rimasterizzarle ancora ed ancora. 

Utilizzando `eggs wardrobe` è possibile per Debian/Devuan/Ubuntu vestire la propria installazione `naked` con un "vestito" pre-confezionato. Ad esempio:

```eggs wardrobe get```

```sudo eggs wardrobe wear colibri```

Il nostro `wardrobe` è una repository [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe) che contiene alcune configurazioni, sia server che desktop, utilizzabili come base ed esempio.

Nel caso di `Arch Linux` e Manjaro, anche se non ho propriamente definito le customizzazioni come file .YAML, sono comunque disponibili degli script bash per la configurazione.

Si rimando alla documentazione di [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe#general-informations) per riferimento.

Mi aspetto un feedback sul `wardrobe` ed un certo interesse. 

A mio avviso potrebbe permettere di scambiare facilmente grosse moli di lavoro tra un customer ed un altro. 

Non esitate ad eseguire il `fork` della repository e crearne una propria versione, questo renderebbe possibile successivamente integrarle nella repository principale e renderla disponibile ad altri sviluppatori.

#### User e password

Tutte le remix create dal sottoscritto sono impostate con user live denominato `live` e password `evolution` valido sia per `live` che per `root`. 

* `live/evolution`
* `root/evolution`

#### Scaricare `eggs` e le ISO

Tutte le versioni di `eggs` e le ISO realizzate dall'autore sono scaricabili da `sourgeforge.net` cercando il progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/).

Trovarete: `arch`, `debian`, `devuan`, `educaandos`, `elementary`, `linuxfx`, `linuxmint`, `manjaro`, `mx-linux`, `neon`, `netrunner`, `plastilinux`, `pop-os`, `quirinux`, `rebornos`, `sodilinux`, `spirallinux`, `telos`, `ubuntu` e `waydroid`. 

## Immagini ISO di terze parti

Nel tempo, più di qualche distribuzione è nata o è passata ad utilizzare penguins-eggs per realizzare velocemente le proprie immagini ISO.

### `Waydroid Linux`

Waydroid è basato su un approccio `container-based` per avviare un completo sistema Android su un regolare sistema GNU/Linux come Debian, Ubuntu, etc.

[Waydroid-Linux](https://waydro.id/) è stata la prima distribuzione nella quale il sistema live è stato creato utilizzando penguins-eggs.

Utilizzando dei container è molto interessante e veloce per avere Android sul proprio PC.

Può essere scaricata su [Waidroid-Linux#Latest Beta](https://waydro.id/#wdlinux).

![waidroid-linux](/img/users-guide/Computer_wd.png)

Ulteriori versioni personali - soprattutto per sviluppatori - possono essere invece scaricate dalla pagina [sourceforge di penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/ISOS/waydroid/).

### `Quirinux GNU/Linux`

Per chi è interessato a realizzare film animati, non posso non consigliare [Quirinux](https://www.quirinux.org/) di Charlie Martinez con cui ho avuto il piacere di collaborare nella realizzazione della versione beta.

![quirinux](/img/users-guide/logo-quirinux.webp)

La versione quirinux-general può essere anche scaricata dalla pagina [sourceforge di penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/ISOS/quirinux/).


#### Deblinux
[Deblinux](https://sourceforge.net/projects/deblinux/) di andreone a cui va riconosciuta una grande determinazione ed il coraggio o, la pazzia, di fidarsi di un tool assolutamente sconosciuto.

#### EducAndOS +
Andrés è stato il primo a creare un tema per `eggs` e la sua remix [EducAndOS+](https://github.com/aosucas499/guadalinex) che è molto utilizzata in Spagna in ambito scolastico.

![EducAndOS](/img/users-guide/educandos.png)

#### NovaOS
Devo molto a Nicklas, praticamente scrivendo su [reddit](https://www.reddit.com/r/linux/comments/11nlqlu/penguinseggs_can_turn_your_system_into_an/) ha fatto conoscere penguins-eggs ai più.

La sua distro si chiama [NovaOS](https://github.com/NicklasVraa/NovaOS) ed è basata su [Linuxmint](https://linuxmint.com/).

![NovaOS](/img/users-guide/novaos.png)

#### PredatorOS
[Predator-OS](https://predator-os.ir/) is actually a Debian-based distribution designed for penetration testing and ethical hacking and also privacy, hardened, secure, anonymized use, from our friend 

#### SysLinuxOS
[SysLinuxOS](https://syslinuxos.com/) for System Integrators di [Franco Conidi](https://francoconidi.it/), conosciuto anche per il suo lavoro su systemBack, rappresenta un ottimo esempio di distribuzione verticale.

![SysLinuxOS](/img/users-guide/syslinuxos.png)

#### Telos
Non posso non includere l'amico Yannis ed il suo [TeLOS](https://sourceforge.net/projects/teloslinux/) che posso raccomandare anche perchè con Telos ho scritto una delle prime versioni di questa guida.


## Supporto e segnalazioni

`penguins-eggs` è un progetto che consente di rimasterizzare diverse versioni di Linux:

* `Arch Linux`
* `Debian buster/bullseyes/bookworm + stretch/jessie`
+ `Devuan beowulf/chimaera`
* `Manjaro`
* `Ubuntu bionic/focal/jammy/noble`

e la maggior parte delle derivate, ne cito solo alcune: `deepin`, `Linuxmint`, `LMDE`, `KDE neon`, `pop-os!`, `zorin`, etc.

E' evidente, che lo sviluppatore non può materialmente testare ogni release su tutte le versioni considerate.

E' perciò vitale che venga a crearsi una comunità di utenti, indipendentemente dall'attuale sviluppatore.

Potete segnalare le varie problematiche sulla pagina [issue](https://github.com/pieroproietti/penguins-eggs/issues) del progetto penguins-eggs su github.com.

## Comunità
Una comunità di utenti è fondamentale per la crescita di un progetto come questo: creare qualcosa di versatile e pratico in fondo serve relativamente a poco se la gente non conosce il prodotto e - d'altra parte - avere un buon numero di utenti, fornisce feedback e le motivazioni necessarie agli sviluppatori, migliorando quindi la qualità il progetto stesso.

Potete facilitare la diffusione di `eggs` e contribuire alla sua crescita in diversi modi:

* iscriversi al gruppo facebook [penguin's eggs](https://www.facebook.com/groups/128861437762355)

* contrassegnare con una stella il progetto su [github.com](https://github.com/pieroproietti/penguins-eggs);

* valutare questo progetto su [sourceforge](https://sourceforge.net/projects/penguins-eggs/) e/o creare una review sulla pagina stessa pagina.

Naturalmente, anche sponsorizzare o finanziare lo sviluppo potrebbe essere una opportunità.

## Ringraziamenti
Se siete giunti fino a questo passo, senza l'ausilio del tasto di scorrimento rapido, avete utilizzato parte del Vostro tempo - risorsa preziosa - per seguirmi su questo percorso e, quindi, è mio dovere e - ancor di più desiderio - ringraziarvi per il vostro interesse. 

Grazie a tutti e... happy hacking!

**Per favore**  collaborate se potete al progetto, condividetelo e consigliatelo, è importante giungere ad una certa diffusione perchè il progetto resti valido ed aggiornato. Grazie.

Piero Proietti


## `Dependencies/Requirements`

### `Debian/Devuan/Ubuntu`
Essenzialmente possiamo dividere i pacchetti da cui `eggs` dipende, in:

#### Pacchetti comuni

Questi pacchetti sono i prerequisiti di `penguins-eggs` per Debian/Devuan/Ubuntu e derivate:

```
# Description: This file contains the dependencies for the packages in the project.
---
##
# common dependencies 
common:
  - coreutils 
  - cryptsetup 
  - curl # wardrobe
  - dosfstools # eggs
  - dpkg-dev  # yolk
  - git # wardrobe
  - isolinux # eggs
  - jq # mom
  - live-boot # eggs
  - live-boot-doc # eggs
  - live-boot-initramfs-tools # eggs
  - live-config-systemd | live-config-sysvinit 
  - live-tools # eggs
  - lvm2  # pvdisplay in krill
  - nodejs (>= 18)
  - parted 
  - pxelinux # cuckoo
  - rsync
  - squashfs-tools
  - sshfs # eggs
  - syslinux-common
  - xorriso

# dependencies arch specific
arch:
  amd64:
  - grub-efi-amd64-bin
  - syslinux

  i386:
  - syslinux

  arm64:
  - syslinux-efi
```

**Nota**: _I pacchetti per l'installer grafico `calamares`, non essendo indispensabili per la creazione della ISO, non vengono installati automaticamente, semplicemente vengono proposti se ```force_installer: true``` durante la creazione della iso._

Potete comunque sempre installare `calamares` con il comando:

* ```sudo eggs calamares --install```

### `Arch linux`
Le dipendenze di `penguins-eggs` per `Arch Linux` possono essere rilevate dal [PKGBUILD](https://aur.archlinux.org/packages/penguins-eggs) su [AUR](https://aur.archlinux.org/).

### `Manjaro linux`
Le dipendenze di `penguins-eggs` per Manjaro possono essere rilevate dal [PKGBUILD](https://gitlab.manjaro.org/packages/community/penguins-eggs/-/blob/master/PKGBUILD) su [gitlab Manjaro](https://gitlab.manjaro.org/explore/groups?filter=).

### Altre distribuzioni: Almalinux, Fedora, Openmamba, Opensuse, Rocky

E' possibile consultare la cartella [REQUIREMENTS](https://github.com/pieroproietti/penguins-packs/tree/master/tarballs/requirements), troverete per ogni distribuzione supportata, uno script `install.sh` con la lista dei pacchetti.


