---
authors: pieroproietti
slug: bootloaders
title: "Bootloaders"
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

So far eggs is only compatible with grub, but other bootloaders will need to be included, I noticed on [archinstall](https://wiki.archlinux.org/title/archinstall) the possibility of installing:
* systemd-boot
* grub
* efistub
* limine

# systemd-boot
systemd-boot, is an easy-to-configure UEFI boot manager. It provides a textual menu to select the boot entry and an editor for the kernel command line. It is included with systemd.

Eggs can be installed, it does not manage systemd-boot but the installations will be done with grub.

# grub
[GNU GRUB](https://www.gnu.org/software/grub/) is a Multiboot boot loader. It was derived from GRUB, the GRand Unified Bootloader, which was originally designed and implemented by Erich Stefan Boleyn.

![GNU GRUB](https://www.gnu.org/graphics/gnu-head-sm.jpg)

# efistub
The Linux kernel supports [EFISTUB](https://wiki.archlinux.org/title/EFISTUB) booting which allows EFI firmware to load the kernel as an EFI executable.

Eggs can be installed, it does not manage efistub but the installations will be done with grub.


# limine
[Limine](https://limine-bootloader.org/) is an advanced, portable, multiprotocol bootloader that supports Linux, multiboot1 and 2, the native Limine boot protocol, and more.

Eggs can be installed, it does not manage limine but the installations will be done with grub.

![Limine](https://limine-bootloader.org/images/logo.png)
