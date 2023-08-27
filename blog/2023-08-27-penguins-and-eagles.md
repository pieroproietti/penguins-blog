---
authors: pieroproietti
slug: penguins-and-eagles
title: "Penguins and eagles (Garuda)"
lang: it
enableComments: true
---

Credo di aver nuovamente incontrato il Principe Serendip.

Non è la prima volta, ormai stiamo diventando amici, e ci stimiamo a vicenda.

In questi giorni, tra indecisioni ed altro, alla fine ho aggiunto ad `eggs` la capacità - in realtà piuttosto semplice - di configurare calamares con diversi filesystem, in particolare btrfs.

Prova e riprova però non riuscivo a farlo effettivamente funzionare. Almeno sino a quando Stefano Capitali mi ha suggerito di dare una occhiata a [Garuda Linux](https://garudalinux.org/). Tra l'altro, Stefano fa parte del [team di Manjaro](https://manjaro.org/team/) ed ha anche contribuito non poco al porting di `eggs` su [Manjaro](https://manjaro.org/), [Arch](https://archlinux.org/) e derivate ma, nonostante fosse per così dire "la concorrenza", non ha lesinato il consiglio.

# Garuda Linux
Perchè Garuda? Perchè in Garuda Linux il filesystem installato di default è, appunto, btrfs e - come dire - ci deve essere tutto l'occorrente per farlo funzionare.

Inoltre, e qua c'entra soprattutto il Principe, Garuda utilizza nativamente la repository aur chaotic nella quale il pacchetto penguins-eggs è già presente. 

Quindi non occorre alcuna configurazione particolare per poterlo installare.

# Proviamo
Ho fatto una prima installazione di Garuda Linux nella versione XFCE, ed ha funzionato!

Quindi ho ripetuto l'esperimento con la versione plasma, da loro denominata `dr460nized`. 

Questi i comandi necessari:

`sudo pacman -Syu penguins-eggs`

`sudo eggs dad -d`

`sudo eggs calamares --install`

`sudo eggs tools clean`

`sudo eggs produce`

Tutto fatto!

![garuda](/images/garuda-plasma.png)

Trovate delle ISO rimasterizzate con eggs di Garuda Linux nella pagina di sourceforge di penguins-eggs sotto la voce [garuda](https://sourceforge.net/projects/penguins-eggs/files/ISOS/garuda/)

Work in progress...
