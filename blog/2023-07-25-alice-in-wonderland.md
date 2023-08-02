---
authors: pieroproietti
slug: alice-in-wonderland
title: "Alice in Wonderland"
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Mi è venuto in mente la favola di Alice di Lewis Carrol nella mia avventura con blendOS.

Se, immeritatamente, mi spetta il ruolo di Alice estasiato di fronte a tante novità, dovremmo pure incontrare diversi personaggi, dal bianconiglio, al cappellaio pazzo.

# Antefatto
Durante la navigazione tra i tanti siti di sviluppo e Linux, un giorno di fine aprile mi imbattei in una curiosa novità: una distribuzione che raccoglieva tutte le altre e le faceva coesistere al suo interno.

Risultò alla fine che, tale distribuzione denominata blendOS era basata - comunque - su Arch linux, nonostante il creatore fosse un riferimento in ambito Ubuntu.

All'epoca dei fatti era appena uscita la versione 2, denominata [Avial](https://blendos.co/blend-os-v2/), che dovrebbe essere un piatto indiano di cui l'unica notizia certa che ho è che si mangia.

Poi è uscito [Bhatura](https://blendos.co/blend-os-v3/), ad inizio giugno. Anche qua sempre di un piatto indiano si tratta, questa volta di un pane.

Considerando che anche [akshara](https://github.com/blend-os/akshara) una parte importante del sistema deve il nome ad un piatto indiano, l'unica certezza che mi rimane è che l'autore deve essere un ragazzo indiano di buon appetito.

# L'inizio della storia
Mi avventurai allora ad inseguire la farfalla nella speranza di catturarla ed esporla - ancora viva - in una versione installabile.

La faccenda era difficile però, l'animale aveva un carattere immutabile e, per riprodursi ricostruiva se stessa sostanzialmente da zero.

Ma io volevo dimostrare la capacità del mio programma e, comunque la volevo catturare.

Il primo incontro, fu con lo stesso autore che mi suggerì che l'hook blend sulla live non era necessario ma poi, prese l'orologio e grindando: ho da fare, ho da fare... Ed improvvisamente sparì.

Ebbi nuove notizie, sul bianconiglio solo dopo qualche tempo, avevo già trovato il modo di riprodurre la farfalla a modo mio, quando per destino o per celia incontrai il Cappellaio Matto.

Costui viveva in Olanda nella regione dei pazzi e, si narrava facesse di professione il maestro, aveva più o meno la mia stessa età, qualche anno in meno,

Viveva, quindi nel suo castello tra chroot e tanto altro, in compagnia del suo compare, tale asterisco da Bologna, giovine dotto ed intrarprendente.

Mi fu di grande aiuto durante le mie sperimentazioni, ma come in tutte le favole arrivò il blackout: tre giorni senza corrente elettrica per di più con la temperatura che superava i 40° C.

Desistetti al momento, sperando di vedere presto la nuova versione e cominciai a girovagare.

# Fringuelli che producevano colibri

Dopo un po' di tempo di queste frequentazioni, Alice cominciò ad indagare il bandolo della matassa e, prima fece alcuni tentativi mal riusciti, poi fece un fringuello che covò un colibri.

Il colibri era - in origine - una leggera macchina Debian di chissà quale versione, forse buster - ma buster già in età matura.

Col tempo il colibri aveva preso ad essere anche una piccola macchina Arch con pressapoco le stesse caratteristiche: nodejs, code e tutto l'occorrente per produrre penguins-eggs, solo su una distribuzione diversa.

Le due macchine si somigliavano molto però, i programmi erano praticamente gli stessi e, di solito, prima si creava la versione Debian, poi si testava su Arch ma anche viceversa.

Era un continuo saltare tra i due colibri ed il rilascio avveniva - dopo le iniziali difficoltà - pressochè in contemporanea.

# La nascita del fringuello

Il fringuello nacque semplicemente da un Arch colibri a cui fu aggiunto [distrobox](https://github.com/89luca89/distrobox) e poco altro:

`sudo pacman -Syu podman distrobox`

`distrobox-create -n debian12 -i debian:12`

`distrobox enter debian12`

`sudo apt install bzip2 git nano tar xz-utils`

Scaricare ed installare nodejs19 da [nodesource](https://github.com/nodesource), quindi:

`sudo npm i pnpm -g`

`git clone https://github.com/pieroproietti/penguins-eggs`

`cd penguins-eggs`

`pnpm i`

`pnpm deb`

e strano a dirsi, la versione esportata riusci a fare l'uovo sul vecchio colibri Debian!

Se non è una meraviglia questa!

# La seconda cosa che fece il fringuello
Dopo aver fatto un uovo di colibri, naturalmente il fringuello pensò bene a riprodursi!

Era tempo di ferie e di tempo non ce ne era poi molto, per cui manco cambiò lo sfondo del desktop, giusto il nome per distinguersi.

Creato l'uovo e reinstallato il [fringuello](https://sourceforge.net/projects/penguins-eggs/files/ISOS/arch/), naturalmente ci si rese conto che aveva perso però l'anima Debian12, ma era rimasta tutta l'impalcatura di distrobox.

Sarebbe stato possibile naturalmente creare un clone e portarsi dietro tutto, ma... Per la prossima volta!

# il clone prima del viaggio
L'aereo partiva alle 15:00, lui - era anziano - s'era svegliato alle 6:00, già tardi per le sue abitudini.

Si prese cura di cancellare il cancellabile per non farlo ingrassare troppo e, specificatamente:
* penguins-eggs/dist
* penguins-eggs/node_modules`
* penguins-eggs/tmp

`sudo rm penguins-eggs/dist -rf`

`rm penguins-eggs/node_modules -rf`

`sudo rm penguins-eggs/tmp -rf`

E provò a fare il clone:

`sudo eggs produce --clone --max`

Gli riuscì un uccelletto poco più grande 2,2 GB, giusto 600 MB di Debian e provò quindi ad installarlo, poi a creare nuovamente penguins-eggs per Debian.

Lo installò di nuovo e, bastò ricordarsi che per il clone, gli user sono gli stessi del genitore e, quindi, nel nostro caso: `artisan/evolution` e `root/evolution`.

Una volta eseguito il login:

`distrobox enter debian12`

`cd penguins-eggs`

`pnpm i`

`pnpm deb`

E tutto funzionò perfettamente!

Pose il risultato [fringuello-clone](https://sourceforge.net/projects/penguins-eggs/files/ISOS/arch/) fra le pagine sourceforge di penguins' eggs per Arch.

Buon lavoro e buona vita a tutti.
