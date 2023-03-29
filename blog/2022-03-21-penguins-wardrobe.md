---
authors: pieroproietti
slug: penguins-wardrobe
title: penguins' wardrobe
lang: en
---

First of all, if we don't have git, install git.
```apt install git```

After clone the wardrobe. The internal wardrobe of eggs, cannot include too much things. 

Let's go to clone:

```
git clone https://github.com/pieroproietti/penguins-wardrobe
```

After that we can see what costumes are included inside, for now just waydroid:

```
eggs wardrobe list --wardrobe ./penguins-wardrobe
```
Well, let's go to wear this new dress!
```
sudo eggs wardrobe wear --wardrobe ./penguins-wardrobe --costume waydroid
```
result in...
![dressing waydroid](/images/dressing-waydroid.png)

