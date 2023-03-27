---
authors: pieroproietti
slug: eggs-8.0.0-krill-and-arm64-version
title: eggs 8.0.0 krill and arm64 version
---

After so long time we have a major version, why?

In short: I removed the old CLI installer with the new krill installer with all it's armamentary and experiences: react components for visualization (only for eggs install and eggs info) and same configuration for GUI and CLI installer.

I'm using actually node-8.17.0 to can build for all the architectures (i386, amd64, armel, arm64)

## State of art of krill (eggs install --cli)
krill is nice and usable, yes there are things to clean but at last install quite fast the system and others modifications can be made directly on the installed system. 

I think is quite more usable compared to the old eggs CLI installer, expecially for not deep technicals persons.

The real lack of krill actually is who cannot install the system in UEFI or, better, the system is installed but not booting. We must to solve this situation becouse arm boot only in UEFI not BIOS standard.


## State of art of eggs on arm64
To test eggs against arm64 I'm using Proxmox VE, configurated via command line to support processor arm64 via qemu.

Depiste the hidden possibility it work enought well and lead me progress on support this two architectures (armel and arm64).

Actually we are in eggs 8.0.6 and eggs is installable on both the architectures and run well, but again distant to effective reproduction of the system, becouse we need to create uefi boot for iso and wait the support of krill to install on iso too.

# Wanting help
It is long time I'm working alone, when started I was not sure to be successfull in create eggs. Now eggs exist and probably it is the most advanced software in the master/remaster field.

You can use it with a lot of distros and architectures and be able to install with the fantastic GUI calamares installer or with krill in CLI environments.

There is the possibility - and really quite near - to be able to start our method of "reproduction" in arm64 too. Think to the rasberry world or similar hardware.

Again, peoples from [funtoo](https://www.funtoo.org/Welcome) asked me if it is possible to bring eggs in funtoo. The answer was yes, but we must change something - the class called pacman - but, now, entirely based on apt. 

But to realize that We need a community of developers, with different interests, distros and hardware.

That's why I'm bothering you now, there is a real possibility of having a standard linux "reproduction" method for all systems and distros or at least, for most of them.

Sincerelly

Piero Proietti

![eggs-8.0.0](/images/eggs-8.0.0.png)
