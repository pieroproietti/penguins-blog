---
authors: pieroproietti
slug: 2022-01-27-backup-users-revisited
title: Backup useres revisited
---


E' da qualche tempo che sto pensando di rendere eggs utile per effettuare backup,

In effetti non sarebbe troppo difficile, eggs non effettua il salvataggio dei dati utente, per una decisione di progetto: impedire che dati privati vengano esposti in pubblico.

Pur tuttavia, un collega indiano, qualche tempo fa mi propose di utilizzare eggs per spostare delle macchine server da una serverfarm ad un'altra, in particolare dalla sede a Kerala a quella in Germania e viceversa.

Naturalmente i dati non dovrebbero essere esposti su internet, trattandosi anche di dati privati.

Immaginai che eggs, una volta finito il lavoro necessario alla costruzione di una iso, controllasse la dimensione dei dati da salvare dalle rispettive home degli utenti e server, quindi costruisse un volume LUKS di adeguate dimensioni, e ci copiasse questi dati. Infine copiasse nella iso il volume luks stesso.

In effetti già da qualche tempo, eggs ha questa "capacità". La procedura però - poco testata - aveva dei problemi che, finalmente, sto cercando di risolvere: in primo luogo la stima dei dati, tra blocchi e dimensioni risultava a volte errata e, quindi, il backup veniva interrotto; inoltre, il backup avveniva solo sotto la directory /home, limitando quindi la possibilità di salvare dati dei server.

Immaginando unaa soluzione, abbiamo due casistiche differenti: creare una iso del nostro server con una configurazione di base e che, quindi contiene necessariamente anche le home dei servizi, ed un'altra nella quale abbiamo un server con dati reali e quindi privati, nella quale quindi, gli stessi devono essere presenti in modalità criptata.

Nel primo caso, server con una configurazione di base, creaimo la iso direttamente: nessun backup è necessario, in quanto i dati delle home dei servers vengono comunque copiati nella iso.

Per il secondo caso - backup - invece, dobbiamo:

## Prima fase: analisi ed esclusione dei dati privati
* analizziamo ```/etc/password``` allo scopo di rilevare le varie home significative. C'è anche un nuovo comando in eggs che permette di farsi subito un'idea: ```eggs analyze```
* creiamo una lista di esclusione aggiuntive per le home degli utenti e servizi rilevati.

## Seconda fase: creazione del filesystem.squashfs
Procediamo normalmente per la creazione del filesystem.squashfs compresso, naturalmente utilizzeremo se del caso le nuove esclusioni per i dati privati.

## Terza fase: backup dei dati
* dopo la costrunzione del ```filesystem.squash``` si torna ad analizzare ```/etc/passwd``` e decidere le dimensioni necessarie:
* preparazione di un un file per il volume ```luks-eggs-backup```
* creazione e montaggio del volume ```luks-eggs-backup``` e copia delle home sia dei server che degli utenti nella cartella demoninata: ```ROOT``` del volume stesso;
* salvataggio dei file: ```/etc/passwd```, ```/etc/shadow``` ed ```/etc/groups``` nella root del volume luks;
* chiusura e smontaggio del volume luks e copia del file risultante nella iso

A questo punto ho aggiunto un ulteriore comando ad eggs: ```eggs syncfrom```.

Questo comando non fa altro che realizzare il processo inverso e, se chiamato da un sistema live, sostituisce nel sistema di destinazione dei file cruciali per il suo funzionamento e, cioè ```/etc/passwd```, ```/etc/shadow``` ed ```/etc/groups```, quindi, carica tutte le home salvate in precedenza.

Naturalmente, potrebbe essere conveniente inviare i dati da un posto ad un altro in due differenti file, ovvero, da una parte la normale iso contenente la configurazione di base e dall'altra il volume di backup.

Dovremmo, quindi, andare ad utilizzare il comando ```syncfrom``` su una macchina installata e fornire come parametro il percorso per il volume luck-eggs-backup precedentemente salvato. Naturalmente in tal caso NON potremo sostituire i file  ```/etc/passwd```, ```/etc/shadow``` ed ```/etc/groups```, quindi la macchina accetterà soltanto i dati presenti sulle home di servizi ed utenti.

Il sistema, dovrebbe, comunque funzionare, presentare le stesse configurazioni di base ma andrebbe a sostituire le home precedenti con i nuovi dati. In teoria, questo dovrebbe fornire un aggiornamento ed allineamento con il sistema salvato.

A questo punto è nato anche un ulteriore comando: eggs ```syncto``` che, senza creare la iso del sistema, crea solamente il volume di backup.


