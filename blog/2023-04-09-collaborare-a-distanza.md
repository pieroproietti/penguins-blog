---
authors: pieroproietti
slug: collaborare-a-distanza
title: Collaborare a distanza
lang: it
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Capita a volte di dover collaborare a distanza, vediamo come eggs può aiutarci.

Sono due giorni che provo a compilare gnome e mi trovo sinceramente in difficoltà: non conosco mutter, non conosco gnome, non ho mai utilizzato meson.

Ho fatto delle prove per due giorni, ma anche se grazie al wardrobe cono riuscito a crearmi una traccia del necessario, alla fine mi sono arreso di fronte alla mancanza di gtk4 su Debian.

A questo punto, una semplice chat con un amico più esperto e la sua risposta: 

```Gtk4? I'll give it a go later on today and see what I can figure out```

```ho fatto un clone della mia macchina virtuale e l'ho pubblicata...```

```I'll use that as a starting point then```

# Come passare tutta la stazione di lavoro

In questo caso, non avendo dati importanti da proteggere ho semplicemente creato un clone della macchina utilizzando eggs e senza installare calamares, in questi casi è solo una perdita di tempo visto che installaremo su una macchina virtuale.

Tutto quello che ho fatto è stato quindi, dare i comandi:

```
sudo eggs tools clean
```

```
sudo eggs produce --max --clone
```

ed ho ottenuto il clone installabile della mia macchina.

# Cosa succede dall'altro capo del filo

Il mio amico inserirà l'immagine ISO all'interno di una macchina virtuale e potrà dare immediatamente una occhiata alla mia configurazione ed ai miei problemi.

Se il problema è risolvibile direttamente dal vivo potrà tentare la compilazione direttamente sul live, altrimenti dovrà installare il sistema. Come, aprendo un terminale ed immettendo il comando:

```
sudo eggs install -un
```

# Facciamo che il mio amico risolva il sistema
Dopo qualche giorno il mio amico ha risolto il problema dopo giorni di duro lavoro, comprensibile il codice aperto ma - talvolta - è opportuno non svelare direttamente i propri segreti. Cosa possiamo fare?

```
sudo eggs produce --max --cryptedclone
```

Al mio amico verrà richiesto di immettere una passphrase che verrà utilizzata per un volume LUKS inserito nella immagine ISO prodotta.

Il mio amico per un altro canale mi comunicherà la passphrase ed io scaricherò l'immagine condivisa.

Dal live non avrò accesso ad alcun dato, partirò con un un utente completamente nuovo.

Ma, se installo...
```
sudo eggs install -un
```

Ad un certo punto mi verrà richiesta la passphrase per il file LUKS e questo verrà decriptato ed aggiunto alla postazione vergine.

Otterrò nuovamente la configurazione del mio amico, lontata da occhi indiscreti.

# Avvertenze
Un clone o un clone cryptato non è come una semplice immagine ISO, 




![buona-pasqua](/img/blog/2023-04-09/buona-pasqua.png
)
