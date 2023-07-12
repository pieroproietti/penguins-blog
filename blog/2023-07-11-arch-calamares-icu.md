---
authors: pieroproietti
slug: arch-calamares-icu
title: arch-calamares-icu
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />


Ho un problema invalidante con le ultime versioni di Arch riguardo calamares: 

il pacchetto [icu](https://icu.unicode.org/) International Components for Unicode viene utilizzato da [calamares](https://aur.archlinux.org/packages/calamares)

In particolare la versione attuale: [icu@73.2-1](https://gitlab.archlinux.org/archlinux/packaging/packages/icu/-/commit/845da9c78d8de7d974a142c052f96a6bc33e2541) non viene utilizzata da calamares che cerca la precendete [icu@73.1](https://gitlab.archlinux.org/archlinux/packaging/packages/icu/-/commit/91e310f6ff6fc11dacaf676544bdcfa176698754)

Ho provato a sistemare con un link simbolico ma continua a non funzionare, probabilmente con le prossime versioni il problema rientrerà da solo, per il momento - purtroppo - calamares su Arch non mi funziona.

Soluzioni?

