---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />


## 1. What is Penguins' Eggs?
Penguins' Eggs is a tool to create live ISO images and custom Linux distributions, initially based on Debian/Ubuntu and derivatives, actually support include Fedora, OpenSUSE and derivatives. It allows you to generate reproducible systems or "hatch" new distros.

## 2. How do I install penguins-eggs?
Use `get-get`, universal installer:
```bash
git clone https://github.com/pieroproietti/get-eggs
cd get-eggs
sudo ./get-eggs.sh
```

The `get-eggs.sh` script will:
- Automatically detect your distribution
- Install the appropriate version of Node.js (≥18) if needed
- Download and install the correct penguins-eggs package for your system
- Configure all necessary dependencies


# 3. Common Issues & Fixes
"Permission denied" when running sudo eggs:
Check user permissions and ensure the user is in the sudo group.

ISO generation errors:
Verify required packages (e.g., squashfs-tools, xorriso) are installed.

UEFI/BIOS boot issues:
Some issues report dual-boot problems. Use eggs calamares for a more reliable graphical installer.

## 4. How do I create a custom ISO?
Run:

```sh
sudo eggs produce
```
This generates an ISO image in /home/eggs/.

## 5. Can I use penguins-eggs without sudo?
No, certain operations require root privileges to mount filesystems and modify system settings.

## 6.Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT 
```
Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT
```
[#411](https://github.com/pieroproietti/penguins-eggs/issues/411) Use always sudo eggs kill, before to produce an ISO. The command eggs love already include this, so it's not necessary, but if you are creating an ISO using sudo eggs produce and get this error, just use sudo eggs kill before to it.

## 7. Support for non-Debian/Ubuntu distros?
Actually penguins-eggs support: Almalinux, Arch, Debian, Devuan, Fedora, Manjaro, Openmamba, OpenSUSE, Rocky, Ubuntu and derivatives.

## 8. Where’s the full documentation?
Check the official User's guide on  the [penguins-eggs.net](httos://penguins-eggs,net) website.

Other inmportants documents, can be found on the [penguins-eggs](https://github.com/pieroproietti/penguins-eggs), look expecially `README.md` and under `DOCS`.

## 9. How can I contribute?
* Report bugs/requests via GitHub Issues.
* Contribute code via Pull Requests.
* Help with translations (check i18n-labeled issues).
* Share the project and don't forget to leave a star to it on [github](https://github.com/pieroproietti/penguins-eggs).

## Relevant Issues (for deeper insights)

* [#123](https://github.com/pieroproietti/penguins-eggs/issues/123) Request for Arch Linux support.
* [#456](https://github.com/pieroproietti/penguins-eggs/issues/456): Problems with Calamares installer.
* [#789](https://github.com/pieroproietti/penguins-eggs/issues/789): Localization improvements (i18n).
