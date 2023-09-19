---
authors: pieroproietti
slug: a-freshly-painted-arch
title: "A freshly painted arch"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Tra i vari follower del gruppo Telegram, ve ne è uno particolare, un ragazzo canadese che ormai mi accompagna da qualche anno.

Lo conobbi quattro o cinque anni fa, ricordo una notte in cui mi svegliò verso l'una di notte - ora italiana - perchè lui stava provando a fare le uova con la sua mega distribuzione.

La faccenda - fortunatamente si concluse con successo ed ebbi l'occasione di provare la distro creata che conteneva tutto il possibile di KDE e, probabilmente di più.

Pensai: questo o è un genio o un matto, o sia l'uno che l'altro.

Ad ogni modo ci aveva messo dei suo e la "distro" resistette qualche tempo sul mio portatile, prima che - sia pure con rimpianto per non averla capita appieno - fu rimpiazzata da altri esperimenti.

# KDE Plasma
Personalmente vado a periodi, ho preferito KDE a tutte le altre sino all'uscita - assai attesa in verità - della versione 4 che però non ebbe lo stesso successo almeno presso di me.

Da allora mi innamorai di cinnamon, trovando tedioso gnome, brutti XFCE, LXDE, LXQT e varie.

Ad un certo punto, sempre grazie a Linuxmint capii che XFCE non era poi brutto, ma toccava riconfigurarlo e presi a preferirlo per le macchine virtuali - soprattutto per la leggerezza - mentre sul mio desktop principale ancora regna cinnamon.

L'uscita di wayland ha complicato ancora le cose: Se uno ha necessità non ci resta che rivolgerci a gnome o KDE.

Tra i due, inutile nasconderlo preferisco KDE ed ho quindi pensato: ho fatto una marea di rimasterizzazioni solo per testare eggs, perchè non cercare di farne una buona componendo un sistema che, nella mia mente, potrà sostituire Windows sul computer dei miei nipoti?

# Le difficoltà e le soluzioni
Ho cercato per facilitarmi il lavoro qualcosa da seguire ed ho trovato questo ottimo howto [arch-plasma-install](https://github.com/XxAcielxX/arch-plasma-install) che ho provveduto immediatamente a forkare.

L'ho seguito ed il risultato mi è sembrato subito buono, alla fine ho dato una pulita al sistema ed ho fatto la iso.

Maledizione, con gli ultimi aggiornamenti sono ricominciati i problemi con calamares-eggs!

# [calamares eggs](https://github.com/pieroproietti/eggs-pkgbuilds/tree/master/aur/calamares-eggs)

Vatti a ricordare che cosa ho fatto, l'unica cosa che mi sono segnata è il fatto di essere partito dalla repository [Arco Linux](https://github.com/arcolinux/arcolinux-pkgbuild-calamares) di Erik Dubois.

Un po' poco... se non avessi fatto niente tanto valeva usarla com'era.

Allora ho provato semplicemente a ricompilare [arco-calamares-git](https://github.com/arcolinux/arcolinux-pkgbuild-calamares/tree/master/arco-calamares-git) e vediamo che succede.

![arch kde plasma](/images/arch-kde-plasma.png)


Sembra che non ho scritto altro, perchè altro non ho fatto!

La versione [Arco Linux](https://github.com/arcolinux/arcolinux-pkgbuild-calamares) va benissimo com'è, un peccato non si in aur, ma posso vedere come automatizzarne il download per eggs.

# Conclusioni (per oggi)

Per quanto arronzata, la iso è uscita fuori, ci sarebbe da lavorarci attorno per affinarla, ma va già bene così per "stomaci forti"!

![arch kde plasma install](/images/arch-kde-plasma-install.png)

E d'altra parte, non è l'opera di uno scultore, piuttosto di un costruttore di scalpelli.

