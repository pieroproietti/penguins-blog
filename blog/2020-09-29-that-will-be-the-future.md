---
authors: pieroproietti
slug: that-will-be-the-future
title: That will be the future
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Lately, before releasing version 7.6.47-1, I had a strong but constructive discussion with one of my users. 

I noticed that they tend not to trust software in general and eggs in particular, due to the numerous versions and the lack of knowledge of its mysteries.

The main reason is the lack of understanding of what happens behind the scenes. I decided, therefore, to rewrite more clearly what happens during the installation and removal of prerequisites. It is, in fact, nothing magical, but only a series of apt install or apt remove, the various software that serve as eggs for its operation.

I still have some problems, but you will see in detail the operations performed.
