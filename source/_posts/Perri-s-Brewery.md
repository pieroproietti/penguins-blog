---
title: Perri's Brewery
layout: post
date: 2021-02-06 12:57:00
---

[Perri's Brewery](perrisbrewery.jpg)

Per lo sviluppo di eggs ho utilizzato dal principio il linguaggio javascript, cercando di limitare il più possibile la scrittura di codice bash. Col il tempo sono poi passato a typescript che, a mio avviso, offre una migliore pulizia, maggior controllo sul sorgente e la possibilità di avere un ottimo aiuto durante la scrittura del codice con suggerimenti e quant'altro.

eggs ha poi iniziato a camminare da solo e mi sono reso conto delle problematiche degli utenti che, spesso, non avevano nodejs installato e nessuna intenzione di farlo. Qu

Nodejs, oltre ad essere versabile nell'ambito web, offre la possibilità di realizzare con uno sforzo relativo delle applicazioni a riga di comando. Inizialmente lo utilizzavo senza altre aggiunte, da un anno o due ho cominciato ad utilizzare [oclif](https://oclif.io/) per la struttura di eggs.

Si risparmia molto tempo e vi sono possibilità che, inizialmente manco uno si sogna.

Tra queste, l'automazione delle istruzioni sul README.md che poi sono riuscito ad includere anche nella versione del manuale con pagina man ed il fatto che è possibile esportare il programma non solo come pacchetto npm ma con diversi formati, tra cui quello che mi interessa il formato debian.

Naturalmente non si può pretendere tutto ed uno strumento che crea pacchetti per debian, macos e windows! L'esporatione del pacchetto debian non prevede - al momento - gli script di pre e post installazione, così come quelli di pre e post rimozione. Inoltre, e la cosa avrebbe fatto comodo in particolare per eggs, non prevede la presenza di dipendenze nel pacchetto.

# L'idea

Proveniendo da un altro mondo, avrei preferito un mondo nel quale nodejs sia adottato allo stesso modo di Python per la realizzazione di script ed applicazioni, ma memore di clipper che pure includeva se stesso negli eseguibili generati ho cominciato a rilasciare eggs anche come pacchetto debian con buona soddisfazione degli utenti. Ancora

A questo punto, mi sono scontrato però con alcune problematiche del pacchetto rilasciato, non conoscevo ne' la struttura e nemmeno tutto sommato come veniva fuori se non a grandi linee. Con la collaborazione di un tester esperto mantainer ho cominciato a ricevere suggerimenti ed astruse - per me - richieste. Fino che, ad un certo punto, un altro sviluppatore mi ha chiesto se potevo aggiungere uno script ad eggs per eseguire alcuni passaggi - soprattutto rimozione del codice precedente - di eggs stesso. Una

Ed ho pensato di spacchettare il pacchetto debian e vedere che cosa c'era dentro!

Da quello che ho capito la pacchettizzazione con [oclif/dev-cli](https://github.com/oclif/dev-cli) avviene abbastanza semplicemente, è presente una directory DEBIAN con dentro il solo file control e mancano completamente i file preinst, postinst, prerm e postrm chiamati all'atto di installazione/aggiornamento/rimozione del pacchetto.

Ho pensato di aggiungerli e, dopo un po' di tentativi con bash, sono tornato al mio strumento preferito e, tutto sommato in poche righe ho codificato una grossa utilità.

Da questo momento, in poi, eggs sarà sempre pacchetizzato con il controllo delle dipendenze e gli script di installazione rimozione.

E mi costa pure poco e permette di rispettare una promessa, che quasi un anno fa m'ero fatto.

Per cui, prima del rilascio di eggs, ogni volta passeremo nella Perri's brewery, e via, in volo!

![Perri's Brewery](perrisbrewery2.jpg)



