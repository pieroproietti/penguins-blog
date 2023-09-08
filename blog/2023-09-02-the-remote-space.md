---
authors: pieroproietti
slug: the-remote-space
title: "The remote space"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

![remote space](/images/spatiul-cosmic.jpg) 
Foto concessa da: [publicdomainpictures](https://www.publicdomainpictures.net/en/view-image.php?image=31051&picture=space)

Quando serve spostare un sistema da un computer ad un altro, normalmente ci si trova con molti dati. 

Spesso stiamo spostando il sistema proprio perchè abbiamo bisogno di più spazio,

eggs, necessita per creare l'immagine ISO del sistema di uno spazio pari alla grandezza dell'intero filesystem compresso, moltiplicata per due - perchè il file `filesystem.squashfs` verrà copiato interamente nella ISO - più altro spazio - normalmente trascurabile - necessario per la configurazione della iso stessa.

Si finisce, così a non poter rimasterizzare/clonare il sistema proprio nel momento del massimo bisogno.

# La soluzione
Ragionando su questa problematica con l'utente @unibox, ho pensato di spostare la creazione della ISO avviabile su un punto di mount.

In sostanza, mentre precedentemente il file system compresso veniva costruito in una cartella ISO posta direttamente sotto `/home/eggs`, attualmente avviene sotto `/home/eggs/mnt`.

Il bello è che si può montare sotto `/home/eggs/mnt` sia una partizione locale, sia dello spazio remoto.

Per montare una partizione locale, ad esempio: `/dev/sdb1` è suddiciente utilizzare il comando: 

`sudo mount /dev/sdb1 /home/eggs/mnt`

Se, invece, si vuole montare una condivisione remota daremo:

`sudo sshfs root@x.x.x.x:/path/to/share /home/eggs/mnt`

A questo punto potremo generare la iso, avendo garantito ad eggs lo spazio sufficiente per poter funzionare: `sudo eggs produce`.

# Prospettive
Questo naturalmente facilita molto l'utilizzo di eggs per spostare interi sistemi da un computer ad un altro, e possiamo farlo direttamente utilizzando condivisioni di rete. Considerate pure che è anche possibile utilizzare l'opzione `--crypedclone` per clonare il sistema senza esporlo direttamente - ma su un volume LUKS - possiamo anche pensare di trasferire un server dalla nostra sede alla server farm all'estero in relativa sicurezza.

# Avvertenza
Nonostante tutte le attenzioni poste nello sviluppo non sono certo infallibile, quindi prestate SEMPRE le dovute precauzioni.

Il programma è distribuito, così come è, sotto licenza di software libero [GNU GPLv2](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html) o [Licenza MIT](https://it.wikipedia.org/wiki/Licenza_MIT). Per essere chiari - l'utilizzo di questo software è a vostro rischio e pericolo - e l'autore non risponde, in alcun modo, di una eventuale perdita di dati dovuta all'utilizzo del software. 

# Prossimi step
Dalla regia chiedono se è possibile far funzionare eggs con [systemd-boot](https://wiki.archlinux.org/title/systemd-boot), credo di si, ma occorre studiarlo!

