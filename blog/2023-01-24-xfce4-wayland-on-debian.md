---
authors: pieroproietti
slug: xfce4-wayland-on-debian
title: XFCE4 wayland on Debian
lang: en
---
Download the last "naked" version of bookworm from [sf](https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/bookworm/)

Start it, you will autologin in CLI.

```sudo eggs install --unattended```

Attention: will use all your hard disk /dev/sda

After a while, your system is installed: artisan/evolution root/evolution
```
sudo apt install openssh-server
ip a
```

# from browser

Open the following pages:
* https://github.com/adlocode/xfwm4/tree/wayland
* https://packages.debian.org/search?suite=bookworm&arch=any&searchon=all


# from terminal
Connect to the VM, to have cut and copy: 
```
ssh artisan@192.168.1.x
```

## clone the repo

```
git clone https://github.com/adlocode/xfwm4
cd xfwm4
git checkout wayland
```

## install development tools
```
sudo install cmake meson pkg-config
```

## Install prerequisites

```
# NO sudo apt install libwlroots10

sudo apt install weston

sudo apt install libcairo*
sudo apt install libwnck-3*
sudo apt install libbsd*

sudo apt install \
libgtk-3-dev \
libwlroots-dev \
libwnck-3-0 \
libxfce4ui-2-0 \
libxfce4ui-2-dev \
libxfce4util-dev
libxfce4util-1.0 \
gir1.2-libxfce4util-1.0

apt install xwayland

```

## compile and install

```
$ meson setup build
$ ninja -C build
$ sudo  ninja -C build install
```

## start
I tryed
```
weston
```
open a terminal and:
```
xfwm-wayland
```

with not so much success!!!

![xfwm-wayland](/images/xfwm-wayland.png)

## Download image (about 800K)
I did an iso image of that experiment: **egg-of-debian-bookworm-xfwm4**

You can download it from [sf](https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/bookworm/)

## Note

You can now install this iso, the bug was correct.


