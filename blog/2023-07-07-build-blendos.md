---
authors: pieroproietti
slug: build-blendos
title: Build blendOS
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

I following these pages:

* [Setting up blendOS builds
](https://docs.blendos.co/docs/build-blend/build_environment)
* [Building an image](https://docs.blendos.co/docs/build-blend/building_blendos)

# Setting up blending builds

All OK

# Building an image

All right until command:

```
cd ~/blendOS/build
assemble init 'https://github.com/blend-os/manifests' 'main'
```

![click-error](/images/click-error.png)

To continue I must install python-pip and with pip module click:

```
sudo pacman -S python-pip
sudo pip install click --break-system-packages
```

Then I continue, with:

```
source build/envsetup.sh
breakfast | tee breakfast.log
```

This is the complete log of the command: [breackfast.log](/logs/breakfast.log)

I tried to build iso too, giving from the same container the command:

```
sudo brunch
```

This is the complete log of the command: [sudo brunch](/logs/brunch.log)
