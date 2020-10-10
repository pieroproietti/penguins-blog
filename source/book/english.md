---
title: User guide
layout: page
date: 2020-06-20 07:38:32
lang: en_US
---
# Index
* [Introduction](#introduzione)
* [Installation](#installazione)
* [Prerequisites e configurazione](#prerequisiti-e-configurazione)
* [Commands](#commands)
* [Let's create our own remix](#Lets-create-our-own-remix)
* [Download the ISO images](#download-the-iso-images)


# Upgrade
This penguin's eggs user manual is updated to October 9, 2020, eggs-7.6.57-1.deb. 

# Introduction

A breeding system for penguins!

Penguin's eggs was born with the idea of "reproduction" and "population selection" applied to operating systems. 

It was the time of Remastersys and Systemback, two of the most popular programs to remaster an operating system - at one point - both Remastersys, which had always suffered from maintenance problems by its author, and Systemback were somehow discontinued. _see **notes**_

Actually, for a while there was no problem at all, but when the "first pains" began to come, so that I could no longer remaster the latest versions of my favorite distros, essentially Debian and derivative, what was an idea, began to take shape.

I wanted a new tool, written in a modern language common to several distributions, with its own packaging system. The choice fell on nodejs, with javascript, then I switched to typescript as development language.

I imagined an egg production process, called produce, the hatching operation - or installation - originally called hatch. The other commands came by themselves with kill preferred to abort to get rid of the produced iso, update for updates, prerequisites to install the .deb packages needed for the process, calamari for the installation and configuration of the graphical installer.

Sooner or later, since it is an egg, I will also find a way to implement a PXE server that distributes it through the local network, at the moment besides the intention there is the name and could only be cuckoo \(cuckoo\), from the behavior of the cuckoo that makes others hatching their eggs.



**Note**: _the situation of Systemback in fact is no longer that of the beginnings of eggs,. I recently met the good Franco Conidi \(Edmond \) who still takes care of the updates._

# Installation

Things to do before starting the production of "eggs".

### Debian Package

Installation as a Debian package is certainly the easiest. Just download the latest version of eggs from [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/) and install it with the command:

```
sudo dpkg -i eggs-7.6.39-1.deb
```

The .deb version includes nodejs so it is not necessary to have this package. 

### Package npm \(nodejs\)

Being eggs a software developed with nodejs, the original version may be the preferred one, it is always the most updated. Moreover, once installed, it can be updated to the following versions with the command `sudo eggs update`.

In order to install this version it is necessary to install the nodejs package first. The description of which nodejs to use and how to install nodejs are described in the README,md file included in the [eggs repository](https://github.com/pieroproietti/penguins-eggs).

Installing eggs from npm package is simple and safe, only these commands:

```
sudo npm config set unsafe-perm true
sudo npm install penguins-eggs -g
```

To update the package - once installed - to the following versions, just use the command

```
sudo eggs update
```

### Using eggs from source code

Using eggs from sources can be extremely useful both for debugging and collaborating on development. Once you have downloaded the source with the

```
git clone https://github.com/pieroproietti/penguins-eggs
```

then enter the penguins-eggs directory and give the command

```
npm install
```

At this point, from the penguins-eggs directory itself, you can use the source directly. For example:

```
sudo ./eggs produces -fv
```

For developers or curious people, it will be possible to see, report or correct the code. 


---

# Prerequisites and configuration

Once the package is installed as in the previous page, we will have a new command on our system: 

```
eggs
```

We start eggs without any command and get the list of available commands:

![eggs-commands](/images/eggs-commands.png)

### Making UEFI compatible iso images

Although in previous versions, prerequisites were required before you could produce an iso, you can now also start it directly with:
```
sudo eggs produces 
```

eggs, detected the absence of the necessary prerequisites will proceed with the installation. During this phase, you will also be asked, if we are in a graphical environment, if you want to install squid. I strongly recommend to answer "yes" and the prerequisites will be loaded, possibly the packages for EFI, squid and the necessary links. 

### sudo eggs prerequisites

To run eggs needs some tools installed, the prerequisites. To download the Debian packages needed for it to work, just run the command

```
sudo eggs prerequisites
```
![eggs-prerequisites](/images/eggs-prerequisites.png)

Selecting Yes will accept the installation of the packages necessary for the operation of eggs and the production of iso images. Basically we can divide the installed packages into four:

* packages to boot on UEFI machines
* iso image creation packages
* packages for the graphic installer calamares
- localization packages

All packages for eggs operation and iso production are installed by the control:

```
sudo eggs prerequisites
```

which will then install the following packages:

* grub-efi-amd64
* isolinux, syslinux, rsync, squashfs-tools, xorriso, xterm, whois, live-boot, live-boot-initramfs-tools
* calamari, qml-module-qtquick2, qml-module-qtquick-controls
* live-task-localisation, task-italian, task-english, task-spanish, task-brazilian-portuguese, task-french, task-german

Localization files will be installed for Debian/Devuan only, moreover, they will be installed with the option 
no-install-recommends, otherwise all languages would be installed.

### Penguins-eggs.d configuration directory

Normally you don't need to work on /etc/penguins-eggs.d/eggs.conf. eggs self-configure to suit the needs of the present distro. Anyway for the documentation please refer to the comments on the same file and the README.md in the directory.

I just want to point out that by editing /etc/penguins-eggs.d/eggs.conf you can change both the live user name, its password and the administration password.

At the moment it is not possible to modify the locales and locales variables, adding or removing new languages to install in the live version. However, it will always be possible to get the installed system in every available language.

If you have chosen not to touch for the moment /etc/penguins-eggs.d/eggs.conf, remember that by default eggs is configured with user **live** and password **evolution**, the same password is set for root login.

If you have modified, ruined or deleted the configuration file, you can always restore it with the command:

```
sudo eggs prerequisites -c
```

### eggs is ready!

Well, now we are finally ready to use eggs for the reproduction of our penguin.

---

# The commands

### Commands and options 

Eggs needs root rights, so - except for eggs info and export commands - it MUST be called preceded by `sudo`.

* adapt
* calamari
* export
* help
* info
* install
* kill
* prerequisites
* produces
* sterilize
* tools
* update

Don't be frightened by these few commands, there are essentially two that you will use: produce to create the iso and kill to delete it.

Each command can have a few flags, the most important of which is the -f or --fast flag of the produce command, which will allow eggs to use lz4 as a compression algorithm instead of the default xz, saving you a lot of time during the development of your remix. 

Another flag certainly to know and present in almost all cases is the -v or --verbose flag that will show you on screen the succession of the various commands. For the remaining flags just type eggs command -h to get the list and description.

Let's illustrate the commands in strict alphabetical order, for your convenience. Keep in mind that the commands you will normally use are mainly produce and kill.

### eggs adapt

Adapt the video to the monitor capabilities or window size in the case of a virtual machine. I find it very convenient to resize virtual machines with graphical user interfaces other than cinnamon, gnome3, and kde for which it is not necessary. In practice eggs recalls xrandr to adapt the screen to the current resolution. It is not strictly related to the production of ISO, but I find it indispensable in development.

### sudo eggs calamari
Configure the graphic calamari installer. It can also be used to configure an iso that - produced without squids - you want to install with it. Just give the command: sudo eggs calamares -i and you will have both the package installation and the configuration.

```
command: squids

USAGE
  $ eggs squids

OPTIONS
  -h, --help show CLI help
  -i, --install install calamares and it's dependencies
  -v, --verbose

  --final final: remove eggs prerequisites, calamari and all'it's 
                 dependencies

  -theme=theme theme/branding for eggs and squids

EXAMPLES
  ~$ sudo eggs calamari 
  install calamari and create configuration
```

### eggs export
```
export package eggs-v7-6-x-1.deb in the destination host

USAGE
  $ eggs export:COMMAND

COMMANDS
  export:deb export package eggs-v7-6-x-1.deb in the destination host
  export:docs export docType documentation of the sources in the destination host
  export:iso export iso in the destination host
```
#### eggs export:deb
export deb packages;

#### eggs export:docs
export the documentation;

#### eggs export:iso
export iso image


You can modify both the export host and the associated path at will, note that this command is convenient especially for developers.


You can modify both the export host and the associated path at will, note that this command is convenient especially for developers.

### eggs help

As the command itself says, it generates the list of available commands. In turn, each command with the -h or --help flag outputs uses its description.

### eggs info

Show on screen the configuration of eggs and the system. It is the only command that can be used without sweating.

![eggs-info](/images/eggs-info.png)

### sudo eggs install

Launch the eggs installer cli. 

Alternatively with the option -g or --gui launches squid instead.

Attention, the installer cli is faster than squid, but it is VERY rudimentary and not recommended for non-experts. It will completely erase the target hard drive! Use it only on clean or clean virtual machines or computers.

### sudo eggs kill

Delete the images made and the working directory of eggs \(the nest\). Run rm /home/eggs -rf to delete all created isos. 
In case of interruption of the command produces, it will be impossible to delete the mounted directories. The shortest way is a reboot and the next launch of the command.

```
command: kill

kill the eggs/free the nest

USAGE
  $ eggs kill

OPTIONS
  -h, --help show CLI help
  -v, --verbose verbose

EXAMPLE
  $ eggs kill
  kill the eggs/free the nest
```

### sudo eggs prerequisites

Install the deb packages necessary for the operation of eggs. 

We can divide the necessary packages into three parts:
* packages needed to run eggs: isolinux, syslinux, rsync, squashfs-tools, xorriso, xterm, whois, live-boot, live-boot-initramfs-tools;
* packages needed to run the squid installer: squid, qml-module-qtquick2, qml-module-qtquick-controls
* location packages (debian and devuan only). Currently we have two variables in the eggs.cfg file that define the language; locale and locales. These variables, with the necessary "ripening" time, will become user editable. At the moment it is recommended not to touch them, and they include locales for Italian, English, Spanish, Portuguese, French and German. The following packages will also be installed: task-italian, task-english, task-spanish, task-brazilian-portuguese, task-french, task-german and task-live-localisation.

In addition to this, the /etc/penguins-eggs.d directory, all necessary configuration files and links are created.

```
command: prerequisites

install packages prerequisites to run eggs

USAGE
  $ eggs prerequisites

OPTIONS
  -h, --help show CLI help
  -v, --verbose verbose

EXAMPLE
  ~$ eggs prerequisites
  install prerequisites and create configuration files
```

### sudo eggs produces

This is the command that you will use the most, in fact the only one used daily, together with kill that serves instead to get rid of the created iso images.

Used without parameters it produces the iso with xz type compression. When it starts, it checks the installation of the prerequisites, not of calamari, and produces the iso.

It has some usable flags:

```
command: produces

livecd creation. The system produces an egg

USAGE
  $ eggs produces

OPTIONS
  -b, --basename=basename basename egg
  -c, --compress max compression
  -f, --fast fast compression
  -h, --help show CLI help
  -s, --script script mode. Generate scripts to manage iso build
  -v, --verbose verbose
  --adapt adapt video resolution in VM

  --final final: remove eggs prerequisites, calamari and all the 
                           it's dependencies

  --ichoice allows the user to choose the installation type 
                           cli/gui

  --pve administration of virtual machines (Proxmox-VE)

  --rsupport remote support via dwagent

  -theme=theme theme/branding for eggs and squids

ALIASES
  $ eggs spawn
  $ eggs lay

EXAMPLES
  $ sweat eggs produces 
  produces an ISO called [hostname]-[arch]-YYYYY-MM-DD_HHHMM.iso, compressed xz 
  (standard compression).
  If hostname=ugo and arch=i386 ugo-x86-2020-08-25_1215.iso

  $ sudo eggs produces -v
  the same as the previuos, but with more explicative output

  $ sudo eggs produces -vf
  the same as the previuos, lz4 compression (fast compression, but about 30%)
  less compressed compared xz standard)

  $ sudo eggs produces -vc
  the same as the previuos, compression xz -Xbcj x86 (max compression, about 10%)
  more compressed compared xz standard)

  $ sudo eggs produce -vf --basename leo --theme debian --adapt 
  produces an ISO called leo-i386-2020-08-25_1215.iso compression lz4,
  using Debian theme and link to adapt

  $ sudo eggs produce -v --basename leo --theme debian --adapt 
  produces an ISO called leo-i386-2020-08-25_1215.iso compression xz,
  using Debian theme and link to adapt

  $ sudo eggs produce -v-basename leo --rsupport 
  produces an ISO called leo-i386-2020-08-25_1215.iso compression xz, using eggs
  theme and link to dwagent

  $ sudo eggs produce -vs --basename leo --rsupport 
  produces scripts to build an ISO as the previus example. Scripts can be found
  in /home/eggs/ovarium and you can customize all you need

```

By far the mode of use that I prefer, personally is

```
sudo eggs produces -fv --adapt
```

It allows me to have a quick remastering, see on screen the various commands launched and have on the desktop the link to resize the video.

Among the available flags there is a theme that sets a theme for eggs and calamari. You can create a custom theme by simply copying its existing use and changing its name and content. Eggs themes are in ./addons/${vendor}/theme, soon I will add the possibility to change the theme for isolinux and grub for the live boot.

Another flag, introduced is --final which prepares squids to remove programs not needed by the end user: it performs the same action as the eggs sterilize command, but through squids during system installation.

### eggs tools

```
clean system log, apt, etc

USAGE
  $ eggs tools:COMMAND

COMMANDS
  tools:clean clean system log, apt, etc.
  tools:initrd Test initrd
  tools:locales install/clean locales
  tools:sanitize sanitize
  tools:skel update skel from home configuration
  tools:yolk configure eggs to install without internet
```
tools is a command collector containing some useful tools during machining. Some of them, if not most of them sell directly called by produces during the creation of the ISO, in particular: clean, locales, yolk.

#### sudo eggs tools:clean 
```
clean system log, apt, etc

USAGE
  $ eggs tools:clean

OPTIONS
  -h, --help show CLI help
  -v, --verbose verbose
```
Cleans log files, apt cache, etc. It saves space in the ISO you create and reduces the waiting time for creation;

#### sudo eggs tools:initrd 

```
Initrd test

USAGE
  $ eggs tools:initrd

OPTIONS
  -h, --help show CLI help
  -v, --verbose
  --check=check check if necessary to clean initrd.img
  --clean=clean the initrd.img
```
Currently experimental) Removes cryptosetup and resume from initrd.img for liveCd;

#### sudo eggs toos:locales 

```
install/clean locales

USAGE
  $ eggs tools:locales

OPTIONS
  -h, --help show CLI help
  -r, --reinstall reinstall locales
  -v, --verbose verbose

```

Currently experimental) Configure only on Debian/Devuan a set of languages specified in /etc/penguins-eggs-d/eggs.conf that you want to support;

#### sudo eggs tools:sanitize 

removes from an existing project and files generated from previous versions of eggs that may hide bugs or create them (recommended at version change);

#### sudo eggs tools:skel
This command recreates the /etc/skel directory of our remix. It is useful to give a coherent and personalized look to the live user and future users we will create once our system is installed. Essentially it copies the configurations of the primary user or the past one with the -u flag in the /etc/skel directory that will then be used to generate the home skeleton of the users created.

Considering that there are several desktop managers, gnome2, gnome3, cinnamon, mate, kde, lxqt, lxde, etc. and that a cleaning operation of possible sensitive data is done, it is a command always evolving. Currently it is quite reliable for cinnamon and, for the tests I have done with the other Desktop Managers.

```
update skel from home configuration

USAGE
  $ eggs skel

OPTIONS
  -h, --help show CLI help
  -u, --user=user user to be used
  -v, --verbose

EXAMPLE
  $ eggs skel --user mauro
  desktop configuration of user mauro will get used as default
```

#### sudo eggs tools:yolk

```
configure eggs to install without internet

USAGE
  $ eggs tools:yolk

OPTIONS
  -h, --help show CLI help
  -v, --verbose

EXAMPLE
  $ eggs yolk -v

```
The yolk command creates a small local repository in /usr/local/yolk with the packages strictly necessary to ensure the installation of the system even without an internet connection. It is ALWAYS called from produces, so its use is not necessary except for the most curious.




### sudo eggs sterilize

It is the reverse command of prerequisites, basically removes the packages listed above, making our system no longer able to reproduce.

```
command: sterilize

remove all packages installed as prerequisites and calamares

USAGE
  $ eggs sterilize

OPTIONS
  -h, --help show CLI help
  -v, --verbose verbose
```

### sudo eggs update

Eggs update. It works differently depending on whether the installation of eggs was done with the npm package from nodejs or the debian package. In the first case, it directly updates eggs to the current version, otherwise it suggests the steps to update via apt (if repo for eggs is included) or by downloading the package and installing it via dpkg.



# Let's create our own remix
The creation of an iso our remix is a process that requires patience and passion but can give us great satisfaction and in many cases ultimately save us time and effort.

We download our distribution that we intend to customize, choosing between Debian buster, Debian bullseye, Devuan beowulf, ubuntu bionic, ubuntu focal and, from today, ubuntu groovy.

Let's install it normally, maybe update it and make our first changes before moving on to ISO creation.

## Prerequisites

We install eggs by downloading it from [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/packages-deb/).

The command for the installation is the simple one:

```
sudo dpkg -i eggs_7.6.57-1_amd64.deb
```

Well, at this point, make sure to load the prerequisites and create the configuration files by giving the command

```
sudo eggs prerequisites
```

In addition to installing the necessary Debian packages, the configuration directory /etc/penguins-eggs.d will be created and the file eggs.conf will be configured with the default settings.  Find the configuration file in /etc/penguins-eggs.d/eggs.conf and you can edit it to change the settings. Find the documentation of the options used directly in the comments of the file itself.

Now eggs is ready to run and create the iso image of our system. 

### ISO production

Once eggs and its prerequisites are installed, we are ready for the big jump.

```
sudo eggs produces -v
```

With this command you start the construction of the _penguin_ egg, which basically consists of three steps:

* creation of an overlayfs mounted fs image - which is instantaneous and without any copy of the data - to allow modifications for the image filesystem;
* compression of the entire filesystem to /home/eggs/ovarium/iso/live/filesystem.squashfs;
* generation of the iso image from the previous structure in /home/eggs/basename-X64\_YYYYY-MM-GG-HHMM.iso

The process has a certain heaviness - it's useless to hide it - don't be angry neither with the copy of the filesystem that you don't make at all nor with the graphical interface - since you don't use it. 

The heaviness is given by the fact that we have to compress the entire filesystem. 

During the tests, however, or whenever you think it is appropriate, I recommend using produce with the -f or --fast option. Doing so will use the compression algorithm `lz4` instead of the heavier `xz` and will halve the execution time. For the final version, once we check that everything is ok we can use the default compression to get a leaner iso, or the -c --compress option that compresses a bit more, at the price of a slower one.

As was also initially mentioned in the code, the suggestion is to have a coffee in the meantime and try to reserve enough processing power to the machine. In my case - I use a virtual machine with 4 cores and 4 GB of memory - for a 7/8 GB filesystem it takes about _ten minutes_ with xz compression, while using lz4 compression reduces the wait only a _minute and a half_.  For coffee we don't do it in time anymore, a cigarette hurts and the obtained image changes to _3.0 GB_ compared to _2.00_ GB of xz compression \(See **notes**\).

Only one recommendation. Normally you give this command on the machine where you work and maybe you have already produced a previous version. I recommend deleting previous images with the command `sudo eggs kill` which removes the entire directory tree under /home/eggs.

**Note**: _Not all bad comes to harm though. If we consider that currently DVDs are used relatively little and flash drives are getting faster and faster, there are cases where our remix might be more optimized with a bigger but less compressed filesystem! In fact, considering that during use - hidden from our eyes - there will be a continuous process of reading and decompression of the filesystem, decompression xz is slower than lz4._. 



_Keeping in mind that there is no longer the limit of iso image size at 4 GB, the solution of always using lz4 could be doubly advantageous, especially when used with virtual machines that - almost always - directly read the image file on the hard disk instead of a real DVD.  In addition, all major programs for creating bootable flash drives read iso._ files. 

_Why then produce different formats?

_Ventually, you could create the iso with lz4 and then compress it with xz to lighten the uploads and downloads on the internet_.


---
# Download ISO images made with eggs
Images of the remixes made by the author.

## Foreword

Here are a series of remixes made by myself and created with Penguin's eggs. It is not my goal to make a new remix, I prefer to build and maintain the package. But even in this the saying goes: is the egg or the chicken born first? And some remixes I do and continue to propose them.

They are essentially versions of Debian Buster, Devuan beowulf, Linux Mint, etc. 

Currently they are online derivatives of Debian Buster: 

* less is a very light version, lxde-core --no-install-reccomends and only what is needed for the development of eggs, which I normally use. 

* debu, more comfortable and refined, cinnamon as desktop, always with development tools and everything you need for office, design, development etc. This more complete distro is only wrong - compared to less - that being relatively large, 1.9GB compared to 900KB of less takes longer to "play".

There is also an even lighter version of Debian buster, called naked without graphical interface and, for this very reason, suitable as a base to make its own remix.

Basically I recommend debu or less for those who want to participate in the development, naked for those who want to start from a base and then proceed to create their own remix. Interesting also incubator which is basically a version of buster with the addition of the virtualization environment proxmox-ve, based on kvm, virt-viewer and necessary tools.

A separate note for some i386 remixes, always made with eggs. It could be interesting patricia-i386, a remake of linux mint 19.3 tricia xfce, slim enough and elegant enough to be used on older computers. Even lighter is bionic-i386 created from lubuntu-18.04 bionic but, of course, even more skinny.

### Where can I download the iso

All versions can be downloaded from **sourgeforge.net** looking for the project [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/).

#### User and password

All distributions shown here are set with live user and root user.

* live/evolution
* root/evolution

# Support and reporting

eggs is a project that, at the moment, allows you to remaster different versions of linux. 

- debian buster/bullseyes/stretch
- devuan beowulf
- ubuntu bionic/focal/groovy

It is evident that the developer cannot test every release on all the versions considered, adding the need for testing on both uefi and standard bios machines.

It is therefore important that users report problems.

You can report the various problems on the [issue](https://github.com/pieroproietti/penguins-eggs/issues) page of the penguins-eggs project on github.com.

You can also contact me via chat, on https://gitter.im/penguins-eggs.

# Community
A community of users is essential for the growth of a project, creating something versatile and practical basically serves relatively little if people do not know the product and, on the other hand, having a good number of users, provides feedback and motivation to developers, thus improving the quality of the project itself.

You can facilitate the spread of eggs and contribute to its growth in several ways:

* join the facebook group [penguin's eggs](https://www.facebook.com/groups/128861437762355)

* mark the project on [github.com](https://github.com/pieroproietti/penguins-eggs) with a star;

* evaluate this project on [sourceforge](https://sourceforge.net/projects/penguins-eggs/) and/or create a review on the same page.

# Thanksgiving
If you have come this far, without the help of the quick scroll button, you have used part of your time - a valuable resource - to follow me on this path and, therefore, it is my duty and - even more desire - to thank you for your interest. 

Thank you all and... happy hacking!

Piero Proietti 
