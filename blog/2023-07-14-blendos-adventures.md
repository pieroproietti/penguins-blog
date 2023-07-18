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

Reasoning with `@RayVermey`, I was told - and must agree - that using this method: 

"yes but then you take away one of Blends biggist reasons to exist :-)"

and, therefore, using Ray's suggestions, I began to inquire about a more "orthodox" version.

## Do this from a CLI in blendOs, NOT in a container:

`mkdir arch-chroot`

`sudo pacstrap -K arch-chroot base linux linux-firmware`

when that finishes, remount arch-chroot binded:

`sudo mount --bind arch-chroot arch-chroot`

then:

`sudo arch-chroot arch-chroot`

`pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`

Wait a bit, expecially at the end. Then:

`pacman -S python-click nano`

`useradd -m -G wheel -s /bin/bash apprentice`

use visudo to edit `/etc/sudoers`:

`export EDITOR=nano; visudo`

```
## Uncomment to allow members of group wheel to execute any command
%wheel ALL=(ALL:ALL) ALL
```

`passwd apprentice`

`su - apprentice`

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


edit `/etc/pacman.conf`, and add the line:

```
[blend]
Server = https://pkg-repo.blendos.co/$repo/os/$arch
```

then: 

`sudo pacman -Syu`

## Prepare the system packages

`source build/envsetup.sh`

`breakfast | tee breakfast.log`

:::info

I refreshed the instructions again, follow last indication of Ray. It seem to work like a charm. Just discarted the following part:

```
sudo pacman -S rsync reflector
sudo reflector -c Netherlands -f 10 > mymirror
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
sudo cp mymirror /etc/pacman.d/mirrorlist
```
then, add line `add SigLevel = Never` to `/etc/pacman.conf` under all active repositories:

```
sudo nano /etc/pacman.conf
```
:::

## Build an ISO
`sudo brunch`

I did the actual blendOS-gnome-2023.07.15-x86_64.iso on penguins' eggs sourceforge page, starting from a blendOS-xfce-2023.07.15-x86_64.iso I previusly did before, and installed. You can found both on [sf](https://sourceforge.net/projects/penguins-eggs/files/ISOS/blendos/).

This image [blendOS-lxqt-2023.07.17-x86_64.iso](https://sourceforge.net/projects/penguins-eggs/files/ISOS/blendos/blendOS-lxqt-2023.07.17-x86_64.iso/download), was made with this way.

![ray-installing](/images/installing-ray.png)

Also this [blendOS-ray-gnome-2023.07.16-x86_64.iso](https://sourceforge.net/projects/penguins-eggs/files/ISOS/blendos/blendOS-ray-gnome-2023.07.16-x86_64.iso) was made in the same way to confirm the process and check waydroid.


## Mastering other versions
Once we have made our gnome version, we can create the others: plasma, xfce, cinnamon, etc. For the purpose I first move the ISO made outside the system, also to recover space, then:

```
cd blendos/build
source build/envsetup.sh
sudo brunch
```

## Conclusions

I did all the procedure - many, many times - it work nicelly.

Actually following this procedure - just cut and copy commands - I was able to build blendOS from blendOS itself, from my Arch develop machine (colibri) and from a simple CLI Arch installation (naked).

To be honest I like more to remove hook [`akshara`](https://github.com/blend-os/akshara), build the ISO and then reintroduce it. I feel it more simple and I think this is a value more than a problem, but - of course - the authors know better than me.

:::info
With [penguins-eggs](https://github.com/pieroproietti/penguins-eggs), I'm using that way: remaster the system without `akshara` and reintroduce the `akshara` during installation with calamares or krill, just using theme [blendos](https://github.com/pieroproietti/penguins-wardrobe/tree/main/vendors/blendos).

In short, using eggs, I do this:

* remove `akshara` from `/etc/mkinitcpio.conf`;
* rebuild `initramfs-linux-zen.img`: `sudo mkinitcopio -g /boot/initramfs-linux-zen.img`;
* reboot;
* add `chaotic aur`, just follow instructions on their site.
* install penguins-eggs: `sudo pacman -Syu penguins-eggs`
* configure it: `sudo eggs dad -d`
* `eggs wardrobe get`
* `sudo eggs produce --theme blendos`

If you want to use calamares as GUI installer, just build it before to configure eggs. Clone and build it from [eggs-pkgbuilds](https://github.com/pieroproietti/eggs-pkgbuilds), just `makepkg -si`

:::

