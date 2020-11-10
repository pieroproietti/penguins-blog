---
title: updating eggs
layout: page
date: 2020-11-08 07:38:32
---

_A command line tools, can be easy to use!_


Most of the softwares you use are on the repository of your distro. eggs, at moment don't have a repository but just a page on sourceforge.com where you can download update.

You must download the package and install it with dpkg or gdebi. This is tediuos enought compared at the automatism of apt, so eggs try to solve this difficult with a different approach.
```
$ sudo eggs update -i
```
You will get the last four versions of eggs, browse them and choice the version to download and install it.


```
$ sudo eggs update -i
```

![eggs-update-i](https://github.com/pieroproietti/penguins-eggs/raw/master/documents/terminal-lessons/eggs_update-i.gif)

**Ok**, we just finish to produce our iso image. Just need to use it to boot another machine.
