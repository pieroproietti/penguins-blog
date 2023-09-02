---
authors: pieroproietti
slug: the remote space
title: "The remote space"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

![spatiul-cosmic.jpg](/images/spatiul-cosmic.jpg) 
[publicdomainpictures](https://www.publicdomainpictures.net/en/view-image.php?image=31051&picture=space)

Quando serve spostare un sistema da un computer ad un altro, normalmente ci si trova con molti dati. 

Spesso stiamo spostando il sistema proprio perchè abbiamo bisogno di più spazio,

eggs, necessita per creare l'immagine iso del sistema di uno spazio pari alla grandezza dell'intero filesystem compresso, moltiplicata per due perchè poi il file `filesystem.squashfs`, più altro spazio - normalmente trascurabile necessario per la configurazione della iso.

Si finisce, così a non poter rimasterizzare/clonare un sistema proprio nel momento di massimo bisogno.

# La soluzione
Ragionando su questa problematica con l'utente @unibox, ho pensato di spostare la creazione della iso avviabile su un punto di mount.

In sostanza, mentre precedentemente il file system compresso veniva costruito in una cartella iso direttamente posta direttamente sotto `/home/eggs`, attualmente avviene sotto `/home/eggs/mnt`.

Il bello è che si può montare sotto `/home/eggs/mnt` sia una partizione locale, sia dello spazio remoto.

Per montare una partizione locale, ad esempio: `/dev/sdb1` è suddiciente dare il comando: `sudo mount /dev/sdb1 /home/eggs/mnt`, mentre se si vuole montare una partizione remota daremo: `sudo sshfs root@x.x.x.x:/path/to/free/space /home/eggs/mnt`.

A questo punto potremo generare la iso, avendo garantito ad eggs lo spazio sufficiente per poter funzionare: `sudo eggs produce`.