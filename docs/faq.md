---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

## Prima installazione

### Debian/Devuan/Ubuntu

> Nota: Se non siete su: Debian bookworm o Ubuntu noble, non avrete immediatamente disponibile nodejs >18. 

Per rendere disponibile, nodejs 18, copiate ed incollate i seguenti comandi:
```
sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
```
A questo punto siete pronti ai passaggi successivi.

Scarica il pacchetto `penguins-eggs_10.0.x_amd64.deb` dalla pagina del progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/DEBS/).

`sudo dpkg -i penguins-eggs_10.0.x_amd64.deb` 

Otterrete un errore per mancanza delle dipendenze, ma non preoccupatevi.

`sudo apt install -f`

**Attenzione**: se non avete fatto in precedenza un `sudo apt update` potreste ottenere la rimozione del pacchetto installato, invece del completamento dell'installazione. 

In tal caso, lanciate il comando: `sudo apt update` e ricominciate da capo.

##### Aggiunta delle repository ppa di penguins-eggs

Una volta installato penguins-eggs, potete aggiungere le repository ppa per tenerlo sempre aggiornato utilizzando semplicemente il comando apt o qualsiasi gestiore dei pacchetti grafico. 

Per farlo, lanciate il comando: `sudo eggs tools ppa --add`

### Arch
Per installare penguins-eggs su Arch, utilizzate il comando yay: `sudo yay penguins-eggs`

### Manjaro
L'installazione di penguins-eggs su Manjaro avviene tramite il comando pamac:
`pamac install penguins-eggs`


## Configurazione
La configurazione può essere fatta con il comando: `sudo eggs dad -d`. Verrà creato il file `/etc/penguins-eggs.d.eggs.yaml` che potete successivamente editare per adattare meglio alle vostre necessità.

## Installazione di Calamares
Se vogliamo utilizzare l'installer grafico Calamares per l'installazione delle immagini ISO create con penguins-eggs, dobbiamo installare Calamares.

### Debian/Devuan/Ubuntu/Manjaro
`sudo eggs calamares --install`

### Arch
In Arch è necessario utilizzare yay per installare Calamares, il comando è semplice, ma richiede un po' di tempo perchè comporta la compilazione del pacchetto: `yay calamares`.

Una volta installato calamares, daremo comunque il comando `sudo eggs calamares --install` che configurerà calamares per l'uso senza l'introduzione della password di root.

## Produzione della prima ISO
Creare una ISO è semplice come dare un solo comando: `sudo eggs produce` tuttavia occorre fare una premessa.

### La directory `/etc/skel`
La creazione di un nuovo utente parte dalla copia della directory `/etc/skel` e del suo contenuto nella home dell'utente stesso.

Se abbiamo fatto delle configurazione sul nostro utente in uso, le perderemo sulla live, perchè partiremo dalla configurazione presente in `/etc/skel`.

Per ovviare al problem e conservare le nostre configurazioni, quindi, è opportuno copiarle all'interno di `/etc/skel`.

Questo è possibile utilizzando il comando: `sudo eggs tools skel` che copierà le principali configurazioni presenti a seconda del Desktop in uso.


### Produzione della iso

`sudo eggs produce`

### Produzione della iso - con i propri dati utente
La produzione della ISO con i propri dati utente viene effettuata con il comando: `sudo eggs produce --clone`.

## Ridurre le dimensioni della ISO
Per ridurre le dimensioni della ISO possiamo - di massima - eliminare dal filesystem della macchina genitore quei dati come logs, cache dei pacchetti, etc non stettamente necessari in una live. E semplice come dare il comando: `sudo eggs tools clean`.

Naturalmente l'algoritmo di compressione del filesystem utilizzato da squashfs può ridurre notevolmente la dimensione ottenuta. 

Di default eggs utilizza per la compressione `zstd lovel-1` molto veloce in compressione ma non altrettanto efficiente. E' consigliato per la creazione delle ISO di prova, poichè ci fa risparmiare tempo.

Per ottenere una ISO più leggera però, possimo utilizzare le opzioni di compression `--standard` o `--max`, entrambe utilizzano il parametro `xz -b 256L`, la seconda `xz -b 256K -Xbcj` riducendo ancora di più le dimensioni ottenute al prezzo di un maggior tempo di compressione.

Ai fini pratici, consiglio SEMPRE di utilizzare il valore di default per le ISO di prova, quindi l'opzione `--max` per la ISO finale.

#### ISO finale
eggs è un programma di rimasterizzazione e, non è detto che debba essere utilizzato da tutti gli utenti. Aggiungendo l'opzione `--release` al comando `produce` andremo a configurare l'installer per la rimozione di eggs e di calamares - se installato - dopo l'avvenuta installazione del sistema.

Esempio: `sudo eggs produce --max --release`

@@@@ Customizzazione del theme del live e di calamares
E' possibile, infine, utilizzare un tema diverso da quello di default per la propria remix. Tutto quello che dovete fare è crearvi un tema proprio od utilizzare uno dei `themes` inclusi in `wardrobe`,

Esempio:  `sudo eggs produce --max --release --theme ./wardrobe/themes/waydroid`











