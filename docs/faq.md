---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# `Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT` #[411](https://github.com/pieroproietti/penguins-eggs/issues/411)

Use always `sudo eggs kill`, before to produce an ISO. The command `eggs love` already include this, so it's not necessary, but if you are creating an ISO using `sudo eggs produce` and get this error, just use `sudo eggs kill` before to it.

