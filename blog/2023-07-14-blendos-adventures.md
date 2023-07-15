---
authors: pieroproietti
slug: the-ray-right-way
title: the Ray right way
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

rayv: Did you mount the directory with the bind option?

rayv: So you create a folder, pacstrap, mount --bind, arch-chroot into the folder and start building procedure from there

I tried that too, I created a rootmnt and did something like: sudo mount --bind /home/artisan/blendOS/build /home/artisan/blendOS/rootMnt and tried to work in rootMnt
I will retry if I had same parameters wrong...

rayv: that works for me, btw under the host, not in a container

with the host, removing akshara hook, I can build... I will make another temps again

Ray Vermey
Show me your commands please

OK, I started with a clean blend-xfce (i choose it becouse is light) then, once installed I create a container blendos-build, as Arch:

Using blend-setting I created an Arch container called blend-build, then once started, cut and copy:

`sudo pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`

Again, inside the container

`TEMP_ASSEMBLE_DIR="$(mktemp -d)"
git clone https://github.com/blend-os/assemble "${TEMP_ASSEMBLE_DIR}/assemble"
sudo cp "${TEMP_ASSEMBLE_DIR}/assemble/assemble" /usr/local/bin
rm -rf "${TEMP_ASSEMBLE_DIR}"`

then:

`mkdir -p ~/blendOS/build`

`cd ~/blendOS/build
assemble init 'https://github.com/blend-os/manifests' 'main'`


Here I get error about module click...

Ray Vermey
ok
do this from a cli in BlendOs
so NOT in a conainer

`mkdir -p build-root; sudo pacstrap -K build-root base linux linux-firmware`

OK, I will do... just the time to build another VM

I did, now I have archroot dir in home...

when that finishes ok do
`sudo mount --bind build-root mnt-root`
pacman -S python-click
then

`sudo arch-chroot mnt-root`

`pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`

`pacman -S python-click`

`useradd -m -G wheel -s /bin/bash piero`

`passwd piero`

`su piero`

`cd`

`mkdir blendos/build -p`

`cd blendos/buid`

`assemble init 'https://github.com/blend-os/manifests' 'main'`

`assemble sync`

edit /etc/pacman.conf, add the line:

`
[blend]
Server = https://pkg-repo.blendos.co/$repo/os/$arch
`

then: `sudo pacman -Syu`

`source build/envsetup.sh`
`breakfast`

