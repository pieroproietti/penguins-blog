---
title: "Riprendetevi il controllo del ferro"
authors: pieroproietti
tags: [Linux, penguins-eggs]
description: "Plastilinux: plasmare il proprio sistema, farne una respin e portare il proprio modo di lavorare su basi diverse."
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Ti sei fatto il tuo Linux. Hai scelto il desktop, installato gli strumenti, sistemato gli script, limato le configurazioni finché accendi la macchina e sai dove mettere le mani.

Poi vuoi provare un'altra distribuzione.

E all'improvviso quel lavoro sembra non valere più niente. Nuovo installer, nuovi pacchetti, nuove convenzioni. La solita cerimonia del «si ricomincia da zero».

Ma perché?

<!-- truncate -->

Possiamo far girare un'intera Debian dentro un container su un'altra distribuzione. Possiamo aggiornare un sistema per immagini, conservare uno stato precedente e tornarci se qualcosa va storto. Sono possibilità utili. Trovo però paradossale che, con tutta questa tecnologia a disposizione, portarsi dietro il proprio ambiente da una base all'altra venga ancora raccontato come un'impresa fuori portata.

Quando per mettere mano al mio ambiente devo attraversare strati di strumenti e convenzioni, mi viene voglia di tornare al ferro. Aprire il sistema, capire dove stanno le cose, modificarle. Voglio poterlo fare anche quando la mia esigenza non era prevista da chi ha preparato l'immagine iniziale.

L'immutabilità e i container possono essere scelte sensate. La gabbia comincia quando una scelta diventa un dogma: questo si può toccare, questo no, per fare quell'altra cosa devi passare di là. Io voglio poter scegliere anche un sistema da plasmare direttamente.

**Linux come plastilina. Plastilinux, se vogliamo dargli un nome.**

Parti da una distribuzione, ci metti le mani, la cuci addosso alle tue esigenze. Provi, sbagli, sistemi. Il risultato contiene anche quello che hai imparato lavorandoci.

Gli stessi desktop, gli stessi programmi, gli stessi strumenti vengono impacchettati e reimpacchettati secondo le regole di ogni distribuzione. Quel lavoro serve. Ma le differenze tra i pacchetti non rendono sacra la distanza tra i nostri computer.

Per ritrovare un desktop familiare e i propri strumenti, spesso si può partire da cose concrete: individuare i pacchetti equivalenti, riportare le configurazioni compatibili, adattare qualche script. Le impostazioni che vogliamo dare ai nuovi utenti possono trovare posto in `/etc/skel`; quelle degli utenti esistenti vanno gestite nelle rispettive home. Anche un'AI può dare una mano a trovare le corrispondenze, purché poi si verifichi il risultato.

Naturalmente cambiare base può voler dire incontrare servizi diversi, altre versioni delle librerie, programmi mancanti o configurazioni da riscrivere. A volte è una passeggiata, altre volte c'è da lavorare. Ma il lavoro già fatto resta un punto di partenza: sappiamo cosa vogliamo ottenere e abbiamo qualcosa da cui imparare.

E le differenze tra distribuzioni? Teniamole.

Debian, Ubuntu, Arch, Manjaro, Fedora, openSUSE, Alpine e le loro derivate non devono diventare tutte uguali. È proprio la loro varietà a renderle interessanti. Possiamo provare un modo diverso di gestire i pacchetti, un'altra scelta sui rilasci, un'altra idea di sistema. Possiamo prendere ciò che ci serve e adattare il nostro ambiente.

È una visione evolutiva nel senso più pratico: variare, provare, adattarsi. Nessuna distribuzione «più evoluta» delle altre. Nessuna base definitiva da trovare una volta per sempre.

Qui la respin diventa uno strumento di libertà.

Con **penguins-eggs** puoi rimasterizzare il sistema che hai costruito su una base supportata e ricavarne una ISO avviabile e installabile. Quella sistemazione del desktop, quegli strumenti, quel lavoro di preparazione possono diventare il punto di partenza per un'altra macchina o per qualcun altro.

Se scegli un'altra base, prepari lì un ambiente simile, lo adatti, lo provi e fai una nuova respin. Il passaggio da Debian ad Alpine richiede quel lavoro: eggs non converte una distribuzione nell'altra. Sei tu a portare con te il tuo modo di lavorare, lasciandogli spazio per cambiare.

Una ISO, inoltre, non sostituisce da sola il backup dei documenti né offre automaticamente il ritorno allo stato precedente di un aggiornamento. Il suo valore, qui, è poter far ripartire altrove il sistema che hai preparato e continuare a metterci le mani.

Non voglio fondare l'ennesima distribuzione. Voglio poter usare quelle che esistono senza consegnare a una sola di loro tutte le mie scelte.

Voglio che un esperimento riuscito possa essere conservato, condiviso, ripreso e modificato. Che qualcuno possa partire dal mio lavoro e farne qualcosa a cui io non avevo pensato. Una respin può essere anche questo: un passaggio di esperienza.

In natura la varietà apre possibilità, e le condizioni cambiano. Mi piace portare questa idea anche nel mio laboratorio: lasciare spazio alle differenze, provare sul campo, tenere ciò che funziona e continuare a cambiare.

Il sistema è mio. Posso aprirlo, modificarlo, romperlo, ripararlo e portarlo dove mi pare.

**In poche parole, Linux!**
