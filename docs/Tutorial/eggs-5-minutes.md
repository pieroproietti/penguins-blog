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

### 1. Install prerequisites
```bash
# Debian/Ubuntu
sudo apt install git tar

# Arch Linux  
sudo pacman -S git tar

# Fedora/AlmaLinux/Rocky
sudo dnf install git tar
```

### 2. Install with get-eggs
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

### 3. Configure eggs
```bash
sudo eggs dad --default
```

### 4. Create your ISO
```bash
sudo eggs produce
```

## Result
You'll get an ISO named: `egg-of_DISTRO_VERSION_HOSTNAME-ARCH_DATE_TIME.iso`

**Example**: `egg-of-debian-bookworm-naked-amd64_2025-05-28_1025.iso`

## Main Commands
- `eggs love` - Create live ISO, full automatic
- `eggs install` - CLI installer 
- `eggs calamares --install` - Graphical installer (optional)
- `eggs` - Complete command list

## Support
- 📖 [penguins-eggs.net](https://penguins-eggs.net)
- 🐛 [GitHub Issues](https://github.com/pieroproietti/penguins-eggs/issues)
- 💬 [Telegram](https://t.me/penguins_eggs)

**With just 4 commands you've created a complete, installable Linux distribution!** 🎉