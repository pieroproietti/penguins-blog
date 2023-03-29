---
authors: pieroproietti
slug: costumes-and-wardrobes
title: Costumes and wardrobes
lang: en
---

This is a costume, a simple way to code our customizations starting from a naked system to a minimun KDE installation.

```
# recipe: kde
# author: artisan
---
name: kde
description: minimal KDE installation
author: artisan
release: 0.0.3
distroId: Debian
codenameId: booksworm
releaseId: sid
applyTo: naked
sequence:
  repositories:
    sourcesList:
      main: true
      contrib: true
      nonFree: false
    sourcesListD:
      - curl -fsSL "https://pieroproietti.github.io/penguins-eggs-ppa/KEY.gpg" | gpg --dearmor -o /usr/share/keyrings/penguins-eggs-ppa.gpg
      - echo "deb [signed-by=/usr/share/keyrings/penguins-eggs-ppa.gpg]  https://pieroproietti.github.io/penguins-eggs-ppa ./ " | tee /etc/apt/sources.list.d/penguins-eggs-ppa.list > /dev/null
    update: true
    full-upgrade: true
  packages:
    - kde-plasma-desktop
    - plasma-nm
    - ark
    - kate
    - kcalc
    - kde-spectacle
    - firefox-esr
    - okular
  debs: false
  dirs: false
  hostname: true

  customizations:
    scripts:
    - null

  reboot: true
...
```


eggs come with a new command: **wardrobe**.

You can prepare your costumes to dress your penguins, costumes are simple and  automatic configuration. A costume consists just on a dir named after the costume and an file index.yml, as you can note, we have large spaces for others future addictions: debs, icons, themes and so on.

Inside [wardrobe.d](https://github.com/pieroproietti/penguins-eggs/blob/master/wardrobe.d) you will find same simple examples: [xfce4](https://github.com/pieroproietti/penguins-eggs/blob/master/wardrobe.d/xfce4/index.yml) and [KDE](https://github.com/pieroproietti/penguins-eggs/blob/master/wardrobe.d/kde/index.yml) costumes.


# Logic of costumes

![penguin-sailor](/images/penguin-sailor.png)

Logic for costumes is enought simple, we have a directory named after the costume and an index.yml. 

In index.yml, we have:

## sequence
Here we define the sequence of that we will do. Example:
```
#
# We start here, step by step
#
sequence:
  repositories:
    sourcesList:
      main: true
      (...)
```

## repository
Here we define that will do with repositories, usually four tasks, the first **sourcesList** it's to check that component must be present in ```/etc/apt/sources.list```: main, contrib, non-free. The second **sourcesListD**, commands to adds other repositories to ```/etc/source.list.d'''. The third task is mandatory **update**, the forth can be optional **full-upgrade**. Example:
```
#
# steps for repositories
#
repositories:
  - sourcesList
  - sourcesListD
  - update
  - full-upgrade
```
In the upper example I excluded step **sourceListD**, becouse actually I have same problems with my pubblic key.

## sourcesList
Here we define, that components we need. Example:
```
  #
  # components to be added to /etc/apt/sources.list
  #
  sourcesList:
    main: true
    contrib: true
    nonFree: false
```

## sourcesListD
Here we define commands to add other repositories to ```/etc/apt/sources.list.d```
example:
```
    #
    # add entries on /etc/apt/sources.list.d
    #
    sourcesListD:
      - curl -fsSL "https://pieroproietti.github.io/penguins-eggs-ppa/KEY.gpg" | gpg --dearmor -o /usr/share/keyrings/penguins-eggs-ppa.gpg
      - echo "deb [signed-by=/usr/share/keyrings/penguins-eggs-ppa.gpg]  https://pieroproietti.github.io/penguins-eggs-ppa ./ " | tee /etc/apt/sources.list.d/penguins-eggs-ppa.list > /dev/null
```

## packages
As the name, here we define packages we need will be installed:
```
#
# packages to be installed
#
packages:
  - kde-plasma-desktop 
  - plasma-nm
```

## debs
We define here a place, inside our recipe, containg all the custom debs we need. In this case the directory is named debs. You can choose others name, but I think can be better to name it in accord to the scope.

```
#
# local dir with deb files to be installed
#
debs: false
```

## accessories
We define others packages we want to let to the user to install or not. Like accessories to our costume.

```
#
# accessories for your dress
#
accessiories:
  - ark 
  - kate 
  - kcalc 
  - kde-spectacle
  - firefox-esr
  - okular
```

```
hostname: true
reboot: true
```
# your wardrobe 

It's possible to create your own local wardrobe, and create personal costumes. In your costumes on your local wardrobe, you can add a place for debs, for your custom special debs you need.


# Considerations
![penguin-grill](/images/penguin-grill.png)

Costumes are not limited to the interfaces: Desktop Enviroment and so on. It's possible to create a dress on a system to be server for xampp or others configurations.  Again, you can make an xfce4 installation specialized for eggs developer and name it **hen**, You will add: **xfce4**, **nodejs-16.x**, **git** and **code**. Of course, you can dress your image with the specific **firmware** too, and so on.

This let me to create, simple and light naked system, and the entire work of customization can go on the side of passionate system integrators.

# Suggestions are welcome
![penguin-pirate](/images/penguin-pirate.jpg)

It's a new feathure, so - as usual - you can find problems, lacks and so on.

Suggestions and ideas are welcome: together we can see how your ideas can fit inside. 

Feel free to open an issue on github - preferred - or to email me at: piero.proietti@gmail.com

# Credits
I want to thanks Jon West from [waydroid](https://waydro.id/), from his needs and our discussion come this idea, and [pixabay.com](https://pixabay.com/vectors/animal-animals-play-dress-up-1296334/), from where I still some fantastic free images!

![eggs wardrobe list](/images/eggs-wardrobe-list.png)


![eggs wardrobe wear --costume waydroid](/images/eggs-wardrobe-wear-costume-waydroid.png)

