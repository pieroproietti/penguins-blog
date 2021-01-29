---
title: 'Updated eggs, revised commands and drop eggs i386'
layout: post
date: 2021-01-29 18:22:14
---

## Here we are, with bad news.

I start with the bad news: during this week I drop the eggs version for i386.

The problem is nodejs, we have version 14 LTS in amd64 and armel, but for i386 the last version possible is node 8.x.

Time is passing fast and when I start to update the packages in eggs, I saw who can't yet compile eggs in node 8 anymore. 

This is a great pity, becouse I know there are users and distros wanted this version, but at the moment, to continue to improve eggs. I decided to drop the i386 version.

(You can continue to use the last version, and for sureI will try later to compile it again. Same help is possible?)


## Good news!
Well, after the bad, the good news!

Now we have a man page build automatically, so always updated and on line with the sources. 

Not only, we "sell" it in two versions man and html, and You can find it always update in our [site](/man).

All packages are updated and so autocomplete, command not-found and everything is oow in order. Don't became crazy more for mispell a command or a flag: eggs will suggest the nearest command.

After long think, I renamed the command prerequisites to init (and we have alias as prerequisites or fertilization).

This i did becouse I put in init all the tasks eggs need to do to be operative. So now create autocomplete and manual are included here and we reduced commands to learn.

## mom
The script mom is continuing to improve and remain cli compatible. Don't use more zenity anymore but whitail only - it is more rational - and I found enought cases zenity is not installed (kde) and heavy enoght to install on them.

## So, You are welcome to eggs-7.7.27

Next step will be probably the possibility to edit differents locales, locales_default and timezone. Is is already possible to edit `/etc/penguins-eggs.d/eggs.yaml` but I want to find a more simple way,

The export: commands are based on the configurations in `/etc/penguins-eggs.d/tools.yaml`, you can customize them editing this file. Here is the default sample:

```
# Penguin's eggs
# tools.yaml
---
penguins_eggs_conf: /etc/penguins-eggs.d/eggs.yaml

# you can adapt this configuration to your needs
remoteHost: 192.168.61.2

# user to be used in remote host
remoteUser: artisan

# path in remote host
remotePathDeb: /home/artisan/sourceforge/packages-deb/
remotePathDoc: /home/artisan/sourceforge/DOCS/
remotePathIso: /home/artisan/sourceforge/iso/


# local directories - only for developers 
localPathDeb: ~/penguins-eggs/dist/deb/
localPathDoc: ~/penguins-eggs/docs
localPathIso: /home/eggs

# filter package files
filterDeb: eggs_7.7.*-1_
```

# Stay tuned!