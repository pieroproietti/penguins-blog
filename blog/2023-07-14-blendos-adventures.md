---
authors: pieroproietti
slug: the-ray-right-way
title: the Ray right way
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

To re-build the blendOS ISOs, I started with the documentation on [blendOS Docs](https://docs.blendos.co/), and then experimented, finding a way to use blendOS to recreate itself by removing the `akshara` hook.

Reasoning with Ray, I was told and must agree that this method: 

"yes but then you take away one of Blends biggist reasons to exist :-)"

and, therefore, using Ray's suggestions, I began to inquire about a more "orthodox" version.

## Do this from a CLI in blendOs, NOT in a container:

`mkdir -p build-root; sudo pacstrap -K build-root base linux linux-firmware`

when that finishes, do:

`mkdir mnt-root`

`sudo mount --bind build-root mnt-root`

then:

`sudo arch-chroot mnt-root`

`pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`

Wait a bit, expecially at the end. Then:

`pacman -S python-click nano`

`useradd -m -G wheel -s /bin/bash artisan`

use visudo to edit `/etc/sudoers`:

`export EDITOR=nano; visudo`

```
## Uncomment to allow members of group wheel to execute any command
%wheel ALL=(ALL:ALL) ALL
```

`passwd artisan`

`su artisan`

`cd`

`mkdir blendos/build -p`

`cd blendos/build`

## Installing assemble
blendOS uses its own system, Assemble, for managing code and builds. It's quite similar to repo in the realm of Android development.

`TEMP_ASSEMBLE_DIR="$(mktemp -d)"`

`git clone https://github.com/blend-os/assemble "${TEMP_ASSEMBLE_DIR}/assemble"`

`sudo cp "${TEMP_ASSEMBLE_DIR}/assemble/assemble" /usr/local/bin`

`rm -rf "${TEMP_ASSEMBLE_DIR}"`

You may now proceed to building blendOS.

## Initialize an Assemble repository
`assemble init 'https://github.com/blend-os/manifests' 'main'`

`assemble sync`


edit `/etc/pacman.conf`, add the line:

```
[blend]
Server = https://pkg-repo.blendos.co/$repo/os/$arch
```

then: 

`sudo pacman -Syu`

## Prepare the system packages

`source build/envsetup.sh`

`breakfast`

**NOTE**: All is working here, the only real problem ask for password every time artisan must use sudo... This is really boring becouse are a lot of cases.

## Build an ISO
`sudo brunch`

I did the actual blendOS-gnome-2023.07.15-x86_64.iso on penguins' eggs sourceforge page, starting from a blendOS-xfce-2023.07.15-x86_64.iso I previusly did before, and installed. You can found both on [sf](https://sourceforge.net/projects/penguins-eggs/files/ISOS/blendos/).

## Mastering other versions
Once we have made our gnome version, we can create the others: plasma, xfce, cinnamon, etc. For the purpose I first move the ISO made outside the system, also to recover space, then:

```
cd blendos/build
source build/envsetup.sh
sudo brunch
```

## Conclusions

I did all the procedure, it work nicelly.

To be honest I like more to remove hook [`akshara`](https://github.com/blend-os/akshara), build the ISO and then reintroduce it. I feel it more simple and I think this is a value more than a problem, but - of course - the authors know better than me.

With [penguins-eggs](https://github.com/pieroproietti/penguins-eggs), I'm using that way: create the ISO without `akshara` and reintroduce the hook `akshara` during installation with calamares or krill, using custom theme [blendos](https://github.com/pieroproietti/penguins-wardrobe/tree/main/vendors/blendos).
