---
title: Cook eggs in 5 minutes!
authors: pieroproietti
slug: eggs-5-minutes
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

or even less using [get-eggs](/blog/get-eggs), for every supported distro.

### Start from a base system or from your system

The most convenient solution to get a minimal exculsive CLI installation of all the distros is to use [get-eggs](https://github.com/pieroproietti/get-eggs).


What you need to do is basically install a minimal CLI system, on Debian I use netistall, server edition in the case of Ubuntu, archiso in the case of Arch Linux and minimal installation for almaliinux, fedora, opensuse and rocky.

get-eggs, need same prerequisites: mostly git and tar, first step, install it:

* AlmaLinux/Fedora/Rocky
```
sudo dnf install git tar
```

* Arch
```
sudo pacman -S git tar
```

* Debian/Devuan/Ubuntu

```
sudo apt install git tar
```

* Manjaro
In Manjaro penguins-eggs is included on the community repo, so:
```
sudo pacman -S penguins-eggs
```

* Openmamba
In openmamba penguins-eggs is included on the repos, so:
```
sudo dnf install penguins-eggs
```


* OpenSuSE
```
sudo zypper install git tar
```

## clone get-eggs and install penguins-eggs

```
git clone https://github.com/pieroproietti/get-eggs
cd get-eggs
sudo ./get-eggs.sh
```

![colibri-iso-installing](/images/arch-naked/colibri-iso-installing.png

If we want to have calamares installed on our live system, we must to install it:
```
sudo eggs calamares --install
```

## Produce your first live system

Well, we are ready to produce our first live, with love!

```
eggs love
```

You will get your live ISO, named: `egg-of_DISTRO_VERSION_HOSTNAME-CPU-DATE-TIME.iso` example for a Debian bootkworm we will get: `egg-of-debian-bookworm-naked-amd64_2024-12-28_1025.iso`.

Of course, is possoble to name it in different way, but the import part is we get an installable system.
