---
title: Cook eggs in 5 minutes!
authors: pieroproietti
slug: eggs5
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

o anche meno...

## Debian

Debian, Devuan, Ubuntu e [derivate](https://github.com/pieroproietti/penguins-eggs/blob/master/conf/derivatives.yaml).

Scaricate eggs da [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/), quindi installatela:

```
sudo dpkg -i eggs_9.6.1_amd64.deb
sudo apt install -f
```

OK, andiamo ad configurarlo, se scegliamo il default fa tutto da solo!

```
sudo eggs dad --default
```
![eggs dad --default](/images/eggs-dad-default.png)

Perfetto! Abbiamo sufficiente spazio libero e, quindi, possiamo procedere.

Se non avessimo abbastanza spazio disponibile `eggs dad` ci suggerisce come aggiungerlo: da uno share remoto o su una partizione locale.

Se vogliamo installare la nostra ISO con Calamares installer, dobbiamo - come dire - installare l'installer, ci basterà dare il comando:

```
sudo eggs calamares --install
```

Bene, siamo pronti per produrre la nostra prima ISO!

```
sudo eggs produce 
```

Se, invece di creare una rimasterizzazione distribuibile, volete farvi una copia intera del vostro sistema, potete aggiungere l'opzione `--clone`:
```
sudo eggs produce --clone
```

Inoltre, potete utilizzare `eggs` per trasferire un vostro server su internet, ma senza esporre direttamente i dati, utilizzando `--cryptedclone`
```
sudo eggs produce --cryptedclone
```

Se volete la massima compressione e la rimozione di eggs e di calamares installer alla fine dell'installazione, basterà aggiungere i flag: --max --release
```
sudo eggs produce --max --release
```

### Problemi?

Chiedete a mamma! `eggs mom`

![eggs-mom](/img/book/eggs-mom.png)

## `Arch`

### Utilizzando `Chaotic-AUR`
penguins-eggs e calamares non sono presenti nelle repository standard di Arch, mentre è presente nella repository chaotic-AUS, tutto quello che dobbiamo fare è configurarla:

```
 pacman-key --recv-key FBA220DFC880C036 --keyserver keyserver.ubuntu.com
 pacman-key --lsign-key FBA220DFC880C036
 pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```

A questo punto, aggiungiamo alla fine di `/etc/pacman.conf` il seguente testo:
```
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

A questo punto possiamo installare penguins-eggs con il comando: `sudo pacman -Sy penguins-eggs`

### Addaura
Potete anche utilizzare il tool `addaura`, in questo modo:

* `git clone https://github.com/pieroproietti/addaura`
* `cd addaura`
* `sudo ./addaura`

su Arch, addaura installa AUR e in pacchetto penguins-eggs.


### Utilizzando `yay`

Su `Arch` potete usare `yay` per installare `eggs`:
```
yay penguins-eggs
```

### Crezione della ISO

A questo punto la procedura è la stessa, 

```
sudo eggs dad -d
```

Bene, anche per Arch siamo pronti a produrre la nostra prima ISO!

```
sudo eggs produce 
```

Per le altre istruzioni fate riferimento a Debian e poi, che diavolo, usate Arch!

## Manjaro

eggs è sulla community repository di Manjaro, basterà, quindi:

```
sudo pamac install penguins-eggs
```

Per il resto come nei casi precedenti.


# Suggerimenti e feedback

Cerco di fare questa miniguida breve e coincisa, non sò se ci riesco, se avete problemi o suggerimenti non esitate a scrivermi.



