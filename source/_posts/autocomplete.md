---
title: autocomplete
layout: post
date: 2020-12-29 09:08:21
---

![autocomplete](/images/autocomplete.png)

# Index
* [Italiano](#Italiano)
* [English](#English)
* [Portuguese (BR)](#Portuguese-BR)


# Italiano
![italiano](/images/flags/italian.webp)

## Autocomplete e command not found

Una moderna applicazione cli contiene due utili funzioni, l'autocomplete e l'avvertimeno di comand not found, seguito dal suggerimento del comando più vicino.

eggs a partire dalla versione 7.7.0 contiene entrambe le caratteristiche, grazie ai plugin di oclif-dev con il quale è sviluppato.

Il risultato di autocomplete è che digitando eggs seguito da due tab, vi verranno esposte le opzioni disponibili. 

```
artisan@demo:~$ eggs 
adapt           help            remove          tools:skel
autocomplete    info            tools:clean     tools:yolk
calamares       install         tools:initrd    update
export:deb      kill            tools:locales   
export:docs     prerequisites   tools:pve       
export:iso      produce         tools:sanitize  
```

mentre, digitando 
```
eggs pr
```

seguito da tab, verranno mostrate le possibili opzioni:

```
artisan@demo:~$ eggs  pr
prerequisites  produce        
artisan@demo:~$ eggs  pr
```
 
E così via per tutti i comandi.

D'altra parte la funziona command not found se rileva in ingresso un comando sconosciuto, ci suggerirà il comando più vicino.

```
artisan@demo:~$ eggs priduce
 ›   Warning: priduce is not a eggs command.
Did you mean produce? [y/n]: 
```

## Installazione di autocomplete per l'utente corrente

Per beneficiare della funzione autocomplete, tutto quello che dobbiamo fare è generare i file di configurazione, comando 

```
eggs autocomplate bash
```

Che mostrerà la seguente schermata:

```
artisan@demo:~$ eggs autocomplete
Building the autocomplete cache... done

Setup Instructions for EGGS CLI Autocomplete ---

1) Add the autocomplete env var to your bash profile and source it
$ printf "$(eggs autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc

NOTE: If your terminal starts as a login shell you may need to print the init script into ~/.bash_profile or ~/.profile.

2) Test it out, e.g.:
$ eggs <TAB><TAB>                 # Command completion
$ eggs command --<TAB><TAB>       # Flag completion

Enjoy!

```

copiare il codice per aggiungere autocomplete al vostro profilo .bashrc

```
printf "$(eggs autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc
```

e lanciarla da terminale.

A questo punto digitate eggs seguito da due tab ed il gioco è fatto.

# English
![english](/images/flags/english.png)

## Autocomplete and command not found

A modern cli application contains two useful features, autocomplete and command not found warning, followed by the suggestion of the nearest command.

eggs starting from version 7.7.0 contains both features, thanks to oclif-dev plugins with which it is developed.

The result of autocomplete is that by typing eggs followed by two tabs, you will be shown the available options. 

```
artisan@demo:~$ eggs 
adapt           help            remove          tools:skel
autocomplete    info            tools:clean     tools:yolk
calamares       install         tools:initrd    update
export:deb      kill            tools:locales   
export:docs     prerequisites   tools:pve       
export:iso      produce         tools:sanitize  
```
while typing  

```
eggs pr
```

followed by tab, the possible options will be shown:

```
artisan@demo:~$ eggs  pr
prerequisites  produce        
artisan@demo:~$ eggs  pr
```

And so on for all commands.

On the other hand, the command not found function, if it detects an unknown command as input, will suggest the nearest command.

```
artisan@demo:~$ eggs priduce
 ›   Warning: priduce is not a eggs command.
Did you mean produce? [y/n]: 
```

## Installation of autocomplete for the current user

To benefit from the autocomplete feature, all we have to do is generate the configuration files. Command:
```
eggs autocomplate bash
```

That will show the following screen:

```
artisan@demo:~$ eggs autocomplete
Building the autocomplete cache... done

Setup Instructions for EGGS CLI Autocomplete ---

1) Add the autocomplete env var to your bash profile and source it
$ printf "$(eggs autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc

NOTE: If your terminal starts as a login shell you may need to print the init script into ~/.bash_profile or ~/.profile.

2) Test it out, e.g.:
$ eggs <TAB><TAB>                 # Command completion
$ eggs command --<TAB><TAB>       # Flag completion

Enjoy!

```

Copy the code to add autocomplete to your .bashrc profile

```
printf "$(eggs autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc
```

and launch it from the terminal.

At this point type eggs followed by two tabs and you're done.





# Portuguese (BR)

![portugues](/images/flags/portugues.png)
