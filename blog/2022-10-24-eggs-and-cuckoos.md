---
authors: pieroproietti
slug: eggs-and-cuckoos
title: eggs and cuckoos
lang: it
---

![eggs-and-cuckoos](/images/eggs-and-cuckoos/cuckoo.jpg)

Nella foto di David Viani, vediamo un codirosso (a destra) che nutre un “piccolo” cuculo (a sinistra), decisamente più grande del genitore adottivo.

# Premessa

Uno dei motivi per crearsi una propria versione di Linux può essere quello di utilizzarlo su numerose postazioni, all'interno di un Ente, di una azienda o di una scuola.

Sicuramente il metodo migliore per effettuare un gran numero di installazioni è quello di utilizzare un server PXE che avvii le macchine della rete e consenta una installazione più veloce del DVD o della chiavetta. 

D'altra parte, La configurazione di un server PXE richiede tempo ed esperienza e non è sempre disponibile, l'immagine iso del sistema da installare si.

Ecco, in eggs abbiamo aggiunto un server PXE autoconfigurante che vi permette tranquillamente di installare contemporaneamente più macchine semplicemebte avviandole dalla rete.

# Avvio del server PXE

Tutto quello che c'è da fare è avviare una live della distribuzione rimasterizzata con eggs, aprire una finestra di terminale ed avviare il comando: ```sudo eggs cuckoo```. A questo punto la macchina si comporterà da server di boot per la nostra rete locale e noi potremo avviare altri computer utilizzando la rete locale stessa.

![eggs-and-cuckoos](/images/eggs-and-cuckoos/cuckoo-server.png)

# Avvio delle macchine da installare

Bisognerà entrare necessariamente nella configurazione BIOS del sistema ed abilitare il boot dalla scheda di rete, nomarlmente dovrete abilitare PXE sulla scheda di rete e controllare le priorità di avvio. 

A questo punto, avviate la vostra macchina selezionando il boot da rete:

![eggs-and-cuckoos](/images/eggs-and-cuckoos/cuckoo-client.png)

Selezionando la prima opzione, verrà caricato il sistema operativo contenuto nella immagine, nel nostro caso una versione di MX Linux21.x rimasterizzata con eggs.

![eggs-and-cuckoos](/images/eggs-and-cuckoos/cuckoo-client-started.png)

Non resta altro che effettuare l'installazione potremo scegliere sia calamares

![eggs-and-cuckoos](/images/eggs-and-cuckoos/cuckoo-client-calamares.png)


 che l'installazione con krill: ```sudo eggs install --unattended```

![eggs-and-cuckoos](/images/eggs-and-cuckoos/cuckoo-client-krill.png)

Per l'installazione unattended sono disponibili alcuni flag:

```
ommand-line system installer - the egg became a penguin!

USAGE
  $ eggs install [-u] [-i] [-r] [-d <value>] [-S] [-s] [-n] [-k] [-p]
    [-h] [-v]

FLAGS
  -S, --suspend         Swap suspend: RAM x 2
  -d, --domain=<value>  Domain name, defult: .local
  -h, --help            Show CLI help.
  -i, --ip              hostname as ip, eg: ip-192-168-1-33
  -k, --crypted         Crypted CLI installation
  -n, --none            Swap none: 256M
  -p, --pve             Proxmox VE install
  -r, --random          Add random to hostname, eg: colibri-ay412dt
  -s, --small           Swap small: RAM
  -u, --unattended      Unattended installation
  -v, --verbose         Verbose

DESCRIPTION
  command-line system installer - the egg became a penguin!

EXAMPLES
  $ eggs install
  Install the system using krill installer

```
che consentono facilmente installazioni multiple.

Commenti: [Facebook group](https://www.facebook.com/groups/128861437762355). [Telegram](https://t.me/penguins_eggs), [Github issue](https://github.com/pieroproietti/penguins-eggs/issues)

