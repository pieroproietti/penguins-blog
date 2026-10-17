---
sidebar_position: 3
title: Ricette, Categorie e Costumi
description: Come sono organizzate le ricette YAML di penguins-chef, la composizione con include e la creazione di costumi personalizzati.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Struttura delle Ricette, Categorie e Costumi

In `penguins-chef` cade la vecchia dicotomia tra "costumi" e "accessori": **ogni elemento è una ricetta YAML autonoma**. La complessità non nasce da costrutti speciali, ma dalla composizione ordinata di ricette semplici tramite la direttiva `include`.

---

## 📂 L'Albero delle Ricette (`recipes/`)

Il repository delle ricette (scaricato localmente in `~/.chef/recipes`) segue rigorosamente le specifiche **FreeDesktop** per le categorie applicative, affiancate dalle definizioni per gli ambienti grafici e i profili completi:

```text
recipes/
├── base/          # Configurazioni di base e utilità essenziali di sistema
├── de/            # Desktop Environment vanilla (plasma, xfce4, gnome, mate, cinnamon, lxqt...)
├── dm/            # Display Manager (lightdm, gdm, sddm)
├── costumes/      # Ambienti completi personalizzati (colibri, albatros, duck, eagle...)
│   └── colibri/
│       ├── colibri.yaml
│       └── sysroot/
├── development/   # Compilatori, linguaggi e IDE (golang, vscode, devel)
├── education/     # Software didattico ed educativo
├── game/          # Giochi e intrattenimento
├── graphics/      # Grafica e fotoritocco (gimp)
├── multimedia/    # Audio, video e produzione musicale (vlc, music-pro)
├── network/       # Browser e strumenti di rete
├── office/        # Suite per l'ufficio e produttività (libreoffice)
├── settings/      # Strumenti di configurazione
├── system/        # Utilità di sistema a basso livello
└── utility/       # Accessori per l'uso quotidiano
```

---

## 🧩 Composizione Esplicita (`include`) e `sysroot`

Per rispettare il principio **DRY** (*Don't Repeat Yourself*), una ricetta può includere altre ricette. Un **costume** completo come `colibri.yaml` non duplica le liste dei pacchetti di sistema o di XFCE: include la ricetta `base`, il Display Manager `lightdm`, il Desktop Environment `xfce4` e aggiunge esclusivamente i propri plugin specifici e la propria cartella `sysroot`:

```yaml
version: 1
name: colibri-desktop
hostname: colibri
include:
  - ../../base/base.yaml
  - ../../dm/lightdm.yaml
  - ../../de/xfce4.yaml
sysroot: sysroot
profiles:
  debian:
    packages:
      - xfce4-whiskermenu-plugin
      - xfce4-pulseaudio-plugin
  archlinux:
    packages:
      - xfce4-whiskermenu-plugin
      - xfce4-pulseaudio-plugin
  fedora:
    packages:
      - xfce4-whiskermenu-plugin
      - xfce4-pulseaudio-plugin
  opensuse:
    packages:
      - xfce4-whiskermenu-plugin
      - xfce4-pulseaudio-plugin
      - pipewire
      - pipewire-pulseaudio
      - wireplumber
```

### Come funziona `sysroot/` (Overlay della ricetta, non un chroot)
La sottocartella `sysroot/` (personalizzabile da CLI anche con `--sysroot`) **non è un ambiente chroot di destinazione**, bensì l'**overlay sorgente della ricetta** che specchia la gerarchia della radice `/` del sistema (ad esempio `sysroot/etc/skel/`, `sysroot/usr/share/backgrounds/`). Durante l'applicazione della ricetta, `chef` copia i file contenuti in `sysroot/` sopra il filesystem vivo `/`, mantenendo permessi e attributi, sovrascrivendo solo i file dichiarati nell'overlay e **senza mai cancellare** file preesistenti sul sistema ospite.

---

## 🎸 Scrivere una ricetta su misura (anche con l'aiuto dell'IA)

Grazie alla linearità dello schema YAML di `penguins-chef`, chiunque può creare nuove ricette tematiche o chiedere a un assistente IA (istruito tramite il file [`llms.txt`](https://penguins-eggs.net/llms.txt)) di generarne una.

Ecco gli elementi supportati all'interno di ciascun profilo distribuzione (`debian`, `devuan`, `archlinux`, `fedora`, `opensuse`, `openkylin`):

- **`repositories`**: lista di file `{path, content}` da configurare prima dell'installazione dei pacchetti.
- **`packages`**: elenco dei pacchetti nativi della distribuzione da verificare e installare.
- **`files`**: file di configurazione `{path, content}` scritti atomicamente con permessi `0644`.
- **`services`**: unità di servizio (es. `lightdm.service`) da abilitare all'avvio.
- **`default_target`**: target di avvio predefinito (es. `graphical.target`).

### Esempio: Workstation Audio a bassa latenza (`music-pro.yaml`)

```yaml
version: 1
name: music-pro
description: "Workstation audio professionale a bassa latenza con PipeWire e Ardour"
profiles:
  debian:
    packages:
      - pipewire
      - pipewire-audio
      - wireplumber
      - ardour
      - qjackctl
      - guitarix
    files:
      - path: /etc/security/limits.d/99-audio.conf
        content: |
          @audio - rtprio 99
          @audio - memlock unlimited
          @audio - nice -20
```

Una volta salvato il file in `recipes/multimedia/music-pro.yaml`, basta simularlo con `chef apply recipes/multimedia/music-pro.yaml --dry-run` e applicarlo con `sudo chef apply` (oppure selezionarlo con un clic dal **Recipe Picker** di [`penguins-gui`](../gui/2-chef-in-gui.md)).
