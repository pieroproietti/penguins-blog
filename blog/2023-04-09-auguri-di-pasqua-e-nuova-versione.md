---
authors: pieroproietti
slug: auguri-di-pasqua-e-nuova-versione
title: Auguri di Pasqua e nuova versione
lang: it
---

import Translactions from '@site/src/components/Translactions';

<Translactions path="blog/auguri-di-pasqua-e-nuova-versione"/>

Auguro a tutti una felice Pasqua.

Per chi la festeggia oggi, 
* per chi la festeggia tra una settimana, 
* per chi festeggia oggi festeggia qualcos'altro...

A tutti Buona Pasqua!

![buona-pasqua](/img/blog/2023-04-09/buona-pasqua.png
)

# eggsv9.4.5

* btrfs: eggs produce now works fine on btrfs. Note: calamares and krill configuration for btrfs is not enabled by default;
* bugfix: eggs copy branding from themes including subdirs;
* bugfix: check theme if exists and remove final / if we pass a theme;
* bugfix: link penguins-eggs and others stuffs README.md connected to the new site;
* live boot: removed CLI boot option and added safe option, GRUB is now hidden with a 2 seconds timeout, same for isolinux.
