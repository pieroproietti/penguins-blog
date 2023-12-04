---
authors: pieroproietti
slug: prince-of-persia
title: "Prince of Persia"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Qualche tempo fa ho ricevuto questo messaggio su un problema di eggs con plasma:

```
I have an error on calamares installer.
when i want to install the iso. during the partitioning automatically. it has the following error:

job set the label on partition /dev/sda1 to root partition table of partition /sda/sda1 does not support setting names. job ignored
```

![plasma](/img/blog/2023-12-04/plasma.jpg)

![error](/img/blog/2023-12-04/error.jpg)

The error is caused by Plasma settings → Removable Storage → Removable Devices → Uncheck On Login and On Attach
and solved problem, calamares installed the system fine.


Il Principe di Persia ci ha inviato anche un nuovo splash screen
![error](/img/blog/2023-12-04/1280-800-final.png)

