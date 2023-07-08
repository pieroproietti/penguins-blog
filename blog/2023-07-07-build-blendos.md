---
authors: pieroproietti
slug: build-blendos-image
title: build blendOS image
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

I wrote something about [blendOS](https://blendos.co/) in this previous [post](https://penguins-eggs.net/blog/blendos), now I'm trying to build blendOS image, following official [blendOS Documentation](https://docs.blendos.co/) and particularly this pages:

* [Setting up blendOS builds
](https://docs.blendos.co/docs/build-blend/build_environment)
* [Building an image](https://docs.blendos.co/docs/build-blend/building_blendos)

# Setting up blending builds

All OK.

# Building an image

All right, until command:

```
cd ~/blendOS/build
assemble init 'https://github.com/blend-os/manifests' 'main'
```

![click-error](/images/click-error.png)

To continue I must install `python-pip` and with `pip` module `click`:

```
sudo pacman -S python-pip
sudo pip install click --break-system-packages
```

Give again the previous command:

```
cd ~/blendOS/build
assemble init 'https://github.com/blend-os/manifests' 'main'
```
And this time, it go! 

After finished, I continue, with:

```
source build/envsetup.sh
breakfast | tee breakfast.log
```

And we end in this way:
![blendos-end-breakfast.png](/images/blendos-end-breakfast.png)

This is the complete log of the command: [breackfast.log](/logs/breakfast.log)

I tried to build iso too, giving from the same container the command:

```
sudo brunch
```

This is the complete log of the command: [sudo brunch](/logs/brunch.log)

# On a blendOS without akshara hook

After trying to use a normal Arch system as the parent, encountering the same problems as above, I wanted to try using an installed blendOS system, however, made "mutable" by removing the akshara hook.

In this case, finally, even without the need to install python-pip and the click module, everything seemed to proceed properly, reaching the conclusion of the procedure.

![all-packages-ok](/images/all-packages-ok.png)

# creating ISO
At this point I gave the `sudo brunch` command and chose gnome as the iso to be created and it too ran correctly.

|[blendos-gnome-ok](/images/blendos-gnome-ok.png)

# booting ISO
Every fairy tale has a happy ending, for ours what can we say: evidently there is still something to be fixed. 

The iso installs, but the system--once installed--fails to boot.





## Note
You can comment in this page too, using you github account.
