---
authors: pieroproietti
slug: pacchetti
title: Pacchetti
lang: it
---

Eggs viene rilasciato sia come pacchetto npm - versione originale - sia come pacchetto Debian di più semplice utilizzazione.

Sia per l'uno che per l'altro caso, per il funzionamento di eggs occorre caricare i pacchetti deb che effettivamente "svolgono" il lavoro. Tale compito per i pacchetti di eggs npm, veniva svolto dalla classe pacman, mentre nelle versioni di eggs pacchetizzate come pacchetto Debian le dipendenze sono poste in /DEBIAN/control.

## I pacchetti che svolgono il lavoro "sporco"
I pacchetti Debian necessari ad eggs per svolgere il suo lavoro, anzi, sono questi pacchetti che essenzialmente svolgono il compito. 

Tali pacchetti possono essere di differente tipologia, variando a seconda dell'architettura e della versione di Linux che stiamo utilizzando per la riproduzione.

Andiamo a vedere le problematiche che ne risultano.

### pacchetti indipendenti e che possono essere rimossi
In questa lista ci sono pacchetti che in casi normali - non vengono utilizzati da altri progammi, ma solo da eggs e, che quindi possono essere correttamente rimos
* squashfs-tools 
* xorriso 
* live-boot
* live-boot-initramfs-tools
* dpkg-dev
* syslinux-common
* isolinux

### pacchetti di cui non è prevedibile l'uso da altri programmi o quasi sicuramente usati
Pacchetti che possono essere presenti anche senza eggs e di cui è difficile individuare la rimozione o meno.

* cryptsetup
* dosfstools
* net-tools
* parted
* rsync
* whois

## Pacchetti che dipendono dall'architettura
Attualmente eggs supporta i386, amd64, arm64 ed armel.

Vi sono delle differenze su quali pacchetti è necessario e possibile installare

* syslinux per amd64, i386
* syslinux-efi per arm64, armel

## Pacchetti che dipendono dalla distribuzione/versione di Linux da rimasterizzare

* live-config 

## Pacchetti che dipendono sia dalla distribuzione/versione di Linux da rimasterizzare che dal tipo di init (systemd/sysvinit)

* live-config-systemd
* open-infrastructure-system-config in Ubuntu bionic
* live-config-sysvinit

Ovviamente gestire il tutto richiede una certa complessità e ci sono stati casi in cui alcune versioni di eggs non sono state compatibili con tutte le versioni di sistema operativo installato.

# Come ho proceduto sinora
Sino alla creazione dei pacchetti deb realizzati sulla spinta di  UfficioZero ed altri, tutti i pacchetti venivano caricati da eggs attraverso il comando:

```sudo eggs prerequisites```

Da allora però parecchia acqua è passata sotto i ponti e, sostanzialmente credo di non sbagliare se nella totalità dei casi eggs venga installato come pacchetto deb.

## I pacchetti .deb di eggs
La creazione del pacchetto deb di eggs è basata su [oclif-dev](https://github.com/oclif/dev-cli) e produce un pacchetto deb SENZA dipendenze e script di pre e post installazione.

L'unica differenziazione presente è, quindi, esclusivamente l'architettura: i386, amd64, arm74 o armel.

### Perrisbrewery e l'introduzione di script e dipendenze

Queste dipendenze e gli script sono però importanti per garantire l'aggiornamento e la rimozione del pacchetto e sono stato costretto ad inserirli, da qua è nato il progetto compagno di eggs [perrisbrewery](https://github.com/pieroproietti/perrisbrewery).

Perrisbrewery è, come dire, un assistente che non fa altro che prendere il pacchetto debian originato da oclif e variabile unicamente dalla architettura ed andare ad inserire le dipendenze e gli script necessari.

Sinora ho cercato di limitare le tipologie di pacchetto, evitando di specificare la versione, in quanto questo - sia per me che per chi ha introdotto eggs nelle proprie repositories - può generare molto lavoro.

D'altra parte però la versione del sistema operativo su cui eggs sta girando, non essendo conosciuta nel momento della compilazione, deve essere valutata al runtime e, richiedere, l'analisi e l'installazione dei pacchetti specifici per la distribuzione/versione in uso.

### Tre possibili alternative
Abbiamo, quindi, tre possibili strade:
* rilasciare eggs esclusivamente come pacchetto non, era l'idea originale, ma comporta disporre di nodejs pre-installato e l'impossibilità della corretta rimozione di eggs e dei prerequisiti;
* creare pacchetti .deb distinti ma solo per architettura, Comporta una ulteriore configurazione al runtime, necessaria per stabilire se i pacchetti dipendenti dalla versione o dal tipo di init (systemd/sysvinit) siano presenti o meno;
* creare pacchetti distinti sia per architettura che per distribuzione/versione;

Considerata la comodità della pacchettizazione per l'utente finale, la possibilità di specificare direttamente nel pacchetto le dipendenze e gli script, la soluzione occorrente è l'ultima e cioè creare pacchetti distinti sia per architettura che per distribuzione/versione.

### La birreria va espansa mentre il pacman va ridotto

Attualmente, poichè sinora ho scelto la soluzione ibrida, abbiamo due punti dove vengono decise le dipendenze da installare: perrisbrewery e pacman.

Lo svantaggio della installazione delle dipendenze con pacman è che quest'ultimo, i pacchetti richiesti da eggs non vengono registrate come dipendenze e, quindi, non è possibile rimuoverle in sicurezza. Forse questo potrebbe essere evitabile con qualche hatch.

Inoltre, avere due decisori per le dipendenze genera una inutile duplicazione di codice, da aggiornare ad ogni modifica dell'uno o dell'altro. In una parola, questo approccio è scomodo.

Dovremmo quindi pensare ad ampliare perrisbrewery che riceve attualmente in ingresso i pacchetti .deb di oclif ed introduce dipendenze e script.

perrisbrewery dovrebbe prevedere, quindi, in uscita per ogni architettura le versioni possibili e, generare, di conseguenta un pacchetto per ogni versione di distribuzione.

Immaginiamo, per il momento di continuare con l'uso di sourceforge per distribuire eggs. Attualmente tutti i pacchetti risiedono in due cartelle:

```
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/old
```
Naturalmente, per includere la versione lo schema dovrebbe cambiare ed avremmo:
```
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/jessie
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/stretch
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/buster
https://sourceforge.net/projects/penguinsq-eggs/files/packages-deb/bullseye
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/bionic
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/focal
https://sourceforge.net/projects/penguins-eggs/files/packages-deb/groovy
```

Per semplicità non ho riportato la directory old che pure dovrebbe essere inclusa per ogni versione.

# Modifiche necessarie in perrisbrewery
In perrisbrewery, andrebbe quindi previsto che per ogni architettura si creino i pacchetti per tutte le varie versioni;
* jessie, strecth, buster, bullseye, beowulf, bionic, focal, hirsute


# La fabbrica di birra necessiterebbe di ulteriori punti vendita 

Non disponendo di risorse adeguate a gestire un repository ho gestito il rilascio utilizzando un server che se interrogato, risponde con le versioni disponibili e rilascia un indirizzo da dove scaricarle, nel nostro caso sourceforge.

Questo servizio è denominato basket, da cestino per le uova.

L'interrogazione avviene tramite usa una url specifica:

https://penguins-eggs.net/versions/all/' + Utils.eggsArch() + '/

Ad esempio con https://penguins-eggs.net/versions/all/i386/

si otterranno tutte le versioni disponibili per questa architettura

mentre con https://penguins-eggs.net/versions/7.8.50/i386/

verrà richiesta la versione 7.8.50 per arch i386,

Naturalmente dovrà essere previsto un ulteriore livello per gestire la versione:

```
https://penguins-eggs.net/versions/7.8.50/i386/buster/
```
In questo modo verrà ricevuto dal client eggs l'indirizzo da cui scaricare l'aggiornamento per l'architettura e la versione installata.

 ## inserimento di nuove versioni di eggs
 Adesso, l'inserimento viene effettato tramite una chiamata alla url

 https://localhost:4000/add/package-version/distro-arch/description

 ovviamente dovrà essere possibile

https://localhost:4000/add/package-version/arch/distro-version/description

e, poichè chiamarlo  a mano sarebbe lungo - si passa da quattro versioni differenti ad una ventina - fare in modo che venga automatizzato l'inserimento.


 # Stiamo come stiamo che stiamo bene

Ragionando sul problema, m'è venuto un dubbio: ma se rimanessimo così? Quali sarebbero i problemi?

Essenzialmente avremo: pacchetti comuni e dipendenti da architttura SEMPRE rimuovibili.

Tutti questi pacchetti sono comuni, non dipendono ne' da architettura e neppure dalla versione e possono quindi essere previsti con la suddivisione attuale.
Per essi avremmo la possibilità di rimozione perchè accettati come dipendenze di eggs.

* squashfs-tools 
* xorriso 
* live-boot
* live-boot-initramfs-tools
* dpkg-dev
* syslinux-common
* isolinux
* cryptsetup
* dosfstools
* net-tools
* parted
* rsync
* whois

## Pacchetti che dipendono dall'architettura
Anche questi pacchetti, pur non essendo comuni, essendo prevista una suddivizione per architettura finiscono nele dipendenze, come tali possono essere facilmente rimossi se rimangono orfani.

* syslinux per amd64, i386
* syslinux-efi per arm64, armel

## Pacchetti che dipendono dalla versione
Il problema esiste solo per questi pacchetti che, alla fine non sono poi molti e non da luogo ad incertezze. 

* live-config (OK Debian/Devuan ma non Ubuntu bionic)
* live-config-systemd (OK Debian/Devuan ma non Ubuntu bionic)
* open-infrastructure-system-config Ubuntu bionic
* live-config-sysvinit

## Ci restano solo i pacchetti dipendenti da versione ed init
Solo i pacchetti derivanti dalla versione o dallinit andrebbero valutati. Alla fine si tratta di solo questi pacchetti che, dipendento più o meno da live-config, potremmo anche scegliere di rimuovere brutalmente senza timore di danni:

* live-config 
* live-config-systemd
* live-config-sysvinit
* open-infrastructure-system-config in Ubuntu bionic

## pacman e perrisbrewery
Rimane come è, salvo NON distinguere rimovibili e non rimovibili, in quanto essendo i pacchetti inclusi nelle dipendenze sono sempre rimovibili in automatico tramite apt.

Potrebbe però essere definito un file lib/dependecies.ts che esporti le nostre dipendenze e che venga utilizzato sia da config, pacman che in perrisbrewery e che contenga:

```
/**
* depCommon
* depArch
* depVersion
* depInit
*/

export const depCommon = [
   'squashfs-tools',
   'xorriso',
   'live-boot',
   'live-boot-initramfs-tools',
   'dpkg-dev',
   'syslinux-common',
   'isolinux',
   'cryptsetup',
   'dosfstools',
   'net-tools',
   'parted',
   'rsync',
   'whois'
]

/**
 * Dependencies for arch
 */
export const depArch = [
   {
      package: 'syslinux',
      arch: ['amd64', 'i386']
   },
   {
      package: 'syslinux-efi',
      arch: ['arm64', 'armel']
   }
]

/**
 * dependencies for versions
 */
export const depVersions = [
   {
      package: 'live-config',
      versions: ['jessie', 'stretch', 'buster', 'bullseye', 'beowulf', 'focal', 'groovy', 'hirsute']
   },
   {
      package: 'live-config-systemd',
      versions: ['jessie', 'stretch', 'buster', 'bullseye', 'focal', 'groovy', 'hirsute']
   },
   {
      package: 'live-config-sysvinit',
      versions: ['beowulf']
   },
   {
      package: 'open-infrastructure-system-config',
      versions: ['bionic']
   }
]

/**
 * dependecies for init
 * 
 * We need for buster derivate with sysvinit MX-LINUX and probably others
 * 
 */
export const depInit = [
   {
      package: 'live-config-systemd',
      init: 'systemd'
   },
   {
      package: 'live-config-sysvinit',
      init: 'sysvinit'
   }
]
```
 
# implementazione

Con la versione 8.0.27 ho provveduto a realizzare l'opzione **ibrida**, ovvero rimanere con una distinzione dei pacchetti deb solo a livello di architettura ed utilizzando pacman - a runtime - per caricare gli ulteriori pacchetti necessari dipendenti dalla versione e/o dall'init.

Il codice risulta più compatto, la complassità si riduce soprattutto per la presenza del lib/dependencies.ts che è condivisa tra il comando config, la classe produce ed il pacchetto perrisbrewery.

Mi era rimasto il dubbio: eliminare il comando config. 

Tale comando, pur essendo chiamato config comprende anche la chiamata a pacman per l'installazione dei pacchetti che dipendono dalla versione o dall'init. Alla fine, quindi, è già automatizzato. eggs config, inoltre, viene chiamato pure all'interno di post installazione - ma non può, in questa fase - installare pacchetti, per cui si limita ad emettere dei suggerimenti.

Quindi, alla fine ho deciso di rilasciare questa nuova version così com'è, in fondo sarà più semplice anche per gli utenti, che non si ritroverranno di fronte ad una pletora di pacchetti che, sostanzialmrnte, differiscono solo per le dipendenze.

Il comando config. viene automaticamente eseguito da produce per controllare se manca qualcosa ed in questa sede giò è autolatizzato

# test
Non ho fatto moltissimi test, mi sono limitato a buster e bulldeye naked ed a linuxmint i386, ma dovrebbe essere ok anche per altre distro.

## issue

Puoi segnalare problemi o malfunzionamenti [issue](https://github.com/pieroproietti/penguins-eggs/issues/72)

You can report problems or malfunctions [issue](https://github.com/pieroproietti/penguins-eggs/issues/72)

## share

If you like eggs, please rate this project on [sourgeforce](https://sourceforge.net/projects/penguins-eggs/) and [githut](https://github.com/pieroproietti/penguins-eggs) and help to spread it's diffusion.

