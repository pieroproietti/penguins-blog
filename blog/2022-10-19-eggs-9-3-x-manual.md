---
authors: pieroproietti
slug: eggs-9-3-x-manual
title: eggs 9.3.x manual
lang: en
---
import Translactions from '@site/src/components/Translactions';

<Translactions />


The move to eggs **9.3.x** was mainly characterized by the introduction and improvement of the cuckoo command to get a PXE server directly from our live. While previously I used **dnsmasq** to get services **proxy-dhcpd** and **dhcpd**, actually thanks to [FOGProject/node-dhcproxy](https://github.com/FOGProject/node-dhcproxy) we use just node and only a **proxy-dhcpd** service. 

Having found that due to a grub problem, the field next  from the dhcp offer of the proxy-dhcpd server was not read, we switched to using the more versatile **ipxe** as a network bootloader. 

So it is no longer necessary to have an option for a real dhcpd service in the cuckoo command and we do not risk overlapping the network dhcpd.

Another novelty is the introduction of the command: ```eggs tools ppa``` which adds or removes the **penguins-eggs-ppa** repository to our apt sources list. Example:
```
sudo eggs tools ppa --add
```

Original edition of the eggs manual is released in Italian, of course other languages can be accessed using machine translation.

* [Manuale in italiano 9.3.x](https://penguins-eggs.net/docs/tutorial-eggs/italiano.html)
* [English manual 9.3.x](https://penguins--eggs-net.translate.goog/docs/tutorial-eggs/italiano9.3?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en)


![eggs-linuxfs-installed-via-pxe](/images/book9.3/linuxfs-installation-end.png)
