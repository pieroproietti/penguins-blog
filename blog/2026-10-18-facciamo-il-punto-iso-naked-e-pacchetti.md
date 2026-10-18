---
title: "Facciamo il punto: le statistiche sulle ISO naked e sui pacchetti"
authors: pieroproietti
tags: [Linux, penguins-eggs, penguins-gui, penguins-chef, ISO, statistiche]
description: "Analisi di due settimane di traffico su penguins-eggs.net (4–18 ottobre 2026): cosa ci raccontano i numeri reali sullo scarico delle ISO naked, dei pacchetti e sull'uso dei repository nativi."
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Ogni tanto è utile fermarsi, mettere da parte per un'ora il compilatore e l'editor di testo, e guardare i log del server per capire cosa succede davvero là fuori.

Ho appena estratto con GoAccess le statistiche di traffico di **penguins-eggs.net** relative alle ultime due settimane — dal **4 al 18 ottobre 2026** — per fare il punto della situazione, concentrandoci in particolare su due aspetti concreti: lo scarico delle **ISO di tipo `naked`** e la distribuzione dei **pacchetti** della nuova suite (`penguins-eggs`, `penguins-gui`, `penguins-chef`) rispetto alla versione storica (`penguins-eggs-legacy`).

<!-- truncate -->

## Il quadro generale (4–18 ottobre 2026)

Prima di scendere nel dettaglio dei singoli file, diamo uno sguardo d'insieme alla fotografia di questi quindici giorni sul nostro server:

- **Richieste totali:** 276.012 (di cui **190.376** richieste valide)
- **Visitatori unici complessivi:** **21.104** (con una media di circa 1.400 visitatori unici al giorno e un picco di 1.938 il 16 ottobre)
- **Traffico generato (banda):** **199,14 GB** (~185,46 GiB)
- **Traffico da sistemi Linux:** **154,00 GB** (oltre il **77%** dell'intera banda erogata dal sito)

C'è un dettaglio metodologico importante per leggere correttamente i dati che seguono: l'esportazione JSON di GoAccess conserva per ciascun pannello i primi **366 elementi** ordinati per numero di *hit* (con una soglia minima di 28 hit per le richieste dinamiche/pacchetti `.deb` e `.AppImage`, e di 9 hit per i file riconosciuti come statici quali `.iso` e `.pkg.tar.zst`). Ciò significa che i numeri riportati nelle tabelle qui sotto non sono stime gonfiate, ma rappresentano la **soglia minima certificata** dei file più richiesti: i download meno frequenti (tra 1 e 8 scarichi per singola release) non compaiono nell'elenco puntuale ma contribuiscono al totale dei **199 GB** serviti.

---

## 1. Lo scarico delle ISO di tipo `naked`

Le ISO **naked** sono il grado zero di `penguins-eggs`: sistemi ridotti all'osso, senza ambiente grafico, pensati come punto di partenza pulito per chi vuole costruirsi il proprio sistema su misura (magari "cucinandolo" subito dopo con `penguins-chef`) o testare sul ferro la rimasterizzazione sulle varie famiglie Linux.

Nel periodo osservato, la pagina indice `/basket/isos/` è stata visitata **308 volte** (da **174 visitatori unici**), accompagnata dalle sottocartelle `/basket/isos/colibri/` (64 hit) e `/basket/isos/naked/` (49 hit).

Ecco il dettaglio delle sei ISO `naked` (tutte appartenenti alla infornata del 5 ottobre 2026) entrate nella classifica principale dei file statici:

| Immagine ISO (`naked`) | Famiglia / Distro | Hit | Visitatori unici | Traffico (GB) | Traffico (GiB) |
| :--- | :--- | ---: | ---: | ---: | ---: |
| `egg-of-ubuntu-resolute-naked-amd64-2026-10-05_1008.iso` | Ubuntu Resolute (26.04) | 84 | 17 | 11,56 GB | 10,77 GiB |
| `egg-of-devuan-excalibur-naked-amd64-2026-10-05_0945.iso` | Devuan Excalibur | 16 | 16 | 4,07 GB | 3,79 GiB |
| `egg-of-debian-trixie-naked-amd64-2026-10-05_0942.iso` | Debian 13 (Trixie) | 15 | 15 | 5,41 GB | 5,04 GiB |
| `egg-of-arch-naked-amd64-2026-10-05_0941.iso` | Arch Linux | 13 | 13 | 6,66 GB | 6,20 GiB |
| `egg-of-manjaro-naked-amd64-2026-10-05_0954.iso` | Manjaro Linux | 10 | 10 | 4,65 GB | 4,33 GiB |
| `egg-of-fedora-44-naked-amd64-2026-10-05_0949.iso` | Fedora 44 | 10 | 10 | 2,40 GB | 2,24 GiB |
| **Totale ISO `naked` in top list** | **6 distribuzioni** | **148** | **81** | **34,75 GB** | **32,37 GiB** |

### Cosa ci dicono questi numeri sulle ISO?

1. **Corrispondenza 1:1 tra visitatori e scarichi reali:** su Devuan (16/16), Debian Trixie (15/15), Arch (13/13), Manjaro (10/10) e Fedora 44 (10/10) il numero di *hit* coincide esattamente con il numero di *visitatori unici*, e il traffico generato corrisponde al peso intero delle ISO moltiplicato per gli utenti. Non sono click a vuoto o bot: sono **81 scarichi completi** di sistemi operativi avviabili.
2. **La curiosità per Ubuntu Resolute e i download manager:** l'immagine `naked` di Ubuntu Resolute guida la classifica con **17 visitatori unici** e ben **11,56 GB** trasferiti (84 hit complessivi, segno che diversi utenti hanno usato download manager multi-connessione o richieste HTTP `Range` per riprendere lo scarico).
3. **Interesse trasversale per tutte le famiglie:** vedere **Devuan Excalibur** al secondo posto per visitatori unici subito dietro Ubuntu e alla pari con **Debian Trixie**, seguita a ruota da **Arch**, **Manjaro** e **Fedora 44**, conferma che la natura multi-distribuzione e *init-agnostic* (con o senza `systemd`) di `penguins-eggs` risponde a un'esigenza reale della comunità.

---

## 2. Lo scarico dei pacchetti: il sorpasso del nuovo `penguins-eggs`

Ancora più interessante è l'analisi dei pacchetti binari scaricati (`.deb`, `.pkg.tar.zst`, `.AppImage`), dove possiamo misurare il polso del passaggio generazionale tra `penguins-eggs-legacy` (in TypeScript/Node.js) e la nuova architettura nativa in C e Go (`eggs`, `coa`, `oa`), affiancata da `penguins-gui` e `penguins-chef`.

### Riepilogo per strumento (progetto)

Aggregando tutte le versioni presenti nella classifica del periodo (4–18 ottobre), ecco come si distribuiscono gli scarichi dei singoli strumenti:

| Progetto / Pacchetto | Hit totali | Somma visitatori (per versione) | Traffico (GB) | Traffico (GiB) |
| :--- | ---: | ---: | ---: | ---: |
| **`penguins-eggs`** *(nuovo, Go/C)* | **1.227** | **653** | **11,48 GB** | **10,69 GiB** |
| **`penguins-gui`** *(interfaccia grafica)* | **604** | **173** | **2,59 GB** | **2,41 GiB** |
| **`penguins-eggs-legacy`** *(TypeScript)* | **490** | **213** | **5,95 GB** | **5,54 GiB** |
| **`penguins-tailor` + `penguins-chef`** | **205** | **93** | **0,29 GB** | **0,27 GiB** |
| **`calamares` + `ckbcomp`** *(dipendenze Arch)* | **177** | **123** | **0,38 GB** | **0,36 GiB** |
| **Totale pacchetti binari tracciati** | **2.703** | **1.255** | **20,69 GB** | **19,27 GiB** |

Il dato balza subito agli occhi: **il nuovo `penguins-eggs` (1.227 hit, 653 visitatori) ha ampiamente doppiato `penguins-eggs-legacy` (490 hit, 213 visitatori)** sia per numero di scarichi sia per volume di utenti.

### Il dettaglio delle versioni più scaricate

Guardando i singoli file pacchettizzati, si nota come gli utenti seguano rapidamente i rilasci incrementali (dalla `26.9.29` alla `26.10.5`, `26.10.7` e `26.10.14`):

- **`penguins-eggs` (Go/C):**
  - Versione `26.10.7-1` (`.deb`): **585 hit** complessivi (**266 visitatori**) sommando gli scarichi dal `/basket/packages/debs/` (391 hit, 105 vis.) e dal repository APT `/repos/deb/` (194 hit, 161 vis.), a cui si aggiungono **69 hit** (35 vis.) del pacchetto Arch `.pkg.tar.zst`.
  - Versione `26.10.14-1` (`.deb` + Arch): già **228 hit** (**166 visitatori**) in pochi giorni dal rilascio (116 da repo APT, 70 dal basket `.deb` e 42 da repo Arch).
  - Versione `26.10.5-1` (`.deb` + Arch): **233 hit** (**126 visitatori**).
  - Versione `26.9.29-1` (`.deb` + Arch): **112 hit** (**60 visitatori**).
- **`penguins-gui`:**
  - Ottima partenza per l'interfaccia grafica desktop, che totalizza **604 hit**: molto apprezzato il formato universale **`.AppImage`** (**217 hit** tra la versione `26.9.23-16` e la nuova `26.10.11-1`), affiancato dai pacchetti nativi **`.deb`** (**327 hit** complessivi tra basket e repo APT) e **`.pkg.tar.zst`** per Arch (**60 hit**).
- **`penguins-chef` (e il passaggio di testimone da `penguins-tailor`):**
  - Nelle statistiche di queste due settimane vediamo fotografato dal vivo il cambio di nome raccontato nei post dei giorni scorsi: `penguins-tailor` `26.10.7-1` raccoglie ancora **111 hit** (65 `.deb` e 46 su Arch/Manjaro/AUR), mentre il nuovo **`penguins-chef`** totalizza già **94 hit** (46 per la `26.10.7-1` `.deb`, 33 per la `26.10.7-11` `.deb` e 15 per la `26.10.7-11` su Arch). Insieme superano i **200 scarichi**.
- **`penguins-eggs-legacy`:**
  - La versione `26.9.29-1` mantiene una base fedele con **370 hit** in formato `.deb` (302 dal basket e 68 da APT) e **120 hit** complessivi nell'ecosistema Arch/Manjaro (`arch`, `manjaro`, `aur`).

---

## 3. Formato dei pacchetti e uso dei repository nativi

Se dividiamo i pacchetti scaricati per formato di destinazione, otteniamo una fotografia fedele delle preferenze degli utenti che scaricano direttamente i binari:

| Formato pacchetto | Hit | Somma visitatori | Traffico (GB) | Quota hit |
| :--- | ---: | ---: | ---: | ---: |
| **`.deb`** *(Debian, Ubuntu, Devuan, Mint)* | 1.894 | 791 | 15,13 GB | 70,1% |
| **`.pkg.tar.zst`** *(Arch, Manjaro, BigLinux, CachyOS, EndeavourOS)* | 592 | 421 | 4,80 GB | 21,9% |
| **`.AppImage`** *(Universale per `penguins-gui`)* | 217 | 43 | 0,75 GB | 8,0% |

Ma il dato forse più rivelatore dell'intero file `stats.jso` si trova guardando le **interrogazioni ai metadati dei repository** (`/repos/`) e gli *User-Agent* dei package manager:

- **`/repos/deb/dists/stable/InRelease`:** **12.827 hit** da **2.655 visitatori unici** (`APT-HTTP/1.3` registra 15.779 hit da 2.651 IP distinti, oltre a 272 hit da `Apt-Cacher-NG`).
- **`/repos/arch/penguins-eggs.db`:** **2.574 hit** da **439 visitatori unici**, a cui si sommano i **304 hit** (**100 visitatori unici**) del repository dedicato `/repos/manjaro/penguins-eggs.db`. Negli User-Agent spiccano `pacman/7.1.0` (4.330 hit) e `Pamac` declinato nelle varie derivate: **BigLinux** (711 hit), **Arch** (442 hit), **Manjaro** (400 hit), **CachyOS** (182 hit) ed **EndeavourOS** (120 hit).
- **Repository RPM (`/repos/rpm/`):** anche se i singoli pacchetti `.rpm` non superano la soglia dei 28 hit per comparire nella top 366 delle `requests`, i file `repomd.xml` ci svelano una base attiva su **Fedora 42** (**257 hit**, **123 visitatori unici**), **Enterprise Linux 9 / AlmaLinux / Rocky** (**220 hit**, **52 visitatori unici**) e **openSUSE Leap** (**31 hit**, **18 visitatori unici**).
- **Repository Alpine (`/repos/alpine/`):** la directory e gli indici `APKINDEX.tar.gz` registrano oltre **110 hit** da **65 visitatori unici**.

In altre parole: oltre a chi passa dal sito per scaricare manualmente un pacchetto dal `/basket/` (1.628 hit), c'è una comunità stabile di **oltre 3.200 macchine Linux** (tra Debian/Ubuntu/Devuan, famiglia Arch/Manjaro, Fedora/EL9, openSUSE e Alpine) che ha configurato i repository ufficiali di `penguins-eggs.net` e riceve gli aggiornamenti direttamente tramite `apt`, `pacman`, `pamac`, `dnf`, `zypper` o `apk`.

---

## Conclusioni

Quando si lavora a lungo su una riscrittura profonda — come il passaggio a `coa` e `oa`, la nascita di `penguins-chef` e l'arrivo di `penguins-gui` — ci si chiede sempre se gli utenti seguiranno il cambiamento o preferiranno restare ancorati a ciò che già conoscono.

I numeri di queste due settimane rispondono con chiarezza: non solo la base installata sui repository è solida e distribuita su tutte le principali famiglie Linux, ma il nuovo `penguins-eggs` ha già preso il largo rispetto alla versione legacy, le ISO `naked` vengono scaricate e provate su ogni architettura di distribuzione — da Ubuntu e Debian/Devuan fino ad Arch, Manjaro e Fedora — e gli strumenti più giovani come `penguins-gui` e `penguins-chef` hanno già trovato i loro primi centinaia di utilizzatori.

Un grazie di cuore a tutti quelli che scaricano, provano, aprono issue e tengono vivo il progetto. Avanti tutta!
