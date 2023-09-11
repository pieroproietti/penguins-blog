---
authors: pieroproietti
title: Debian naked
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Debian naked

Si intende per una versione naked di Debian, una semplice installazione CLI di base, a cui viene aggiunto il pacchetto eggs per renderla "riproduttiva".

Essendo `penguins-eggs` nato su Debian, questa è stata la prima versione sviluppata e, tutto sommato, ancora adesso è la più semplice da ottenere.

Si parte scaricando la la [netinst](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-11.7.0-amd64-netinst.iso) il file scaricato è di 389 MB e si installa con le opzioni minime.

Di solito configuro le mie naked con un user `artisan`/`evolution`, password di root `evolution` e nome host `naked`.

Una volta installato e riavviato dovremmo installare il comando sudo, utilizzato da `eggs`, è molto semplice: 
`su` ed inserire la password di root
`apt install sudo`
`/sbin/adduser artisan sudo`

A questo punto dopo esserci disconnessi potremo utilizzare il comando sudo dal nostro utente artisan.

# Installazione di eggs
Scarichiamo o con un browser o con curl il nostro pacchetto `eggs` dalla pagina del progetto [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/DEBS/) ed andiamolo ad installare:

`dpkg -i eggs_9.4.10_amd64.deb`, quindi - ci sarenno errori per mancanza di dipendenze - andiamo a fissarli con `sudo apt install -f`,

eggs è installato

# configurazione di eggs
Il metodo più pratico è farsi dare un aiutino da papa:
`sudo eggs dad -d`

Questo configurerà eggs per produrre una iso secondo la denominazione standare: `eggs-of-[distro]-[codename]-[hssto], nel nostro caso: `egg-of-debian-bullseye-naked_`.

# Creazione della iso
`sudo eggs produce --max`

Utilizziamo --max per avere una immagine più compressa, in questo caso ci costa anche relativamente poco perchè essendo una installazione `naked` si trata comunque di una installazione molto piccola e quindi il processo sarà comunque veloce.



