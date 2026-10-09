---
title: "penguins-chef: cucinare il proprio Linux, ricetta per ricetta"
authors: pieroproietti
tags: [Linux, penguins-chef, penguins-eggs]
description: "Dalla base naked alla respin finita: penguins-chef compone in modo dichiarativo e modulare desktop, strumenti e costumi senza bloatware."
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Nel post precedente parlavo di Plastilinux: della voglia di riprenderci il controllo del ferro, di partire da un sistema e plasmarlo come vogliamo invece di accettare immagini pre-confezionate e blindate.

Spesso chi crea una respin o allestisce un sistema su misura fa il percorso al contrario: parte da una ISO "completa" preparata da altri, e poi passa ore a togliere software indesiderato, ripulire configurazioni e sperare di non aver rotto qualche dipendenza nascosta.

È un approccio faticoso e poco pulito. La vera via è partire dal basso: un sistema essenziale a riga di comando (**naked**) e aggiungere solo ciò che vogliamo, in modo chiaro, controllabile e ripetibile.

Per fare questo è nato **penguins-chef**.

<!-- truncate -->

## Dalla dispensa alla tavola: come funziona Chef

Con `penguins-chef` il sistema si compone attraverso **ricette** dichiarative in formato YAML (`version: 1`). 

L'albero delle ricette segue rigorosamente le categorie standard **FreeDesktop**:

```text
recipes/
├── base/          # Strumenti essenziali e configurazioni di base
├── de/            # Desktop Environment (plasma, xfce4, gnome, mate, cinnamon, lxqt)
├── dm/            # Display Manager (lightdm, gdm, sddm)
├── development/   # Compilatori, linguaggi e IDE (golang, vscode, devel)
├── multimedia/    # Strumenti audio/video (vlc)
├── office/        # Suite per l'ufficio (libreoffice)
├── graphics/      # Grafica (gimp)
└── costumes/      # Ambienti completi "chiavi in mano" (colibri, duck, albatros...)
```

Grazie alla direttiva `include`, le ricette si compongono rispettando il principio DRY (Don't Repeat Yourself). Un costume completo come `colibri.yaml` include la ricetta base, il display manager LightDM, il desktop XFCE4 e aggiunge la propria identità visiva tramite una cartella speculare `sysroot/` (sfondi, temi, configurazioni utente).

## Il superpotere del Dry-Run

Uno dei cardini di `penguins-chef` è che **non agisce mai alla cieca**. Prima di toccare qualsiasi file o invocare il gestore pacchetti, puoi esaminare l'intero piano di esecuzione con il flag `--dry-run`, senza bisogno dei privilegi di root:

```bash
# Ispeziona cosa farebbe LightDM sul tuo sistema
chef apply recipes/dm/lightdm.yaml --dry-run
```

Il motore analizza lo stato reale della macchina e descrive passo per passo ogni operazione:
- **Repository**: aggiornamento e sorgenti configurate.
- **Disponibilità pacchetti**: verifica pre-flight dei pacchetti sui repository configurati.
- **Transazione atomica**: installazione dei soli pacchetti mancanti.
- **File di configurazione**: scrittura atomica con permessi sicuri (`0644`), rifiutando rigorosamente destinazioni su symlink.
- **Hostname**: riconciliazione del nome macchina e aggiornamento atomico di `/etc/hosts`.
- **Servizi**: abilitazione dei servizi senza avvio immediato.
- **Sysroot**: sincronizzazione degli overlay di sistema preservando gli attributi e senza mai cancellare file esistenti.

### Simulazione Cross-Family: esplorare altre basi

Puoi simulare una ricetta su un'altra famiglia di distribuzioni senza dover cambiare macchina:

```bash
# Simula la ricetta per Arch Linux (da Debian o da qualsiasi host)
chef apply recipes/dm/lightdm.yaml --dry-run --family archlinux

# Simula per Fedora
chef apply recipes/dm/lightdm.yaml --dry-run --family fedora

# Simula per openSUSE
chef apply recipes/dm/lightdm.yaml --dry-run --family opensuse

# Simula per Devuan
chef apply recipes/dm/lightdm.yaml --dry-run --family devuan
```

## Nessuna complessità inutile: l'Init System al suo posto

Nello sviluppo del motore abbiamo voluto eliminare qualsiasi rigidità sull'init system. La realtà delle distribuzioni moderne è semplice:
- **Arch, Fedora, Debian, Ubuntu, Manjaro e openSUSE** utilizzano tutte **`systemd`**.
- L'unica eccezione rilevante che supportiamo è **Devuan**, che utilizza **`sysvinit`**.

`penguins-chef` rileva direttamente e automaticamente lo stato del sistema: se `/run/systemd/system` esiste, usa systemd; altrimenti adotta sysvinit.

Sulla macchina reale o in dry-run **non serve specificare alcun parametro per l'init**:
- Su macchine systemd, i servizi vengono gestiti tramite `systemctl`.
- Su Devuan, APT configura nativamente gli script in `/etc/init.d`, e i pacchetti specifici di systemd (come `systemd-timesyncd`) vengono automaticamente esclusi per garantire zero attriti e massima pulizia.
- In simulazione cross-family, ogni famiglia adotta automaticamente il proprio init nativo.

## Il flusso completo con Penguins' Eggs

`penguins-chef` e `penguins-eggs` lavorano in perfetta sinergia:

1. **Parti da una ISO naked** (Debian, Arch, Fedora, openSUSE o Devuan).
2. **Scarica le ricette**:
   ```bash
   chef get
   ```
3. **Ispeziona e applica la tua ricetta preferita**:
   ```bash
   chef apply recipes/costumes/colibri/colibri.yaml --dry-run
   sudo chef apply recipes/costumes/colibri/colibri.yaml
   ```
4. **Crea la tua ISO live avviabile e installabile con Eggs**:
   ```bash
   sudo eggs remaster
   ```

Il risultato è un sistema fresco, pulito, costruito esattamente con ciò che hai scelto, pronto per essere avviato, installato o condiviso.

Il codice sorgente di `penguins-chef`, le ricette e la documentazione sono disponibili su GitHub:
https://github.com/pieroproietti/penguins-chef

Buona cucina a tutti! 🐧👨‍🍳


### Condire in altre salse: la ricetta del musicista (con l'aiuto dell'IA)

Il vero punto di forza di `penguins-chef` è la sua estrema modularità. Non sei costretto a subire i preset standard: puoi prendere una categoria esistente — come `multimedia/`, `development/` o `education/` — e cucinare la tua ricetta su misura.

Immagina di essere un musicista, un producer o un chitarrista che vuole trasformare la sua installazione Linux in una workstation audio professionale a bassissima latenza. Invece di perdere ore a ricordare quali pacchetti installare o come configurare i permessi in tempo reale (`limits.conf`), puoi chiedere direttamente all'IA di scriverti la ricetta perfetta.

Basta chiedere all'assistente:
> *"Fammi una ricetta YAML per penguins-chef da mettere in `multimedia/music-pro.yaml` che installi PipeWire, Ardour, i plugin essenziali e configuri i permessi realtime per l'audio."*

E l'IA ti restituirà un blocco pulito, pronto da salvare nella tua forgia:

```yaml
name: music-pro
description: "Configurazione ottimizzata per produzione musicale e audio a bassa latenza"
packages:
  install:
    - pipewire
    - pipewire-audio
    - wireplumber
    - ardour
    - qjackctl
    - guitarix
configuration:
  - file: /etc/security/limits.d/99-audio.conf
    content: |
      @audio - rtprio 99
      @audio - memlock unlimited
      @audio - nice -20
```
Una volta salvato il file nella cartella multimedia/, basterà richiamarlo con chef apply per vederlo cucinato e applicato sul sistema. Che tu sia un developer con la fissa per Go, un grafico con il pacchetto di fotoritocco o un musicista in cerca di zero latenza, la forgia si adatta al tuo stile.

La ricetta del musicista non l'ho provata ma "temo" che funzioni... Naledetto a me ed a quando ruppi a quindici anni il ponte della chitarrina che la buonanima di mio padre decise di regalarmi...

Nota: La realtà è un po diversa, conviene fargli analizzare la repository prima ed agire con gli agenti, nel mio caso ho utilizzato agy di gemini. La configurazione reale è all'interno del progetto stesso: [music-pro.yaml](https://github.com/pieroproietti/penguins-chef/blob/main/recipes/multimedia/music-pro.yaml).

Sdeng, sdeng, sdeng, quante canzoni scordate ho scritto o semplicemente cantato e dimenticato, nelle sere di inverno, in campagna - alle cinque faceva buio - prima di andare a dormire a 10/12°C nel massimo confort di una casa scaldata a legna!

![](/images/penguins-chef.jpeg)

