---
authors: pieroproietti
slug: return-to-the-origins
title: Return to the origins eggs 8.17.x
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Some time ago, after an incautious update, I found myself in the unpleasant situation of removing node8 from the compatibility list with eggs. Node8 is, however, the only version of node compatible with i386 architecture and therefore, for a remastering program, important.

Since then, this happened roughly at the end of June 2021, I have also made subsequent changes alas lost or to be recovered in the maze of git.

I took the last working version of eggs the 8.0.30 and recompiled it as eggs-8.17.0 with the intention to update the upgradable, I've already seen that a simple npm update blows compatibility, and reintroduce the changes after the switch, especially the calamares configuration without the need for password entry.
