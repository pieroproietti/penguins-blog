---
authors: pieroproietti
slug: google-antigravity-experience
title: 'La nostra esperienza con Google Antigravity'
lang: it
comments: true
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Collaborare con un'Intelligenza Aliena: Google Antigravity

In questi giorni ho avuto modo di provare un nuovo strumento straordinario: **[Google Antigravity](https://antigravity.google/)**. 

Non è il solito assistente AI che completa le righe di codice; è un vero e proprio collaboratore autonomo ("agentic") capace di navigare l'intero progetto, comprendere il contesto e agire con precisione.

Non ho termini di paragone con altri prodotti di ChatGPT, Claude, DeepSeek ed altro, semplicemente non li ho ancora provati così a fondo, Di [Claude code](https://claude.com/product/claude-code) si parla molto bene, ma ha i suoi costi.

Usando l'agente supera lo scoglio della limitazione del contesto ed è possibile richiedere modifiche strutturali o adattare automaticamente il sorgente a nuove versioni di pacchetti impiegati, etc.

## Cosa abbiamo fatto insieme

Insieme, abbiamo affrontato diverse sfide nel codebase di `penguins-eggs`:
1. **Aggiornamento dei pacchetti js**: nel tempo - penguins-eggs esiste da parecchi anni - i pacchetti si evolgono. Spesso l'operazione è semplice, ma a volte cambia anche la semantica, le inclusioni, etc. Rischiare di sfasciare tutto è stato il mio cruccio per molto tempo, sino a quando non ho trovato Antigravity che, conoscendo sia la vecchia versione del pacchetto che la nuova, adatta automaticamente il codice e, se sbaglia, lo ripete.
2.  **Refactoring Profondo**: Abbiamo pulito il codice, cercando di uniformare le variabili, sistemando le esportazioni e standardizzando la concatenazione dei percorsi usando `path.join`. Si poteva fare a mano? Si, ma ci sarebbe voluto molto più tempo.
3.  **Aggiornamento Documentazione**: Antigravity ha analizzato la struttura attuale del progetto (inclusi i cambiamenti nella directory `NEST`) e ha aggiornato di conseguenza la documentazione (`[THE-NEST.md](https://github.com/pieroproietti/penguins-eggs/blob/master/DOCS/THE-NEST.md)`, `[SOURCE.md](https://github.com/pieroproietti/penguins-eggs/blob/master/DOCS/SOURCE.md)`), assicurando che riflettesse la realtà del codice.
4.  **Gestione delle Dipendenze**: Abbiamo aggiornato i workflow di GitHub per utilizzare Node.js 22, allineandoci agli standard più recenti.
5.  **Debugging Intelligente**: Abbiamo indagato su problemi complessi, come quelli relativi alla configurazione di `initrd` per CachyOS e la gestione dei percorsi ISO.
5. **Documentazione** non ho cambiato molto, ma tutti i [documenti](https://github.com/pieroproietti/penguins-eggs/tree/master/DOCS) dentro la repository sono stati allineati allineati al codice aggiornato. ed è inutile sottolineare che la AI ha una memoria migliore della mia!
6. **Aggiornamento blog**, l'appetito vien mangiando: anche questo scritto è stato realizzato con l'AI, ovviamente letto ed integrato dall'autore in più passaggi.

Tutto questo in una sola settimana di lavoro ed **erano mesi** che mi rifiutavo di aggiornare i pacchetti npm per timore di rompere il codice, nonchè tutto il resto.

## L'Esperienza "Agentic"

La differenza sostanziale rispetto a tool precedenti è la modalità "Agentic". Antigravity non si limita a rispondere a una domanda; prende in carico un **compito**. Pianifica, ricerca nel filesystem, propone modifiche, le verifica e (se autorizzato) le applica.

È come avere un pair programmer instancabile, che conosce a memoria la documentazione e non si dimentica mai di aggiornare un riferimento o un import.

Insomma, lo possiamo considerare un "coautore" del progetto, almeno da quest'anno in poi. Certamente partire da una base stabile ed avere come altro coautore l'umano che ha creato la base aiuta, ma - forse - non è indispensabie.

Chissà che in futuro non mi faccia fuori!

## Conclusione

L'integrazione di strumenti come Google Antigravity nel flusso di lavoro di `penguins-eggs` è un passo avanti notevole. Nel mentre permette di concentrarci sulle scelte architetturali e creative, lasciando all'AI il compito di mantenere il codice pulito, coerente e ben documentato.

Inoltre - e non è uno scherzo - potrebbe essere più semplice per un nuovo sviluppatore salire a bordo, provare per così dire a "smanettare". 

Ad ogni modo lo sviluppo open source è sempre più collaborativo e da quest'anno i nostri collaboratori non devono per forza essere solamente umani.

Un abbraccio a tutti umani e non.

