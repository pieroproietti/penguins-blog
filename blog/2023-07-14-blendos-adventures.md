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

From the container started, I cut and copy from your docs:

`sudo pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`

then:

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

`
cd 
mkdir -p archroot; sudo pacstrap -K archroot base linux linux-firmware`

OK, I will do... just the time to build another VM

I did, now I have archroot dir in home...

Ray Vermey
when that finishes ok do
`sudo mount --bind arch-chroot arch-chroot`

then

`sudo arch-chroot arch-chroot`

ou should have done mkdir  arch-chroot, pactrap , then mount. then arch-chroot arch-chroot

I make a bit noise with arch-root and archroot but now I'm chrooted in archroot

Ray Vermey
`pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`
