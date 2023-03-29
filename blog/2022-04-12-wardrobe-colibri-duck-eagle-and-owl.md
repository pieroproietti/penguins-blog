---
authors: pieroproietti
slug: wardrobe-colibri-duck-eagle-and-owl
title: 'wardrobe: colibri, duck, eagle and owl'
lang: it
---

Dopo qualche settimana di esperienza dalla creazione di un sistema di scripting per creare - a partire da versione naked - delle customizzazioni complete, sono lieto di annunciare che tutte le mie attuali customizzazioni sono stare ri-create e vengono ad essere gestite con **eggs wardrobe**.

# Perchè wardrobe è importante?

Pensate solo alla semplicità con la quale posso permettermi di gestire la presenza o meno di firmware, condividere degli accessori, ritrovare in dettaglio le varie configurazioni, etc.

Il processo di una customizzazione di una sistema è una operazione relatimente complessa, se precedentemente avevamo a disposizione un sistema di rimasterizzazione, a partire da remastersys, passando per systemback sino ad eggs, non mi è mai capitato di imbattermi in un sistema di masterizzazione, ovvero costruire una customizzazione partendo da una base minima.

wardrobe è basato su yaml e consiste essenzialmente nela definizione di **costume** che saranno "indossati" dal sistema in progetto attraverso una **sequence** di operazioni che - del resto  - conosciamo benissimo: 
* aggiungere o modificare repository
* aggiungere o rimuovere pacchetti, inclusi nuovi kernel
* aggiungere pacchetti python
* customizzazione

Ogni volta che creaiamo una nuova customizzazione ci scontriamo con due generi di problemi:
* rimuovere tutto quello che non interessa
* ricordare e manutenere le operazioni fatte.

Il primo probleam può essere risolto, tutto sommato abbastanza semplicemente, partendo da una installazione minima - senza interfaccia grafica - che io denomino naked.

Il secondo problema, viene affrontato con la definizioni dei **costume**.

# costume
Un **costume** è essenzialmente costituito da una directory denominata come il costume ed in file **index.yml**.

La seguente è una definizione di un costume. 

```
# esempio
---
name: esempio
author: artisan
description: questo è un esempio di costume
release: "0.0.1"
distributions: 
- bullseye
sequence: 
  repositories: 
    sources_list:
    - main
    - contrib
    - non-free

    sources_list_d:
    - null

    update: true
    upgrade: true

  preinst: 
  - null

  packages: 
  - cinnamon
  - firefox

  packages_no_install_recommends: 
  - null

  debs: false

  packages_python: 
  - null

  accessories: 
  - grafica

customize: 
    dirs: true

    hostname: true

    scripts: 
    - desktop_links_set

reboot: true
```

Si noti che ho volutamente incluso tutti i possibili item, includendo alcuni che non sono valorizzati e che quindi per semplicità sarebbe stato corretto omettere: **sources_list_d**, **packages_no_install_recommends**, etc. 

# costume

Andiamo ad analizzare il nostro esempio, passo per passo:

## Instestazione

```
# esempio
---
```
Qui c'è poco da dire, si tratta di informazioni per aiutare noi poveri umani a capire di cosa si tratta, sino a --- possiamo scriverci quello che ci pare.


## Generalità
```
name: esempio
author: artisan
description: questo è un esempio di costume
release: "0.0.1"
```
Anche qui poco da dire, queste sono le informazioni generali che verranno riportate dal comando ```eggs wardrobe list``` per una semplice visione d'insieme.

## distributions
Riporta una lista dei **codename** delle distribuzioni compatibili con il costume. Esempio: bullseye, bookworm ma anche focal, jammy, chimaera, etc.

Naturalmente il nostro costume può essere indossato dal sistema solo se il suo codename ```lsb_release -sc``` è compreso nella lista distributions.

## sequence
La **sequence**, individuata per essere il più possibile atomica e coerente, è naturalmente la parte centrale del costume.

Consiste in una sezione **repositories** ed item per l'installazione dei pacchetti o dalle repository o dalla apposita cartella debs inclusa - se utilizzata - nel costume.

Andiamo a vedere la **sequence** in dettaglio.

### repositories
Come sappiamo le repositories vengono normalmente definite nel file /etc/apt/sources.list ed all'interno della directory /etc/apt/sources.list.d

Qua la suddivisione è la medesima.

#### sources.list
In questa sezione vengono specificati semplicemente i componenti da utilizzare:
- main
- contrib 
- non-free

Ovviamente i componenti specificati dovranno essere presenti nel nostro file /etc/apt/sources.list. Tuttavia verrà emesso solo un avviso, questa configurazione non è bloccante, poichè - nello specifico linuxmint - non utilizzano il file /etc/apt/sources.list preferendo una diverso configurazione.

#### sources.list.d
Quante volte vi sarà capitato di fare il taglia ed incolla per aggiungere repository ad un sistema? Beh, qui semplicemente andiamo ad aggiungere i medesimi comandi all'interno del costume.

Ad esempio, per aggiungere le repository per nodejs e visual studio code:

```
sources_list_d:
      - rm -f /usr/share/keyrings/packages.microsoft.gpg
      - >-
        curl -fsSL "https://packages.microsoft.com/keys/microsoft.asc" | gpg
        --dearmor -o /usr/share/keyrings/packages.microsoft.gpg
      - >-
        echo "deb [signed-by=/usr/share/keyrings/packages.microsoft.gpg
        arch=amd64] http://packages.microsoft.com/repos/code stable main" | tee
        /etc/apt/sources.list.d/vscode.list > /dev/null

      - rm -f /usr/share/keyrings/nodesource.gpg
      - >-
        curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg
        --dearmor -o /usr/share/keyrings/nodesource.gpg > /dev/null
      - >-
        echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg]
        https://deb.nodesource.com/node_16.x `lsb_release -cs` main" | tee
        /etc/apt/sources.list.d/nodesource.list > /dev/null
```

Notate che alcune linee cominciano con il simbolo ```- >-```, questa è una specifica di yaml che permette semplicemnte di scrivere su più righe.

Si noti pure che la prima operazione è una rimozione del file signed-by, questo è utile per non avere interruzioni del processo se lo stesso file è già stato scaricato.

Anche qua, rivolgendomi ad integratori di sistema vi è ben poco da aggiungere, cercato su google i comandi per la repository interessata dalla quale dovete scaricare i pacchetti ed aggiungeteli all'interno di sources_list_d.

### update
Naturalmente prima di poter scaricare i pacchetti dalle repository aggiunte va eseguito un ```apt update```m per cui normalmente l'item **update** è configurato normalmente a true.

### upgrade
Qua vi è maggiore libertà, se **upgrade** è true prima dell'installazione dei pacchetti verrà fatto un aggiornamente generale: ```apt full-upgrade```,

## preinst
Succede che prima di installare un pacchetto, vi sia bisogno di configurazioni particolaru. Un caso specifico è l'installazione di proxmox-ve che richiede nella configurazione dell'host di valorizzare l'indirizzo ip dello stesso,

**preinst** viene utilizzato per questo scopo.

## packages
Qui viene riportata la lista dei pacchetti da installare, nel nostro caso: cinnamon e firefox-esr. Notate che in packages l'installazione avverrà sia per i pacchetti stessi che per i pacchetti specificati come recommanded all'interno dei pacchetti richiesti, per cui ```cinnamon``` si porterà dietro tutto il necessario: ```xorg-server```, ```lightdm```, etc


## packages_no_install_recommends
Vi sono casi in cui non conviene scaricare i pacchetti raccomandati, **packages_no_install_recommends** viene utilizzato per questo scopo.

## debs
Specificando **debs: true** ed aggiungendo all'interno del costume una cartella **debs** è possibile installare pacchetti custom non presenti in una repository specifica.

## packages_python
Possiamo anche installare pacchetty python con pip, basterà aggiungere i pacchetti pyhon a questa lista.

## accessories
Come detto in precedenza, la sequence è il pù possibile atomica e cioè indivisibile, non di meno è possibile suddividere il nostro lavoro di vestizione in più parti, ad esempio: interfaccia grafica, ufficio, multimedia, firmware, etc.

Questi costumi, non sono completi di norma, ma sono considerati accessori del costume principale e possono essere interni - contenuti all'interno del costume stesso come sottodirectory oppure nella cartella ```accessories``` all'interno del wardrobe,

Naturalmente questo ci facilita notevolmente il lavoro e permette di utilizzare gli stessi accessori su costumi diversi. Di norma - ma sto sperimentando anche io - conviene partire inizialmente con accessori interni poi - quando il lavoro è consolidato - sarà sufficiente transitare l'accessorio nel cassetto del wardrobe per poterlo utilizzarlo su altri costume.

# customize
customize si compone al momento di **dirs** ed **hostname** - variabili booleane - e **scripts** di customizzazione.

## dirs
E' possibile inserire all'interno del costume una directory **dirs** contentente tutte le nostre modifiche al file system del sistema.

La cartella verrò copiata ricorsivamente nella root del sistema e porterà con sè la nostra customizzazione, Normalmente vengono utilizzate ```dirs/etc/skel``` e ```dirs/usr/share/backgrounds``` per la configurazione iniziale dell'utente e degli sfondi.

## hostname
Se **hostname** è impostato a true il sistema verrà ridenominato con il nome del costume. Ad esempio: colibri

## scripts
Gli scripts vengono chiamati come specificato dalla lista e vengono passati i parametri $1 e $2 come nome dell'utente chiamante e path per il desktop, tradotto secondo lo schema xdg.

# reboot
In caso di costume questo campo è sempre true e comporterà il reboot alla fine della sequenza e della customizzazione. Nel caso di accessorio questo campo non è specificato o sarà specificato come false.

```
    dirs: true
    hostname: true

    scripts: 
    - desktop_links_set
```


# ISO create con wardrobe

Potete trovare le mie customizzazioni sotto [ISOs/Debian/bullseys](https://sourceforge.net/projects/penguins-eggs/files/iso/debian/bullseye/) sulla pagina del progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs).