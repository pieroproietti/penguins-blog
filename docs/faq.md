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

## 2. What are the distros supported?
penguins-eggs is compatible with Almalinux, Arch, Debian, Devuan, Fedora, OpenSUSE, Rocky and Ubuntu and most of derivatives. 
You can find a complete listo on [supported distros](https://github.com/pieroproietti/fresh-eggs/blob/main/SUPPORTED-DISTROS.md).

## 3. How do I install penguins-eggs?
Use `get-get`, universal installer:
```bash
git clone https://github.com/pieroproietti/fresh-eggs
cd fresh-eggs
sudo ./fresh-eggs.sh
```
The `fresh-eggs.sh` script will:
- Automatically detect your distribution
- Install the appropriate version of Node.js (≥18) if needed
- Download and install the correct penguins-eggs package for your system
- Configure all necessary dependencies

# 4. Common Issues & Fixes
"Permission denied" when running sudo eggs:
* Check user permissions and ensure the user is in the sudo group.
* ISO generation errors: Verify required packages (e.g., squashfs-tools, xorriso) are installed.

## 5. How do I create a custom ISO?
Type:

```sh
sudo eggs produce
```
This generates an ISO image in /home/eggs/.

## 6. Support for non-Debian/Ubuntu distros?
Actually penguins-eggs support: Almalinux, Arch, Debian, Devuan, Fedora, Manjaro, Openmamba, OpenSUSE, Rocky, Ubuntu and derivatives.

## 7. Where’s the full documentation?
Check the official User's guide on  the [penguins-eggs.net](httos://penguins-eggs,net) website.

Other inmportants documents, can be found on the [penguins-eggs](https://github.com/pieroproietti/penguins-eggs), look expecially `README.md` and under `DOCS`.

## 8. Use cases
- Create personalized Linux distributions for organizations with pre-installed software and configurations.
- Build rescue/recovery systems with your preferred tools and settings.
- Develop educational Linux environments for classrooms with specific software packages.
- Create portable development environments that can be deployed consistently across different machines.
- Build specialized penetration testing or system administration live distributions.

## 9. Can I use penguins-eggs without sudo?
No, certain operations require root privileges to mount filesystems and modify system settings.

## 10. How can I contribute?
* Report bugs/requests via GitHub Issues.
* Contribute code via Pull Requests.
* Help with translations (check i18n-labeled issues).
* Share the project and don't forget to leave a star to it on [github](https://github.com/pieroproietti/penguins-eggs).

## 11. GUI
eggsmaker - a project of [Jorge Luis Endres](https://github.com/jlendres/eggsmaker) - It is an essential and functional Graphical User Interface for penguins-eggs. Available for Arch, Debian, Devuan and Ubuntu.

## Relevant Issues (for deeper insights)

Consult [issues](https://github.com/pieroproietti/penguins-eggs/issues)
