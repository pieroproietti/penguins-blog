---
title: Cook eggs in 5 minutes
authors: pieroproietti
lang: eggs
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Cook eggs in 5 minutes!

Transform your Linux system into an installable ISO using `penguins-eggs`.

## Quick Installation

### Install package penguins (all distros)
```bash
git clone https://github.com/pieroproietti/get-eggs
cd get-eggs
sudo ./get-eggs.sh
```

The `get-eggs.sh` script will automatically:
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
- `eggs install` - CLI system installer  (sometime I refere it as krill)
- `eggs calamares --install` - Graphical installer (optional)
- `eggs` - Complete command list

## Support
- [penguins-eggs.net](https://penguins-eggs.net)
- [GitHub Issues](https://github.com/pieroproietti/penguins-eggs/issues)
- [Telegram](https://t.me/penguins_eggs)

**With just 2 commands you've created a complete, installable Linux distribution!** 🎉