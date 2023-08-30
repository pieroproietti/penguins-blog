---
authors: pieroproietti
slug: penguins-and-eagles
title: "Penguins and eagles (Garuda)"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Credo di aver nuovamente incontrato il Principe di Serendip.

Non è la prima volta, ormai stiamo diventando amici, e ci stimiamo a vicenda.

In questi giorni, tra indecisioni ed altro, alla fine ho aggiunto ad `eggs` la capacità - in realtà piuttosto semplice - di configurare calamares con diversi filesystem, in particolare btrfs.

Prova e riprova però non riuscivo a farlo effettivamente funzionare. Almeno sino a quando Stefano Capitali mi ha suggerito di dare una occhiata a [Garuda Linux](https://garudalinux.org/). Tra l'altro, Stefano fa parte del [team di Manjaro](https://manjaro.org/team/) ed ha anche contribuito non poco al porting di `eggs` su [Manjaro](https://manjaro.org/), [Arch](https://archlinux.org/) e derivate ma - nonostante fosse "la concorrenza" - non ha lesinato il consiglio.

# Garuda Linux
Perchè Garuda? Perchè in Garuda Linux il filesystem installato di default è proprio btrfs e - come dire - ci dovrebbe essere tutto l'occorrente per farlo funzionare.

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

![garuda](/images/garuda-raptor-plasma.png)

Trovate delle ISO rimasterizzate con eggs di Garuda Linux nella pagina di sourceforge di penguins-eggs sotto la voce [garuda](https://sourceforge.net/projects/penguins-eggs/files/ISOS/garuda/)

# Problemi e workaround
E' stato necessario creare la directory `/etc/sddm.conf.d`, il file `kde_settings.conf` utilizzando la configurazione GUI di sddm ed il file `/etc/sddm.conf.d/autologin.conf`.

Mentre inizialmente ho utilizzato la versione [Garuda KDE Dr460nized](https://garudalinux.org/downloads.html), alla fine ho optato per la versione [Garuda Linux KDE lite](https://garudalinux.org/downloads.html) che non ha tutte le customizzazioni di Garuda e, con la quale mi trovo meglio per i miei scopi.

# Installazione
Occorre SEMPRE selezionare l'installazione btrfs, per l'installazione di Garuda, in quanto il sistema è configurato per funzionare su btrfs. Non si avvia se lo installiamo formattando il disco con ext4.

# Remastered Garuda ISOs
Potete trovare varie versioni di Garuda rimasterizzate con eggs sulla pagina [sourceforge](https://sourceforge.net/projects/penguins-eggs) del progetto, alla cartella [garuda](https://sourceforge.net/projects/penguins-eggs/files/ISOS/garuda/)



