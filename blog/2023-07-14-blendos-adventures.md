---
authors: pieroproietti
slug: the-ray-right-way
title: the Ray right way
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

## Do this from a CLI in blendOs, NOT in a container:

`mkdir -p build-root; sudo pacstrap -K build-root base linux linux-firmware`

when that finishes, do

`sudo mount --bind build-root mnt-root`

then:

`sudo arch-chroot mnt-root`

`pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`

`pacman -S python-click`

`useradd -m -G wheel -s /bin/bash piero`

`passwd artisan`

`su artisa`

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


edit `etc/pacman.conf`, add the line:

```
[blend]
Server = https://pkg-repo.blendos.co/$repo/os/$arch
```

then: 

`sudo pacman -Syu`

## Prepare the system packages

`source build/envsetup.sh`

`breakfast`

## Build an ISO
`sudo brunch`
