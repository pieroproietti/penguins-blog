---
authors: pieroproietti
slug: mx21-adventures
title: MX21 adventures
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Few days ago, MX-Linux annunced his new beta release MX21. based on Debian.

I decided to get a look to MX, a great platform and always intesting. They have his way to remaster and install the system included in the distro: mx-snapshot and mx-installer. 

Both are really nice and is a joy to work with them. 

The only problem was the fact that I am the parent of a relative of mx-snapshot, a cousin or maybe even a brother, since both eggs and mx-snapshot started from refracta-snapshot each one trying then his own way

# The operations I tried

I first tried to install mx21 with krill, and succeeded, then I remastered mx21 with eggs and installed it with calamares. Again with success.

Both went well, perhaps with minor issues that you can fix later, but the system was installed in both cases.

At this point I decided to try mx-installer and made some slight adjustments to eggs to accommodate it. To get it working I made same modification in install.ts too and add a flag **--mx**. Then the follow changement:

```
if (Pacman.packageIsInstalled('mx-installer') && Pacman.guiEnabled() && flags.mx) {
   if (!fs.existsSync('/live/')) {
      execSync('mkdir /live/ ')
   }
   if (!fs.existsSync('/live/aufs')) {
      execSync('ln -s /lib/live/mount/rootfs/filesystem.squashfs/ /live/aufs')
   }
   if (!fs.existsSync('/live/linux')) {
      execSync('ln -s /lib/live/mount/rootfs/filesystem.squashfs/ /live/linux')
   }
   execSync('minstall')
   ...
```

Well, again - with minor problems - it work from the MX21 remastered iso.

Here You can find the resulting iso: [egg-of-mx-bullseye-xfce](https://sourceforge.net/projects/penguins-eggs/files/iso/MX/).


To use mx-installer just open terminal and type: ```sudo eggs install --mx```. You can install it with krill and calamares too.

# Moment, where can lead this tests?

Of course all this operations are - at last - unusefull, mx can be remastered just fine with his tool: mx-snapshot and install perfectly with his mx-installer. So, where can lead this tests again?

# Using mx-installer on a common Debian bullseye

I choose a light iso Debian bullseye with xfce and no other to try to use mx-installer out from mx-linux.

Before I had install it, so I added mx.list from MX21-beta to my the current repos and change them to trust it

```
deb [trust=yes] http://it.mxrepo.com/mx/repo/ bullseye main non-free
```

After that I installed mx-installer and  smartmontools.

```
sudo mx-installer smartmontools
```

PS: without smartmontools mx-installer seen to not work.

## Results

![end](/images/mx-installer-end.png)

My debian was correctly installed, with the following errors:
* get configuration errot (quite normal);
* not ask for user and so not create it;
* I have no way to remove link to installer when installation end.

Well, we must to study more!

Here You can fine this experiment [egg-of-debian-bullseye-xfce-amd64](https://sourceforge.net/projects/penguins-eggs/files/iso/MX/).

_









