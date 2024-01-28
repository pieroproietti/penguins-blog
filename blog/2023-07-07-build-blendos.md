---
authors: pieroproietti
slug: build-blendos-image
title: build blendOS image
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

I wrote something about [blendOS](https://blendos.co/) in this previous [post](https://penguins-eggs.net/blog/blendos), now I'm trying to build blendOS image, following official [blendOS Documentation](https://docs.blendos.co/) and particularly this pages:

* [Setting up blendOS builds](https://docs.blendos.co/docs/build-blend/build_environment)
* [Building an image](https://docs.blendos.co/docs/build-blend/building_blendos)

# Setting up blending builds

We build a container named `blenOS-build` and inside it

`sudo pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`


blendOS uses its own system, Assemble, for managing code and builds. It's quite similar to repo in the realm of Android development.

```
TEMP_ASSEMBLE_DIR="$(mktemp -d)"
git clone https://github.com/blend-os/assemble "${TEMP_ASSEMBLE_DIR}/assemble"
sudo cp "${TEMP_ASSEMBLE_DIR}/assemble/assemble" /usr/local/bin
rm -rf "${TEMP_ASSEMBLE_DIR}"
```

# Building an image

To continue we must install `python-pip` and with `pip` module `click`:

```
sudo pacman -S python-click
```

# Create the directories
You will need to create a directory where Assemble will pull blendOS's sources and build them.

```
mkdir -p ~/blendOS/build
```
This directory should not be pushed anywhere, as it's simply used for storing blendOS's code.

# Initialize an Assemble repository
You may now initialize an Assemble repo to download blendOS's sources.

```
cd ~/blendOS/build
assemble init 'https://github.com/blend-os/manifests' 'main'
```
Sync/download the sources locally
To start the download of the sources, type the following:

```
assemble sync
```
By default, assemble uses all of the available cores on the system being used to build blendOS. However, you may change that behaviour by passing the -j argument. For example, use -j 4 to use only 4 of the available cores.

# Prepare the system packages
After the source downloads, ensure you’re in the root of the source code (cd ~/blendOS/build), then type:

```
source build/envsetup.sh
breakfast | tee breakfast.log
```

This is the complete log of the command: [breakfast.log](/logs/breakfast.log)

I tried to build iso too, giving from the same container the command:

```
sudo brunch
```

This is the complete log of the command: [sudo brunch](/logs/brunch.log)

# On a blendOS without akshara hook

After trying to use a normal Arch system as the parent, encountering the same problems as above, I wanted to try using an installed blendOS system, however, made "mutable" by removing the akshara hook.

In this case, finally, even without the need to install python-pip and the click module, everything seemed to proceed properly, reaching the conclusion of the procedure.

`sudo pacman -S git archiso base-devel xorriso python python-psutil squashfs-tools`
 
`TEMP_ASSEMBLE_DIR="$(mktemp -d)"`

`git clone https://github.com/blend-os/assemble "${TEMP_ASSEMBLE_DIR}/assemble"`

`sudo cp "${TEMP_ASSEMBLE_DIR}/assemble/assemble" /usr/local/bin`

`rm -rf "${TEMP_ASSEMBLE_DIR}"`

`mkdir -p ~/blendOS/build`

`cd ~/blendOS/build`

`assemble init 'https://github.com/blend-os/manifests' 'main'`

`assemble sync`

`source build/envsetup.sh`

`breakfast`


![all-packages-ok](/images/all-packages-ok.png)


# creating ISO
At this point I gave the `sudo brunch` command and chose gnome as the iso to be created and it too ran correctly.

`sudo brunch`

![blendos-gnome-ok](/images/blendos-gnome-ok.png)

# booting resulting ISO
Every fairy tale has a happy ending, for ours what can we say: evidently there is still something to be fixed. 

The iso installs, but the system--once installed--fails to boot! 

![cant-boot.png](/images/cant-boot.png)

but that's the way it is and fairy tales if they don't end well you have to continue them and so I decided to do another test of my new image.

![gnome-iso-installed.png](/images/gnome-iso-installed.png)

Everything seems to be running smoothly! 

I am uploading this image to the [penguins' eggs sourceforge](https://sourceforge.net/projects/penguins-eggs/files/ISOS/blendos/) page, created by the - let's say so orthodox - method among the images previously created with eggs. 

You can distinguish it simply by the lack of the `egg-of-` prefix.

# Conclusions

in the coming days I will try to better understand this operation, at the moment I see that by removing the akshara hook the system becomes "mutable" and can be remastered with penguins-eggs.

The difference between the two methodologies is that with eggs one builds one's system, then reproduces it, while using manifest one first designs the system then builds it.

In some ways eggs is less rigorous but more fun.

## Note
You can comment in this page too, using you github account.
