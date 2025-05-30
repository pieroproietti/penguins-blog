import Translactions from '@site/src/components/Translactions';

<Translactions />

# Cook eggs in 5 minutes!

Or even less using `get-eggs`, for every supported distribution.

## Start from a base system or from your system

The most convenient solution to get a minimal exclusive CLI installation of all supported distributions is to use `get-eggs`.

What you need to do is basically install a minimal CLI system:
- **Debian**: Use netinstall
- **Ubuntu**: Use server edition  
- **Arch Linux**: Use archiso
- **AlmaLinux/Fedora/OpenSuSE/Rocky**: Use minimal installation
- **Manjaro**: Any minimal installation
- **OpenMamba**: Standard installation

## Prerequisites

`get-eggs` needs some basic prerequisites: mostly `git` and `tar`. First step, install them:

### AlmaLinux/Fedora/Rocky
```bash
sudo dnf install git tar
```

### Arch Linux
```bash
sudo pacman -S git tar
```

### Debian/Devuan/Ubuntu
```bash
sudo apt install git tar
```

### Manjaro
In Manjaro, penguins-eggs is included in the community repository, so you can install it directly:
```bash
sudo pacman -S penguins-eggs
```

### OpenMamba
In OpenMamba, penguins-eggs is included in the repositories, so:
```bash
sudo dnf install penguins-eggs
```

### OpenSuSE
```bash
sudo zypper install git tar
```

## Clone get-eggs and install penguins-eggs

For all distributions except Manjaro and OpenMamba (which have packages in their repos):

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

## Configure eggs

Initialize eggs with default configuration:

```bash
sudo eggs dad --default
```

This command will:
- Create the necessary configuration files
- Set up default values for your system
- Prepare eggs for ISO creation

## Install calamares (optional)

If you want to have the calamares graphical installer available on your live system, install it:

```bash
sudo eggs calamares --install
```

This step is optional. You can always use the built-in `krill` CLI installer instead.

## Produce your first live system

Well, we are ready to produce our first live ISO!

```bash
sudo eggs love
```

You will get your live ISO, named following this pattern:
`egg-of_DISTRO_VERSION_HOSTNAME-ARCH_DATE_TIME.iso`

**Example for a Debian bookworm:**
`egg-of-debian-bookworm-naked-amd64_2024-12-28_1025.iso`

## Alternative commands
Write `eggs` to get a complete list of commands.
## What you get

## Supported distributions

penguins-eggs v10.1.x supports:

**Debian family**: Debian (buster, bullseye, bookworm, trixie), Ubuntu (bionic, focal, jammy, noble), Linux Mint, derivatives

**Red Hat family**: AlmaLinux, Fedora, Rocky Linux

**Arch family**: Arch Linux, Manjaro, EndeavourOS, Garuda, derivatives

**SUSE family**: OpenSuSE

**Independent**: OpenMamba

**Architectures**: amd64 (x86_64), i386, arm64

## Need help?

- 📖 **Documentation**: [penguins-eggs.net](https://penguins-eggs.net)
- 🐛 **Issues**: [GitHub Issues](https://github.com/pieroproietti/penguins-eggs/issues)  
- 💬 **Community**: [Telegram](https://t.me/penguins_eggs)
- 💬 **Comminity**: [Facebook Group](https://www.facebook.com/groups/128861437762355)
- 📧 **Contact**: pieroproietti@gmail.com

---

**That's it!** You now have a complete, installable Linux distribution created from your system in just a few minutes. 🐧🥚
