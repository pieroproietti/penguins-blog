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
Personalmente vado a periodi: ho preferito KDE a tutte le altre sino all'uscita - assai attesa in verità - della versione 4, che però non ebbe lo stesso successo almeno presso di me.

Da allora mi innamorai di cinnamon, trovando tedioso gnome, brutti XFCE, LXDE, LXQT e varie.

Ad un certo punto, sempre grazie a Linuxmint capii che XFCE non era poi così brutto, ma toccava riconfigurarlo e presi a preferirlo per le macchine virtuali - soprattutto per la leggerezza - mentre sul mio desktop principale regna ancora cinnamon.

L'uscita di wayland ha complicato ancora le cose: se uno ne ha la necessità non ci resta che rivolgerci a gnome o KDE.

Tra i due, inutile nasconderlo preferisco KDE ed ho quindi pensato: ho fatto una marea di rimasterizzazioni solo per testare eggs, perchè non cercare di farne una componendo un sistema che, nella mia mente, potrà sostituire Windows sul computer dei miei nipoti?

# Le difficoltà e le soluzioni
Ho cercato per facilitarmi il lavoro una traccia da seguire ed ho trovato questo ottimo howto [arch-plasma-install](https://github.com/XxAcielxX/arch-plasma-install) che ho provveduto immediatamente a [forkare](https://github.com/pieroproietti/arch-plasma-install).

L'ho seguito ed il risultato mi è sembrato subito buono, alla fine ho dato una pulita al sistema ed ho fatto la iso.

Maledizione, con gli ultimi aggiornamenti sono ricominciati i problemi con calamares!

# Calamares per eggs

Fino a qualche tempo fa usavo calamares da aur ed andava benissimo, poi si è rotto ed ho dovuto trovare altro.

In qualche modo, misi insieme una versione di calamares per eggs, denominata per l'appunto [calamares eggs](https://github.com/pieroproietti/eggs-pkgbuilds/tree/master/aur/calamares-eggs), ma vatti a ricordare che cosa ho fatto.

L'unica cosa che mi sono segnato è il fatto di essere partito dalla repository [Arco Linux](https://github.com/arcolinux/arcolinux-pkgbuild-calamares) di [Erik Dubois](https://github.com/erikdubois).

Un po' poco: se non avessi fatto niente tanto valeva usarla così com'era!

Allora ho provato semplicemente a ricompilare [arco-calamares-git](https://github.com/arcolinux/arcolinux-pkgbuild-calamares/tree/master/arco-calamares-git) per vedere che succede.

La versione [Arco Linux](https://github.com/arcolinux/arcolinux-pkgbuild-calamares) va benissimo com'è, un peccato non sia in aur, ma posso vedere come automatizzarne il download per eggs.

Sembra, quindi, che non ho scritto altro semplicemente perchè altro non ho fatto!

![arch kde plasma](/images/arch-kde-plasma.png)


# Conclusioni (per ora)

Per quanto "arronzata", la iso è uscita fuori. Ci sarebbe da lavorarci attorno ed affinarla, ma va già bene così per "stomaci forti".

E d'altra parte, non è l'opera di uno scultore, piuttosto di un maniscalco, di un costruttore di scalpelli.

![arch kde plasma install](/images/arch-kde-plasma-install.png)

Si noti pure l'utilizzo di un tema - per così dire "rubato" - a KDE neon.

Se volete farvi un giro, trovate `egg-of-arch-plasma_amd64_2023-09-19_1414.iso` sulla pagina [Arch](https://sourceforge.net/projects/penguins-eggs/files/ISOS/arch/).


