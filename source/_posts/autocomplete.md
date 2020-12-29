---
title: autocomplete
layout: post
date: 2020-12-29 09:08:21
---

# Italiano
![italiano](/images/flags/italian.webp)

## Autocomplete e command not found

Una moderna applicazione cli contiene due utili funzioni, l'autocomplete e l'avvertimeno di comand not found, seguito dal suggerimento del comando più vicino.

eggs a partire dalla versione 7.7.0 contiene entrambe le casatteristiche, grazie ai plugin di oclif-dev con il quale è sviluppato.

Il risultato di autocomplete è che digitango eggs seguito da due tab, vi verranno esposte le opzioni disponibili. 

```
artisan@demo:~$ eggs 
adapt           help            remove          tools:skel
autocomplete    info            tools:clean     tools:yolk
calamares       install         tools:initrd    update
export:deb      kill            tools:locales   
export:docs     prerequisites   tools:pve       
export:iso      produce         tools:sanitize  
```

digitando eggs pr seguito da tab, verranno mostrate le possibili opzioni produce e prerequisites e così via per tutti i comandi.

D'altra parte la funziona command not found se rileva in ingresso un comando sconosciuto, ci suggerirà il comando più vicino.

## Installazione di autocomplete per l'utente corrente

Per beneficiare della funzione autocomplete, tutto quello che dobbiamo fare è generare i file di configurazione, comando 

```eggs autocomplate```

copiare la scritta suggerita

```printf "$(eggs autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc```

e lanciarla da terminale.


