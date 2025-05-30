---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />


## 1. What is Penguins' Eggs?
Penguins' Eggs is a tool to create live ISO images and custom Linux distributions, based on Debian/Ubuntu and derivatives. It allows you to generate reproducible systems or "hatch" new distros.

## 2. How do I install Eggs?
You can install it via:

```sh
curl -fsSL https://pieroproietti.github.io/penguins-eggs-ppa/KEY.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/penguins-eggs.gpg
echo "deb [arch=amd64] https://pieroproietti.github.io/penguins-eggs-ppa ./" | sudo tee /etc/apt/sources.list.d/penguins-eggs.list
sudo apt update
sudo apt install eggs
```
Alternatively, download .deb files from the releases page.

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
sudo eggs produce --clone
This generates an ISO in /home/eggs/. Use --fast for quicker builds (without full compression).
```

## 5. Can I use Eggs without sudo?
No, certain operations require root privileges to mount filesystems and modify system settings.

## 6. Difference between eggs produce and eggs dad?
produce: Creates standard live ISOs.

dad: "Docker-like" mode for developing new distros in an isolated environment.

## 7. How can I contribute?
Report bugs/requests via GitHub Issues.

Contribute code via Pull Requests.

Help with translations (check i18n-labeled issues).

## 8. Support for non-Debian/Ubuntu distros?
Some issues request Arch Linux or Fedora support, but it’s currently optimized for Debian-based systems.

## 9. Where’s the full documentation?
Check the official Wiki or the penguins-eggs.net website.


## 10.Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT #411
```
Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT #411
```
Use always sudo eggs kill, before to produce an ISO. The command eggs love already include this, so it's not necessary, but if you are creating an ISO using sudo eggs produce and get this error, just use sudo eggs kill before to it.


## Relevant Issues (for deeper insights)
* #123: Request for Arch Linux support.
* #456: Problems with Calamares installer.
* #789: Localization improvements (i18n).
