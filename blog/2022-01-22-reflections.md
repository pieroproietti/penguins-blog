---
authors: pieroproietti
slug: reflections
title: Reflections
lang: en
---

It's amazing how after so much effort to create a unique remastering tool, it turns out well.

I've just released the eggs 9.0.10 version, the first one running on Debian both in standard and UEFI BIOS mode.

Well, just after publishing it, I restored a VM with manjaro xfce - the last version - give the folloging commands:

* ```sudo pamac upgrade```
* ```sudo pamac install base-devel```
* ```git clone https://github.com/pieroproietti/penguins-eggs```
* ```cd penguins-eggs```
* ```makepkg -sri```
* ```sudo eggs calamares --install```
* ```sudo eggs config```
* ```sudo eggs dad -d```
* ```sudo eggs produce --fast```

After that I exported the resulting iso in my host and put it in another VM enabled with UEFI.

That's the results:

![manjaro-uefi-booting](/images/manjaro-uefi-booting.png)
