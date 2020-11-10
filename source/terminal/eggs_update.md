---
title: updating eggs
layout: page
date: 2020-11-08 07:38:32
---

_A command line tools, can be easy to use!_

# eggs update -i

Most of the softwares you use are on the repository of your distro. eggs, at moment don't have a repository but just a page on sourceforge.com where you can download update.

You must download the package and install it with dpkg or gdebi. This is tediuos enought compared at the automatism of apt, so eggs try to solve this difficult with a different approach.

```
$ sudo eggs update -i
```
You will get the last four versions of eggs, browse them and choice the version to download and install it.

![eggs-update-i](https://github.com/pieroproietti/penguins-eggs/raw/master/documents/terminal-lessons/eggs_update-i.gif)


[index](/terminal)