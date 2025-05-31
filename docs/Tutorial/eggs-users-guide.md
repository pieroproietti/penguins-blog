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

`penguins' eggs` è uno strumento moderno per la rimasterizzazione di sistemi Linux, pensato come successore di Remastersys e Systemback. Il software nasce dall'idea della "riproduzione" applicata ai sistemi operativi: ogni sistema può "deporre le sue uova" per dare vita a nuovi sistemi identici o personalizzati.

**Caratteristiche principali:**
- Supporto per oltre 15 distribuzioni Linux (Almalinux, Arch, Debian, Devuan, Fedora, Manjaro, openmamba, openSUSE, Rocky, Ubuntu, ecc.)
- Installazione semplificata con `get-eggs`
- Creazione di ISO live avviabili con i vostri dati
- Installer CLI (krill) e GUI (calamares)
- Backup criptati e installazioni di rete (PXE)
- Sistema wardrobe per configurazioni predefinite

## Installazione rapida

### Metodo universale raccomandato

Questo metodo funziona per **tutte le distribuzioni supportate**:

```bash
git clone https://github.com/pieroproietti/get-eggs
cd get-eggs
sudo ./get-eggs.sh
```

Lo script `get-eggs` configura automaticamente le dipendenze e installa il pacchetto appropriato per la vostra distribuzione.

### Configurazione iniziale

Dopo l'installazione, configurate eggs:

```bash
sudo eggs dad --default
```

Questo comando configura automaticamente eggs e propone di creare subito una ISO del vostro sistema.

## Primi passi

### 1. Produrre la prima ISO

```bash
sudo eggs produce --verbose
```

Questo comando crea una ISO live del vostro sistema (senza i dati personali).

### 2. Installare calamares (opzionale)

Per avere un installer grafico:

```bash
sudo eggs calamares --install
```

### 3. Testare la ISO

Le ISO create si trovano in `/home/eggs/` e hanno utente `live` con password `evolution`.

### 4. Interfacce utente

- **`eggs mom`**: Interfaccia grafica per esplorare i comandi
- **`man eggs`**: Manuale completo sempre disponibile
- **Autocomplete**: Usate TAB per completare comandi e opzioni

## Comandi essenziali

### Produzione ISO

```bash
sudo eggs produce                    # Compressione veloce
sudo eggs produce --pendrive         # Compressione ottimizzata per chiavette USB
sudo eggs produce --standard         # Compressione standard (massima compatibilità)
sudo eggs produce --max              # Massima compressione
```

### Produzione ISO con dati utente

```bash
sudo eggs produce --clone            # Include i dati utente
sudo eggs produce --cryptedclone     # Dati utente criptati
```

### Gestione sistema

```bash
sudo eggs dad --default             # Configurazione automatica
sudo eggs kill                      # Elimina ISO e pulisce
sudo eggs tools clean               # Pulizia cache e log
eggs status                         # Stato configurazione
```

### Installazione

```bash
sudo eggs install                   # Installer CLI (krill)
sudo eggs install --unattended      # Installazione automatica
```

### Personalizzazione

```bash
eggs wardrobe get                   # Scarica il wardrobe
eggs wardrobe list                  # Lista costumi disponibili
sudo eggs wardrobe wear colibri     # Applica costume desktop
```

## Casi d'uso comuni

### Creare una distribuzione personalizzata

1. **Preparate il sistema base**: Installate applicazioni, configurate temi, personalizzate
2. **Pulite il sistema**: `sudo eggs tools clean`
3. **Producete la ISO**: `sudo eggs produce --pendrive`
4. **Per distribuzione finale**: `sudo eggs produce --pendrive --release`

### Backup del sistema

**Backup normale:**
```bash
sudo eggs produce --clone
```

**Backup criptato:**
```bash
sudo eggs produce --cryptedclone
```

## Wardrobe - Configurazioni predefinite

Il sistema wardrobe permette di applicare configurazioni desktop predefinite:

```bash
eggs wardrobe get                   # Scarica il wardrobe
eggs wardrobe list                  # Mostra costumi disponibili
sudo eggs wardrobe wear colibri     # Desktop leggero
sudo eggs wardrobe wear duck        # Desktop completo
sudo eggs wardrobe wear wagtail/waydroid  # Configurazioni speciali
```

## Approfondimenti

### Distribuzioni supportate

#### Distribuzioni principali
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

#### Derivate supportate
Deepin, EndeavourOS, Garuda Linux, KDE neon, Linux Mint, LMDE, Pop!_OS, Zorin OS e molte altre. Lista completa nei file [derivatives.yaml](https://github.com/pieroproietti/penguins-eggs/blob/master/conf/derivatives.yaml) e [derivatives_fedora.yml](https://github.com/pieroproietti/penguins-eggs/blob/master/conf/derivatives_fedora.yaml).

#### Architetture
- **amd64** (x86_64)
- **i386** (x86)  
- **arm64** (aarch64)

### Installazione per distribuzione

#### Debian/Devuan/Ubuntu (.deb)

**Via PPA (raccomandato):**
```bash
curl -fsSL https://pieroproietti.github.io/penguins-eggs-ppa/KEY.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/penguins-eggs.gpg
echo "deb [arch=$(dpkg --print-architecture)] https://pieroproietti.github.io/penguins-eggs-ppa ./" | sudo tee /etc/apt/sources.list.d/penguins-eggs.list > /dev/null
sudo apt update
sudo apt install penguins-eggs
```

**Installazione manuale:**
```bash
# Scaricate da https://penguins-eggs.net/basket/
sudo dpkg -i penguins-eggs-10.1.x-1_amd64.deb
sudo apt install -f  # Se mancano dipendenze
```

#### Arch Linux

**Tramite Chaotic-AUR:**
```bash
pacman-key --recv-key FBA220DFC880C036 --keyserver keyserver.ubuntu.com
pacman-key --lsign-key FBA220DFC880C036
pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```

Aggiungete a `/etc/pacman.conf`:
```
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

```bash
sudo pacman -Sy penguins-eggs
```

**Tramite AUR:**
```bash
yay penguins-eggs
# oppure
git clone https://aur.archlinux.org/penguins-eggs.git
cd penguins-eggs
makepkg -si
```

#### Manjaro

```bash
sudo pamac upgrade
sudo pamac install penguins-eggs
```

#### OpenMamba

```bash
sudo dnf install penguins-eggs
```

### Utilizzo da codice sorgente

Per sviluppatori o per maggiore sicurezza:

#### Installazione dipendenze

**Debian/Ubuntu:**
```bash
sudo apt install nodejs npm build-essential
sudo npm i pnpm -g
```

**Arch Linux:**
```bash
sudo pacman -S nodejs pnpm
```

#### Compilazione

```bash
git clone https://github.com/pieroproietti/penguins-eggs
cd penguins-eggs
pnpm install
```

#### Utilizzo

```bash
sudo ./eggs produce --verbose
```

### Configurazione avanzata

#### File di configurazione

In `/etc/penguins-eggs.d` trovate:

**`eggs.yaml` - Configurazioni principali:**
```yaml
compression: fast
force_installer: false
make_efi: true
make_isohybrid: true
root_passwd: evolution
snapshot_basename: father
snapshot_dir: /home/eggs/
theme: eggs
user_opt: live
user_opt_passwd: evolution
```

**`krill.yaml` - Installazione unattended:**
```yaml
language: 'en_US.UTF-8'
region: 'America'
zone: 'New_York'
keyboardLayout: 'us'
installationDevice: ''
name: 'artisan'
password: 'evolution'
rootPassword: 'evolution'
autologin: true
```

#### Configurazione personalizzata

```bash
sudo eggs dad --file custom.yaml
```

Esempio `custom.yaml`:
```yaml
root_passwd: secret
snapshot_basename: columbus
snapshot_prefix: ''
user_opt_passwd: secret
user_opt: user
```

### Comandi dettagliati

#### `eggs produce` - Opzioni avanzate

```bash
produce a live image from your system without your data

FLAGS
  -C, --cryptedclone         crypted clone
  -N, --noicon               no icon eggs on desktop
  -P, --prefix=<value>       prefix
  -S, --standard             standard compression: xz -b 1M
  -c, --clone                clone
  -k, --kernel=<value>       kernel version
  -m, --max                  max compression: xz -Xbcj ...
  -n, --nointeractive        no user interaction
  -p, --pendrive             optimized for pendrive: zstd -b 1M -Xcompression-level 15
  -s, --script               script mode
  -u, --unsecure             /root contents are included on live
  -v, --verbose              verbose
  -y, --yolk                 force yolk renew
      --addons=<value>...    addons: adapt, pve, rsupport
      --basename=<value>     basename
      --excludes=<value>...  use: static, homes, home
      --links=<value>...     desktop links
      --release              remove penguins-eggs after installation
      --theme=<value>        theme for livecd, calamares branding
```

**Algoritmi di compressione:**
- **Default**: `zstd-level-1` - compressione veloce (per test)
- **--pendrive**: `zstd -b 1M -Xcompression-level 15` - ottimizzato per USB
- **--standard**: `xz -b 1M` - buona compressione
- **--max**: `xz -Xbcj` - massima compressione

#### L'installer krill

krill è l'installer TUI di eggs, progettato per:
- Installazione su sistemi CLI/server
- Sistemi con `<2GB` RAM
- Installazione unattended
- Ripristino backup criptati

**Passi dell'installazione:**
1. **welcome** - Selezione lingua
2. **location** - Fuso orario
3. **keyboard** - Layout tastiera
4. **partition** - Selezione disco
5. **users** - Configurazione utenti
6. **network** - Configurazione rete
7. **summary** - Riepilogo
8. **installation** - Installazione
9. **finish** - Completamento

#### Altri comandi

- `eggs adapt`: Adatta risoluzione per VM
- `eggs export`: Esporta ISO su host remoti
- `eggs tools`: Strumenti di manutenzione
   - `eggs tools clean`: Pulisce cache e log
   - `eggs tools ppa`: Gestisce repository eggs
   - `eggs tools skel`: Ricrea `/etc/skel`
   - `eggs tools yolk`: Crea repository locale (Debian)

### Creazione distribuzioni personalizzate

#### Processo completo

1. **Sistema base**
   - Installate la distribuzione desiderata
   - Aggiornate: `sudo apt update && sudo apt upgrade`
   - Personalizzate applicazioni e configurazioni

2. **Installazione eggs**
   ```bash
   git clone https://github.com/pieroproietti/get-eggs
   cd get-eggs
   sudo ./get-eggs.sh
   ```

3. **Configurazione**
   ```bash
   sudo eggs dad --default
   sudo eggs calamares --install  # Opzionale
   ```

4. **Personalizzazione avanzata**
   - Temi e wallpaper
   - Applicazioni predefinite
   - Configurazioni sistema
   - Script di post-installazione

5. **Produzione finale**
   ```bash
   sudo eggs tools clean
   sudo eggs produce --standard --release
   ```

#### Consigli per la distribuzione

- **Dimensioni**: Mantenete ISO sotto 4-5 GB
- **Test**: Testate regolarmente su VM
- **Documentazione**: Create guide per gli utenti
- **Repository**: Considerate una repository per aggiornamenti

### Wardrobe avanzato

#### Struttura wardrobe

```
wardrobe/
├── costumes/           # Configurazioni complete
│   ├── colibri/       # Desktop GNOME
│   ├── duck/          # Desktop leggero
│   └── wagtail/       # Configurazioni speciali
└── accessories/        # Componenti aggiuntivi
    ├── firmwares/     # Driver proprietari
    └── multimedia/    # Codec multimediali
```

#### Creare un wardrobe personalizzato

1. **Fork del repository wardrobe**
2. **Aggiungete le vostre configurazioni**
3. **Testate**: `eggs wardrobe get your-repo`
4. **Condividete** con la community

### Novità versione 10.1.x

#### Miglioramenti principali

**Refactoring con AI**: Importante refactoring del codice con l'aiuto di Claude.ai per maggiore efficienza.

**Supporto RPM migliorato**: Immagini ISO avviabili su UEFI per AlmaLinux, Fedora, OpenSuSE, Rocky Linux.

**Krill potenziato**:
- Installazioni LUKS criptate
- Gestione LVM2
- Supporto systemd-boot
- Chroot pre-riboot
- Rimozione automatica pacchetti

**Nuove funzionalità produce**:
- Flag `--pendrive` ottimizzato
- Flag `--kernel` per versione specifica
- Migliore gestione temi calamares

#### Correzioni importanti

- **Link simbolici**: Risolto bug critico con `/bin`, `/sbin`, `/lib`
- **Compatibilità**: Miglioramenti tra distribuzioni diverse
- **Ubuntu Noble**: Supporto completo per 24.04 LTS

### Progetti che usano eggs

#### Distribuzioni principali

**Waydroid Linux**: Prima distribuzione con eggs per sistema live, esegue Android su Linux.

**Quirinux GNU/Linux**: Specializzata per animazione e film, collaborazione con Charlie Martinez.

**EducAndOS+**: Prima con tema personalizzato eggs, molto usata nelle scuole spagnole.

**NovaOS**: Basata su Linux Mint, creata da Nicklas.

**PredatorOS**: Debian-based per penetration testing.

**SysLinuxOS**: Per System Integrator, creata da Franco Conidi.

### Dipendenze e requisiti

#### Debian/Devuan/Ubuntu

**Pacchetti essenziali:**
```yaml
common:
  - coreutils, cryptsetup, curl
  - dosfstools, dpkg-dev, git
  - isolinux, jq, live-boot
  - live-config-systemd
  - nodejs (>= 18)
  - parted, rsync
  - squashfs-tools, xorriso

amd64:
  - grub-efi-amd64-bin
  - syslinux
```

#### Altre distribuzioni

- **Arch**: Vedi [PKGBUILD AUR](https://aur.archlinux.org/packages/penguins-eggs)
- **Manjaro**: [PKGBUILD GitLab](https://gitlab.manjaro.org/packages/community/penguins-eggs/-/blob/master/PKGBUILD)
- **RPM**: Script in [REQUIREMENTS](https://github.com/pieroproietti/get-eggs/tree/main/tarballs/requirements)

### Supporto e community

#### Canali ufficiali

- **GitHub Issues**: [penguins-eggs issues](https://github.com/pieroproietti/penguins-eggs/issues)
- **Blog**: [penguins-eggs.net](https://penguins-eggs.net)
- **Facebook**: [penguin's eggs group](https://www.facebook.com/groups/128861437762355)
- **Email**: pieroproietti@gmail.com

#### Come contribuire

**Sviluppo**:
- Fork GitHub e miglioramenti codice
- Test su nuove distribuzioni
- Creazione temi personalizzati

**Documentazione**:
- Traduzioni in altre lingue
- Guide e tutorial
- Miglioramenti documentazione

**Community**:
- Supporto utenti nei forum
- Creazione costumi wardrobe
- Condivisione configurazioni

#### Riconoscimenti

Ringraziamenti speciali a:
- **Hosein Seilany** (Predator-OS author) - Documentazione e README.md
- **Charlie Martinez** (Quirinux author) - Eggs icons
- **Franco Conidi** (SysLinuxOS author) - Feedback
- **Glenn Chugg** - (LastOSLinux author) - Testing
- **Jorge Luis Endres** - (eggsmaker author)
- **Silvan Calarco** - (OpenMamba author) 
- Tutta la community per feedback e motivazione

### Download e risorse

#### Immagini ISO ufficiali

Le ISO dell'autore sono disponibili su:
- [penguins-eggs.net](https://penguins-eggs.net)
- [SourceForge](https://sourceforge.net/projects/penguins-eggs/)

**Credenziali default**:
- **User live**: `live`
- **Password**: `evolution` (valida per `live` e `root`)

#### Immagini naked

Installazioni minimali senza GUI, ideali come base:

```bash
eggs wardrobe get
sudo eggs wardrobe wear colibri    # Aggiunge desktop
```

## Conclusioni

penguins-eggs rappresenta una soluzione moderna e completa per la rimasterizzazione Linux. Con supporto esteso per distribuzioni e architetture, strumenti avanzati come backup criptati ed il sistema wardrobe, eggs non è solo un rimasterizzatore ma un ecosistema completo per la gestione di sistemi Linux personalizzati.

La filosofia della "riproduzione" applicata ai sistemi operativi permette a ogni sistema di "deporre le sue uova" per dare vita a nuovi sistemi, mantenendo le caratteristiche del genitore ma adattandosi a nuovi ambienti.

**e... Buona "cova" a tutti!**

---

**Per favore** collaborate al progetto, condividetelo e consigliatelo: è importante raggiungere una certa diffusione perché il progetto rimanga valido e aggiornato.

**Grazie!**

*Piero Proietti*

---

*Copyright (c) 2017, 2025 Piero Proietti, dual licensed under the MIT or GPL Version 2 licenses.*