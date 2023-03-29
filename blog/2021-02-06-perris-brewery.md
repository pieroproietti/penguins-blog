---
authors: pieroproietti
slug: perris-brewery
title: Perri's Brewery
lang: it
---


Per lo sviluppo di eggs ho utilizzato dall'inizio il linguaggio javascript, cercando di limitare il più possibile la scrittura di codice bash. Nodejs, difatti, oltre ad essere versabile nell'ambito web, offre la possibilità di realizzare con uno sforzo relativo delle applicazioni a riga di comando. 

Inizialmente lo utilizzavo "nature" senza altre aggiunte. Da un anno o due ho cominciato ad utilizzare il framework [oclif](https://oclif.io/) per generare la struttura di eggs. Si risparmia tempo e fatica, inoltre vengono fuori delle possibilità che, inizialmente, uno manco si sogna.

Con il tempo sono passato quindi a typescript che, a mio avviso, offre una migliore pulizia, maggior controllo sul sorgente e la possibilità di avere un ottimo aiuto durante la scrittura del codice con suggerimenti e quant'altro.

Tra queste, l'automazione delle istruzioni sul README.md che poi sono riuscito ad includere anche nella versione del manuale con pagina man ed il fatto che è possibile esportare il programma non solo come pacchetto npm ma anche in diversi formati, tra cui quello che mi interessa il formato debian.

eggs difatti è cresciuto ed iniziato a camminare da solo e mi sono reso conto delle problematiche degli utenti che, spesso, non hanno nodejs installato e poca o nessuna intenzione di installarlo.

oclif-cli-dev offriva questa possibilità ed ho iniziato ad usarla estensivamente, al punto che attualmente utilizzo eggs quasi sempre nella versione pacchettizata debian, pur avendo spesso, nodejs installato. Si risolvono in questo modo anche problematiche di versione non sempre semplicissime da evitare, come la gestione della architettura i386 sulla quale l'ultima versione di node disponibile è la versione node8.

Naturalmente non si può pretendere tutto da uno strumento che crea pacchetti per debian, macos e windows! 

L'esporatione nel formato pacchetto debian non prevede - al momento - gli script di pre e post installazione, così come quelli di pre e post rimozione. Inoltre, e la cosa avrebbe fatto comodo in particolare per eggs, non prevede la presenza di dipendenze nel pacchetto.

Proveniendo da un altro mondo, avrei preferito un mondo migliore, nel quale nodejs sia adottato allo stesso modo di Python per la realizzazione di script ed applicazioni. Ma memore di clipper - che pure includeva se stesso negli eseguibili generati - ho cominciato a rilasciare eggs anche come pacchetto debian con discreta soddisfazione degli utenti.

## Estendere le caratteristiche del pacchetto debian creato da @oclif/dev-cli

A questo punto, mi sono scontrato però con alcune problematiche del pacchetto rilasciato. 

Non conoscevo ne' la struttura e nemmeno - tutto sommato - come il pacchetto stesso veniva fuori, se non a grandi linee. 

Con la collaborazione di un tester ed esperto mantainer ho cominciato a ricevere suggerimenti ed astruse - per me - richieste. 

Fino che, ad un certo punto, un altro sviluppatore mi ha chiesto se potevo aggiungere uno script ad eggs per eseguire alcuni passaggi - soprattutto rimozione del codice precedente - di eggs stesso. 

Ci ho pensato ed ho provato a spacchettare il pacchetto debian e vedere che cosa c'era dentro!

Da quello che ho capito la pacchettizzazione con [oclif/dev-cli](https://github.com/oclif/dev-cli) avviene abbastanza semplicemente, è presente una directory DEBIAN con dentro il solo file control. Mancando completamente i file preinst, postinst, prerm e postrm chiamati all'atto di installazione/aggiornamento/rimozione del pacchetto.

Ho provato ad aggiungerli e, dopo qualche prova a mano, ed un po' di tentativi con bash sono giunto alla conclusione che poteva funzionare.

Sono quindi tornato al mio strumento preferito e, tutto sommato con pochissime righe di codice, ho codificato una grossa utilità.

Quindi eggs verrà rilasciato sempre con i file di pre e post installazione e di pre e post rimozione nonchè con il controllo delle dipendenze. Qualche operazione - tra cui un più fine controllo delle dipendenze e, forse, la gestione delle diverse versioni - fatta attualmente con nodejs e bash - potrà essere sostituita da una più estesa pacchettizzazione. 

## Conclusioni

eggs, da adesso in poi, sarà sempre pacchetizzato con gli script di installazione rimozione ed il controllo delle dipendenze.

Basterà sottoporre il pacchetto debian generato da oclif/dev-cli all'azione degli script della perrisbrewery, inclusa in eggs stesso.

Prevedo. inoltre. di estenderlo in futuro includendo così diverse versione di pacchetto per ogni distribuzione.

Però già adesso - dato il precipuo funzionamento di eggs - che analizza le varie distribuzioni e risale ai pacchetti necessari -  è già utile, apportando un maggiore e più semplice controllo dell'installazione e della rimozione del pacchetto permettendomi, inoltre, di soddisfare la curiosità per la scritta "Perri's Brevery edition" presente, ormai da quasi un anno, sul pacchetto stesso.

Per cui, prima di ogni rilascio di eggs, i pacchetti passeranno nella famosa birreria e tra un doppio malto ed una chiacchiera tra amici,  rinfrancati prenderanno il volo!

## Cambio di versione 

Con l'occasione passeremo dalla versione 7.7.33 direttamente alla versione 7.8.10.1


![Perri's Brewery](/images/perrisbrewery2.jpg)



