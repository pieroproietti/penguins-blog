---
authors: pieroproietti
slug: preparing-new-adventures
title: 'Macaroni penguins: preparing new adventures'
lang: en
---

We have just finished the release of eggs for manjaro linux, it has been a nice undertaking and a nice discovery, a system how to say: fast, updated and performing.

## What opportunities for the future and growth of eggs?

### eggs as backup system

A dear friend of mine suggested me to propose it as a backup tool, in fact - server side - it is already possible to create a complete backup of an installation and reinstall it.

What's more, it is also possible to transfer a server for example from a node in India to one in Germany, without having to expose the data.

In fact the backup is done by eggs copying the ENTIRE system except the ```/home``` folder, then a LUKS volume is created with our pass phrase that will be required during the installation. 

Without the knowledge of the pass phrase, you will be able to restore the system but not our data.

This security might not be necessary for a home backup, and you could add a flag to save a user's home for personal use as well: carry the complete system on a flash drive and so on.


### eggs as a tool for creating vertical deployments

Although it started as a personal tool, eggs has grown in recent years and is already used by some Linux distributions derived from Debian, Devuan or Ubuntu.

With the inclusion of manjaro we have a tool that allows us to create our own custom version of the system in an extremely fast and professional way, on a myriad of derived distributions. 

In the long run it is more constructive to use the original material and have the possibility to handle and adapt it to our needs than to take for example the tools of one and recreate your own. It's simply faster!

The road to a school or corporate distro is paved and has been beaten since the days of systemback, now there are new possibilities and a better level.

### eggs on other architectures arm64, armel

With the transition from node 8.x to node 16.x, we had to give up the long-standing i386 compatibility. We could take the opportunity to test the arm64 and armel architectures, in this we are also helped by the fact that manjaro has its own development group on this architecture. 

### Conclusions

I believe that this tool, the ability to "reproduce" the system may appeal to many and many may adopt it.

On the other hand, the concept of population diversification, reproduction and selection is not new and, according to observation of nature, quite powerful.

So it remains to be understood what the roads may be, but they are certainly open.

![macaroni penguins](/images/macaroni-penguins.png)

**Yes, I think we found our wonderfull [mascot](https://en.wikipedia.org/wiki/Macaroni_penguin): ironic, fat and - of course - italian. Not only, as eggs, inside contain mainly [krill](https://penguins-eggs.net/2021/07/16/luks-krill/)!**
