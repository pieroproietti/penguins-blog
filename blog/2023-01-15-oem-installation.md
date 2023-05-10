---
authors: pieroproietti
slug: oem-installation
title: OEM installation
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Sto valutando la possibilità di inserire una installazione OEM all'interno di krill per semplificare il processo di distribuzione di versioni verticali di Linux.

krill, semplice installer CLI si presta bene allo scopo ed ho già provveduto nella ultima versione e rimuovere e ripulire il codice per espitare la nuova caratteristica.

Al momento, una rimasterizzazione fatta con eggs, avviata da ISO presenta la seguente schermata di boot.

![boot](/images/boot-new-version.png)

Se andiamo a scegliere il menu CLI (Commond Line Interface), ci troviamo dentro al sistema come utente live ed abbiamo un breve motd che ci illustra le opzioni possibili:

![motd](/images/motd-new-version.png)

Quello che ho già fatto è permettere una configurazione custom configurabile attraverso un semplice file YAML. 

La configurazione va - per adesso - posta nel repository [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe) sotto la directory config. Questo in futuro potrà cambiare, ma al momento è necessario:

* eseguire il fork della repositori [penguins-wardrobe](https://github.com/pieroproietti/penguins-wardrobe) per il proprio utente, ad esempio: charlie;
* clonare la repository: ```git clone https://github.com/charlie/penguins-wardrobe```;
* creare la propria configurazione in /config semplicemente copiando e modificando una configurazione esistente. Ad esempio: ```charlie.yaml```;
* creare una PR ed avvisarmi perchè sia accettata.

A questo punto, dando il comando:

```
sudo eggs install --custom charlie
```

La configurazione di charlie verrà automaticamente impostata su ogni macchina in installazione.

# Il prossimo step

Per procedere ad una installazione OEM il passo dovrebbe essere relativamente breve, occorre però creare un programma che configuri la macchine al primo avvio e predisporre krill per l'installazione di quest'ultimo.

Abbiamo due scelte possibili: utilizzare calamares - ovviamente con una configurazione differente - oppure realizzare un software `ad hoc`. 

Al momento propendo per la seconda ipotesi, anche se a prima vista potrebbe apparire ridondante, infatti sono spaventato dal dover gestire due set di configurazioni di calamares ognuna per ogni versione.

L'idea è quella di aggiungere un ulteriore animale marino alle specie presenti, quindi diciamo che andando verso ```seppia``` che verrebbe realizzato in base alla mia esperienza come una applicazione [electron](https://www.electronjs.org/) e - quindi - sempre nodejs, typescript e varie, con l'aggiunta però di una interfaccia grafica.

Scrivere ```seppia``` in questo modo dovrebbe permettere anche una semplice customizzazione a chi volesse realizzare delle versioni proprie.

# Collaborazioni

Naturalmente chi può e vuole può offrire la propria collaborazione: serviranno grafici - io non sono per nulla esperto - ma anche persone che abbiano già esperienza con electron, incoraggiamenti, consigli e magari donazioni - la mia stazione di lavoro è ormai vecchiotta -  naturalmente tutto sarà ben accetto.

Bene, adesso a caccia di seppie!


![seppia](/images/seppia.jpg)
