---
authors: pieroproietti
slug: warbler-plasma-wayland-waydroid
title: 'Warbler: plasma/wayland/waydroid'
lang: en
---

This is the second version of this experiment, the first - a year ago - was  just named waydroid. It's a temptative to create a slim ISO to be used for develpment.

# Why you don't install a Desktop manager?

There is a motivation on the lacks of sddm in this system, unfortunately
sddm bring dependencies from X11 almost in this version I'm using 
from Debian/bookworm.

# That you get

* waydroid
* lineage-18.1-20230121-VANILLA-waydroid_x86_64 system.img (766 MB)
* lineage-18.1-20230121-MAINLINE-waydroid_x86_64 vendor.img (165 MB)
* vscode, node, git and necessary to develop
* firmwares wifi cards (you can ask for more additions)

# how to install

**WARNING: the installer will completely erase your hard drive**

The live is autologin, just look the instructions in console.

```sudo eggs install --unattended```

<iframe width="560" height="315" src="https://www.youtube.com/embed/HfoZsqfIqAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# update 
Actually I build the same image addind sddm and some others packages, so it's possible to use calamares for installation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TqTRyu4b-Ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# how to use
```startplasma-wayland``` to get the GUI, click on waydroid to run it.
<iframe width="560" height="315" src="https://www.youtube.com/embed/kMnCWhEqCGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# how to remaster
This system can be easily remastered with eggs:

```sudo eggs produce --fast```

You will get an iso of your system, without you user data.

```sudo eggs produce --fast --clone```

You will get an iso of your system, with you user data.

enjoy!

piero.proietti@gmail.com


## download
[eggs-of-debian-bookworm-warbler](https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/bookworm/)

## dressing a warbler
This is how warbler is made, and how you can change it's definition on YAML.
<iframe width="560" height="315" src="https://www.youtube.com/embed/ejZFgNpSs0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; yroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## dressing a colibri
I'm using eggs with wardrobe to take tracks of my way and consolidate it. This is my workstation: colibri, we can do that also for warbler.
<iframe width="560" height="315" src="https://www.youtube.com/embed/JbuxcfOTdCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

![warbler](/images/warbler.jpg)
Photo by [Biillyboy](https://www.flickr.com/photos/billyboysfotocolection/4843548058/in/photostream/)