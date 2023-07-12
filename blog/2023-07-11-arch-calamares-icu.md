---
authors: pieroproietti
slug: arch-calamares-icu
title: arch-calamares-icu
lang: en
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />


Ho un problema invalidante con le ultime versioni di Arch Linux con l'installer grafico calamares: 

il pacchetto [icu](https://icu.unicode.org/) International Components for Unicode viene utilizzato da [calamares](https://aur.archlinux.org/packages/calamares)

In particolare la versione attuale: [icu@73.2-1](https://gitlab.archlinux.org/archlinux/packaging/packages/icu/-/commit/845da9c78d8de7d974a142c052f96a6bc33e2541) non viene utilizzata da calamares che cerca la precendete [icu@73.1](https://gitlab.archlinux.org/archlinux/packaging/packages/icu/-/commit/91e310f6ff6fc11dacaf676544bdcfa176698754)

Ho provato a sistemare con un link simbolico ma continua a non funzionare, probabilmente con le prossime versioni il problema rientrerà da solo, per il momento - purtroppo - calamares su Arch non mi funziona.

E per un programma di rimasterizzazione è un grandissimo problema.

Ad ogni modo è ancora possibile installare Arch utilizzando krill, l'installer CLI integrato in penguins-eggs. Naturalmente occorre tener presente che krill eseguirà una installazione distruttiva, ovvero cancellerà il disco sul quale avete deciso si installare. 

Per installare con krill, basterà: 
* aprire una finestra di terminale
* digitare il comando: `sudo eggs install` 
* seguire le istruzioni.

# Soluzioni?

Se qualcuno è a conoscenza di una soluzione, può indicarla nei commenti. Grazie



