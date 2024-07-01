---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

## Prima installazione

### Arch/Debian/Devuan/Manjaro/Ubuntu

```
git clone https://github.com/pieroproietti/get-eggs
cd get-eggs
sudo ./get-eggs
```

Questa produra è applicabile anche a Debian buster / bullseye, Ubuntu focal ed Ubuntu jammy.
Per queste distribuzioni, `get-eggs` provvederà ad installare la repository
[nodesource](https://github.com/nodesource/distributions) per rendere disponibile
`nodejs>18`


### Ubuntu bionic
```
sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
```


Scarica il pacchetto `penguins-eggs_10.0.x_amd64-bionic-x.deb` dalla pagina del progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/DEBS/).

`sudo dpkg -i penguins-eggs_10.0.x_amd64-bionic-x.deb` 

Otterrete un errore per mancanza delle dipendenze, ma non preoccupatevi.

`sudo apt install -f`

**Attenzione**: se non avete fatto in precedenza un `sudo apt update` potreste ottenere la rimozione del pacchetto installato, invece del completamento dell'installazione. 

In tal caso, lanciate il comando: `sudo apt update` e ricominciate da capo.

#### Aggiunta delle repository ppa di penguins-eggs

Una volta installato penguins-eggs, potete aggiungere le repository ppa per tenerlo sempre aggiornato utilizzando semplicemente il comando apt o qualsiasi gestiore dei pacchetti grafico. 

Per farlo, lanciate il comando: `sudo eggs tools ppa --add`


### Manjaro
L'installazione di penguins-eggs su Manjaro avviene tramite il comando pamac:
`pamac install penguins-eggs`

## Configurazione di penguins-eggs
La configurazione può essere fatta con il comando: `sudo eggs dad -d`. Verrà creato il file `/etc/penguins-eggs.d.eggs.yaml` che potete successivamente editare per adattare meglio alle vostre necessità.

Se volete sostituire i paramentri di default potete crearvi un file `custom.yaml` ed apportare le vostre modifiche.

```
# custom.yaml
---
root_passwd: secret
snapshot_basename: columbus
snapshot_prefix: '' # none
user_opt_passwd: secret
user_opt: user 
```

Per avere, sempre a disposizione le vostre impostazione, vi basterà lanciare dad on il flag --file. come in questo esempio:

```
sudo eggs dad --file custom.yaml
```

La configurazione verrà impostata secondo i vostri default.


## Installazione di Calamares
Se vogliamo utilizzare l'installer grafico Calamares per l'installazione delle immagini ISO create con penguins-eggs, dobbiamo installare Calamares.

#### Arch/Debian/Devuan/Ubuntu/Manjaro
Per installare e configurare calamares. utilizziamo il comando: `sudo eggs calamares --install`

## Produzione della prima ISO

### Produrre una ISO (senza i dati utente)
Creare una ISO è semplice come dare il comando: `sudo eggs produce`.

Occorre però occuparsi della directory `/etc/skel`, se vogliamo conservare la nostra customizzazione.

Però per conservare le impostazioni del desktop - nel caso non stiamo producendo un clone - occorre che siano impostate nella cartella `/etc/skel`. Infatti Linux, per la creazione di un nuovo utente, parte con la copia di `/etc/skel` nella home del nuovo utente.

Se abbiamo fatto, quindi, delle configurazione sul nostro utente, queste saranno perse sia sulla live che per ogni ulteriore utente creato. 

Per ovviare al problema e conservare le nostre configurazioni è, quindi, necessario riportare queste configurazioni all'interno di `/etc/skel`.

Utilizzando il comando: `sudo eggs tools skel`, le principali configurazioni presenti a seconda del Desktop in uso saranno copiate in `/etc/skel`. pronte ad essere utilizzate per i nuovi utenti e per l'utente live.

### Produzione della iso (con i dati utente)
La produzione della ISO con i propri dati utente viene effettuata con il comando: `sudo eggs produce --clone`.

## Dimensioni della ISO
Per ridurre le dimensioni della ISO possiamo - di massima - eliminare dal filesystem della macchina genitore quei dati come logs, cache dei pacchetti, etc non stettamente necessari in una live. E semplice come dare il comando: `sudo eggs tools clean`.

Naturalmente l'algoritmo di compressione del filesystem utilizzato da squashfs può ridurre notevolmente la dimensione ottenuta. 

Di default eggs utilizza per la compressione `zstd lovel-3` è molto veloce in compressione ma non altrettanto efficiente. E' consigliato per la creazione delle ISO di prova, poichè ci fa risparmiare tempo.

Abbiamo due scelte per le nostre ISO definitive e dipendono anche da come le vogliamo utilizzare.

eggs dispone del flag `--pendrive` che imposta una compressione `zstd level 15` abbastanza veloce in compressione e molto veloce in decompressione. Proprio per quest'ulima caratteristica è quella indicata per memorizzare le nostre ISO su una pennetta USB.

Per ottenere una ISO più compressa - al prezzo anche di un certo ritardo nella decompressione, possimo utilizzare le opzioni di compression `--standard` o `--max`, entrambe utilizzano il parametro `xz -b 256L`. La seconda aggiunge `xz -b 256K -Xbcj` riducendo ancora di più le dimensioni ottenute al prezzo di un maggior tempo di compressione.

Ai fini pratici, consiglio SEMPRE di utilizzare il valore di default per le ISO di prova, quindi l'opzione `--pendrive` o `--max` per la ISO finale.

## ISO finale, l'opzione `--release`
eggs è un programma di rimasterizzazione e, non è detto, che debba essere utilizzato da tutti gli utenti. 

Aggiungendo l'opzione `--release` al comando `produce` andremo a configurare l'installer per la rimozione sia di eggs che di calamares, nonchè di tutte le dipendenze, dopo l'installazione del sistema.

Esempio: `sudo eggs produce --pendrive --release`

## Customizzazione del theme del live e di calamares
E' possibile, utilizzare un tema diverso da quello di default per la propria remix. 

Tutto quello che dovete fare è crearvi un tema proprio od utilizzare uno dei `themes` inclusi in `wardrobe`.

Scaricate il wardrobe:

```
git clone https://github.com/pieroproietti/penguins-wardrobe
```

Vedete i temi disponibile:
```
eggs wardrobe list
```

Producete la iso, scegliendone uno, ad esempio:

```
sudo eggs produce --max --release --theme neon
```