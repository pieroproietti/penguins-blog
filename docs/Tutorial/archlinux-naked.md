---
authors: pieroproietti
title: Arch Linux naked
lang: en
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# `Arch Linux`
Archinstall allows configuring our system interactively. it also allows passing the ```--config```, ```--creds``` and ```disk_layouts``` parameters for faster configuration. You can also, of course, skip this step and install on your own or in a more traditional way.

Boot archiso from virtual machine, then:

`pacman -Sy git`

`git clone https://github.com/pieroproietti/penguins-wardrobe`

`cd penguins-wardrobe/naked/arch`

`install-naked.sh`


Reboot, and on the new installed machine:

`pacman -Sy git`

`sudo /sbin/groupadd autologin`

`sudo gpassword -a artisan autologin`

`git clone https://github.com/pieroproietti/penguins-wardrobe`

`cd penguins-wardrobe/naked/arch`

`install-yay.sh`

`yay penguins-eggs`

`sudo eggs tools clean`

`sudo eggs dad -d`

`sudo eggs produce --max`

![colibri-iso-installing](/images/arch-naked/colibri-iso-installing.png)
