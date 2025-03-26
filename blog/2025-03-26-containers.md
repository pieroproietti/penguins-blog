---
authors: pieroproietti
slug: containers
title: container
lang: it
comments: true # giscus
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Era da molto tempo che Sebastien, un mio amico canadese, mi sollecitava di lavorare con i containers. 

Per qualche anno mi sono chiesto che significato potesse avere, in qualche modo mi ero creato eggs che mi replicava quali con la stessa semplicità sistemi completi, perchè usare dei container?

Il mio lavoro, è molto ristretto, contrariamente a quanto si può supporre non conosco Linux come le mie tasche, o meglio, forse si dato che ogni tanto perdo qualcosa... Ma bando alle ciance, studiare un argomento nuovo e complesso senza sapere manco dove di va a parare con tutti i problemi di aggiornamento che penguins-eggs, in bene o male comporta, era abbastanza lontano dalle mie intenzioni.

Poi, giusto una settimana fa mi scrive nel gruppo tal `gnuhub` chiedendomi come creare il pacchetto Debian di eggs. Uno si aspetta un utente normale, gli rispondo ed il giorno dopo gli chiedo come era andata, se era riuscito.

Ecco, da questo "incontro" sta nascendo una nuova generazione di penguins-eggs, capace di produrre una ISO Arch da un sistema Debian o Ubuntu. Per il futuro sarà possibile anche il cosidetto "viceverso" ovvero creare da  Arch o Ubuntu, una ISO Debian o altro tra le distro che saranno supportate.

Si va bene, un bel capitombolo, ma a che serve?

Serve a molto, ed ancora non ne scopro i limiti, innanzitutto ad avere delle CI su github che costruicano le ISO ad ogni commit e tracciano gli eventuali errori.

Provate a consultare questo [link](https://github.com/pieroproietti/penguins-eggs/actions) e divertitevi a vedere come una immagine venga creata e rimasterizzata in background con penguins-eggs.

Questo, naturalmente, è anche un ottimo sistema di debug.

Ringrazio molto [gnuhub](https://github.com/gnuhub) al secolo Wang Stallman, per avermi indicato la strada. 

![](/img/github-ci.png)