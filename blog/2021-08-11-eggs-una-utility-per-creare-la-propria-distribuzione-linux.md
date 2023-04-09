---
authors: pieroproietti
slug: eggs-una-utility-per-creare-la-propria-distribuzione-linux
title: eggs una utility per creare la propria distribuzione Linux
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions path="blog/eggs-una-utility-per-creare-la-propria-distribuzione-linux"/>

Se hai sempre desiderato di creare e mantenere una tua distribuzione Linux personalizzata, forse è il momento di provare a realizzarlo con questa simpatica utility.

Lo strumento permette in maniera immediata la creazione di una versione live del proprio sistema installabile con l'ottimo installer di sistema grafico calamares. Questo facilità anche il compito di installare la propria distro in dual boot, 

E' possibile con eggs creare la live a partire praticamente da tutto il panorama delle distribuzioni della famiglia Debian e quindi comprende pure Ubuntu, Devuan e tutte le derivate come Linux Mint, KDE neon, deepin linux, MX Linux etc.

Tutto quello che devi fare è installare la tua distribuzione preferita, che sarà la base del remaster e quindi installare Penguin's eggs.

Esiste anche la possibilità di utilizzare delle installazioni senza interfaccia grafica, ma comunque già "riproduttive" ed installabili con l'ottimo installer interno denominato krill. Questo installer, pur essendo a linea di comando, presenta una interfaccia simile al più noto e raffinato calamares e si basa sulla sua stessa configurazione automaticamente generata da eggs.

Partire da una versione base come può essere ad esempio una net-install di Debian presenta il vantaggio che tutto il software che andremo ad installare è stato scelto da noi stessi ed eviteremo più facilmente le ridondanze che si possono verificarsi partendo da una installazione ad esempio xfce ed andando mano, mano a rimuovere i pacchetti che non ci interessano, per passare a gnome, cinnamon, KDE, LXQT o altro.

Su [sourcefoge](https://sourceforge.net/projects/penguins-eggs/files/iso/) sono presenti delle ISO già preimpostate con eggs ed immediatamente installabili e riproduttive denominate **naked**. Naturalemte sono versioni molto leggere - meno di 500 MB - e velocemente rimasterizzabili, adatte - per così dire - alla "riproduzione". 

Potete partire da una di queste o da una installazione pulita o persino dal vostro stesso sistema. eggs creerà comunque una immagine ISO live pulita, con un nuovo utente denominato live e SENZA alcun account utente e dato dell'utente preesistente.

Naturalmente, poichè l'utente creato è nuovo, prenderà le sue impostazioni dal catalogo standard /etc/skel, per questo può essere utile il comando sudo eggs tools:skel che permette di prendere la configurazione di un utente e salvarla come default per i prossimi utenti creati.

E' comunque possibile includere anche i precedenti account ed i propri dati nella ISO, questi non saranno però disponibili sulla ISO ma soltanto ua volta che il sistema viene installato.

Questa è stata una precisa scelta di progetto per evitare la pubblicazione di dati utente sensibili.

L'opzione --backup permette difatti di creare una ISO normale senza alcun account originario e dato sensibile, ma all'interno della immagine live, viene creato un volume luks2 criptato che contiene sia gli account salvati che i dati utente.

Utilizzando l'installer krlll, questo volume verrà automaticamente rilevato, verrà richiesta la passprhase di creazione ed i dati verrano importati all'interno del nuovo sistema installato.


# Installazione di eggs

L'installazione di eggs è analoga a quella di altri programmi, eggs dispone di una propria ppa che può essere aggiunta alle repository del sistema ed una volta aggiornate le stesse il pacchetto eggs è disponibile per l'installazione Debian standard.

Basta copiare le seguenti due righe ed incollarle in una finestra di terminale:

```
url -SsL https://pieroproietti.github.io/penguins-eggs-ppa/debian/KEY.gpg | sudo apt-key add -
sudo curl -s --compressed -o /etc/apt/sources.list.d/penguins-eggs-ppa.list "https://pieroproietti.github.io/penguins-eggs-ppa/debian/penguins-eggs-ppa.list"
```

A questo punto utilizzare i soliti comandi ```sudo apt update``` ed ```sudo apt install eggs``` o utilizzare un package manager grafico.

# Creazione della prima ISO
In effetti eggs andrebbe configurato ed adattato al proprio sistema, scegliendo con cura il nome utente da dare all'utante del livecd, la sua password, la password di root del livecd etc. 

Essendo però l'operazione tediosa ho deciso per un approccio più semplice, ci facciamo auitare da papà - un tipo che bada al sodo - e va dritto allo scopo.

Daremo questi due comandi, che sono comunque illustrati in dettaglio sia nella Users' guide che nella pagina man, ma andiamo con ordine:

```
sudo eggs config
```

Eventualmente accettiamo l'installazione di calamares che ci verrà richiesta solo nel caso siamo in un sistema capace di grafica, quindi:

```
sudo eggs dad -d
```

Che è un po' come dire: papà carica tutti i default, intesta questo tuo figlio e fai partire la produzione dell'uovo. 

dad, senza battere ciclio ci risponde se siamo sicuri ed avvia la produzione della ISO compressa in modalità veloce, per risparmiare tempo. Va sempre di fretta!

A fine operazione, ci verrà indicato il nome della ISO, la directory o nido nella quale è presente, l'utente e la password impostata.

Basterà un semplice scp per esportare la iso da qualche parte ed utilizzarla quindi per avviare una altra macchina virtuale o fisica.

# E la mamma?
Eggià - come in ogni buona metafora - papà non poteva certo essere lasciato solo. E' stato comodo però e ci tornerà utile anche in seguito per creare delle immagini senza fronzoli, ma se da pargoli vogliamo veramente capire come va il mondo, allora oltre a papà ci converrà seguire la mamma che ci prenderà per mano per prendere confidenza con l'User's guide, la pagina di man e tutti i comandi disponibili.

Con la mamma occorre essere gentili e quindi, MAI utilizzare ```sudo``` semplicemente si immusonisce e rifiuta di eseguire il compito.

```
eggs mom
```

![mom](/images/eggs-mom.png)

Come vedete, sono presenti i principali comandi di eggs, dal **config** iniziale agli altri in ordine alfabetico, quindi la **documantation** , i comandi **export**, i **tools** e l'opzione di uscita.

Andiamo per prima cosa a vedere la **documentation**, in fondo la configurazione e la produzione della ISO già l'ha fatta papà - pure se in via provvisoria e: "tua madre... s'adatta"!

Nella documentazione troviamo **book** e **book translated** che non fanno altro che avviare il browser di default sulla pagina internet che contiene l'user's guide - il primo - e su Google translator che la traduce sull'altro.

Allo stesso modo è presente **manual** che ci porta alla pagina man di eggs, in formato html per maggiore comodità e che risiede sul sistema, non necessita quindi di connettività internet. 

Questo può essere utile in alcuni casi.

Ma potremmo anche trovarci in un ambiente esclusivamente CLI e la mamma non abbandonerà mai il suo figliolo, almeno no fino a che non cresca, gli siano spuntate le alette e non se lo sia per così dire goduto. Ed ecco allora che ci viene proposto **man**, ovvera la visualizzazione in formato man della pagina di eggs.

Naturalmente, una volta imparato il metodo, non è indispensabile ricorrere alla mamma per digitare **man eggs**, ma all'inizio può aiutare.

Una volta ottenuta la nostra visualizzazione basterà chiudere la finestra del browser o uscire da man per tornare al menu principale di mom ed iniziare ad esplorare le altre possibilità.

Scegliamo a questo punto il menu **info** che equivale in analogia a digitare da terminale: **eggs info**.

Ci verrà presentata una schermata graphic-like che rappresenta la configurazione attuale di eggs.

![info](/images/eggs-info.png)

Anche qua, basterà il tocco di un tasto per chiudere e continuare sul menu principale di mom.

Chiedere a mom di uccidere il figlio, opzione del menu **kill** potrebbe sembrare spaventoso, ma ormai siamo abituati a tutto e l'idea di uccidere un processo o cancellare un file e non ci fa più di tanto effetto. Ed in ogni caso c'è chi lo fa e pure di peggio purtroppo.

**kill** rimuoverà completamente il nido ed il suo contenuto. Ancora, possiamo chiamare **kill** in maniera diretta e lo faremo quando lo conosceremo meglio con ```sudo eggs kill```.

Potremmo continuare, essere ligi all'ordine ed alla tradizione ed affrontare man mano le varie opzione che mom ci propone e ci sono tutte.

Vedremo come esempio il menu **produce** quello più importante, perchè in fondo questo è il nostro scopo: riprodurre il nostro sistema.

![mom-produce](/images/eggs-mom-produce.png)

Vediamo che mom ci illustrerà le opzioni di produce, cercando di insegnarcele con il suo commento. Però il suo compito si sta esaurendo, dopo le prime prove saremo in grado, viaggiare più speditamente da soli utilizzando i vari comandi e la funziona di autocomplete degli stessi.

## La funzione di autocomplete in eggs

Così se andiamo a battere nel terminale direttamente: ```sudo eggs produce``` seguita da **--** e, quindi, premendo due volte il tasto [TAB], ci vedremo comparire a video le opzioni disponibili e che possiamo impostare

```
artisan@fabrica:~/penguins-blog$ eggs produce --
 --addons    --fast      --normal    --script    --yolk      
 --backup    --help      --prefix    --theme     
 --basename  --max       --release   --verbose   
```

L'autocomplete è dinamico ed è presente per tutti i comandi ed i flag di eggs. Così se digitiamo eggs [TAB][TAB] ci appare la lista dei comandi
```
artisan@fabrica:~/penguins-blog$ eggs 
adapt          export:deb     install        tools:clean    update
autocomplete   export:docs    kill           tools:locales  
calamares      export:iso     mom            tools:skel     
config         help           produce        tools:stat     
dad            info           remove         tools:yolk    
```

e, per ogni comando, inserendo i due trattini, la lista dei flag. Ad esempio:
```
artisan@fabrica:~/penguins-blog$ eggs calamares --
--final    --help     --install  --remove   --theme    --verbose  
```

oppure:
```
artisan@fabrica:~/penguins-blog$ eggs install --
--cli      --help     --mx       --verbose  
```

e così via. 

Potete sperimentare liberamente in maniera interattiva, naturalmente la lettura del manuale vi aiuterà non poco, ma tutta questa introduzione, spero, vi abbia messo sulla buona strada per l'apprendimento.

Riporto il link alla [Penguin's eggs user's guide](/docs/tutorial-eggs/italiano) e vi auguro una buona lettura.
