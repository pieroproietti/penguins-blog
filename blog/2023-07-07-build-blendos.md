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


## Note
You can comment in this page too, using you github account.
