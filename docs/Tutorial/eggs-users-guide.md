---
title: Eggs users' guide
authors: pieroproietti
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

In case of problems with translation links, You can consult a detailed [README](https://github.com/pieroproietti/penguins-eggs#readme) in English on the repository.


Manuale aggiornato a `eggs v10.1.x` ultimo aggiornamento 30 maggio 2025


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
* tarballs installabili: per Almalinux, Fedora, OpenSuSE e Rocky
* codice sorgente

Per la maggior parte degli utenti l'installazione del pacchetto precompilato è quella più indicata.

### Installazione universale con get-eggs

**Metodo raccomandato per tutte le distribuzioni:**

```bash
git clone https://github.com/pieroproietti/get-eggs
cd get-eggs
sudo ./get-eggs.sh
```

Lo script `get-eggs` configura automaticamente nodesource quando necessario e installa il pacchetto appropriato o tarball per la vostra distribuzione.

### Pacchetti .deb per Debian/Devuan/Ubuntu e derivate

I pacchetti .deb sono disponibili per tutte le distribuzioni originali e derivate da: `Debian`, `Devuan` ed `Ubuntu`.

**Nota importante**: Dalla versione 10.0.x, penguins-eggs dipende da nodejs ≥18, che non è direttamente disponibile in tutte le distribuzioni. Possiamo fare affidamento su nodesource per aggiungerlo.

#### Installazione nodejs ≥18

Se la vostra distribuzione non ha nodejs ≥18 disponibile, aggiungete la repository nodesource:

```bash
sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
```

#### Installazione tramite PPA (raccomandato)

```bash
curl -fsSL https://pieroproietti.github.io/penguins-eggs-ppa/KEY.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/penguins-eggs.gpg
echo "deb [arch=$(dpkg --print-architecture)] https://pieroproietti.github.io/penguins-eggs-ppa ./" | sudo tee /etc/apt/sources.list.d/penguins-eggs.list > /dev/null
sudo apt update
sudo apt install penguins-eggs
```

#### Installazione manuale del pacchetto

Se non desiderate includere penguins-eggs-ppa fra le repository del vostro sistema, potete scaricare l'ultima versione dal sito di [penguins-eggs.net](https://penguins-eggs.net/basket/index.php?p=):

```bash
sudo dpkg -i penguins-eggs-10.1.x-1_amd64.deb
```

Se si tratta della prima installazione, il pacchetto potrebbe non installarsi per la mancanza delle dipendenze:

```bash
sudo apt install -f
```

### Pacchetti PKGBUILD e precompilati per Arch e derivate

#### Installazione tramite get-eggs (raccomandato)
```bash
git clone https://github.com/pieroproietti/penguins-eggs
cd penguins-eggs
sudo ./get-eggs
```

#### Utilizzando `Chaotic-AUR`
penguins-eggs è disponibile nella repository chaotic-AUR:

```bash
pacman-key --recv-key FBA220DFC880C036 --keyserver keyserver.ubuntu.com
pacman-key --lsign-key FBA220DFC880C036
pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```

Aggiungete alla fine di `/etc/pacman.conf`:
```
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

Installazione:
```bash
sudo pacman -Sy penguins-eggs
```

#### Utilizzando `yay` o `makepkg`
```bash
yay penguins-eggs
```

oppure:
```bash
git clone https://aur.archlinux.org/penguins-eggs.git penguins-eggs-aur
cd penguins-eggs-aur
makepkg -si
```

#### `Calamares su Arch Linux`
Su Arch utilizzate:
```bash
sudo eggs calamares --install
```

Se non avete Chaotic-AUR installato, potrebbero essere necessari passaggi aggiuntivi per `ckbcomp`.

### Pacchetti precompilati per Manjaro

Su Manjaro, `penguins-eggs` è disponibile nelle repository ufficiali:

```bash
sudo pamac upgrade
sudo pamac install penguins-eggs
```

Per installare calamares:
```bash
sudo eggs calamares --install
```

### Pacchetti rpm per Openmamba

```bash
sudo dnf install penguins-eggs
```

Per installare calamares:
```bash
sudo eggs calamares --install
```

### Pacchetti tarball per AlmaLinux, Fedora, OpenSuSE e Rocky

I pacchetti tarball contengono nodejs integrato e vengono estratti in `/opt/penguins-eggs`.

Si raccomanda l'utilizzodi get-eggs:

```bash
git clone https://github.com/pieroproietti/penguins-eggs
cd penguins-eggs
sudo ./get-eggs
```

## Utilizzo di `eggs` da codice sorgente

Utilizzare `eggs` dai sorgenti è utile per debug, modifiche o per garantire maggiore sicurezza potendo ispezionare il codice.

### Installazione delle dipendenze

#### Debian/Ubuntu:
```bash
sudo apt install nodejs npm build-essential
sudo npm i pnpm -g
```

#### Arch Linux:
```bash
sudo pacman -S nodejs pnpm 
```

#### Manjaro:
```bash
sudo pamac install nodejs pnpm devel-base
```

### Download e compilazione

```bash
git clone https://github.com/pieroproietti/penguins-eggs
cd penguins-eggs
pnpm install
```

### Utilizzo
```bash
sudo ./eggs produce --verbose
```

**Nota**: Dovrete usare `./eggs` e lanciarlo dalla directory `~/penguins-eggs`.

## La praticità di una applicazione CLI

Una applicazione CLI presenta molti vantaggi: flag `--help` e `--verbose` per ogni comando, manuale sempre disponibile con `man eggs`, aiuti interattivi come `mom` e `dad`, e autocomplete con `bash-completion`.

```
VERSION
  penguins-eggs/10.1.0 linux-x64 node-v20.5.1

USAGE
  $ eggs [COMMAND]

TOPICS
  export    export deb/docs/iso to the destination host
  tools     clean system log, apt, etc
  wardrobe  get wardrobe

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
  produce       produce a live image from your system without your data
  status        informations about eggs status
  syncfrom      restore users and user data from a LUKS volumes
  syncto        Save users and users' data ENCRYPTED
  update        update the Penguins' eggs tool
  version
```

### `autocomplete`
Con `bash-completion` installato, potete usare TAB per completare comandi e flag.

### `man eggs`
Documentazione completa sempre disponibile con `man eggs`.

### `mom`
Interfaccia interattiva per guidarvi nei primi passi con eggs.

![eggs-mom](/img/users-guide/mom.png)

## Configurazione di `eggs`

eggs necessita di vari pacchetti (dependencies) e della creazione di file di configurazione. Questo è gestito automaticamente durante l'installazione del pacchetto.

Il comando `eggs config` è ora obsoleto, sostituito da `eggs dad` che può essere usato con flag `--default` o `--file` per configurazioni personalizzate.

### File di configurazione

In `/etc/penguins-eggs.d` troverete tre file di configurazione principali:

* `eggs.yaml` (configurazioni generali)
* `krill.yaml` (configurazioni per installazione unattended)  
* `tools.yaml` (principalmente per sviluppatori)

#### `eggs.yaml` - Configurazioni principali

```yaml
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
version: 10.1.0
vmlinuz: /boot/vmlinuz-6.2.16-20-pve
```

#### `krill.yaml` - Installazione unattended

```yaml
# Penguins' eggs
# krill.yaml
---
language: 'en_US.UTF-8'
region: 'America'
zone: 'New_York'
keyboardModel: 'pc105'
keyboardLayout: 'us'
keyboardVariant: ''
keyboardOption: ''
installationDevice: ''
installationMode: 'standard'
filesystemType: 'ext4'
userSwapChoice: 'small'
name: 'artisan'
fullname: 'artisan'
password: 'evolution'
rootPassword: 'evolution'
autologin: true
hostname: ''
iface: ""
addressType: 'dhcp'
address: ''
netmask: ''
gateway: ''
domain: ''
dns: ''
```

### `sudo eggs dad --default`

Comando essenziale per configurare eggs rapidamente:

```bash
sudo eggs dad --default
```

Questo comando:
- Configura automaticamente eggs
- Pulisce eventuali dati precedenti  
- Propone di creare subito una ISO del sistema

![eggs-dad-d](/images/book9.2/eggs-dad-d.png)

Per configurazioni personalizzate, create un file YAML:

```bash
sudo eggs dad --file custom.yaml
```

Esempio di `custom.yaml`:
```yaml
# custom.yaml
---
root_passwd: secret
snapshot_basename: columbus
snapshot_prefix: '' # none
user_opt_passwd: secret
user_opt: user 
```

## I comandi di `eggs`

eggs necessita dei diritti di root per la maggior parte dei comandi (eccetto `eggs mom`, `eggs info` e i comandi di esportazione).

### `eggs adapt`
Adatta la risoluzione video per macchine virtuali usando xrandr.

### `eggs autocomplete`
Configura l'autocomplete per bash e zsh (normalmente configurato automaticamente).

### `sudo eggs calamares`
Installa e/o configura l'installer grafico calamares:

```bash
sudo eggs calamares --install
```

### `sudo eggs cuckoo`
Avvia un server PXE per installazioni di rete. Richiede un server DHCP esistente e aggiunge un servizio proxy-dhcp.

```bash
sudo eggs cuckoo
```

### `sudo eggs dad`
Configurazione assistita di eggs con interfaccia TUI.

```bash
sudo eggs dad --default    # Configurazione automatica
sudo eggs dad --file custom.yaml    # Configurazione personalizzata
```

### `eggs export`
Comandi per sviluppatori per esportare pacchetti e ISO su host remoti.

#### `eggs export iso`
Esporta immagini ISO:
```bash
eggs export iso --clean    # Elimina vecchie ISO prima di copiare
```

### `sudo eggs install`
Lancia l'installer CLI del sistema operativo (krill).

Per installazione unattended:
```bash
sudo eggs install --unattended
```

#### L'installer `krill`

krill è l'installer TUI (Text User Interface) di eggs, progettato per essere veloce e funzionare dove calamares non è disponibile o appropriato.

**Caratteristiche di krill:**
- Installazione su sistemi CLI/server
- Sistemi `<2GB` RAM
- Installazione unattended
- Ripristino backup criptati creati con eggs

**Interfaccia di krill:**
L'installer presenta una schermata divisa con i passi sulla sinistra e i form per l'immissione dati sulla destra, simile a calamares ma per ambiente CLI.

**Passi dell'installazione:**
1. **welcome** - Selezione lingua
2. **location** - Area geografica e fuso orario  
3. **keyboard** - Layout tastiera
4. **partition** - Selezione disco (ATTENZIONE: cancella tutto il disco)
5. **users** - Configurazione utenti e password
6. **network** - Configurazione rete
7. **summary** - Riepilogo scelte
8. **installation** - Processo di installazione
9. **finish** - Completamento e riavvio

### `sudo eggs kill`
Cancella le immagini ISO create e la directory di lavoro:

```bash
sudo eggs kill
```

**Nota**: Se il comando `produce` è stato interrotto, potrebbero rimanere directory montate. In tal caso, riavviate il sistema e rilanciate `eggs kill`.

### `eggs mom`
Interfaccia grafica/TUI per esplorare i comandi di eggs con menu interattivi.

### `sudo eggs produce`
Il comando principale per creare ISO:

```bash
produce a live image from your system without your data

USAGE
  $ eggs produce [--addons <value>...] [--basename <value>] [-c] [-C] [--excludes
    <value>...] [-h] [-k <value>] [--links <value>...] [-m] [-N] [-n] [-p] [-P <value>] 
    [--release] [-s] [-S] [--theme <value>] [-u] [-v] [-y]

FLAGS
  -C, --cryptedclone         crypted clone
  -N, --noicon               no icon eggs on desktop
  -P, --prefix=<value>       prefix
  -S, --standard             standard compression: xz -b 1M
  -c, --clone                clone
  -h, --help                 Show CLI help.
  -k, --kernel=<value>       kernel version
  -m, --max                  max compression: xz -Xbcj ...
  -n, --nointeractive        no user interaction
  -p, --pendrive             optimized for pendrive: zstd -b 1M -Xcompression-level 15
  -s, --script               script mode. Generate scripts to manage iso build
  -u, --unsecure             /root contents are included on live
  -v, --verbose              verbose
  -y, --yolk                 force yolk renew
      --addons=<value>...    addons to be used: adapt, pve, rsupport
      --basename=<value>     basename
      --excludes=<value>...  use: static, homes, home
      --links=<value>...     desktop links
      --release              release: remove penguins-eggs, calamares and dependencies after
                             installation
      --theme=<value>        theme for livecd, calamares branding and partitions

EXAMPLES
  sudo eggs produce                    # fast compression (default)
  sudo eggs produce --standard        # standard compression
  sudo eggs produce --max              # max compression
  sudo eggs produce --pendrive         # compression optimized for pendrives
  sudo eggs produce --clone            # clone with user data
  sudo eggs produce --cryptedclone     # crypted clone
```

**Algoritmi di compressione:**
- **Default (veloce)**: `zstd-level-1` - veloce per test e sviluppo
- **--standard**: `xz -b 1M` - buona compressione
- **--max**: `xz -Xbcj` - massima compressione
- **--pendrive**: `zstd -b 1M -Xcompression-level 15` - ottimizzato per chiavette USB

#### Modalità clone

**`--clone`**: Include i dati utente in chiaro nella ISO. I dati sono disponibili nel sistema live e vengono copiati durante l'installazione.

**`--cryptedclone`**: Include i dati utente in un volume LUKS criptato all'interno della ISO. I dati non sono disponibili nel live ma vengono ripristinati durante l'installazione con krill (richiede password di decriptazione).

#### Altri flag importanti

**`--theme`**: Personalizza l'aspetto di grub, isolinux e calamares.

**`--release`**: Configura l'installer per rimuovere penguins-eggs e calamares dopo l'installazione (per distribuzioni finali).

**`--addons`**: Aggiunge componenti aggiuntivi come link sul desktop.

**`--kernel`**: Specifica una versione specifica del kernel da usare.

### `sudo eggs tools`
Strumenti accessori per la manutenzione del sistema:

#### `sudo eggs tools clean`
Pulisce cache pacchetti e log di sistema:
```bash
sudo eggs tools clean
```

#### `sudo eggs tools ppa`
Gestisce la repository penguins-eggs-ppa:
```bash
sudo eggs tools ppa --add     # Aggiunge la repository
sudo eggs tools ppa --remove  # Rimuove la repository
```

#### `sudo eggs tools skel`
Ricrea `/etc/skel` dalle configurazioni utente:
```bash
sudo eggs tools skel                    # Usa l'utente corrente
sudo eggs tools skel --user username    # Usa un utente specifico
```

#### `sudo eggs tools yolk` (Solo Debian/Devuan/Ubuntu)
Crea una repository locale in `/usr/local/yolk` con i pacchetti essenziali per installazioni offline:
```bash
sudo eggs tools yolk
```

### `eggs status`
Mostra la configurazione corrente di eggs e del sistema con informazioni dettagliate su kernel, distro, configurazioni e stato dei componenti.

### `sudo eggs update`
Aggiorna eggs (per sviluppatori principalmente, utenti finali dovrebbero usare il gestore pacchetti della distribuzione).

### `eggs version`
Mostra informazioni sulla versione:
```bash
eggs version --verbose    # Informazioni dettagliate
```

### `eggs wardrobe`
Gestisce il "guardaroba" di configurazioni e customizzazioni.

#### `eggs wardrobe get [REPO]`
Scarica un wardrobe:
```bash
eggs wardrobe get    # Scarica il wardrobe ufficiale
eggs wardrobe get your-wardrobe    # Scarica un wardrobe personalizzato
```

#### `eggs wardrobe list [WARDROBE]`
Elenca costumi e accessori disponibili:
```bash
eggs wardrobe list
eggs wardrobe list --distro arch
```

#### `eggs wardrobe show [COSTUME]`
Mostra informazioni dettagliate su un costume:
```bash
eggs wardrobe show colibri
eggs wardrobe show accessories/firmwares
```

#### `sudo eggs wardrobe wear [COSTUME]`
Installa un costume:
```bash
sudo eggs wardrobe wear duck
sudo eggs wardrobe wear accessories/firmwares
sudo eggs wardrobe wear wagtail/waydroid
```

**Flag disponibili:**
- `-a, --no_accessories`: Non installa accessori
- `-f, --no_firmwares`: Non installa firmware
- `-s, --silent`: Modalità silenziosa

## Creazione di una nostra remix

La creazione di una remix personalizzata richiede pazienza ma può dare grandi soddisfazioni.

### Processo di base

1. **Preparazione del sistema base**
   - Scaricate e installate la distribuzione desiderata
   - Aggiornate il sistema
   - Personalizzate applicazioni, configurazioni, temi

2. **Installazione di eggs**
   ```bash
   # Metodo raccomandato
   git clone https://github.com/pieroproietti/get-eggs
   cd get-eggs
   sudo ./get-eggs.sh
   ```

3. **Configurazione iniziale**
   ```bash
   sudo eggs dad --default
   ```

4. **Installazione calamares** (opzionale, per installer grafico)
   ```bash
   sudo eggs calamares --install
   ```

5. **Prima produzione**
   ```bash
   sudo eggs produce
   ```

### Ottimizzazione delle prestazioni

**Durante lo sviluppo** usate la compressione veloce (default):
```bash
sudo eggs produce --verbose
```

**Per la versione finale** usate compressione ottimizzata:
```bash
sudo eggs produce --standard    # Buon compromesso
sudo eggs produce --max         # Massima compressione
sudo eggs produce --pendrive    # Per chiavette USB
```

### Consigli pratici

- **Dimensioni ISO**: Mantenete le ISO sotto i 4-5 GB per praticità, meglio sotto i 2 GB
- **Pulizia sistema**: Usate `sudo eggs tools clean` prima della produzione
- **Test frequenti**: Testate regolarmente le ISO create
- **Backup configurazioni**: Salvate le configurazioni con `eggs tools skel`

## Distribuzioni supportate

penguins-eggs supporta un'ampia gamma di distribuzioni Linux:

### Distribuzioni principali
- **AlmaLinux** (tarball)
- **Arch Linux** (AUR/Chaotic-AUR)
- **Debian** buster, bullseye, bookworm, trixie (.deb)
- **Devuan** beowulf, chimaera, daedalus (.deb)
- **Fedora** (tarball)
- **Manjaro** (repository ufficiale)
- **OpenMamba** (rpm)
- **OpenSuSE** (tarball)
- **Rocky Linux** (tarball)
- **Ubuntu** bionic, focal, jammy, noble (.deb)

### Derivate supportate
- **Deepin**
- **EndeavourOS**
- **Garuda Linux**
- **KDE neon**
- **Linux Mint**
- **LMDE**
- **Pop!_OS**
- **Zorin OS**
- E molte altre...

### Architetture
- **amd64** (x86_64)
- **i386** (x86)
- **arm64** (aarch64)

## Immagini ISO

### User e password di default

Tutte le remix create dall'autore utilizzano:
- **User live**: `live`
- **Password**: `evolution` (valida per `live` e `root`)

### Download

Le versioni di eggs e le ISO dell'autore sono disponibili su:
* [penguins-eggs.net](https://penguins-eggs.net)

e, con minor frequenza di aggiornamento su: 
* [SourceForge](https://sourceforge.net/projects/penguins-eggs/)



### Immagini naked

Le immagini "naked" sono installazioni minimali senza interfaccia grafica, ideali come base per customizzazioni. Possono essere "vestite" usando il wardrobe:

```bash
eggs wardrobe get
sudo eggs wardrobe wear colibri    # Installa ambiente desktop
```

## Distribuzioni che usano penguins-eggs

### Waydroid Linux
Prima distribuzione a usare penguins-eggs per il sistema live. Basata su container per eseguire Android su Linux.

### Quirinux GNU/Linux  
Distribuzione specializzata per animazione e film, sviluppata in collaborazione con Charlie Martinez.

### EducAndOS+
Prima distribuzione a creare un tema personalizzato per eggs, molto utilizzata in ambito scolastico in Spagna.

### NovaOS
Basata su Linux Mint, creata da Nicklas che ha contribuito a far conoscere penguins-eggs su Reddit.

### PredatorOS
Distribuzione Debian-based per penetration testing e ethical hacking.

### SysLinuxOS
Distribuzione per System Integrator creata da Franco Conidi.

## Supporto e segnalazioni

Per segnalazioni di bug, richieste di funzionalità o supporto:

- **GitHub Issues**: [penguins-eggs issues](https://github.com/pieroproietti/penguins-eggs/issues)
- **Blog**: [penguins-eggs.net](https://penguins-eggs.net)
- **Facebook**: [penguin's eggs group](https://www.facebook.com/groups/128861437762355)
- **Email**: pieroproietti@gmail.com

## Comunità

Contribuite alla crescita del progetto:

- Stelle su [GitHub](https://github.com/pieroproietti/penguins-eggs)
- Review su [SourceForge](https://sourceforge.net/projects/penguins-eggs/)
- Partecipazione nei gruppi di discussione
- Condivisione del progetto
- Sponsorizzazione dello sviluppo

## Dipendenze/Requisiti

### Debian/Devuan/Ubuntu

#### Pacchetti comuni
```yaml
common:
  - coreutils 
  - cryptsetup 
  - curl
  - dosfstools
  - dpkg-dev
  - git
  - isolinux
  - jq
  - live-boot
  - live-boot-doc
  - live-boot-initramfs-tools
  - live-config-systemd | live-config-sysvinit 
  - live-tools
  - lvm2
  - nodejs (>= 18)
  - parted 
  - pxelinux
  - rsync
  - squashfs-tools
  - sshfs
  - syslinux-common
  - xorriso

arch:
  amd64:
  - grub-efi-amd64-bin
  - syslinux
  i386:
  - syslinux
  arm64:
  - syslinux-efi
```

### Arch Linux
Le dipendenze sono specificate nel [PKGBUILD](https://aur.archlinux.org/packages/penguins-eggs) su AUR.

### Manjaro Linux  
Le dipendenze sono nel [PKGBUILD](https://gitlab.manjaro.org/packages/community/penguins-eggs/-/blob/master/PKGBUILD) su GitLab Manjaro.

### Altre distribuzioni
Per AlmaLinux, Fedora, OpenMamba, OpenSuSE e Rocky Linux, consultate la cartella [REQUIREMENTS](https://github.com/pieroproietti/penguins-packs/tree/master/tarballs/requirements) che contiene script `install.sh` con le liste dei pacchetti per ogni distribuzione.

## Novità nella versione 10.1.x

### Miglioramenti principali

**Refactoring del codice con AI**: La versione 10.1.0 include un importante refactoring del file `src/classes/utils.tsx` realizzato con l'aiuto dell'intelligenza artificiale (Claude.ai), che ha permesso di completare in una sera un lavoro che manualmente avrebbe richiesto una settimana.

**Supporto migliorato per distribuzioni RPM**: Grandi notizie per le distribuzioni basate su RPM (AlmaLinux, Fedora, OpenSuSE, Rocky Linux) - è ora possibile produrre immagini ISO avviabili su sistemi UEFI.

**Nuove funzionalità di krill**: L'installer TUI è stato migliorato con:
- Supporto per installazioni LUKS criptate
- Gestione LVM2
- Supporto per systemd-boot
- Opzione per fare chroot nel sistema installato prima del riboot
- Rimozione automatica di pacchetti dopo l'installazione (configurabile)

**Miglioramenti di produce**:
- Nuovo flag `--pendrive` con compressione ottimizzata per chiavette USB
- Flag `--kernel` per specificare versione del kernel
- Miglior gestione dei temi calamares

### Correzioni di bug importanti

**Gestione dei link simbolici**: Risolto un bug critico nella versione 10.0.45 dove i link simbolici `/bin`, `/sbin`, `/lib` e `/lib64` venivano interpretati come directory, causando ISO non avviabili.

**Compatibilità migliorata**: Corretti vari problemi di compatibilità tra distribuzioni diverse e architetture.

### Supporto distribuzioni aggiornato

**Nuove distribuzioni supportate**:
- Supporto completo per Ubuntu Noble (24.04 LTS)
- Linux Mint 22
- Manjaro Yonada
- Miglioramenti per Alpine Linux (in sviluppo)

**Architetture**: Supporto esteso per arm64 su più distribuzioni.


## Contribuire al progetto

penguins-eggs è un progetto open source che beneficia enormemente dai contributi della comunità:

### Come contribuire

**Sviluppo**:
- Fork del repository su GitHub
- Miglioramenti al codice TypeScript
- Test su nuove distribuzioni
- Creazione di temi personalizzati

**Documentazione**:
- Miglioramenti alla documentazione
- Traduzioni in altre lingue
- Guide e tutorial

**Testing**:
- Test su distribuzioni diverse
- Segnalazione di bug
- Feedback sulle nuove funzionalità

**Community**:
- Supporto ad altri utenti nei forum
- Creazione di costumi per wardrobe
- Condivisione di configurazioni

### Riconoscimenti

Un ringraziamento speciale a:
- **Hosein Seilany** (Predator-OS) per il lavoro sulla documentazione
- **Glenn Chugg** dalla Tasmania per i test su Ubuntu Noble
- **Charlie Martinez** (Quirinux) per la collaborazione sui temi
- **Silvan Calarco** per il supporto OpenMamba
- **Franco Conidi** (SysLinuxOS) per il feedback su SystemBack
- Tutti gli utenti che forniscono feedback e motivazione

## Conclusioni

penguins-eggs rappresenta una soluzione moderna e versatile per la rimasterizzazione di sistemi Linux. Con il supporto per oltre 15 distribuzioni principali e le loro derivate, tre architetture diverse e una gamma completa di strumenti per la personalizzazione, eggs si propone come il successore naturale di Remastersys e Systemback.

La filosofia del progetto rimane quella della "riproduzione" applicata ai sistemi operativi: ogni sistema può "deporre le sue uova" per dare vita a nuovi sistemi, mantenendo le caratteristiche del genitore ma adattandosi a nuovi ambienti.

Con l'aggiunta di funzionalità avanzate come il backup criptato, l'installazione unattended, il server PXE e il sistema di wardrobe per le configurazioni, penguins-eggs non è solo uno strumento di rimasterizzazione ma un ecosistema completo per la gestione e distribuzione di sistemi Linux personalizzati.

Il futuro di penguins-eggs è luminoso, con costanti miglioramenti, nuove funzionalità e un supporto sempre più ampio per l'ecosistema Linux. La community crescente e l'interesse delle distribuzioni specializzate dimostrano che eggs ha trovato la sua nicchia nel panorama degli strumenti Linux.

**e... Buona "cova" a tutti!**

---

**Per favore** collaborate se potete al progetto, condividetelo e consigliatelo: è importante raggiungere una certa diffusione perché il progetto rimanga valido e aggiornato.

**Grazie!**

*Piero Proietti*

---

*Copyright (c) 2017, 2025 Piero Proietti, dual licensed under the MIT or GPL Version 2 licenses.*