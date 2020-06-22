---
title: Guide eggs enghish
layout: page
date: 2020-06-20 07:38:32
lang: en_US
---
# Indice
* [Introduction](#introduzione)
* [Installation](#installazione)
* [Prerequisites e configurazione](#prerequisiti-e-configurazione)
* [I comando](#i-comandi)
* [Creiamo una nostra remix](#creiamo-una-nostra-remix)
* [Scarica le immagini ISO](#scarica-le-immagini-iso)


# Introduction

A reproductive system for penguins!

Penguin's eggs was born with the idea of ​​"reproduction" and "selection of populations" applied to operating systems.

It was the time of Remastersys and Systemback, two of the most popular programs to remaster an operating system - at some point - both Remastersys, which had always suffered from maintenance problems by its author, and Systemback were somehow discontinued. _See note**_

Actually, for a while there was no problem, but when the "first pains" began to not be able to remaster the latest versions of my favorite distros, essentially Debian and derivatives, what was an idea, began to take shape.

I wanted a new tool, written in a modern language common to multiple distributions, with its own packaging system. The choice fell on nodejs, with javascript, then I switched to typescript as a development language.

I imagined an egg production process, called **produce**, the hatching operation - that is, the **installation** - originally called hatch. The other commands came by themselves with preferred **kill** to abort to get the ISOs out of the way, **updates** for updates, **prerequisites** to install the .deb packages necessary for the process, **calamares** for the installation and configuration of the graphic installer.

Sooner or later, since it is an egg, I will also find a way to implement a PXE server that distributes it through the local network, at the moment besides the intention there is the name and it could only be **cuckoo** (cuckoo), from the behavior of the cuckoo who has his eggs hatched by others.



** Note **: _The situation of Systemback is in fact no longer that of the beginnings of eggs. I recently met the good Franco Conidi \ (Edmond \) who still takes care of the updates._

# Installation

Things to do before starting "egg" production.

### Debian package

Installation from the Debian package is undoubtedly the simplest. Just download the latest version of eggs from the [sourceforge] website (https://sourceforge.net/projects/penguins-eggs/files/packages-deb/) and install it with the command:

```
sudo dpkg -i eggs-7.5.81-1.deb
```

The .deb version includes nodejs inside, so it is not necessary to have this package.

### Package npm (nodejs)

Being eggs a software developed with nodejs, the original and preferable version, and always the most updated. Furthermore, once installed, this version can always be updated simply with the `sudo eggs update` command.

In order to install this version, you must first install the nodejs package. The description of which nodejs to use and how to install nodejs are reported in the README file, md included in the [eggs repository](https://github.com/pieroproietti/penguins-eggs).

The installation of eggs from the npm package is simple and safe, only these commands:
```
sudo npm config set unsafe-perm true
sudo npm install penguins-eggs -g
```

To update the package - once installed - to subsequent versions, just the command:


```
sudo eggs update
```

### Use of eggs from source code

Using eggs from sources can be extremely useful for both debugging and collaborating in development. Once downloaded the source with the command:

```
git clone https://github.com/pieroproietti/penguins-eggs
```

then enter the penguins-eggs directory and give the command:


```
npm install
```

At this point, from the penguins-eggs directory itself, you can use the source directly. Eg:

```
sudo ./eggs produce -fv
```

For developers or the curious, it will be possible to view, report or correct the code.


---

# Prerequisites and configuration

Once the package is installed as on the previous page, we will have a new command on our system:

`eggs`

We start eggs without any command and we will get the list of available commands:


![eggs-senza-parametri](/images/eggs-senza-parametri.png)


The first thing we need to do at this point is to allow eggs to download the Debian packages needed for it to work. To do this, just run the command:

```
sudo eggs prerequisites
```

![eggs-prerequisites](/images/eggs-prerequisites-yes-no.png)

Selecting Yes will accept the installation of the packages necessary for the functioning of eggs and the production of iso images. Essentially we can divide the installed packages into three:

* Packages to boot on UEFI machines
* Packages for creating the ISO image
* Packages for the calamares graphic installer

All the packages for the functioning of eggs and the production of ISO are installed by the command:

```
sudo eggs prerequisites
```

which will then install the following packages:

`isolinux, live-boot, live-boot-initramfs-tools, lvm2, squashfs-tools, xorriso, xterm, whois`

### sudo eggs calamares

At this point, if we need it, it will be better to install the calamares graphic installer, with the command:


```
sudo eggs calamares
```

which will install calamares and the `qml-module-qtquick2, qml-module-qtquick-controls` modules needed to view the slides during system installation.

### Realizzazione di immagini iso compatibili UEFI

If we want our ISOs to be created UEFI compatible - _attention: this has only been tested with Debian Buster, probably in Ubuntu it still doesn't go_ - we need to install the grub-efi-amd64 package, with the command:

```
sudo apt install grub-efi-amd64
```

vedi **Nota**

### penguins-eggs.conf configuration file

Normally it is not necessary to intervene on /etc/penguins-eggs.conf, eggs is self-configured and adapting to the needs of the present distro. In any case, for the documentation, see the comments on the same file.

I just want to point out that by editing this file you can edit both the name of the live user, his password and the administration password.

If you have chosen not to touch /etc/penguins-eggs.conf for the moment, remember that by default eggs is configured with user ** live ** and password ** evolution **, the same password is set for the login of root.

If instead you have modified or deleted the configuration file, you can always restore it with the command:

```
sudo eggs prerequisites -c
```

### eggs is ready!

Well, now we are finally ready to use eggs for the reproduction of our penguin.

_ ** Note **: if we want to create a bootable image in UEFI mode and we have installed grub-efi-amd64 after installing the prerequisites, we need to go to edit the file /etc/penguins-eggs.conf and set make _efi = yes._---

# The commands

## Commands and Options

Eggs needs root rights, so - except for eggs info - it MUST be called preceded by `sudo`

* adjust
* calamares
* help
* howto
* info
* install
* kill
* prerequisites
* produce
* skel
* sterilize
* update

Don't be frightened by these few commands, the ones you will use are essentially two: produce to create the ISO and kill to delete it.

Each command can have some flags, the most important of which is the -fo --fast flag of the produce command which will allow eggs to use lz4 as a compression algorithm instead of the default xz, thus allowing you to save a lot of time during the phases development of your remix.

Another important and present flag in almost all cases is the -v or --verbose flag which will show you on the screen the succession of the various commands.

Let's illustrate the commands in strict alphabetical order, for the convenience of the writer. Keep in mind that the commands you will normally use are kill and produce.

### eggs adjust

Adapts the video to the capabilities of the monitor or to the size of the window in the case of a virtual machine. I find it very convenient to resize virtual machines with graphical interfaces other than cinnamon, gnome3 and kde for which it is not necessary. Basically eggs calls xrandr to adapt the screen to the current resolution.

### sudo eggs calamares

Install and configure the calamares universal graphic installer. It can also be used in the case of an ISO made without calamares and which, during installation, you want to install with it.

### eggs help

As the command itself says, it generates the list of available commands. In turn, each command with the -h or --help flag issues uses its description.

### eggs howto

Show video some very short tips. At the moment boot from grub rescue and how to configure eggs.

#### eggs howto:grub

How to boot from grub rescue.

#### eggs howto:configure

How to configure  eggs.

### eggs info

Show the configuration of eggs and the system on the screen. It is the only command that can be used without sudo.

### sudo eggs install

Launch the eggs installer cli.

Alternatively, with the -g or --gui option, launch calamares instead.

Warning, the cli installer is faster than calamares, but it is VERY rudimentary and not recommended for non-experts. Will completely erase the target hard drive! Use it only on clean or clean virtual machines or computers.

### sudo eggs kill

Delete the images created and the working directory of eggs (the nest). Run rm /home/eggs -rf to delete all the iso created. It also has a useful flag -u which, before proceeding with the removal, attempts to unmount any file systems present in it.

### sudo eggs prerequisites

Install the deb packages needed for eggs to work. In particular, the following are installed:

`isolinux, live-boot, live-boot-initramfs-tools, live-config-systemd, squashfs-tools, xorriso, xterm, whois`

and, if you have chosen to install calamares:

`calamares, qml-module-qtquick2, qml-module-qtquick-controls`

In addition to this, configuration files are created.

### sudo eggs produce

This is the command you will use the most, in fact basically the only one together with kill which is used to get rid of the ISO images created.

Used without parameters, it produces the ISO with type xz compression. Also check if the prerequisites are installed or not and the configuration files are created and, in fact, it produces the iso.

It has some usable flags:

`-b, --basename=basename basename egg`

 `-c, --compress max compression` 

`-f, --fast compression fast` 

`-h, --info show CLI help` 

`-v, --verbose verbose`

By far the mode of use that I prefer, personally it is:

```
sudo eggs produce -fv
```

which allows me to have a quick remaster and observe the various commands launched on the screen.

### sudo eggs skel

With this command we recreate the /etc/skel directory of our remix. It is useful to give a coherent and personalized look to the live user and future users that we will create once our system is installed. It essentially copies the configurations of the primary user or the one passed with the -u flag in the /etc/skel folder which will then be used to generate the skeleton of the home of the users created.

Considering that there are several desktop managers, gnome2, gnome3, cinnamon, mate, kde, lxqt, lxde, etc and that an operation is performed to clean up possible sensitive data, it is a command that is always evolving. It is currently quite reliable for cinnamon and for the tests I have done with the other Desktop Managers.

### sudo eggs sterilize

It is the inverse command of prerequisites, it basically removes the packages listed above making our system no longer able to reproduce.

### sudo eggs update

Update the eggs package to the current version. Warning, eggs update only works with the packaged version npm, for the version released as a deb package we would need a repository that is not currently available.

---
# Let's create our own remix
The creation of our remix iso is a process that requires patience and passion but can give us great satisfaction and in many cases, in the final analysis, it will save us time and effort.

## Prerequisites

We install our favorite Debian Buster or derivative distribution and we go to install eggs with one of the methods described above.

We install eggs and make sure to load the prerequisites and create the configuration files by giving the command
```
sudo eggs prerequisites
```

In addition to installing the various necessary Debian packages, the configuration file with the default settings will be created. Find the configuration file in /etc/penguins-eggs.conf and you can possibly edit it to modify the settings. Find the documentation of the options used directly in the comments of the file itself.

At this point eggs is ready to work and create the iso image of our system.

### Added Calamares graphic installer

If you want to use calamares as a graphic installer, it is better to install it now.

Just proceed with the command:

```
sudo eggs calamares
```

Alternatively, if not times calamares, edit the installation file `/etc/penguins-eggs.conf` and set` force_installer = No` otherwise eggs will install it on his behalf.Subsequently this image must be placed on a stick or a DVD disc and can be reinstalled either with the calamares graphic installer or - in a more spartan way - with your own cli installer. 

For the graphic installer calamares just leave the configuration file as it is, while if you decide not to use calamares you need to edit the configuration file /etc/penguins-eggs.com and put force-installer = no.

I also recommend installing bleachbit because it will allow us to easily clean our remixes without burning useless data. You can also do this from the terminal with the command:

```
sudo apt install bleachbit
```

### Let's clean up our system

First - for this we have installed bleachbit - I suggest you to clean your system.

Normally I have bleachbit clean everything except localizations - otherwise foreign languages don't work - free disk space and memory.

![bleachbit-selezione](/images/bleachbit-selezione.png)

You save at least 200 MB which is not a small amount and would only be ballast.

### ISO production

Once eggs and its prerequisites are installed, we are ready for the big leap.

```
sudo eggs produce
```

This command starts the construction of the penguin egg which basically consists of three phases:

* creation of an image of the fs mounted with overlayfs - which is instantaneous and without any copy of the data - to allow modifications for the creation of the filesystem for the image;
* compression of the entire filesystem in /home/eggs/work/iso/live/filesystem.squashfs;
* generation of the iso image from the previous structure in /home/eggs/basename-X64\_AAAA-MM-DD-HHMM.iso

The process has a certain heaviness - it is useless to hide it - you don't take it neither with the copy of the filesystem that is not done at all and not even with the graphical interface - since we don't use it.

The heaviness is given by the fact that we have to compress the entire filesystem.

During the tests, however, or in any case when you deem it appropriate, I recommend that you use produce with the -f or --fast option. Doing so will use the compression algorithm lz4 instead of the "heavier" xz and will halve the execution time. For the final version, once checked that everything is in place, we can instead use the default compression to obtain a leaner ISO, or the option -c --compress which compresses a little more, at the price of a further slowness.

As was initially reported in the code, the suggestion is to have a coffee in the meantime and try to reserve enough processing power for the machine. In my case - I use a virtual machine with 4 cores and 4 GB of memory - for a 7/8 GB filesystem it takes about _ ten minutes_ with the xz compression, while using the lz4 compression the wait is reduced a lot only a _minute and a half_ . We don't have time for coffee anymore, a cigarette hurts and the image obtained goes to _3.0 GB_ compared to _2.00_ GB of the xz compression (See **note**).

One recommendation. Normally this command is given on the machine where you are working and perhaps a previous version has already been produced. I recommend deleting previous images with the `sudo eggs kill` command which removes the entire directory tree under /home/eggs).


** Note **: _Not all evil comes to harm though. If we consider that DVDs are currently used relatively little and the sticks are getting faster and faster, there are cases our remix could be more optimized with a larger but less compressed filesystem! In fact, considering that during use - hidden from our eyes - there will be a continuous process of reading and decompressing the filesystem, the decompressioone xz is still slower than the lz4._

_Keeping in mind that there is no longer the limit of the size of ISO images at 4 GB, the solution to always use lz4 could prove doubly advantageous, especially if used with virtual machines that - almost always - read the image file directly on disk fixed instead of a real DVD. In addition, all major programs for creating bootable sticks read the iso._ files

_Why produce different formats? _

_Eventually, you could create the iso with lz4 and, subsequently, compress it with xz to lighten the uploads and downloads on the internet_.

---
# Download the ISO images
Images of the remixes made by the author.

## Premise

Here are a series of remixes made by myself and created with Penguin's eggs. It is not my purpose to create a new remix, rather I prefer to build and maintain the package. But the saying goes: the egg or the hen first? And I do some remixes and continue to offer them.

These are essentially versions of Debian Buster, although I will release a minimal version of ubuntu with the Typescript development tools.

Currently derivatives of Debian Buster are online, less is a light version - only the necessary for development, which I normally use. Debu, more comfortable and refined, always with development tools and everything you need for office, design, development etc. Debu is only wrong - compared to less - that being relatively large, 1.9 GB compared to 900KB of less takes more time for "reproduction".

There is also an even lighter version, called naked without any graphical interface but useful as a base.

Basically I recommend debu or less for those who want to participate in development, naked for those who want to start from a base and then proceed to creating their own remix. Finally, but I'm not an expert in the subject, I made a version called blockchain for the study of the same. It could be interesting for experts in the sector, not so much for personal use but for creating demos and keys that can be installed for dissemination.

### Where can I download the ISO

All versions are downloadable from ** sourgeforge.net ** by looking for the [penguins-eggs] project (https://sourceforge.net/projects/penguins-eggs/files/).

#### User and password

All the distributions shown here are set up with live user and root user.

* live/evolution
* root/evolution

### Video

This is an old video, I would like to make others, maybe soon.

![debu](/images/debu.png)





