---
title: install eggs (deb package)
layout: page
date: 2020-06-22 07:38:32
---

_A command line tools, can be easy to use!_

## First: you must download it 

* open Your browser and go to [sourceforge](https://sourceforge.net/projects/penguins-eggs/)
* choose files then deb-packages. You will reach this [link](https://sourceforge.net/projects/penguins-eggs/files/packages-deb/)
* choose the rigth version and download it.

## Second: open a windows terminal

* go to the directory where you saved the package

```text
$ cd ~/Downloads
```

* install the package, with the command:

```text
$ sudo dpkg -i eggs-7.5.112-1.deb
```
Eggs is a nodejs project, if You already have nodejs it's better to choose the npm package.

![install-deb](https://github.com/pieroproietti/penguins-eggs/raw/master/documents/terminal-lessons/eggs_install-deb.gif)



