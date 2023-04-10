---
authors: pieroproietti
title: Create a naked Arch
slug: arch-naked
lang: en
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# `Arch Linux`

In this note we are going to see how, starting from scratch, or rather starting from the Arch Linux installation disk, we can get a complete graphical system useful for eggs development. Colibri is a lightweight configuration with XFCE that I use, precisely, to develop eggs itself.

## Installation of a minimal Arch system (naked)

We use the latest iso-at the moment archlinux-2023.03.01-x86_64.iso-and boot our machine.

Archinstall allows configuring our system interactively. it also allows passing the ```--config```, ```--creds``` and ```disk_layouts``` parameters for faster configuration. You can also, of course, skip this step and install on your own or in a more traditional way.

### openssh
without copy and paste we lose half of our power, so first we install openssh with the in.tention of installing our image directly from remote:
```
# pacman -Sy openssh
```
All we need to do at this point is to define a password for 
the root account:
```
passwd
```
See what ip address our machine has:
```
ip a
```
e finalmente ci possiamo connettere in remoto alla stessa:
```
ssh root@192.168.1.40
```

I then, created three simple configuration files:
* ```eggs_credentials.json```
* ```eggs_bios_disk_layouts.json```
* ```eggs_uefi_disk_layouts.json```
* ```eggs_naked_configuration.json```


For example:

```
archinstall --config https://raw.githubusercontent.com/pieroproietti/penguins-eggs/master/naked/arch/eggs_configuration.json \
            --creds https://raw.githubusercontent.com/pieroproietti/penguins-eggs/master/naked/arch/eggs_credentials.json \
            --disk_layouts https://raw.githubusercontent.com/pieroproietti/penguins-eggs/master/naked/arch/eggs_disk_layout.json
```

we simply modified some parameters for our needs:
* Mirror region: Italy
* Drivers
* Drive partitions
* partizioni (ext4)
* password di root: evolution
* aggiunto un utente con capacita di amministrazione: artisan/evolution
* profile: minimal
* network configuration: NetworkManager

And, in fact - after a few moments -it offers us the following screen:
```
et/Modify the below options                                                    
                                                                                
> Archinstall language           set: English (100%)                            
  Keyboard layout                set: us                                        
  Mirror region                  set: ['Italy']                                 
  Locale language                set: en_US.UTF-8                               
  Locale encoding                set: UTF-8                                     
  Drive(s)                       set: 1 Drive(s)                                
  Disk layout                    set: 2 Partitions                              
  Disk encryption                                                               
  Bootloader                     set: grub-install                              
  Swap                           set: True                                      
  Hostname                       set: naked                                     
  Root password                  set: None                                      
  User account                   set: 1 User(s)                                 
(Press "/" to search)                                                           
```

We select install and perform the installation.

After the installation is finished, we still have a few little things to fix which we will provide for right after the reboot.

# Reboot
We log into the vm with our account: artisan and reinstall openssh:

```
sudo pacman -S openssh
sudo systemctl start sshd
```

At this point comfortably, we connect remotely again:
```
ssh artisan@192.168.1.39
```
We fix sudoers and autologin which for a live show is essential.

## sudoers
Let's go edit with visudo the sudoers file

```
sudo su
export EDITOR=nano
visudo
```

And remove the "#" to the line:

```
## Uncomment to allow members of group wheel to execute any command
# %wheel ALL=(ALL:ALL) ALL
```
then, exit:

```exit```

## Autologin
```
groupadd -r autologin
gpasswd -a artisan autologin
```


## Installation of penguins-eggs
Let's move on, then, to the installation of eggs with the PKGBUILD for Arch

```
git clone https://aur.archlinux.org/penguins-eggs.git
cd penguins-eggs-arch
makepkg -srcCi
```

Once eggs is installed, we go on to configure it:
```
sudo eggs dad -d
```

So let's create our first iso:

```
sudo eggs produce
```

We will get our iso in ```/home/eggs```, we just have to export the iso to the hosta system with scp or whatever works best for you.

# Booting the created live image

We introduce ours live image into our machine and select boot from it.

We would be logged in automatically as user **live** with password **evolution** and root password **evolution**.

![arch-naked-boot](/images/arch-naked/boot-from-iso.png)

At this point we can either obviate the interactive installation:

```
sudo eggs install
```
Or the unattended one:
```
sudo eggs install --unattended -n
```

![arch-naked-boot](/images/arch-naked/unattended.png)

# Starting the newly installed system
We now start our newly installed system. 

We're going to "dress up" our naked version with the **books** costume for Arch.

```
eggs wardrobe get
```

So, while waiting to get wardrobe working on Arch, let's proceed with:

```
cd .wardrobe/costumes/colibri
sudo ./arch-colibri.sh
```
Dressing is started...

```
MY_USERNAME: artisan
MY_USERHOME: /home/artisan
:: Synchronizing package databases...
 core                  154.1 KiB  1125 KiB/s 00:00 [######################] 100%
 extra                1745.4 KiB  14.2 MiB/s 00:00 [######################] 100%
 community               7.2 MiB  20.3 MiB/s 00:00 [######################] 100%
:: Starting full system upgrade...
 there is nothing to do
:: Synchronizing package databases...
 core                  154.1 KiB  1401 KiB/s 00:00 [######################] 100%
 extra                1745.4 KiB  14.7 MiB/s 00:00 [######################] 100%
 community               7.2 MiB  19.7 MiB/s 00:00 [######################] 100%
:: There are 36 members in group xorg-apps:
:: Repository extra
   1) xorg-bdftopcf  2) xorg-iceauth  3) xorg-mkfontscale  4) xorg-sessreg
   5) xorg-setxkbmap  6) xorg-smproxy  7) xorg-x11perf  8) xorg-xauth
   9) xorg-xbacklight  10) xorg-xcmsdb  11) xorg-xcursorgen  12) xorg-xdpyinfo
   13) xorg-xdriinfo  14) xorg-xev  15) xorg-xgamma  16) xorg-xhost
   17) xorg-xinput  18) xorg-xkbcomp  19) xorg-xkbevd  20) xorg-xkbprint
   21) xorg-xkbutils  22) xorg-xkill  23) xorg-xlsatoms  24) xorg-xlsclients
   25) xorg-xmodmap  26) xorg-xpr  27) xorg-xprop  28) xorg-xrandr
   29) xorg-xrdb  30) xorg-xrefresh  31) xorg-xset  32) xorg-xsetroot
   33) xorg-xvinfo  34) xorg-xwd  35) xorg-xwininfo  36) xorg-xwud
```

We wait for the installation of the packages for colibri and reboot.

![arch-colibri](/images/arch-naked/arch-colibri.png)


# Creation of the calamares package
Calamares is not present in the Arch repositories, at least I have not found it.

We are going to build it from the sources.

```
git clone https://github.com/pieroproietti/penguins-calamares-arch
cd penguins-calamares-arch
./build
```

(*) It is currently not working.

![calamares-building](/images/arch-naked/calamares-building.png)

It will take some time, about ten minutes on my virtual machine equipped with 4 cores and 4096 G of RAM. 

For more information about what we are doing see the [README.md](https://github.com/pieroproietti/penguins-calamares-arch).

Compiled and installed our calamares, we are ready to generate our version of colibri with graphical installer.

```
sudo eggs dad -d
```

We need to reconfigure to detect changes: adding calamares and changing the host name.

At this point we can build the iso.

```
sudo eggs produce --fast --addons adapt
```
![colibri-iso-creating](/images/arch-naked/colibri-iso-creating.png)

Well, we have created our first Arch derivative!

![colibri-iso-installing](/images/arch-naked/colibri-iso-installing.png)
