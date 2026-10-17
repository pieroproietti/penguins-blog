---
title: "Quickstart: Dalla sorgente all'uovo in 5 passi"
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Quickstart: Dalla sorgente all'uovo in 5 passi

Se vuoi toccare con mano la potenza di `penguins-eggs` senza perderti in configurazioni complesse, questo percorso ti porta dall'installazione iniziale alla produzione della tua prima ISO live avviabile.

---

## 1. Verifica dei prerequisiti
Assicurati di trovarti su una distribuzione supportata (**Debian, Ubuntu, Devuan, Linux Mint, Arch Linux, Manjaro, Fedora, openSUSE, openKylin o Alpine**) e di disporre dei privilegi di amministratore (`sudo`).

> [!TIP] Nota per gli utenti Fedora
> Su Fedora è raccomandato impostare SELinux in modalità *permissive* (`SELINUX=permissive` in `/etc/selinux/config` oppure eseguendo al volo `sudo setenforce 0`) per evitare blocchi imprevisti durante la manipolazione dei chroot e la generazione della ISO.

---

## 2. Primo avvio e installazione di `eggs`
Hai due strade per installare `penguins-eggs` su una macchina vergine:

### Via A — Dal Desktop con [`penguins-gui`](../gui/index.md)
Scarica l'AppImage di `penguins-gui`, avviala e seleziona dal menu **`Edit → Install penguins-egg CLI`**: la GUI configurerà da sola i repository e installerà `eggs`.

### Via B — Da Terminale (Pacchetto nativo)
Scarica l'ultimo pacchetto nativo per la tua distribuzione da [GitHub Releases](https://github.com/pieroproietti/penguins-eggs/releases/latest) o dal [basket di penguins-eggs.net](https://penguins-eggs.net/basket/repository/) e installalo con il tuo gestore pacchetti:
- **Debian / Ubuntu / Devuan / Mint:** `sudo apt install ./penguins-eggs_*_amd64.deb`
- **Arch Linux / Manjaro:** `sudo pacman -U ./penguins-eggs-*-x86_64.pkg.tar.zst` *(il vecchio pacchetto AUR è stato ritirato per evitare conflitti; usa sempre il pacchetto e il repository ufficiale)*
- **Fedora:** `sudo dnf install ./penguins-eggs-*.x86_64.rpm`
- **openSUSE:** `sudo zypper install ./penguins-eggs-*.opensuse.x86_64.rpm`

Verifica che il motore risponda richiamando l'help e la versione:
```bash
eggs version
```

---

## 3. Abilitazione del repository ufficiale (`eggs tools repo`)
Una volta installato `eggs`, abilita con un solo comando il repository ufficiale e le chiavi GPG della tua distribuzione:
```bash
sudo eggs tools repo add
```
Da questo momento riceverai automaticamente gli aggiornamenti di `penguins-eggs`, `penguins-gui` e potrai installare [`penguins-chef`](../chef/3-quickstart-e-cli.md) direttamente tramite `apt`, `pacman`, `dnf` o `zypper`.

---

## 4. Pulizia prima della cova (`eggs tools clean`)
Prima di congelare il sistema in un'immagine ISO, ripulisci le cache dei gestori di pacchetti e i log temporanei per ridurre il peso dell'uovo finale:
```bash
sudo eggs tools clean
```
*(Opzionale: se vuoi che l'utente live erediti il tema e le personalizzazioni del tuo desktop attuale, esegui anche `sudo eggs tools skel`).*

---

## 5. Produzione della prima ISO (`eggs remaster`)
Ora il sistema è pronto per il volo. Puoi usare il wizard interattivo a 3 passi:
```bash
sudo eggs wizard
```
oppure lanciare direttamente il comando di rimasterizzazione:

* **ISO Live Standard (sistema ripulito e generalizzato):**
  ```bash
  sudo eggs remaster
  ```
* **Clone del Sistema (preserva i tuoi utenti reali, le password e `/home`):**
  ```bash
  sudo eggs remaster --clone
  ```
* **Clone Cifrato LUKS2 (supportato sulla famiglia Debian):**
  ```bash
  sudo eggs remaster --crypted
  ```

Il motore analizzerà l'habitat tramite `coa`, comprimerà il file system in SquashFS e collocherà l'immagine `.iso` finale pronta all'uso nella cartella **`/home/eggs`**.

> **Credenziali predefinite della sessione Live (modalità standard):**
> - **Utente:** `live` — **Password:** `evolution`
> - **Root:** `root` — **Password:** `evolution`

Da qui potrai avviare la ISO direttamente dal disco fisso senza chiavetta USB (`sudo eggs tools grub40 -w /home/eggs/*.iso`), testarla in macchina virtuale o scriverla su USB per installarla su un nuovo computer con `sudo eggs sysinstall krill` o Calamares!