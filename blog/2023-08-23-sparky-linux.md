---
authors: pieroproietti
slug: sparky-linux
title: "Sparky Linux"
lang: en
enableComments: true
---


import Translactions from '@site/src/components/Translactions';

<Translactions />

![sparky](/images/sparky-eggs.png)

Hi Sparkers

of course this [post](https://sparkylinux.org/penguins-eggs/) make me curious.

I am Piero Proietti the author of penguins-eggs, a remastering program written in the footsteps of the various [remastersys](https://it.wikipedia.org/wiki/Remastersys), [systemback](https://hu.wikipedia.org/wiki/Systemback), [refracta-snapshot](https://git.devuan.org/devuan/refractasnapshot-base), etc.

I thank the author of the post [pavroo](https://sparkylinux.org/author/pavroo/) for his interest, and describe my experience with Sparky.

Both testing penguins-eggs and test it's compatibility with many distributions, both original and derived.

Sparky did not give me any major problems, but I still had to take action on two things. 

## os-release

The first, the lack of the field `VERSION_CODENAME` in `/etc/os-release`.

eggs goes to detect the result of command `lsb_release -c` to decide which distribution it is, here it turns out `n/a` which stands for `rolling release` and that's not good, because that way I impose Arch Linux compatibility.

So I simply edited `/etc/os-release` and placed `VERSION_CODENAME=bootworm` for version 7 and `VERSION_CODENAME=trixie` for version 8.

## calamares

Sparkly linux provides its own version of calamares, unfortunately this one has incompatibilities with eggs, so you'd better install the debian version.

```
apt-cache policy calamares

 Installed: 3.2.61-1+b1
  Candidate: 3.2.61~sparky7~3-1
  Version table:
 *** 3.2.61-1+b1 500
        500 http://deb.debian.org/debian bookworm/main amd64 Packages
        100 /var/lib/dpkg/status
     3.2.61~sparky7~3-1 1001
       1001 https://repo.sparkylinux.org orion/main amd64 Packages
```

We can proceed in this way:
```
sudo apt install calamares=3.2.61-1+b1
```

After that is better to look apt upgrade of calamares, just use:

```
sudo apt-mark hold calamares
```

# to be continued

I tried to answer to the [post](https://sparkylinux.org/penguins-eggs/) on Sparky site, unfortunately I get **access denied**, so before I try to disturb the author, then I decided to publish here.

There is again much to say and discuss a possible collaboration, we will see.


