---
authors: pieroproietti
slug: collaborare-a-distanza
title: Collaborare a distanza
lang: it
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Capita a volte di dover collaborare a distanza, vediamo come `eggs` può aiutarci.

Sono due giorni che provo a compilare `gnome` e mi trovo sinceramente in difficoltà: non conosco `mutter`, non conosco `gnome`, non ho mai utilizzato `meson`.

Ho fatto delle prove per due giorni ma, anche se utilizzando il `wardrobe` sono riuscito a crearmi una buona traccia, alla fine mi sono arreso di fronte alla mancanza delle dipendenze necessarie e, soprattutto, della necessaria esperienza.

A questo punto, apro una semplice chat con l'esperto e questa è la sua risposta: 

```Gtk4? I'll give it a go later on today and see what I can figure out```

```ho fatto un clone della mia macchina virtuale e l'ho pubblicata...```

```I'll use that as a starting point then```

# Come passare tutta la stazione di lavoro

In questo caso, non avendo dati importanti da proteggere, ho semplicemente creato un clone della macchina utilizzando `eggs` e senza installare `calamares`. In questi casi un installatore grafico è solo una perdita di tempo visto che installaremo su una macchina virtuale e tra esperti.

Tutto quello che ho fatto è stato dare i comandi:

```
sudo eggs tools clean
```

```
sudo eggs produce --max --clone
```

ed ho ottenuto il clone installabile della mia macchina.

# Cosa succede dall'altro capo del filo

Il mio amico inserirà l'immagine ISO all'interno di una macchina virtuale e potrà dare immediatamente una occhiata alla mia configurazione ed ai miei problemi.

Se il problema è risolvibile dal live potrà tentare direttamente la compilazione, altrimenti dovrà installare il sistema. 

Come? Aprendo un terminale ed immettendo il comando:

```
sudo eggs install -un
```

# L'esperto risolve il problema
Dopo qualche tempo il mio corrispondente risolve il problema. 

Comprensibile il codice aperto ma - talvolta - è opportuno non mettere in piazza direttamente tutto e rilasciare un clone così potrebbe essere non . 

Cosa possiamo fare?

```
sudo eggs produce --max --cryptedclone
```

A lui verrà richiesto di immettere una passphrase che verrà utilizzata per un volume LUKS inserito nella immagine ISO prodotta.

Su un altro canale di comunicazione mi sarà passata la passphrase, quindi io scaricherò la nuova immagine.

Dal live non avrò accesso ad alcun dato.

# Proviamo ad installare...

```
sudo eggs install -un
```

Ad un certo punto mi verrà richiesta la passphrase per il file LUKS e questo verrà decriptato ed aggiunto alla postazione vergine.

Otterrò quindi nuovamente la configurazione originale, con le modifiche del collega e tenuta lontata da occhi indiscreti.

## Utenti
In un clone NON esiste un utente live, gli utenti sono gli stessi della postazione originaria, in questo caso `artisan`.
