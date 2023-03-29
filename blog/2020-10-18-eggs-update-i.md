---
authors: pieroproietti
slug: eggs-update-i
title: eggs update -i
lang: en
---

A few days ago, I was thinking about a way to solve the problem of updating eggs in case it is installed as a deb package, the mode that seems to be the most used.

For this purpose I created a small microservice on the site https://penguins-eggs.net/versions

which returns the outgoing versions of eggs, and the changelog of the given version.

Although with some difficulties, these days I haven't had much time to dedicate to eggs, I am pleased to announce that since version 7.6.59 the automatic update of eggs is available.

Just give the command:

```sudo eggs update -i ```

Probably there will still be some changes, I would like to create two channels one stable and one experimental. 

Note: _To use this function, You must have wget installed._ 

![Update](https://github.com/pieroproietti/penguins-eggs/raw/master/documents/terminal-lessons/eggs_update-i.gif) 

