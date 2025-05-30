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
`egg-of-debian-bookworm-naked-amd64_2025-05-28_1025.iso`

## eggs commands
Write `eggs` to get a complete list of commands.
```
 remaster system tool, compatible with Arch, Debian, Devuan, Ubuntu and others

VERSION
  penguins-eggs/10.1.1 linux-x64 node-v20.5.1

USAGE
  $ eggs [COMMAND]

TOPICS
  export    export iso in the destination host
  tools     clean system log, apt, etc
  wardrobe  get warorobe

COMMANDS
  adapt         adapt monitor resolution for VM only
  analyze       analyze for syncto
  autocomplete  Display autocomplete installation instructions.
  calamares     configure calamares or install or configure it
  config        Configure eggs to run it
  cuckoo        PXE start with proxy-dhcp
  dad           ask help from daddy - TUI configuration helper
  help          Display help for eggs.
  install       krill: the CLI system installer - the egg became a penguin!
  kill          kill the eggs/free the nest
  krill         krill: the CLI system installer - the egg became a penguin!
  love          the simplest way to get an egg!
  mom           ask help from mommy - TUI helper
  pods          eggs pods: build ISOs from containers
  produce       produce a live image from your system whithout your data
  status        informations about eggs status
  syncfrom      restore users and user data from a LUKS volumes
  syncto        Save users and users' data ENCRYPTED
  update        update the Penguins' eggs tool
  version
```

## Need help?

- 📖 **Documentation**: [penguins-eggs.net](https://penguins-eggs.net)
- 🐛 **Issues**: [GitHub Issues](https://github.com/pieroproietti/penguins-eggs/issues)  
- 💬 **Telegram**: [Telegram](https://t.me/penguins_eggs)
- 💬 **Facebook**: [Facebook Group](https://www.facebook.com/groups/128861437762355)
- 📧 **Contact**: pieroproietti@gmail.com

---

**That's it!** You now have a complete, installable Linux distribution created from your system in just a few minutes. 🐧🥚
