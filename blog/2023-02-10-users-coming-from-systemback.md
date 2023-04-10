---
authors: pieroproietti
slug: users-coming-from-systemback
title: Users coming from systemback
lang: en
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

![systemback](/images/about-systemback.png)

Systemback and, even earlier. remastersys were two great tools and probably eggs would never have existed without them. The same if not more applies to Knoppix, a small/big revolution that started modern live installations.

I feel some nostalgia, I drop a few tears, but it was necessary to make this introduction and tribute.

# knoppix
Talking about knoppix is like talking about magic, how many spells behind that bar that scrolled chasing the drivers needed to boot the system before even installing it.

![knoppix](/images/knoppix-logo.png)

# With a little help from my friends

A user from Greece, proposed me to add this short cheatsheet for users coming from systemback and that ages.


* download eggs_9.3.23_amd64.deb or better
* install it
* ```sudo eggs dad -d```
* ```sudo eggs calamares -i```

![systemback-system-create](/images/systemback-system-create.png)

[x] mode include users data

* ```sudo eggs produce --clone```


[ ] mode include users data

* sudo eggs produce

![giorgios](/images/giorgios.png)

# remastersys
We have talked about systemback, but what about remastersys approach?

Remastersys had a function in the code that copied the main desktop configurations to /etc/skel.

This is exactly what eggs provides for creating a version of your system without including your data in it, symply: ```sudo eggs tools skel``` before to create iso.

![remastersys](/images/remastersys.webp)


# a few more words
I want to add others informations too, becouse can be more usefull and explain.

This morning I used this way to create a clone of LinuxFX plasma, they  use a special user: linuxfx to configure Desktop and don't let to change user, or this is a bit hidden.

Well, was enought simple to get a workable LinuxFX plasma simply using clone: just install eggs, purge their calamares configuration, and using theme linuxfx from wardrobe.

Will be usefull too to change others configurations: like disable openssh-server, samba and try to find a way to have a more secure home without 777 permission inside. This in a system accessible with ssh, anydesk, samba and so on it's not so secure to have. Anyway probably this is made just to have better compatibility with Windows, so it's not something I want to discuss: LinuxFX have a large impact and quite large community and - in a way or the other - is helping to spread Linux.

Is probably an appropriate choice in many situations.

Here I just want to point out that, using eggs with the --clone option can be really useful for many users coming from systemback who like simple or complex customizations.

The result, anyway, is impressive!

![linuxfx-plasma](/images/linuxfx-plasma.png)

You can get the resulting iso [here](https://sourceforge.net/projects/penguins-eggs/files/ISOS/linuxfx/) or built it from the original [linuxfx-11.2.22.04.6-win11-theme-plasma-wxd-12.0.iso](https://sourceforge.net/projects/linuxfxdevil/files/).





