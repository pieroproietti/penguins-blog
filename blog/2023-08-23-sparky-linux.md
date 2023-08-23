---
authors: pieroproietti
slug: sparky-linux
title: "Sparky Linux"
lang: it
enableComments: true
---

Hi Sparkers

of course this [post](https://sparkylinux.org/penguins-eggs/) make me curious.

I am Piero Proietti the author of penguins-eggs, a remastering program written in the footsteps of the various remastersys, systembacks, refracta-snapshots, etc.

I thank the author of the post [pavroo](https://sparkylinux.org/author/pavroo/) for his interest, and describe my experience with Sparky.

Both testing penguins-eggs and broadening its text-eggs compatibility with many distributions, both original and derived.

Sparky did not give me any major problems, but I still had to take action on two things. 

## os-release

The first, the lack of the field `VERSION_CODENAME` field in `/etc/os-release`.

eggs goes to detect the result of command `lsb_release -c` to decide which distribution it is, here it turns out `n/a` which stands for `rolling release` and that's not good, because that way I impose Arch Linux compatibility.

So I simply edited `/etc/os-release` and placed `VERSION_CODENAME=bootworm` for version 7 and `VERSION_CODENAME=trixie` for version 8.

## calamares
