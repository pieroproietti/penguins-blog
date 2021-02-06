---
title: Perri's Brewery
layout: post
date: 2021-02-06 12:57:00
---


Per lo sviluppo di eggs ho utilizzato dal principio il linguaggio javascript, cercando di limitare il più possibile la scrittura di codice bash. Nodejs, difatti, oltre ad essere versabile nell'ambito web, offre la possibilità di realizzare con uno sforzo relativo delle applicazioni a riga di comando. 

Inizialmente lo utilizzavo senza altre aggiunte, da un anno o due ho cominciato ad utilizzare il framework [oclif](https://oclif.io/) per generare la struttura di eggs. Si risparmia tempo e fatica, inoltre vengono fuori delle possibilità che, inizialmente, uno manco si sogna.

Col il tempo sono passato a typescript che, a mio avviso, offre una migliore pulizia, maggior controllo sul sorgente e la possibilità di avere un ottimo aiuto durante la scrittura del codice con suggerimenti e quant'altro.

Tra queste, l'automazione delle istruzioni sul README.md che poi sono riuscito ad includere anche nella versione del manuale con pagina man ed il fatto che è possibile esportare il programma non solo come pacchetto npm ma con diversi formati, tra cui quello che mi interessa il formato debian.

eggs difatti è cresciuto ed iniziato a camminare da solo e mi sono reso conto delle problematiche degli utenti che, spesso, non hanno nodejs installato e poca o nessuna intenzione di installarlo.

oclif-cli-dev offre questa possibilità ed ho iniziato ad usarla estensivamente, al momento utilizzo eggs quasi sempre nella versione pacchettizata debian, pur avendo spesso, nodejs installato. Si risolvono in questo modo anche problematiche di versione non sempre semplicissime da evitare, come quella che su processore i386 l'ultima versione di node disponibile è la versione 8.

Naturalmente non si può pretendere tutto ed uno strumento che crea pacchetti per debian, macos e windows! L'esporatione del pacchetto debian non prevede - al momento - gli script di pre e post installazione, così come quelli di pre e post rimozione. Inoltre, e la cosa avrebbe fatto comodo in particolare per eggs, non prevede la presenza di dipendenze nel pacchetto.

Proveniendo da un altro mondo, avrei preferito un mondo nel quale nodejs sia adottato allo stesso modo di Python per la realizzazione di script ed applicazioni, ma memore di clipper che pure includeva se stesso negli eseguibili generati ho cominciato a rilasciare eggs anche come pacchetto debian con buona soddisfazione degli utenti. Ancora

## Estendere le caratteristiche del pacchetto debian creato da @oclif/dev-cli

A questo punto, mi sono scontrato però con alcune problematiche del pacchetto rilasciato. Non conoscevo ne' la struttura e nemmeno - tutto sommato - come il pacchetto stesso veniva fuori, se non a grandi linee. 

Con la collaborazione di un tester ed esperto mantainer ho cominciato a ricevere suggerimenti ed astruse - per me - richieste. 

Fino che, ad un certo punto, un altro sviluppatore mi ha chiesto se potevo aggiungere uno script ad eggs per eseguire alcuni passaggi - soprattutto rimozione del codice precedente - di eggs stesso. Una

Ci ho pensato ed ho provato a spacchettare il pacchetto debian e vedere che cosa c'era dentro!

Da quello che ho capito la pacchettizzazione con [oclif/dev-cli](https://github.com/oclif/dev-cli) avviene abbastanza semplicemente, è presente una directory DEBIAN con dentro il solo file control, mancando completamente i file preinst, postinst, prerm e postrm chiamati all'atto di installazione/aggiornamento/rimozione del pacchetto.

Ho provato ad aggiungerli e, dopo qualche prova a mano, ed un po' di tentativi con bash sono giunto alla conclusione che poteva funzionare.

Sono quindi tornato al mio strumento preferito e, tutto sommato con poche righe ho codificato una grossa utilità.

Quindi, da adesso in poi, eggs verrà rilasciato sempre con i file di pre e post installazione e di pre e post rimozione nonchè con l controllo delle dipendenze. Qualche operazione - tra cui il controllo delle dipendenze ed il controllo della versione di distribuzione - precedente fatto con nodejs e bash - prenderà posto nella fase di pacchettizzazione di eggs. 

## Conclusioni

eggs sarà sempre pacchetizzato con gli script di installazione rimozione ed il controllo delle dipendenze.

Basterà sottoporre il pacchetto debian generato da oclif/dev-cli all'azione dello script realizzato e, seppur giovane, succientemente maturo.

Prevedo di estenderlo successivamente includendo diverse distibuzioni, ma già adesso - dato il precipuo funzionamento di eggs - che analizza le varie distribuzioni su cui può essere installato e risale ai pacchetti da installare, già utile. Permettomi inoltre di giustificare la scritta "Perri's Brevery edition" presente, ormai da un anno, sul pacchetto stesso.

Per cui, prima di ogni rilascio di eggs, i pacchetti passeranno un attimo nella famosa birreria e tra un doppio malto e due olive verdi - siamo pur sempre italiani - prenderanno il volo!

![Perri's Brewery](/images/perrisbrewery2.jpg)



