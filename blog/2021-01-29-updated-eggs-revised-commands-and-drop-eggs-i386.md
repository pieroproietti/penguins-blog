---
authors: pieroproietti
slug: updated-eggs-revised-commands-and-drop-eggs-i386
title: Updated eggs, revised commands and drop eggs i386
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

![here we are](/images/here-we-are.jpg)

## Here we are, with bad news.

I start with the bad news: during this week I drop the eggs version for i386.

The problem is nodejs, we have version 14 LTS in amd64 and armel, but for i386 the last possible version is node 8.x.

Time is passing fast and when I started to update the npm packages in eggs, I saw who can't yet compile eggs in node 8 anymore. 

This is a great pity, becouse I know there are again users and distros interested to this version. At the moment, to continue to improve eggs, I decided to drop the i386 version.

**Note:** _You can continue to use the last version, and for sureI will try later to compile it again. Same help is possible?_


## Good news!

Today I found the way to compile eggs with node8 only for the pourpuse to get i386 version. 

This is great, becouse peoples need again it! 

I started a [mail list in sourceforge](https://sourceforge.net/p/penguins-eggs/mailman/penguins-eggs-developers/), and describe on the last mail that was the solution. If you are interested you can subscribe it.

Now we have a [man page](/docs/man) build automatically, so always updated and on line with the sources. 

Not only, we "sell" it in double versions: man and html. You can find it always update in our [site](//docs/man) too!

All npm packages were updated, so the oclif-plugins autocomplete, command not-found and everything are in order and don't get you in panic, just for a mispell in a command or a flag: eggs will suggest the nearest command.

After long think, I renamed the command `prerequisites` to `init`. In all the way, you can use the old command too, there are two aliases for init: `prerequisites` or `fertilization`.

I did this becouse I put in init all the tasks eggs need to do to become operative. This reduce the commands list too, becouse now autocomplete and man are included in init and we reduce commands to learn.

## Updated original guide italian
[Guida originale in italiano aggiornata al 30 gennaio 2021](/docs/Tutorial/eggs-users-guide)

I need same help for translations, contact me to propose yourself.

## mom
The script `mom` is continuing to improve and remain cli compatible. Don't use more zenity anymore but whitail only - it is more rational - and I found enought cases where zenity is not installed (kde) and a bit too heavy to install on them.

![mom](/images/eggs-mom.png)

## So, You are welcome to eggs-7.7.27

Next step will be probably the possibility to edit differents locales, locales_default and timezone. Is is already possible to edit `/etc/penguins-eggs.d/eggs.yaml` but I want to find a more simple way,

