---
authors: pieroproietti
slug: ubuntu-22-04-e-wardrobe
title: Ubuntu 22.04 e wardrobe
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions path="blog/ubuntu-22-04-e-wardrobe"/>

Da qualche giorno è uscito Ubuntu 22.04 l'ultima release LTS di Ubuntu.

Ho provato a testare la compatibilità con eggs e con la nuova funzionalità warbrobe.

Mentre per quanto riguarda eggs non vi è molto da segnalare, eggs semplicemente funziona e riproduce correttamente la nuova release, qualche problema insiste invece sul funzionamente del wardrobe.

# funzioni di rimasterizzazione (eggs)
Ho provato a rimasterizzare Ubuntu 22.04 nella varie versioni: gnome, xfce, kde ed lxqt (Ubuntu, Xubuntu, Kubuntu e Lubuntu), eggs ha correttamente ricreato le rispettive iso senza sorprese.

# funzioni di masterizzazione (wardrobe)
Il problema in questo caso, non è tanto il funzionamento di wardrobe, ma la mancanza di un procedura chiara per ottenere una iso di Ubuntu 22.04 esclusivamente CLI e minima, per intenderci di una corrispondente netinstall di Debian/Devuan.

Ho provato sia a partire dalla versione server selezionando l'installazione minima che quella con maggiori configurazioni, il risultato non è stato soddisfacente. L'insieme dell'ISO supera il GB ed inoltre vi sono problemi per l'avvio della rete. Praticamente al momento del boot da live, il sistema attende il timeout per la configurazione della rete, facendoci aspettare grosso modo due minuti prima che si verifichi.

Per cercare di ovviare, ho provato a "spogliare" una installazione Xubuntu minima, rimuovendo XFCE, Xorg, lightdm, etc.

Purtroppo anche in questo caso si verifica lo stesso inconveniente e restano comunque dei pacchetti spuri.

# Creazione di colibri, owl e duck da wardrobe
Per ovviare al problema, approfittando del fatto che Ubuntu permette una installazione minimale della distro sia pure con interfaccia grafica, ho utilizzato l'installazione minima di Xubuntu basata su XFCE per ri-creare colibrì ed owl.

Per owl ho inoltre rinunciato al kernel liquorix, in quanto non è presente una repository per ubuntu jammy.

Inoltre, non ho installato hardware, facendo conto sulla installazione standard di Ubuntu che già lo comprende.

Per quanto riguarda duck ho proceduto nel medesimo modo, rimuovendo alla fine la sessione di XFCE e le sue dipendenze.

# Conclusioni
C'è poco da dire alla fine, con wardrobe, è possibile creare in maniera agevole una customizzazione riusabile anche in altri contesti.

Delle quattro versioni realizzate per Debian: colibrì,duck, eagle ed owl siamo riusciti a farle girare anche in Devuan/Ubuntu con poche o nulle modifiche.

Questo secondo me è una gran cosa, perchè ci permette di automatizzare parzialmente il nostro lavoro di customizzazione.

D'altra parte - e non può essere che così - integrare sistemi diversi ed aggiungere nuove feathure è normalmente un mestiere difficile che richiede buona conoscenza tecnica e, spesso, numerosi tentativi per realizzare una release che ci soddisfi.

Anche per questo, non vorrei rimanere solo su questa strada, ormai le customizzazioni nelle quali sono esperto funzionano egregiamente, manca di espandersi verso altri lidi: server, altri desktop, etc.

C'è bisogno quindi di condividere informazioni ed esperienze e per questo vi invito a collaborare al progetto.

Wardrobe, rende la customizzazione replicabile e concentra nel "costume" i passi fatti per realizzarla, consolidando la nostra esperienza e facilitandoci uno scambio di informazioni.

Perchè non approfittarne?

![colibri](https://a.fsdn.com/con/app/proj/penguins-eggs/screenshots/colibri.png/245/183)
![duck](https://a.fsdn.com/con/app/proj/penguins-eggs/screenshots/duck.png/245/183)
![owl](https://a.fsdn.com/con/app/proj/penguins-eggs/screenshots/owl.png/245/183)

Nota: potete trovare le iso con i "costumi"
* colibrì (sviluppo) 
* duck (general)
* eagle (virtualizzazione)
* own (grafica, multimedia)

create con Debian bullseye, Devuan Chimaera ed Ubuntu 20.04 jammy nei rispettivi link:

* [Debian bullseye](https://sourceforge.net/projects/penguins-eggs/files/iso/debian/bullseye/)
* [Devuan chimaera](https://sourceforge.net/projects/penguins-eggs/files/iso/devuan/chimaera/)
* [Ubuntu jammy](https://sourceforge.net/projects/penguins-eggs/files/iso/ubuntu/jammy/)

Oppure potere ricrearle a partire dalle rispettive versioni naked.

