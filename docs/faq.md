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

Scarica il pacchetto `eggs_9.4.x_amd64.deb` dalla pagina del progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/DEBS/).

`sudo dpkg -i eggs_9.4.x_amd64.deb` 

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




