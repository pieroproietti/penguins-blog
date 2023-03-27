---
authors: pieroproietti
slug: distros-that-can-be-remastered-with-eggs
title: Distros that can be remastered with eggs
---

You can use eggs on all the following distributions, always having an easy installer available: [krill](https://penguins-eggs.net/2021/05/08/krill/) a console line tool, but usable as GUI for the "older" distributions like Debian jessie and Debian strecth or the versatile graphical installer [calamares](https://calamares.io/) for all the others. Of course You can always use krill on system without GUI, this is a clear advantage if you want to build easy-to-install liveCDs for server systems.

* Debian: 8.x jessie, 9.x stretch, 10.x buster, 11.x bullseye (stable), bookworm (n development);

* Devuan: 3.x beowulf, 4.x chimaera (stable), 5.x daedalus (n development);

* Ubuntu 18.04 LTS bionic, 20.04 LTS focal, 21.10 hirsute, 21.10 impish, jammy (n development);

and all the derivates, including deepin, linuxmint, KDE neon and many, many others.

Distros derivated from [Debian](https://distrowatch.com/search.php?basedon=Debian#simple), Devuan and [Ubuntu](https://distrowatch.com/search.php?ostype=All&category=All&origin=All&basedon=Ubuntu+%28LTS%29&notbasedon=None&desktop=All&architecture=All&package=All&rolling=All&isosize=All&netinstall=All&language=All&defaultinit=All&status=Active#simple)

![krill installer](/images/krill-installation.png)
![calamares installer](/images/bookworm.jpg)

Prior to the release of eggs-8.17.11 a big effort was also made to review many old iso's previously released from Debian jessie in naked and minino versions, to naked versions of stretch and buster with both amd64 and i386 architecture.

In this screenshot you can see the eggs krill installer in action on a Debian jessie derivative that does not support calamares [minino-TDE](
https://github.com/aosucas499/minino-TDE)
![krill installer minino](/images/minino.png)

Again calamares installing Linux Mint tricia i386, based on Ubuntu bionic and remastered with eggs-8.17.11.

![calamares installer on linuxmint tricia 386](/images/tricia-2021-10-03.png)

This is a latest addition Kali Linux a security distribution. Some people will turn up their nose at the idea of a remastered security distro and I can agree. But with eggs we can remaster it ourselves and decide in which way to modify it, so - all in all - the problem does not arise. Moreover it can be used directly live with our configurations, etc.

![kali-remaster](/images/kali-remastering.png)

Once the ISO image is obtained, the installation takes place with calamares in no time, moreover being a live system it can also perform its tasks directly.

![kali-installing](/images/kali-installing.png)

This is what kali linux remastered looks like, of course you can apply any customization.

![kali-installed](/images/kali-installed.png)
