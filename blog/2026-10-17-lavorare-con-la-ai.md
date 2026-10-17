---
title: "Lavorare con la AI"
authors: pieroproietti
tags: [AI, Linux, penguins-eggs, antirez, Linus Torvalds]
description: "Riflessioni sul lavoro quotidiano a quattro mani con l'intelligenza artificiale: tra l'entusiasmo cieco e il rifiuto ideologico, la via pragmatica dell'artigiano del software, ascoltando antirez e Linus Torvalds."
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Questo post nasce al termine di un pomeriggio passato a limare la documentazione di `penguins-eggs`, `penguins-gui` e la pagina principale del sito insieme alla AI.

Non stavamo scrivendo un nuovo modulo in C o in Go, né stavamo risolvendo un bug del kernel: stavamo facendo quel lavoro silenzioso di rifinitura su parole, titoli e pulsanti che fa la differenza tra un progetto buttato lì e uno strumento accogliente per chi arriva da fuori. Ed è proprio in queste pieghe apparentemente piccole che si capisce cosa significhi davvero, oggi, **lavorare con la AI**.

<!-- truncate -->

## L'esperienza sul campo: velocità, tic e senso della misura

La AI aveva aiutato a stendere in tempi rapidissimi una mole impressionante di documentazione tecnica, coprendo ogni pacchetto di `coa`, il motore `oa`, `penguins-chef` e `penguins-gui`. Tecnicamente non mancava nulla. Eppure, rileggendola con calma da essere umano — e da utente — qualcosa stonava:

- **I titoli con le Maiuscole su Ogni Parola:** un classico tic ereditato dall'inglese (*Title Case*). In inglese si scrive così; in italiano no, appesantisce la pagina e sa subito di traduzione meccanica.
- **Le metafore che prendono la mano:** nei manuali avevamo definito `penguins-gui` come *"il sensore grafico"*. Dal punto di vista interno di `eggs`, il ragionamento filava pure: la CLI è il motore e la GUI raccoglie il nostro input. Ma provate a mettervi nei panni di un utente normale che cerca un programma per il proprio desktop e si trova davanti un *"sensore grafico"*: la faccenda diventa contorta. Un utente si aspetta semplicemente **l'interfaccia grafica desktop**.
- **Gli aggettivi di troppo:** *"la triade organica"* quando basta — ed è molto più forte — *"la triade"*; *"dalla sorgente all'uovo"* nella guida rapida, che fa subito pensare al codice sorgente da compilare anziché al partire da un sistema già installato per arrivare alla ISO live; oppure i pulsanti `Quickstart GUI` e `Quickstart CLI` sulla home page che sul monitor del PC stavano benissimo, ma sullo schermo del telefonino sbordavano, mentre accorciandoli in `GUI` e `CLI` (con un semplice tooltip e l'aggiunta del tasto `Video`) tutto torna a respirare.

C'è stato un momento significativo durante la sessione: appena ho fatto notare che *"sensore grafico"* suonava contorto, la AI è partita in quarta per sostituirlo al volo in tutti i file. L'ho fermata: *«Non ti chiedo di cambiarlo subito, ma di leggere la pagina e ragionare insieme su un termine più adatto»*.

Eccolo, il punto. La AI è velocissima, instancabile nel tenere sincronizzati decine di file, `sidebars.js`, `llms.txt` e le regole in `AGENTS.md`. Ma non ha un telefonino in mano, non prova quel piccolo fastidio davanti a una maiuscola fuori posto o a una metafora troppo compiaciuta. **Il gusto, il senso del limite e la capacità di togliere anziché aggiungere restano un mestiere umano.**

## Tra tifoserie opposte: la lezione di antirez e Linus Torvalds

Guardando quello che sta succedendo nel mondo del software in questi mesi, si assiste spesso a una polarizzazione quasi calcistica. Da una parte c'è chi annuncia ogni settimana la fine dei programmatori, convinto che basti chiedere a un modello di generare migliaia di righe alla cieca senza nemmeno sapere cosa ci sia sotto il cofano; dall'altra c'è il rifiuto preconcetto, quasi ideologico, di chi vede nella AI solo fumo, inquinamento del codice o una minaccia all'artigianato informatico.

Proprio oggi ascoltavo [questo vlog di Salvatore Sanfilippo (antirez)](https://www.youtube.com/watch?v=wDinQnn9mUw), di cui ammiro profondamente la lucidità e di cui condivido in pieno le idee sulla AI, in cui commenta la posizione di **Linus Torvalds**.

<iframe width="100%" height="420" src="https://www.youtube.com/embed/wDinQnn9mUw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

Quello che emerge dalle riflessioni di **antirez** e dall'atteggiamento di **Linus Torvalds** è una boccata d'aria fresca rispetto al rumore di fondo: è il **pragmatismo di chi il software lo costruisce davvero**.

Torvalds non ha mai giudicato la tecnologia per moda o per ideologia, ma per quello che produce sul ferro e per la qualità del risultato. E antirez lo mostra da tempo con il suo lavoro quotidiano: l'intelligenza artificiale non è né un oracolo infallibile a cui delegare il pensiero, né un nemico da esorcizzare. È uno strumento formidabile — probabilmente il più grande amplificatore intellettuale che ci sia capitato tra le mani — ma proprio perché è così potente **richiede ancora più padronanza, spirito critico e "buon gusto" (*good taste*) da parte di chi guida**.

Se non conosci l'architettura del tuo sistema, la AI ti porterà fuori strada a una velocità impressionante. Se invece sai dove vuoi andare, conosci il metallo su cui poggi i piedi e non rinunci a leggere, discutere, correggere e potare, allora una singola persona può affrontare ristrutturazioni, test multi-distribuzione e documentazioni che un tempo avrebbero richiesto un'intera squadra.

## Chi tiene il timone

In `penguins-eggs` abbiamo adottato la metafora della **mente** (`coa`) e del **braccio** (`oa`). Nel lavoro di tutti i giorni tra sviluppatore e intelligenza artificiale, i ruoli si scambiano e si completano di continuo: a volte la AI ti aiuta a sbrogliare un problema complesso o a fare da cassa di risonanza per un'idea; altre volte è il braccio velocissimo che passa in rassegna tutto il repository in pochi secondi.

Ma la rotta, la scelta delle parole, la responsabilità di ciò che finisce in un commit e il piacere stesso di costruire qualcosa che funzioni e sia chiaro per gli altri, quelli restano nostri. Ed è giusto e bello che sia così.

Forse, la condanna è rileggere, magari tornarci sopra dopo una bella dormita. 

Ma è spettacolare, non avrei mai scritto questo testo dopo un pomeriggio e forse una mattina a rileggere e correggere il tutto.

Forse, alla fine, è un lavoro collettivo: partecipa chi legge. decodifoca ed apprezza lo scritto o meno, ne prende una parte, il tutto o un'idea e lo trasperta in un altro contesto.

O mi maledice :-D
