---
authors: pieroproietti
slug: proxmox-ve-arm
title: "Proxmox VE on ARM64"
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Quando è uscita la Raspberry Pi 4 con ben 4 GB di RAM, l'acquistai,non poteva mancare alla mia esperienza!

Invece, per quasi due anni mancò e di brutto, nonostante avessi preso anche un case con disco rigido SSD da ben 250 GB.

Installai Raspian, poi qualcosaltro... Vidi che la potevo usare come un PC con prestazioni scarse, avevo di fronte a me un i7 con 16 core, 16 GB di memoria e finì a prendere prima polvere, poi ad essere custodita in un cassetto.

# La nascita di eggs per ARM64
La nascita di eggs per ARM è strettamente legata ad un tentativo fatto più per scrupolo che per convinzione di aiutare un utente che voleve rimasterizzare Linux Mint Debian Edition 6, uscito a settembre.

Gli consigliai di provare con la versione di eggs per i386, che era rimasta a due anni prima, magari facendo qualche modifica in `/etc/os-release` per fargli accettare LMDE6.

Il bello che anche funzionò, ma non ero soddisfatto. 

Notai pure che LMDE6 disponeva comunque di nodejs 18.x, ed il motivo per cui ero stato costretto ad interrompere la versione per i386 era che nodesource non aggiornava più le versioni a 16 bit, la cui ultima era node12.

Chissà se può funzionare, devo aver pensato.

E provai a far girare penguins-eggs con la versione di nodejs per i386.

Andava... allora non mi restava che fare il pacchetto!

Sostituendo all'eseguibile di node un link a `/usr/bin/node` ed immettendo nodejs come dipendenza del pacchetto, questo funzionava egregiamente - anzi - era più leggero della versione per amd64, visto che non contenteva il binario di node.

Naturalmente vi furono anche altre modifiche dovute alla differenza di processore.

## La versione per arm64
A questo punto, sono anni che produco una versione non funzionante di eggs per ARM, perchè non provare la stessa operazione su arm?

Già ma quale: armel, armxx o arm64?

Dopo qualche prova, capii che la versione giusta era arm64 e provai con lo stesso script modificato per i386. Naturalmente non funzionò al primo colpo... anzi.

Il fatto di non disporre di una Raspberry o meglio di non saperla usare mi costrinse a utilizzare Proxmox VE per emulare una macchina virtuale con ARM64.

Non è troppo difficile ma tediosamente lento... in qualche modo però mi dava il modo di "pensare" e spesso anche di cucinare o fare dell'altro.

Ad ogni modo, ottenuta la macchina virtuale, iniziarono le prove... un'oretta a tentativo per una naked su arm64 del peso di circa 400 MB... un po' spararsi sui cosidetti.

Ma andò bene, il bambino nacque pur senza una vera e propria mamma.

# Dove far girare la ISO creata
All'epoca, parliamo di inizio mese, il fatto che Raspberry utilizzi di massima uboot al posto di UEFI mi era ignoto, così come l'esistenza di un progetto per avviare raspberry con UEFI.

Cercai intorno tra conoscenti e non, trovai il "prodotto" e finalmente potevo far girare la ISO.

Si, ma non vedeva la WIFI, attacca e stacca fili, la tastiera comperata per lavorarci comunque partiva DOPO che s'era avviata... frustrazioni a non finire.

Un giorno installai manjaro ARM in versione per Raspberry e capii che dovevo mangiarne di biada per correre come loro... Un gioiello, veloce e facile da usare!

Però a me interessava altro, lo scopo non era farmi un piccolo PC ma avere la possibilità di testarci Proxmox VE di cui avevo trovato due versioni non ufficiali proprio per Raspberry appunto.

Questo avrebbe naturalmente agevolato non poco lo sviluppo, disporre di un virtualizzatore basato sul processore arm64 stesso invece di faticare ad emularlo.

# Proxmox VE 8 arm64

