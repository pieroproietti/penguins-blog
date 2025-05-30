---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: en
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
* Check user permissions and ensure the user is in the sudo group.
* ISO generation errors: Verify required packages (e.g., squashfs-tools, xorriso) are installed.

## 4. How do I create a custom ISO?
Type:

```sh
sudo eggs produce
```
This generates an ISO image in /home/eggs/.

## 5. Support for non-Debian/Ubuntu distros?
Actually penguins-eggs support: Almalinux, Arch, Debian, Devuan, Fedora, Manjaro, Openmamba, OpenSUSE, Rocky, Ubuntu and derivatives.

## 6. Where’s the full documentation?
Check the official User's guide on  the [penguins-eggs.net](httos://penguins-eggs,net) website.

Other inmportants documents, can be found on the [penguins-eggs](https://github.com/pieroproietti/penguins-eggs), look expecially `README.md` and under `DOCS`.

## 7. Use cases
- Create personalized Linux distributions for organizations with pre-installed software and configurations.
- Build rescue/recovery systems with your preferred tools and settings.
- Develop educational Linux environments for classrooms with specific software packages.
- Create portable development environments that can be deployed consistently across different machines.
- Build specialized penetration testing or system administration live distributions.

## 8. Can I use penguins-eggs without sudo?
No, certain operations require root privileges to mount filesystems and modify system settings.

## 9. How can I contribute?
* Report bugs/requests via GitHub Issues.
* Contribute code via Pull Requests.
* Help with translations (check i18n-labeled issues).
* Share the project and don't forget to leave a star to it on [github](https://github.com/pieroproietti/penguins-eggs).

## 10. GUI
eggsmaker - a project of [Jorge Luis Endres](https://github.com/jlendres/eggsmaker) - It is an essential and functional Graphical User Interface for penguins-eggs. Available for Arch, Debian, Devuan and Ubuntu.

## Relevant Issues (for deeper insights)

```
Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT
* [#123](https://github.com/pieroproietti/penguins-eggs/issues/123) Request for Arch Linux support.
* [#456](https://github.com/pieroproietti/penguins-eggs/issues/456): Problems with Calamares installer.
* [#789](https://github.com/pieroproietti/penguins-eggs/issues/789): Localization improvements (i18n).
