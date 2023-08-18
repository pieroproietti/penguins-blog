---
authors: pieroproietti
slug: assunzione
title: "La Madonna dell'Assunta"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Oggi per la Chiesa è la festa dell'Assunta, «La Vergine Maria, completato il corso della sua vita terrena, fu assunta alla gloria celeste in anima e corpo».

Per indolenza, a Roma, il popolino - ovvero tutti - celebrano il "Ferragosto" ovvero le ferie di Augusto imperatore e, di norma vanno molto il pollo con i peperoni ed il cocomero. 

In spiaggia e meno.

# La vacanza
Ho preso qualche giorno di vacanza anche io, allontanandomi un po' dalla tastiera e dall'Italia. La vacanza ha funzionato, mi ha ricaricato come non mai e nel giorno di ferragosto ho rilasciato una nuova versione di `eggs`, rifatto numerose ISO ed iniziato questo scritto che sto completando ben tre giorni dopo.

# Risolto il problema con calamares
Per qualche ragione, io non me ne ero mai accorto, `calamares` - con le mie configurazioni - ha iniziato a non mostrarmi più le opzioni per installare il sistema su una partizione pre-esistente.

Se ne è reso conto però Emer Chen che sta realizzando il suo [LDS](https://sourceforge.net/projects/antix-mate-respin/files/lds_debian12/) ed ha affrontato il problema, prima suggerendomi di utilizzare la versione di calamares compilata da SparkLinux, quindi facendomi notare che - sostituendo in `/etc/calamares/modules` i moduli originali di Debian a quelli di eggs, il problema sparisce.

Dopo qualche tentativo, ed anche più in effetti, ho riscontrato che il problema sorgeva dalla mancanza del file di configurazione `welcome.conf` che, non essendo modificato da `eggs`, non veniva copiato su `/etc/calamares/modules`.

![calamares replace partition](/images/calamares-replace-partition.png)

Quindi, ieri ho rilasciato una versione di `eggs v9.5.17` che risolve questo noioso problema e, naturalmente sto iniziando a rifare - per l'ennesima volta - le principali ISO.

# Fedora, SuSE e le altre
Da quando ho iniziato eggs il mio sogno era di riunire sotto un unico programma di rimasterizzazione tutte o quasi le principali distribuzioni Linux.

Naturalmente la fatica di realizzare il programma mi ha portato dapprima a completare la parte Debian/Devuan/Ubuntu, quindi estenderla - ormai da un anno - al mondo Arch e compatibili.

Attualmente sto ricevendo richieste in tal senso, specialmente per fedora. 

La mia intenzione è estendere `eggs` a fedora e successivamente a SuSE, ma necessito di collaborazione e, se possibile, di sponsorizzazioni.

# L'Assunzione

Mi spiego meglio, parafrasando la festività. 

Sinora con eggs sono andato avanti esclusivamente con le mie proprie risorse: ovverò investo in esso tutte le mie conoscenze, la quasi totalità del mio tempo ed anche - diciamo così - mi autofinanzio per hardware e sito. 

Diciamo che una sponsorizzazione darebbe un maggior senso a questo lavoro - piuttosto impegnativo - nonchè garantirebbe anche una maggiore autostima.

Poi, se non altro, renderebbe più sopportabile a mia moglie la mia smodata passione per l'opensource e l'informatica!

![assunzione](/images/assunzione.jpg)