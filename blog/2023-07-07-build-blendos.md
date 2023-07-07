---
authors: pieroproietti
slug: build-blendos
title: Build blendOS
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Sto seguendo le seguenti pagine:

* [Setting up blendOS builds
](https://docs.blendos.co/docs/build-blend/build_environment)
* [Building an image](https://docs.blendos.co/docs/build-blend/building_blendos)

# Installazione di blendOS 

procede tutto correttamente siano al comando:

```
cd ~/blendOS/build
assemble init 'https://github.com/blend-os/manifests' 'main'
```

Per procedere sono costretto a dare i comandi:

```
sudo pacman -S python-pip
sudo pip install click --break-system-packages
```

Quindi, procedo con:

```
source build/envsetup.sh
breakfast | tee breakfast.log
```

Questo è il [breackfast.log](/logs/breakfast.log)
