---
title: 5 minuti con eggs
authors: pieroproietti
lang: it
---

o anche meno...

## Debian

Debian, Devuan, Ubuntu e [derivate](https://github.com/pieroproietti/penguins-eggs/blob/master/conf/derivatives.yaml).

Scaricate eggs da [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/), quindi installatela:

```
sudo dpkg -i eggs_9.4.3_amd64.deb
sudo apt install -f
```

OK, andiamo ad autoconfiguralo:

```
sudo eggs dad -d
```

Perfetto, se vogliamo calamares installer dobbiamo installarlo adesso:

```
sudo eggs calamares --install
```

Bene, pronti per fare l'uovo:

```
sudo eggs produce 
```

Se volete fare il backup del vostro systema, potente aggiungere --clone
```
sudo eggs produce --clone
```

Se volete, invece,  fare il backup del vostro server internet, ma non volete esporre i dati in chiaro, potente aggiungere --cryptedclone
```
sudo eggs produce --clone
```

Se volete la compressione massima e la rimozione di eggs e calamares installer a fine installazione, aggiungete: --max --release
```
sudo eggs produce --max --release
```

### Problemi?

Chiedete a mamma!

```
eggs mom
```
![eggs-mom](/images/book9.4/eggs-mom.png)

## Arch 

Su Arch potete usare yay per installare eggs:
```
yay penguins-eggs
```
A questo punto la procedura è la stessa, 

```
sudo eggs dad -d
```

E' possibile installare [calamares](https://aur.archlinux.org/packages/calamares-git) con yay, ma al momento c'è un problema con il package [ckbcomp](https://aur.archlinux.org/packages/ckbcomp), per aggirarlo, installate il pacchetto dal mio PKGBUILD:

```
git clone https://github.com/pieroproietti/penguins-eggs-pkgbuilds
cd penguins-eggs-pkgbuilds/aur/cbkcomp
makepkg -si
```
Bene, possiamo finalmente installare Calamares con il comando:

```
yay calamares
```
Ci metterà un po', circa 10 minuti. Attendete, prendete un caffè o meglio un'aranciata, quindi poichè vogliamo configurare Calamares per funzionare senza richiesta di password, diamo comunque il comando:

```
sudo eggs calamares --install
```

Che in teoria potrebbe fare tutti e due, ma fallisce per il problema precedente.


Bene, pronti per fare l'uovo:

```
sudo eggs produce 
```

Per le altre istruzioni fate riferimento a Debian e poi, che diavolo, usate Arch!

## Manjaro

Eggs è sulla community repository di Manjaro ormai da qualche giorno, in pacchetto dovrebbe essere cotto, quindi:
```
sudo pamac install penguins-eggs
```

Per il resto come nei casi precedenti,
