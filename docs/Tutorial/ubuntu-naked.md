---
authors: pieroproietti
title: Ubuntu Linux naked
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# `Ubuntu Linux 20.04 naked`

Ho scoperto grazie al [forum](https://forum.ubuntu-it.org/) di ubuntu-it.com la possibità di ottenere una immagine naked per Ubuntu utilizzando la vecchia mini-iso 20.04 ed eventualmente aggiornandola a 22.04.

Più precisamento mi è stato consigliato questo [howto](https://wiki.ubuntu-it.org/Installazione/CdMinimale#Workaround_per_sistemi_Uefi_e_Ubuntu_22.04)

Come prima cosa ho scaricato l'ultima versione della [mini-iso](http://archive.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/current/legacy-images/netboot/mini.iso) disponibile e l'ho installata senza aggiungere alcuna opzione. Per l'installazione ho scelto il nome `naked`.

Successivamente ho installato eggs ed dato i comandi: `sudo eggs dad -d` `sudo eggs tools clean`, quindi ho generato la iso con il comando: `sudo eggs produce --max`

Una volta ottenuta la iso della versione 20.04 è stato relativamente semplice aggiornare la stessa installazione a 22.04, sempre seguendo l'articolo del forum e dando il comando: `sudo sed -i 's/focal/jammy/g' /etc/apt/sources.list
`. A questo punto, basta aggiornare:
`sudo apt update`, `sudo apt full-upgrade` quindi `sudo eggs reboot`


A questo punto siamo passati alla versione 22.04 confermata dal comando `lsb_release -a` e possiamo rimuovere i vecchi kernel e riconfigurare eggs: `sudo eggs dad -d`.

Pronti per la nuova versione: `sudo eggs produce --max`.

