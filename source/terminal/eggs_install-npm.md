---
title: install eggs (npm package)
layout: page
date: 2020-06-22 07:38:32
---

_A command line tools, can be easy to use!_

Eggs is a node package, so the right way to install it is by the node package manager (npm)

In this way you will find automatically the last version and can update very simply:

```text
sudo eggs update
```

If you don't have nodejs installed, install it followind the instruction on [nodesource](https://github.com/nodesource/distributions/#deb)

Install eggs with npm is a simple task, you need two command:

```text
sudo npm config set unsafe-perm true
sudo npm -i penguins-eggs -g
```
