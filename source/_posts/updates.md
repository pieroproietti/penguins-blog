---
title: updates
layout: post
date: 2020-09-29 08:13:19
---
Not always I have time to update this site, but the last versions, expecially 7.48.1 are well tested and working, so I think it's better to present them. 

# EGGS-7.47.1_.DEB
added a beutifull new theme for ufficiozero thanx to Julian Del Vecchio.

# EGGS-7.46.1_.DEB
changed flags in produce and calamares. just added flag --final to make the final version of your project: all the packages relative to the "reproduction" will be removed during the installation with the gui installer;
module packages in calamares now work in accord with the flag --final, if present will build the remove section in packages.conf (you can check this file in /etc/calamares/modules) if not, only section try-install will be build. This section is ideal for international packages, languages, etc.

# EGGS-7.44.1_.DEB
buxfix: there was a little problem with links in the previus version.

# EGGS-7.43.1_.DEB
improvement: patch per bionic in calamares module grubcf, added check plymouth from successive version of calamares (in bionic calamares is quite old and not mantained);
improvment: actually is possible to use directly produce after the installation, eggs will propose the necessary operations to install prerequisites, calamares and so on;
bugfix: the previous version I put distro.versionId as productName in calamares, but due the fact who was used ad EFI name too, Debian refuse to boot. So I changed in branding.ts the line bootloaderEntryName=productName to bootloaderEntryName = distro.distroId.
