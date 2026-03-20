---
authors: pieroproietti
slug: emergendo-dal-caos
title: "Emergendo dal caos"
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# La Tesi mancante: L’Area di Broca come Transformer e la Geometria delle Pulsioni

### Di Piero Proietti (penguins-eggs.net)
**Un ponte tra le lezioni di AI seguite nel 1996 con il mitico Prof. Eliano Pessa e la rivoluzione dei Large Language Models.**

# Emergendo dal Caos: La Nascita della Conoscenza in un Modello da 175B

### Preludio: Dialogo sull'Informazione Dinamica
*Bari, primi anni '90. Una caserma dell'Aeronautica Militare. L'Ufficiale, appassionato di informatica, e l'Aviere semplice, un ricercatore di matematica prestato al servizio in mensa, siedono a un tavolo con due birre.*

**L'Ufficiale:** Riflettevo sull'impatto dei computer nella storia umana. Credo sia una rivoluzione pari alla stampa di Gutenberg. In un certo senso, segnerà il confine tra una sorta di medioevo tecnologico e una nuova età moderna. L'accesso globale ai dati cambierà tutto.

**L'Aviere:** *(Prende un sorso di birra, pensieroso)* Gutenberg... capisco il paragone. Sembra una grande cosa, ma temo sia inesatto.

**L'Ufficiale:** Inesatto? Gutenberg ha cambiato il mondo.

**L'Aviere:** Certo, ma ha cambiato la *distribuzione*, non la sostanza. L'informazione scritta era statica prima della stampa a caratteri mobili, ed è rimasta statica dopo. Un libro di carta, che sia copiato a mano o stampato, non interagisce con te. Ripete sempre la stessa cosa.

**L'Ufficiale:** E l'informatica cosa sarebbe, allora?

**L'Aviere:** È molto di più. È l'equivalente dell'invenzione della scrittura stessa. Perché l'informazione che stiamo iniziando ad avere per le mani ora non è statica. È *dinamica*. Elabora, muta, reagisce. È una materia completamente nuova.

* * *

Quella sera non compresi appieno la portata di quelle parole. Di lì a poco, l'Aviere mi regalò un tomo imponente intitolato *Gödel, Escher, Bach: un'eterna ghirlanda brillante*. Incuteva un tale timore reverenziale che trovai il coraggio di aprirlo e leggerlo solo molto tempo dopo, a seguito del mio trasferimento a Roma. Si rivelò il libro migliore che avessi mai letto.

Le nostre strade, purtroppo e per colpa mia, si divisero. Ma oggi, addentrandomi nei meandri delle intelligenze artificiali generative, quella vecchia profezia sull'informazione dinamica mi appare con una lucidità abbacinante. Questo articolo esplora proprio l'essenza di quella profezia. E chissà che, affidando questo ricordo alla rete, il "Postino" non recapiti il messaggio fino a lui, facendoci rintracciare.

* * *

Nel precedente capitolo abbiamo visto come il "Postino" (il sistema di inferenza) recapiti i messaggi attraverso il labirinto dei layer. Ma una domanda sorge spontanea: come fa quel labirinto a sapere dove andare? Da dove arriva la "bussola" che permette a un ammasso di silicio e numeri di distinguere una mela da un’astronave?

La risposta è affascinante e brutale: all'inizio, **non c’è nulla**.

### Il "Big Bang" Casuale
Immaginate un modello da 175 miliardi di parametri un istante prima di iniziare l'addestramento. Esiste la struttura (i 96 piani del palazzo, le 12.288 dimensioni per vettore), ma è abitata dal caos. Gli **Embedding** (le coordinate iniziali delle parole) sono punti sparsi a caso in un vuoto multidimensionale. I **Pesi** delle matrici, i "muscoli" del ragionamento, sono solo rumore statistico.

In questo stato, il modello è una *tabula rasa*. Se gli chiedeste di completare la frase *"Il gatto mangia il..."*, potrebbe rispondere con un carattere casuale, un simbolo matematico o una parola senza senso. Non c'è logica, solo entropia.

### La Scolpitura del Significato: La Backpropagation
L'apprendimento non è un processo di "programmazione" nel senso classico. Nessun essere umano spiega al modello che un gatto è un felino. Il significato "emerge" dal caos attraverso la lettura di trilioni di parole, spinto da un unico imperativo: **minimizzare l'errore di previsione**.

Qui entra in gioco la **Backpropagation**, il vero metabolismo dell'intelligenza artificiale. È un ciclo incessante che si ripete miliardi di volte:

1.  **Il Tentativo (Forward Pass):** Il modello legge una frase interrotta e prova a indovinare la parola successiva. All'inizio sbaglia quasi sempre.
2.  **Il Segnale di Errore (Loss Function):** Il sistema confronta la sua risposta errata con il testo reale. Più l'errore è grande, più forte è la "scossa" matematica che attraversa il sistema.
3.  **La Correzione (Backward Pass):** Questo segnale di errore torna indietro attraverso i 96 layer. Grazie al calcolo dei gradienti, il modello capisce esattamente quali pesi hanno causato l'errore e li corregge di una frazione infinitesimale.

### ID vs Embedding: L'Etichetta e il Concetto
Per capire davvero come il modello impara, dobbiamo sfatare una confusione comune: la differenza tra il "nome" di una parola e il suo "senso". Il sistema gestisce questa distinzione separando l'**ID** (l'indice numerico nel vocabolario) dall'**Embedding** (il vettore di significato). È la differenza tra l'etichetta su un cassetto e il suo contenuto.

| Caratteristica | L'ID (Il Token) | L'Embedding (Il Vettore) |
| :--- | :--- | :--- |
| **Natura** | Numero intero univoco (es. `4502`). | Sequenza di 12.288 numeri decimali. |
| **Ruolo** | È l'**etichetta** o l'indirizzo del cassetto. | È il **contenuto** semantico del cassetto. |
| **Origine** | Statica: definita prima del training dal Tokenizer. | Dinamica: "scolpita" dall'esperienza e dai dati. |
| **Relazione** | Arbitraria: gli ID 4501 e 4502 non sono simili. | Geometrica: vettori vicini sono sinonimi. |
| **Esempio** | *"Sei il numero 4502 della lista."* | *"Sei un felino, piccolo, morbido e domestico."* |

Se il significato fosse "scritto" a fuoco dentro l'ID, il modello sarebbe rigido. Lasciando l'ID come un semplice puntatore a una riga di numeri, la Backpropagation è libera di spostare quel significato nello spazio multidimensionale, scoprendo connessioni e sfumature che noi umani non sapremmo nemmeno quantificare.

### La Geometria della Verità e l'Un-embedding
Miliardo dopo miliardo di iterazioni, accade il miracolo. Gli Embedding si muovono. Le parole che appaiono in contesti simili iniziano a gravitare l'una verso l'altra per pura necessità statistica. 

Alla fine del viaggio, il token in uscita dal 96° piano è un vettore "saturato" di contesto. Non è più una parola del dizionario, ma un "concetto astratto". A questo punto avviene l'**Un-embedding**: il modello prende questo concetto e lo proietta contro tutta la sua cassettiera di 100.000 vettori. Misura la distanza matematica, seleziona il cassetto geometricamente più simile e, solo a quel punto, ne legge l'etichetta (l'ID) per scrivere la parola sullo schermo.

### Epilogo: Il Setaccio Semantico
Quello che chiamiamo "Intelligenza Artificiale" è in realtà il sedimento di questo immenso processo di correzione continua. 

Ho avuto la fortuna, in passato, di frequentare le lezioni di Eliano Pessa, pioniere nello studio dei sistemi complessi e delle reti neurali. Un genio assoluto che, dietro l'inconfondibile impermeabile sgualcito alla "Tenente Colombo", nascondeva intuizioni folgoranti. Pessa parlava di un "setaccio semantico": spiegava come, in un sistema complesso, il rumore non sia un difetto, ma l'energia necessaria a far emergere il significato. Proprio come i continui sobbalzi di un setaccio impediscono alla materia di incastrarsi e favoriscono la divisione tra il materiale grezzo e quello fine.

Oggi, l'addestramento stocastico di questi giganti da 175 miliardi di parametri fa esattamente questo: agita e scuote incessantemente il caos dei dati iniziali. I sobbalzi matematici distruggono la memorizzazione superficiale e lasciano sedimentare, sul fondo del setaccio, solo i legami semantici profondi. 

Siamo passati dal caos dei numeri casuali a una cattedrale di relazioni geometriche. Non perché qualcuno abbia programmato le regole del linguaggio, ma perché la rete, scossa da trilioni di errori, ha letteralmente "sentito" la forma della nostra conoscenza. È l'informazione dinamica che prende vita.

---

### Bibliografia Essenziale
* **Hofstadter, D. R. (1979).** *"Gödel, Escher, Bach: un'eterna ghirlanda brillante"*. Adelphi. (L'opera somma sull'emergenza del significato dai sistemi formali).
* **Vaswani, A., et al. (2017).** *"Attention Is All You Need"*. Il paper fondamentale sull'architettura Transformer.
* **Goodfellow, I., Bengio, Y., & Courville, A. (2016).** *"Deep Learning"*. MIT Press. (Capitoli su Backpropagation e gradienti).
* **Brown, T. B., et al. (2020).** *"Language Models are Few-Shot Learners"*. Il documento tecnico di OpenAI sull'addestramento di GPT-3.
* **Mikolov, T., et al. (2013).** *"Efficient Estimation of Word Representations in Vector Space"*. Studio seminale sugli Embedding.