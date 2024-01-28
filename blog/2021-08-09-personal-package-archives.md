---
authors: pieroproietti
slug: personal-package-archives
title: Personal Package Archives PPA
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Today on the advice of the excellent Yannis I've created a PPA repository for eggs. 

You just need to add it to your current sources to have eggs available simply through apt, gdebi, synaptic, etc.

Copy and past to add this penguins-eggs-ppa to your sources lists

```
curl -SsL https://pieroproietti.github.io/penguins-eggs-ppa/debian/KEY.gpg | sudo apt-key add -
sudo curl -s --compressed -o /etc/apt/sources.list.d/penguins-eggs-ppa.list "https://pieroproietti.github.io/penguins-eggs-ppa/debian/penguins-eggs-ppa.list"
```

then

```
sudo apt update
sudo apt install eggs
```

#[penguins-eggs-ppa](/images/penguins-eggs-ppa.png)

[link](https://pieroproietti.github.io/penguins-eggs-ppa/)

