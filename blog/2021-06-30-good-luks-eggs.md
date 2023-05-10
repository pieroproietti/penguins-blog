---
authors: pieroproietti
slug: good-luks-eggs
title: Good LUKS eggs!
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />


Per molto tempo, sino a qualche settimana fa, non ho aggiunto una opzione di backup ad eggs per un preciso motivo: non volevo che inavvertitamente un utente potesse mettere a rischio i suoi dati.

Tuttavia la possibilità di effettuare il backup delle aree utente mi è stata richiesta anche nel campo del backup/spostamento di server e, quindi, è stata aggiunta.

Sempre, attraverso lo stesso canale, mi è stata richiesta la possibilità di cryptare con LUKS le iso create ed eventualmente l'installazione stessa.

In effetti, mai avevo considerato il rischio insito in un laptop dimenticato presso un cliente, una sala riunioni, etc. Oppure la semplice chiavetta USB smarrita, magari creata con l'optione backup e che, quindi, contiene oltre al sistema operativo stesso la nostra home utente, con dati che possono essere più o meno riservati.

# Huston: we have a problem!
C'è un problema serio, quindi, proprio come in Apollo 13: garantire o limitare la possibilità di accesso ai nostri dati nel caso un terzo abbia accesso al dispositivo: notebook, chiavetta USB, DVD, etc.

# LUKS 

Linux Unified Key Setup, abbreviato LUKS, è un metodo di cifratura dei dischi rigidi. Le sue specifiche sono state scritte da Clemens Fruhwirth nel 2004 ed è stato originariamente pensato per Linux. 

Con LUKS è possibe criptare l'intero filesystem o una parte di esso.

In questo primo momento, ho pensato a "mettere una pezza" solo ad una parte del problema e, cioè garantire che un backup di un nostro server che - necessariamente finisca in rete, non foss'altro che per la sua installazione - esponga direttamente i nostri dati utente.

Per fare questo sono state necessarie alcune modifiche ad eggs, in particolare è stato aggiunto un ulteriore livello nella creazione della iso e cioè:
* preparare un volume luks, formattarlo e montarlo;
* copiare sul nostro volume criptato i dati degli account degli utenti e le loro home directory;
* smontare il volume criptato e chiuderlo;
* spostare il volume criptato nella cartella live della iso di destinazione

Quindi avremo una live che si avvia normalmente, eventualmente con l'autologin ed il solo utente live, ma che contiene al proprio interno sia gli accout degli utenti che i dati degli stessi.

In sede di installazione avviene il processo opposto - al momento solo per l'installer krill - ma sto pensando di aggiungere un modulo per calamares - dopo la fase di unpacking del file system, nel caso venga rilevato il volume criptato, si procede al restore dei dati:
* si apre il volume criptato e viene richiesta la passphrase immessa;
* si monta il volume ed i dati in esso contenuti vengono copiati nel sistema in installazione;
* a questo punto non resta che smontare il volume criptato e proseguire come nel caso normale.

Naturalmente tutte queste fasi sono automatizzate, l'unica cosa da fare è digitare la passphrase e **ricordarla** poichè non sarà possibile recuperarla.

A fine dell'installazine il nostro "uovo" sarà diventato un pulcino esattamente come il padre.

Forse sarebbe più corretto parlare di clonazione, in stile pecora Dolly, più che di backup ma questo è un altro discorso.

# I vantaggi di questo approccio

I dati utente non vengono mai esposti direttamene e la password non viene mai registrata e passa in rete solo al momento dell'installazione.

Questo risolve il problema per le nostre iso che - anche solo per l'installazione - in rete ci dovranno comunque finire.

Per quanto concerne, invece, l'installazione del sistema direttamente su di un file system cifrato - che risolverebbe il problema dello smarrimento di un notebook - è essenzialmente un caratteristica dell'installazione stessa e, se ci sarà interesse, potrà essere aggiunta in future versioni di krill.

# Considerazioni

Questo è un progetto originale, nato inizialmente da necessità personali e dalla voglia di mettersi in gioco o, comunque, di rimanerci una volta abbandonata l'attività professionale per raggiunti limiti di età.

Indubbiamente mi sta dando molte soddisfazioni e, grazie ad esso, oltre a non aver assunto l'aspetto arruginito di un binario morto sul quale non passano più i tram, ho appreso diverse tecniche che non conoscevo precedentemente. Tuttavia, lo scrivere e mantenere un programma come eggs è piuttosto impegnativo sia in termini di tempo - sostanzialmente non meno di otto ore a giorno, spesso sabato e domenica compresi - sia dal punto di vista tecnico - occorre rimanere aggiornati e cercare di cogliere e comprendere quanto di nuovo esce a riguardo, infine, c'è anche un aspetto economico: necessità di avere almeno un server virtuale in uso sia per il blog per la diffusione delle versioni, oltre naturalmente ad avere bisogno di adeguato hardware dove creare. testare, etc.  Attualmente utilizzo una stazione di lavoro basata su Debian buster con l'addizione di Proxmox VE e l'aggiunta di una interfaccia grafica, la macchina ha ormai cinque anni e, come dire, missile non lo è più!

Inotre, per poter testare le versioni per arm, ci sarebbe bisogno pure di hardwre fisico. Adesso le varie prove adesso vengono effettuate sempre su Proxmox VE emulando con qemu l'architettura arm64 e, naturalmente, faccenda lenta è.

Sinora - e sono appunto quattro, cinque anni  - ho portato avanti lo sviluppo sostanzialmente da solo, però eggs nel frattempo è cresciuto ed diventato uno strumento maturo, utilizzato sia in ambienti professionali [UfficioZero](https://www.ufficiozero.org/), scolastici [guadalinex](https://github.com/aosucas499/guadalinex) e [minino-TDE](https://github.com/aosucas499/minino-TDE) o sviluppate da appassionati [TeLOS](https://sourceforge.net/projects/teloslinux/). Alcune distro/remix realizzate con eggs sono presenti o comunque sottoposte anche su [distrowatch](https://distrowatch.com/) ([UfficioZero](https://distrowatch.com/table.php?distribution=ufficiozero) e [TeLOS](https://distrowatch.com/table.php?distribution=telos)) e, comunque vengono scaricate in ogni parte del mondo.

eggs in sostanza può essere interessante per il lavoro di molti: da chi desidera realizzare una propria remix, a chi vuole un modo per installare la propria faticosamente creata ed, infine, per salvare, spostare o clonare le proprie infrastrutture informatiche, traferendole magari da hardware fisico a virtuale, da locali a remote e viceversa.

Inoltre - ed è un particolare di non poco conto - eggs è estremamente versatile a riguardo delle architetture sulle quali può girare. Difatti, essendo scritto in javascript utilizzando nodejs, è possibile rilasciarlo ed è attualmente rilasciato per quattro differenti architetture: amd64, i386, arm64 ed armel. Altre possono essere aggiunte in futuro a seconda degli sviluppi dell'IT ed in particolare dell'uscita di nuovi processori, penso soprattutto all'architettura RISC-V dalla quale spero e mi aspetto sorprese.

![good-luks-eggs](/images/good-luks-eggs.jpg)

Sarei quindi felice di trovare persone interessate, disponibili per delle collaborazioni, a delle sponsorizzazioni del progetto. Anche eventualmente a finanziare delle nuove features di cui si potrebbe aver bisogno e migliorare, quindi, il progetto stesso.

D'altra parte il progetto è grande. comprende la grande famiglia di Debian/Devuan/Ubunte e derivate, e potrebbe essere anche esteso portandolo magari su distribuzioni diverse come Funtoo o Arch, etc.

Ma per tutto questo c'è bisogno di un aiuto.

Grazie per l'attenzione

Piero Proietti
