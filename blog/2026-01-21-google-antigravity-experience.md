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

In questi giorni ho avuto modo di provare un nuovo strumento straordinario: **Google Antigravity**. Non è il solito assistente AI che completa le righe di codice; è un vero e proprio collaboratore autonomo ("agentic") capace di navigare l'intero progetto, comprendere il contesto e agire con precisione.

Non ho termini di paragone con altri prodotti AI, come ChatGPT, Claude ed altro, non li ho mai provati estensivamente come questo.

Si supera lo scoglio del contesto ed è possibile richiedere modifiche strutturali o modificare il sorgente per aderire a nuove versioni di pacchetti impiegati, etc.

## Cosa abbiamo fatto insieme

Insieme, abbiamo affrontato diverse sfide nel codebase di `penguins-eggs`:
1. **Aggiornamento dei pacchetti js**: nel tempo - penguins-eggs esiste da parecchi anni, i pacchetti si evolgono. Spesso l'operazione è semplice, ma a volte cambia anche la semantica, le inclusioni, etc. Rischiare di sfasciare tutto è stato il mio cruccio per molto tempo, sino a quando non ho trovato Antigravity.
2.  **Refactoring Profondo**: Abbiamo pulito il codice, sistemando le esportazioni in `classes/incubation/fisherman-helper/settings.ts` e standardizzando la concatenazione dei percorsi usando `path.join` per migliorare la compatibilità.
3.  **Aggiornamento Documentazione**: Antigravity ha analizzato la struttura attuale del progetto (inclusi i cambiamenti nella directory `NEST`) e ha aggiornato di conseguenza la documentazione (`THE-NEST.md`, `SOURCE.md`), assicurando che riflettesse la realtà del codice.
4.  **Gestione delle Dipendenze**: Abbiamo aggiornato i workflow di GitHub per utilizzare Node.js 22, allineandoci agli standard più recenti.
5.  **Debugging Intelligente**: Abbiamo indagato su problemi complessi, come quelli relativi alla configurazione di `initrd` per CachyOS e la gestione dei percorsi ISO.
5. **Documentazione°° Non ho cambiato molto, ma tutti i documenti dentro la repository sono stati aggiornati e, soprattutto, allineati al codice attuale. Inutile dire che la AI ha una memoria migliore della mia, spesso dimentico.
6. **Aggiornamento blog**: L'appetito vien mandiando, anche quasto scritto è stato realizzato con l'AI, letto ed ampliato dall'autore.

Tutto questo in una sola settimana di lavoro, **erano mesi** che mi rifiutavo di aggionare i pacchetto per timore di rompere il codice.

## L'Esperienza "Agentic"

La differenza sostanziale rispetto ad altri tool è la modalità "Agentic". Antigravity non si limita a rispondere a una domanda; prende in carico un **compito**. Pianifica, ricerca nel filesystem, propone modifiche, le verifica e (se autorizzato) le applica.

È come avere un pair programmer instancabile, che conosce a memoria la documentazione e non si dimentica mai di aggiornare un riferimento o un import.

## Conclusione

L'integrazione di strumenti come Google Antigravity nel flusso di lavoro di `penguins-eggs` è un passo avanti notevole. Ci permette di concentrarci sulle scelte architetturali e creative, lasciando all'AI il compito di mantenere il codice pulito, coerente e ben documentato.

Il futuro dello sviluppo open source è sempre più collaborativo, e i nostri collaboratori non devono per forza essere umani. 🐧🤖
