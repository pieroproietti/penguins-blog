---
authors: pieroproietti
slug: autocomplete
title: autocomplete
lang: en
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

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

E' anche possibile visualizzare tutti i flags disponibili per un comando dato:

```
artisan@demo:~$ eggs  produce --
--adapt     --fast      --ichoice   --script    --yolk      
--basename  --final     --pve       --theme     
--compress  --help      --rsupport  --verbose   
artisan@demo:~$ eggs  produce --
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

## Installazione di autocomplete per tutti gli utenti

Per utilizzare l'autocomplete di eggs per tutti gli utenti e, quindi, anche per l'utente live del liveCD, occorre copiare il file ~/.cache/penguins-eggs/autocomplete/functions/bash/eggs.bash in /etc/bash_complete.d:
```
sudo cp ~/.cache/penguins-eggs/autocomplete/functions/bash/eggs.bash /etc/bash_complete.d
```

A questo punto eggs autocomplete sarà disponibile per tutti gli utenti.

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

It is also possible to display all available flags for a given command:


```
artisan@demo:~$ eggs  produce --
--adapt     --fast      --ichoice   --script    --yolk      
--basename  --final     --pve       --theme     
--compress  --help      --rsupport  --verbose   
artisan@demo:~$ eggs  produce --
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

## Installing eggs autocomplete for all users

To use the eggs autocomplete for all users and, therefore, also for the live user of the liveCD, you need to copy the file ~/.cache/penguins-eggs/autocomplete/functions/bash/eggs.bash in /etc/bash_complete.d:
```
sudo cp ~/.cache/penguins-eggs/autocomplete/functions/bash/eggs.bash /etc/bash_complete.d
```

At this point eggs autocomplete will be available for all users.


# Portuguese (BR)

![portugues](/images/flags/portugues.png)

## Autocompletar e comando não encontrado

Uma aplicação de linha de comando moderna contém duas características úteis, o autocompletar e o comando não encontrado aviso, seguido pela sugestão do comando mais próximo.

Eggs desde a versão 7.7.0 contém ambas as características, graças aos plugins oclif-dev com os quais é desenvolvido.

O resultado do autocompletar é que a digitação eggs seguida por duas abas mostrará as opções disponíveis. 


```
artisan@demo:~$ eggs 
adapt           help            remove          tools:skel
autocomplete    info            tools:clean     tools:yolk
calamares       install         tools:initrd    update
export:deb      kill            tools:locales   
export:docs     prerequisites   tools:pve       
export:iso      produce         tools:sanitize  
```
durante a digitação 

```
eggs pr
```

seguido de tabulação, as opções possíveis serão mostradas:

```
artisan@demo:~$ eggs  pr
prerequisites  produce        
artisan@demo:~$ eggs  pr
```
E assim por diante para todos os comandos.


Por outro lado, se o comando não encontrado detecta um comando desconhecido, ele sugerirá o comando mais próximo.

```
artisan@demo:~$ eggs priduce
 ›   Warning: priduce is not a eggs command.
Did you mean produce? [y/n]: 
```

Também é possível exibir todas as bandeiras disponíveis para um determinado comando:

```
artisan@demo:~$ eggs  produce --
--adapt     --fast      --ichoice   --script    --yolk      
--basename  --final     --pve       --theme     
--compress  --help      --rsupport  --verbose   
artisan@demo:~$ eggs  produce --
```

## Instalando o autocompletar para o usuário atual

Para aproveitar o recurso de autocompletar, tudo o que precisamos fazer é gerar os arquivos de configuração, comandar 

```
eggs autocomplete bash
```

Que mostrará a seguinte tela:

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

copie o código para adicionar o autocompletar ao seu perfil .bashrc


```
printf "$(eggs autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc
```

e o execute a partir do terminal.

Agora digite eggs seguidos de duas abas e está pronto!


## Instalação eggs autocomplete para todos os usuários

Para utilizar os eggs autocomplete  para todos os usuários e, portanto, também para o usuário vivo do liveCD, é necessário copiar o arquivo 
 ~/.cache/penguins-eggs/autocomplete/functions/bash/eggs.bash in /etc/bash_complete.d:

```
sudo cp ~/.cache/penguins-eggs/autocomplete/functions/bash/eggs.bash /etc/bash_complete.d
```

Neste momento, os eggs autocomple estarão disponíveis para todos os usuários.

