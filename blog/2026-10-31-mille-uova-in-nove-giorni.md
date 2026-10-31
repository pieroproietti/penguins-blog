---
title: "Mille uova in nove giorni: il mondo visto da Penguins' Eggs"
authors: pieroproietti
tags: [Linux, penguins-eggs, statistiche, census, community]
description: "Riflessioni e dati sui primi mille eventi registrati da Penguins' Eggs: rimasterizzazioni, installazioni, distribuzioni e geografie di una comunità in movimento nel mondo."
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Nove giorni fa abbiamo acceso **`penguins-census`**, un piccolo faro silenzioso per capire cosa succede là fuori quando qualcuno lancia `eggs remaster` o `eggs sysinstall`. 

Non volevamo tracciare gli utenti — non ci interessa sapere *chi* siete — ma volevamo rispondere a una domanda semplice che ogni sviluppatore open source si fa quando lavora chiuso nella sua stanza: **questo codice serve davvero a qualcuno?**

A distanza di nove giorni, la risposta è arrivata forte e chiara: abbiamo appena superato la soglia dei **1.000 eventi completati** (993 registrati nel momento in cui scrivo), generati da **531 macchine uniche** a un ritmo di oltre **100 operazioni al giorno**, distribuite in **55 Paesi**.

Leggere i log di questi primi nove giorni è stato come fare il giro del mondo seduti dietro la scrivania. Dietro le righe JSON non ci sono solo statistiche sulle distribuzioni, ma storie reali di comunità, scuole, sviluppatori e artigiani del software.

---

## Cosa ci dicono i numeri generali

Prima di viaggiare per i continenti, ci sono tre dati tecnici che definiscono la natura dell'utilizzo di `penguins-eggs`:

* **Il ferro reale vince sulle macchine virtuali:** il **56,6%** delle operazioni avviene su **bare-metal** (computer fisici reali), contro il 24,9% su KVM e il 13,7% su VirtualBox. Eggs non viene usato solo per giocare in una sandbox, ma per installare e salvare macchine di produzione.
* **Il ciclo vitale (3 a 1):** su circa 1.000 eventi, **750 sono remaster** e **243 sono installazioni di sistema (`sysinstall`)**. In media, chi lavora a un'immagine fa tre prove di rifinitura prima di andare in produzione e installarla. E quasi la metà delle installazioni (**116 su 243**) avviene con il flag `clone`: backup completi e disaster recovery di workstation reali, con utenti e dati al seguito.
* **Pragmatismo sul Desktop:** **XFCE (32,2%)** domina la classifica, seguito da **KDE Plasma (20,7%)**, **GNOME (14,3%)**, **Cinnamon (11,3%)** e installazioni puramente **CLI/Server (10,8%)**. **X11 (62,5%)** mantiene ancora la maggioranza, ma **Wayland (24,5%)** è ormai una realtà solida anche nel remastering.

---

## Il giro del mondo in 1.000 ISO

### 1. Nord America: Chromebook salvati dalle discariche e scuole nel Québec
Negli **Stati Uniti (13,2% del totale, primi per client connessi ai repository)** emerge un fenomeno straordinario: il recupero dell'hardware destinato all'obsolescenza. Vediamo sequenze serrate di remaster e installazioni su ferro reale di una derivata chiamata **`fantastic`** (Debian con `sysvinit` e XFCE) e sistemi Garuda/Arch leggeri. Negli USA milioni di Chromebook scolastici raggiungono la scadenza degli aggiornamenti Google (AUE): con il firmware sbloccato e un'immagine leggera creata con Eggs, questi portatili con 2 o 4 GB di RAM tornano a nuova vita invece di finire nei rifiuti elettronici.

Salendo in **Canada (6,6%)**, oltre a un instancabile laboratorio che testa immagini Arch + KDE su KVM giorno e notte, è spuntata una storia bellissima dal Québec: il progetto **`fleurdelix`**. Venerdì sera tardi (fuso orario di Montreal) abbiamo visto partire una raffica di installazioni fisiche a distanza di pochi minuti l'una dall'altra. Qualcuno, armato di chiavette USB e `krill`, stava allestendo un'aula informatica o preparando un lotto di PC con una distribuzione francofona creata in casa.

### 2. America Latina: Il continente del "ferro reale"
L'America Latina è una colonna portante del progetto, con oltre **140 eventi** tra **Argentina (5,9%)**, **Brasile (5,2%)**, **Cile**, **Messico**, **Perù**, **Venezuela**, **Colombia**, **Uruguay** ed **Ecuador**. Qui quasi nessuno usa macchine virtuali: si lavora direttamente sui PC fisici.
* In **Argentina** brilla lo sviluppo continuo di **Soplos Linux** (con KDE Wayland) e il lavoro su **BigLinux**.
* In **Brasile** c'è una vera e propria officina basata su **Linux Mint** e un nucleo fortissimo di puristi **Devuan + runit**.
* In **Cile** il numero di installazioni (`sysinstall`) supera il doppio dei remaster: si prepara una ISO di Linux Mint e la si installa a tappeto.
* In **Perù** abbiamo registrato 4 eventi che sembrano usciti da un manuale: un remaster di Debian Trixie + XFCE, una seconda rifinitura, e subito dopo due installazioni fisiche su due computer diversi a distanza di 7 minuti.

### 3. Europa e Russia: Tra produzioni indipendenti e sistemi sovrani
L'Europa raccoglie quasi la metà degli eventi mondiali (**47,7%**):
* **L'Italia (20,7%)** guida la classifica. Anche ripulendo il dato dalla mia personale "carovana" di test su Proxmox/KVM (le mie classiche 8 distro CLI + 7 XFCE che lancio a ogni rilascio), l'Italia resta saldamente al **secondo posto mondiale dietro gli USA**, con una comunità fortissima su Arch Linux, Debian Trixie e progetti derivati come **Synex** e **Nexiquar**.
* **La Spagna (7,2%)** è la patria di **Quirinux** (la distro per il cinema d'animazione del nostro amico Charlie) e mostra un uso intensivo di Ubuntu e Debian su bare-metal. Soplos, invece - nativo ispanico - se lo fanno da soli!
* **La Germania (7,4%)** e **la Francia (4,2%)** sono motori instancabili su Linux Mint, Ubuntu, CachyOS e Manjaro.
* Dall'Est arriva una chicca tecnica: in **Russia** qualcuno ha rimasterizzato con successo **Astra Linux** con il suo desktop proprietario **Fly** su hardware reale, mentre in **Ucraina** si clonano sistemi leggeri con Debian, XFCE e **BunsenLabs**. Davanti a due popoli vicini che condividono anche la passione per la tecnica ed il software libero, e fa ancora più male pensare alla tragedia della guerra e alle vite spezzate: la speranza è che torni presto la ragionevolezza e la pace.

### 4. Medio Oriente: Fucine indipendenti, resilienza e reti invisibili
Qui si respira forte la voglia di indipendenza tecnologica, ma anche il riflesso delle tensioni che attraversano la regione:

* In **Iran**, un singolo sviluppatore sta forgiando a ciclo continuo una derivata Arch chiamata **`crow`** con **Hyprland** su Wayland. Dove la rete è soggetta a pesanti restrizioni, avere una ISO completa, autonoma e con tutti i propri strumenti preinstallati fa davvero la differenza. Dietro a questo dato tecnico c'è la realtà di un Paese e di intere generazioni cresciute tra guerre ed embarghi che durano da quarant'anni. Un amico con tristezza mi diceva che forse l'unica via d'uscita rimasta sembra un conflitto globale: parole amare che, più che spaventare, devono far riflettere sul senso di isolamento e sulla fatica quotidiana di chi vive lì. Vedere qualcuno che, nonostante tutto, si ritaglia uno spazio di autonomia costruendosi il proprio sistema operativo è una piccola, silenziosa testimonianza di resilienza.
* In **Turchia** fioriscono le distribuzioni locali: abbiamo visto nascere e crescere le immagini di **`aquarevive`** (GNOME) e **`parsos`** (LXQt).
* Da **Israele**, invece, non compaiono record diretti nei log di censimento. So di avere utenti attivi anche lì, ma l'assenza della sigla `IL` non significa affatto assenza di persone: racconta piuttosto la realtà di una rete pesantemente schermata, protetta da firewall perimetrali e instradata su tunnel VPN.

### 5. Asia e Oceania: Dal dragone cinese al Vietnam, passando per l'Australia
* **Cina e Taiwan:** la Cina è già al **quarto posto mondiale per accesso ai nostri repository** (45 client). Nei log vediamo il lavoro nativo su **openKylin 3.0** con desktop **UKUI**, uno sviluppatore che rimasterizza senza sosta **Omarchy** (Arch + Hyprland) e persino l'unico evento **ARM64** di tutto il censimento (un server Ubuntu 24.04 CLI rimasterizzato su ferro reale). Con gli ultimi fix che hanno eliminato i colli di bottiglia di rete sui bootloader e migliorato il supporto a openKylin, ci aspettiamo grandi cose da Oriente.
* **Giappone e Vietnam:** in Giappone regna la precisione, con un server KVM che esegue il backup con Eggs ogni giorno spaccato alle 18:01 UTC e sessioni certosine su Linux Mint e Debian + `i3`. In **Vietnam**, invece, usano Eggs come catena di montaggio: preparano un'immagine Ubuntu 24.04 in VM e la scaricano in serie sulle macchine fisiche.
* **Australia (2,3%):** zero macchine virtuali. Gli australiani lavorano solo su ferro vero, spingendo su **SparkyLinux**, **CachyOS**, **EndeavourOS** e una maratona notturna di clonazione su **Debian Trixie + MATE**.

### 6. Africa: Dai laboratori di Nairobi all'Oceano Indiano
Anche se i numeri sono più piccoli (**18 eventi in 7 Paesi**), le storie sono preziose: in **Kenya** si prepara una immagine master di Linux Mint e la si installa in serie su più postazioni; postazioni fisiche lavorano in **Sudafrica**, **Mozambico**, **Algeria**, **Egitto** e **Marocco**. E sull'**Isola della Réunion**, in pieno Oceano Indiano, un purista rimasterizza e installa **Arch Linux** con il window manager **River**.

---

## Una fabbrica di distribuzioni

Scorrendo la lista delle 41 distribuzioni rilevate in soli nove giorni, oltre alle grandi classiche (Debian, Ubuntu, Mint, Arch, Devuan, Fedora, openSUSE, Manjaro, Alpine), è emerso un sottobosco meraviglioso di **distribuzioni figlie e respin indipendenti** che usano `penguins-eggs` come motore:

> *Quirinux, Soplos, OpenKylin, CachyOS, Crow, Fleurdelix, Fantastic, Omarchy, BigLinux, OpenOS, Zorin, Aquarevive, EndeavourOS, KDE Neon, Synex, AnduinOS, JCN, ParsOS, Sparky, Nexiquar, Antarctic, BigCommunity, ObsidianOS, Parrot, Pop!_OS, Astra, BunsenLabs, KayelOS, Lware, PawnOS, Siduction.*

Quando ho iniziato a scrivere questo progetto a Roma, l'idea era semplice: dare a chiunque la libertà di prendere il proprio sistema Linux, chiuderlo in un uovo (una ISO live installabile) e portarlo con sé o regalarlo agli altri, indipendentemente dalla distribuzione usata. Anzi a dire il vero, l'idea era ed è rendere il proprio sistema fertile e riproduttivo, che è la soluzione più semplice di tanti mali e favorisce la diffusione.

Vedere che oggi quell'uovo schiude sistemi operativi in un'aula del Québec, su un vecchio Chromebook nel Midwest, in un centro di formazione a Nairobi e su una workstation con openKylin in Cina è la ricompensa più grande che potessi desiderare.

Grazie a tutti voi che state covando queste uova in giro per il mondo.

Siate fecondi e buona rimasterizzazione! 🐣🐧

---
*(I dati in tempo reale sono consultabili in qualunque momento su [penguins-eggs.net/api/census](https://penguins-eggs.net/api/census))*


