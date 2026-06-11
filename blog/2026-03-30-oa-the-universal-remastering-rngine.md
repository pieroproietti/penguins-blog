---
authors: pieroproietti
slug: 2026-03-30-oa-the-universal-remastering-engine
title: "oa: The Universal Remastering Engine"
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# oa: The Universal Remastering Engine

Sono dieci anni, più o meno, di penguins-eggs: ha avuto un certo successo ma è un'ammazzata eroica. Nel tempo mi ha dato grandi soddisfazioni, come avere l'onore di conoscere Hossein Seilany, autore di predator-os e molto altro, che non sento più per la sconsiderata azione di guerra israelo/americana. Stefano Capitani di Manjaro, che mi ha aiutato ad estendere penguins-eggs verso Manjaro ed Arch Linux, che poi è stato il primo passo per renderlo più universale aggiungendo successivamente altre distro: RHEL, SUSE.

<!--truncate-->

Insomma, mi ha portato ad una posizione privilegiata: osservare gli affanni dietro Waydroid, Charlie Martinez ed il suo Quirinux, Franco Conidi ed il suo DistroClone. Tanta gente e tanti anni: fatica, soddisfazioni ed esperienza.

Ma siamo sempre lì: nonostante abbia avuto delle collaborazioni, il progetto è andato avanti sostanzialmente in solitaria. L'unico con cui mi sentivo spesso era proprio Hossein e che dire: Trump è evidentemente più potente di me.

Non credo però che ci capisca nulla di questo fatto, quindi possiamo continuare.

## La necessità di ogni sistema di essere rimasterizzabile
Poter ricreare liberamente il proprio sistema è molto utile per un'infinità di ragioni: personalizzare un sistema per una scuola o per un'azienda, regalare la propria distro agli amici e fare un figurone, etc.

Con l'espandersi dei sistemi sarà più utile ancora, che so: ho addestrato un robot e ne posso "clonare" un altro. Insomma, ci sono moltissime applicazioni.

Anche per questi tempacci. Pensiamo alle banane riprodotte per talea: hanno tutte lo stesso codice genetico, senza il sorteggio sessuale. Quando beccano una malattia vengono distrutte ed è già successo più volte. Windows, Apple e forse anche Android hanno questo problema: sono banane. 

Il sesso nell'informatica non me lo sono inventato, le modifiche sì, e diciamo che avere la possibilità di alterare un sistema garantisce una certa varianza; se a questo aggiungiamo la "riproduzione", come dire, dovrebbe funzionare.

## Le varie distribuzioni Linux
Linux è rilasciato in varie distribuzioni, come sapete. È un bene, è un male? Come dicevo, una certa varianza a rigor di logica fa comodo e, quindi, se è un male non lo è del tutto.

Riprodurre ed evolvere queste distro dovrebbe essere alla portata dell'utente.

## Il punto su penguins-eggs
Allo stato attuale eggs supporta: AlmaLinux, Alpine, Arch, Debian, Devuan, Fedora, Manjaro, OpenSUSE, Rocky ed Ubuntu.

È partito sempre con l'ottica di essere esteso a tutti, per questo scelsi Node.js ed inizialmente i pacchetti npm, prima di evolvere sui pacchetti nativi e su quelli AppImage.

Alla base però c'è sempre bash che ho usato per il basso livello, e che sostanzialmente ricalca quello di mx-snapshot - l'originale - e refracta-snapshot da cui sono partito.

Ora, se parlassimo di biologia, sarebbe un suicidio ripartire con un sistema di rimasterizzazione da zero, ma al di là dei paragoni ci sono qua delle sostanziali differenze, per cui - ad esempio - possiamo correggere la faccenda dell'uretra e del canale urinale che passa dentro ad essa e che tanti problemi comporta ad un'età matura.

# Il progetto
Dopo un breve scambio di idee con l'autore di mx-snapshot, e dati anche gli strumenti attualmente disponibili, sto cercando di creare questo nuovo progetto che dovrebbe essere da un lato il più limitato possibile, dall'altro abbracciare quante più possibili distribuzioni.

Si può fare? Da solo penso proprio di no, anche se in tre giorni in effetti ho tirato fuori più di qualcosa: addirittura creo già la ISO funzionante ed è velocissimo. Ma non mi illudo, la strada è lunga.

In sostanza, per non ritrovarci con l'ennesima 'banana' informatica, serve una vera squadra. Cerco sviluppatori per il codice, grafici per dare un volto al progetto e finanziatori per dargli ossigeno. Se questa visione vi stuzzica, uniamo le forze e facciamolo crescere insieme.


# Riferimenti 
- [oa repository](https://github.com/pieroproietti/oa)
- [oa documentazione](https://github.com/pieroproietti/oa/tree/main/docs)
