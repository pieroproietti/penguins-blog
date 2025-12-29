---
title: Cook eggs in 5 minutes
authors: pieroproietti
lang: eggs
sidebar_position: 4
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Cook eggs in 5 minutes!

Transform your Linux system into an installable ISO using `penguins-eggs`.

## Quick universal Installation

### Install package penguins-eggs (all distros)
```bash
git clone https://github.com/pieroproietti/fresh-eggs
cd fresh-eggs
sudo ./fresh-eggs.sh
```

The `fresh-eggs.sh` script will automatically:
- Detect your distribution
- Install Node.js (≥18) if needed
- Download and install the correct penguins-eggs package
- Configure all dependencies

### Create your first live ISO
```bash
eggs love -n
```

## Result
You'll get an ISO named: `egg-of_DISTRO_VERSION_HOSTNAME-ARCH_DATE_TIME.iso`

**Example**: `egg-of-debian-bookworm-naked-amd64_2025-05-28_1025.iso`

## Main Commands
- `eggs love` - Create live ISO, full automatic
- `eggs krill` - CLI system installer
- `eggs calamares --install` - Graphical installer (optional)
- `eggs` - Complete command list

### Create your first secure, virtually unbreakable live systems.
This procedure only works with Debian Trixe and Devuan Excalibur, allowing you to have a fully encrypted and usable live copy of your system.

```
sudo eggs produce --fullcrypt
```

### Create your first live homecrypted
This procedure works on most distributions. Unlike fullcrypt, which encrypts the entire system, here only user home directories and users accounts are encrypted.

```
sudo eggs produce --homecrypt
```

## Support
- [penguins-eggs.net](https://penguins-eggs.net)
- [GitHub Issues](https://github.com/pieroproietti/penguins-eggs/issues)
- [Telegram](https://t.me/penguins_eggs)

**With just 2 commands you've created a complete, installable Linux yours respin!** 🎉