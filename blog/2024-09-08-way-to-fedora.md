---
authors: pieroproietti
slug: way-to-fedora
title: "way to fedora"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

E così, ridendo e scherzando è finita l'estate ed è maturato l'esordio di fedora 40 su penguins-eggs!

E' stata una avventura difficile, anche se ormai il fatto di lavorare con più distribuzioni comincia ad essere un aiuto invece che uno svantaggio, le conoscenze fatte cercando di adattare Alpine mi sono risultate utili anche per Fedora.

In questi mesi ho lavorato in contemporanea per Alpine, Fedora ed OpenSuSE e naturalmente su Debian ed Arch per cercare di venirne a capo.

Alpine è stato importante sia per la leggerezza, sia perchè essendo diverso mi ha costretto ad immengermi in mkinitfs ed a scrivere sidecar, per avviarlo. Dracut, tutto sommato potrebbe essere più semplice ma manca di una documentazione intuitiva.

Non è una critica, ci vuole molto di più a scrivere il software che ad impararlo ma dracut è stato veramente ostico sino a che - magicamente - ha funzionato.

Bene, abbiamo aggiunto Fedora , sia pure con il neessario rodaggio ancora da effettuare.

Attualmente penguins-eggs è il uno strumento unico - nel suo genere - e per quanto riguarda la capacità di adattarsi a differenti distribuzioni, pensare a gentoo non è più un tabù, anche se tempo fa mi piacque funtoo che nel frattempo... ma vediamo un po' che succede.

Innanzitutto c'è bisogno di una riarrangiata del codice, ovviamente in prima stesura si cerca la strada più breve, l'importante è che funzioni. Dopo anche la manutenzione ha il suo perchè e mettere a fattor comune funzioni diverse è un modo per risparmiare tempo.

Su Alpine e Fedora poi, abbiamo due grossi problemi: il primo si chiama UEFI ed il secondo calamares ma, anche krill - per Fedora, ancora non pienamente adattato.

Però diciamolo pure a chiare lettere: se qualcuno non viene a dare una mano, prima o poi sarò costretto a chiudere la bottega ed addio sogni di gloria.

Per cui la speranza è che qualcuno segua, si innamori del progetto e contribuisca a portarlo avanti.

Secondo me è utile e riunisce in un solo Linux, differenti ramificazioni oltre al fatto che - volendo - se ne potrebbe a questo punto crearne un propria.

# To do

# pacchetto fedora
Non esiste ancora un pacchetto di installazione di penguins-eggs su fedora, bisognerà scriverlo partendo da qualche esempio con nodejs.

# krill installater
Al moment krll su fedora è piuttoso dispettoso, non configura i locales e qualche volta si pianta. E' nato ieri, è pure normale, ma toccherà sistemarlo.

Per il momento consigli di installare con: `sudo eggs install -u² saltando tutte le configurazioni.

# calamares installer
Sarebbe comodo trovare un esempio di configurazione di calamare su Fedora, non dubito ve ne siano ma non li conosco, se qualcuno ha degli esempi prego contattarmi.




