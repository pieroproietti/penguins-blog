---
authors: pieroproietti
slug: luks-eggs-crittografia
title: 'eggs e LUKS: crittografia completa per i tuoi sistemi live'
lang: it
comments: true # giscus
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

![](/images/2025-10-27-luks-eggs-crittografia.png)

## Cos'è LUKS? Una breve premessa
Prima di addentrarci nelle nuove e potenti funzionalità di eggs, è fondamentale capire cosa sia LUKS.

LUKS è l'acronimo di Linux Unified Key Setup. Non è solo un software, ma lo standard de facto per la cifratura dei dischi (disk encryption) nel mondo Linux.

Il suo scopo è semplice ma cruciale: proteggere i dati "a riposo" (data-at-rest). Questo significa che quando il computer è spento, o il disco non è montato, i dati contenuti sono completamente illeggibili.

### Come funziona (in breve)?
LUKS crea un "contenitore" crittografato (che può essere un'intera partizione, un disco, o, come vedremo, un file immagine). Per sbloccare questo contenitore e leggere i dati, è necessaria una passphrase (o una chiave).

Questa passphrase non cripta direttamente i dati, ma protegge una "master key" (chiave principale) che fa il lavoro pesante. Questo meccanismo è robusto e flessibile, permettendo, ad esempio, di cambiare la passphrase senza dover ri-crittografare l'intero disco.

### Perché è importante?
In un mondo dove i dispositivi (specialmente laptop o server portatili) possono essere facilmente rubati o smarriti, LUKS è la prima linea di difesa. Se un malintenzionato entra in possesso del tuo disco, senza la passphrase i tuoi dati personali, i database aziendali o i file sensibili rimangono solo un ammasso indecifrabile di bit.

Naturalmente, lo stesso vale a maggior ragione per un'immagine ISO, che può essere facilmente trasmessa via Internet o copiata su una chiavetta.

Ora che abbiamo rinfrescato il concetto, vediamo come eggs utilizza questa tecnologia per rivoluzionare la sicurezza dei sistemi live.

## LUKS ed eggs nel passato

È stato molto tempo fa che - grazie alle idee ed ai bisogni di un amministratore di sistema indiano - avevo introdotto i comandi `eggs syncto` ed `eggs syncfrom` che andavano a creare una live, nella quale la home utente veniva criptata su una immagine LUKS.

Tutto era nato dalla sua necessità di trasferire sistemi via internet senza però mai esporre i dati.

L'idea ha funzionato, ed è stata usata per un certo periodo, ma non si è diffusa molto o - almeno - non mi sono giunte notizie da altri utilizzari.

Credo che il problema sia stato soprattutto quello di una certa macchinosità del sistema: per riottenere i dati bisognava reinstallare il sistema e si doveva farlo tramite `krill` l'installer TUI di eggs.

## Una nuova versione rivoluzionaria
Ho aggiunto al comando `sudo eggs produce` ed a `eggs love` due nuovi flag:

* `--homecrypt`
* `--fullcrypt`

### `homecrypt`
Questa opzione consente di criptare l'intera `/home` e gli account degli utenti, che vengono registrati in un file immagine LUKS denominato `/live/home.img`.

L'avvio avviene normalmente, e si carica `/live/filesystem.squashfs` che consiste in questo caso in una normale rimasterizzazione standard e, perciò, priva di dati sensibili.

La magia avviene subito dopo l'avvio: il sistema richiede la **passphrase** per sbloccare `home.img`. Una volta inserita, i dati vengono montati e la live diventa a tutti gli effetti un clone **equivalente** al sistema installato.

La differenza è che, in questo caso, i nostri dati sono protetti dalla passphrase e non potranno essere decriptati senza questa conoscenza. Inoltre, in questo modo sono disponibili direttamente sulla live e non è necessaria la reinstallazione.

Questo metodo surclassa ed ha portato alla rimozione dei due comandi precedenti: `syncto` e `syncfrom` che, difatti, non esistono più.

### fullcrypt
L'appetito vien mangiando è un detto che si usava e si usa ancora in Italia.

#### L'idea
Anche se criptare `/home/` e gli account utente rende praticamente impossibile risalire ai dati contenuti in `/home`, alcuni sistemi - specialmente i server (basti pensare ad una gestione del personale con [orangehrm](https://www.orangehrm.com/)) - hanno dati sensibili **registrati** in varie parti del **sistema**: database, server web e così via.

In questo caso criptare la `/home` non basta più. Si potrebbe risalire ai dati semplicemente copiando i file del database su altro sistema e quindi averne piena **disponibilità**.

La soluzione - l'unica - è quella di criptare l'intero sistema.

#### Lo sviluppo

Una volta creata la struttura per la creazione di `home.img` in formato LUKS, adattare - duplicandolo - lo script a questa nuova forma è stato abbastanza veloce.

Mi sono scontrato però con la necessità di avviare il sistema.

L'avvio delle live di eggs, è abbastanza semplice, il sistema live è contenuto in `/live/filesystem.squashfs`. Si carica il kernel e gli hook contenuti nell'initramfs vanno a cercare l'immagine live.

In questo caso, però nell'immagine non esiste alcun archivio `/live/filesystem.squashfs`, ma quest'ultimo è **contenuto** in `/live/root.img`.

Ed il sistema, ovviamente, non parte.

#### La soluzione

Ho dovuto, perciò, adattare l'initramfs alle nuove esigenze dopo aver inutilmente percorso altre strade (filesystem.squashfs minimale) che però avevano sempre dei problemi.

Come per `homecrypt` ho dovuto creare uno script per permettere l'apertura del volume LUKS con l'interazione dell'utente, ma questa volta tutto è dovuto essere immesso nell'initramfs ed essere eseguito prima dell'avvio della fase di boot vera e propria.

Essendo partito da Debian, la scelta ovvia è rimasta quella di utilizzare `live-boot` ed i suoi hooks, lasciando a quest'ultimo il compito dell'avvio vero e proprio, ma facendogli trovare - prima della fase di mount - tutto preparato con la struttura dell'immagine di avvio in RAM pronta ad essere utilizzata.

Funziona! E funzionerà anche su altre distro non di derivazione Debian, cambiando naturalmente la modalità di configurazione dell'initramfs per ognuna. Ma questo verrà con il tempo.

#### Stato dell'arte

Al momento, su Debian trixie - l'ho testato solo su questa versione - e se ne raccomanda l'uso anche perchè utilizza LUKS2, possiamo creare un clone completamente **criptato** ed avviabile direttamente da live, con tutti i dati in esso contenuti.

Penso alla praticità di una soluzione simile: uno sviluppatore potrebbe avere una copia del server aziendale a casa, fare tutti i test che vuole senza rischiare di danneggiare il sistema di produzione e, soprattutto, **senza che i dati sensibili siano mai esposti**.

Ma ovviamente le applicazioni per un sistema del genere sono pressoché infinite.

## Conclusione

Queste nuove opzioni di crittografia trasformano `eggs` in uno strumento ancora più potente e versatile, offrendo un livello di sicurezza "enterprise" per la creazione e la distribuzione di sistemi live. Che si tratti di proteggere la propria home o di blindare un intero server, la sicurezza dei dati "a riposo" è ora pienamente integrata nel processo.