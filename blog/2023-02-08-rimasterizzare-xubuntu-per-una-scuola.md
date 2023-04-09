---
authors: pieroproietti
slug: rimasterizzare-xubuntu-per-una-scuola
title: Rimasterizzare xubuntu per una scuola
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions path="blog/rimasterizzare-xubuntu-per-una-scuola"/>

xubuntu 22.04 è una LTS e ben si presta, per la sua leggerezza, ad essere rimasterizzata ed utilizzata per installazioni multiple, come ad esempio una scuola.

Vediamo i passi.

# installazione di xubuntu sulla macchina madre

Poco da dire, ci si scarica la versione [xubuntu-22.04](https://cdimage.ubuntu.com/xubuntu/releases/22.04/release/) e la si installa con la normale procedura.

Una volta riavviata, si procede ad un aggiornamento totale, tramite:
```
apt update
apt full-upgrade
```

A questo punto si riavvia. Se si vuole una iso "più snella" si possono cancellare i kernel precedenti con ```sudo apt purge linux-image-5.0.15-x-generic``` dove al posto della x va messa la versione del kernel da rimuovere, rilevabile con un semplice ```ls /boot```.

Fate attenzione naturalmente a non rimuovere il kernel in uso, ma sarete comumque avvisati dal sistema.

Potete dare, sempre per maggiore "pulizia" anche un ```sudo apt autoremove```.

# installazione di eggs
La nostra macchine è stata aggiornata e riavviata. Procediamo con l'installazione di eggs che potete scaricate sulla pagina [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/DEBS/) di sourceforge.

Una volta scaricato eggs, procediamo all'installazione:
```
sudo dpkg -i eggs_9.3.23_amd64.deb
```

Vi usciranno degli errori per dipendenze non soddisfatte, basterà dare in comando:

```
sudo apt install -f
```

OK, a questo punto eggs è installato

# configurazione di eggs
eggs ha due helper: mom e dad.

eggs mom ci mostra tutti i comandi disponibili ed il link per sito, manuale e repository, mentre dad cura la configurazione.

![eggs-mom](/images/matteo-eggs-mom.png)

Si rimanda quindi al manuale, qua - in soldoni - date il comando:

```
sudo eggs dad -d
```

che vi configura eggs in modalità default.

# produzione della iso
Per creare la iso, utilizziamo eggs produce senza alcun flag, riservandoci di creare la iso con l'opzione --max solo quando saremo sicuri del risultato finale. Questo ci darà un grosso guadagno di tempo.

```
sudo eggs produce --addons adapt
```

Ho utilizzato qui anche ```--addons adapt```, questo addon crea semplicemente un link sul desktop per ridimensionare il monitor. E' utile e consigliato solo per iso che dovranno essere utilizzate su macchine virtuali.

eggs, poichè stiamo lavorando su una macchine con interfaccia grafica ci chiederà di installare calamares. Dato che vogliamo una iso installabile unattended possiamo anche evitare di installare calamares.

# installazione
Ottenuta la iso ed installata su una chiavetta usb, magari utilizzando [Ventoy](https://www.ventoy.net/en/index.html), possiamo passare all'installazione.

Avviamo, quindi da chiavetta e selezioniamo la seconda riga del boot per interfaccia CLI.

![boot cli](/images/matteo-boot-cli.png)

Come si può vedere ci siamo loggati automaticamente ed il sistema ci da le principali indicazioni: utente/password, password di root, indicazioni per l'installazione.

Passiamo senz'alto all'installazione, come detto la vogliamo unattended e, presumibilmente in italiano.

```
sudo eggs install --config it -n
```

Notate che se avessimo utilizzato:
```
sudo eggs install --unattended -n
```
la configurazione andrebbe su inglese/americano e, d'altra parte bisogna accontentare tutti!

Qualche minuto - forse uno o due - e l'installazione è finita. La macchina esegue autonomamente il reboot e si può accedere con l'user e la password indicati.

Normalmente user: artisan password: evolution, root password evolution.

L'host verrà denominato con lo stesso nome per tutte le installazioni e naturalmente questo è un problema in una rete. Per ovviare abbiamo la possibiltà di usare le opzioni --ip o --random che renderanno univoche le nostre installazioni.

# installazione dei restanti computer con PXE
Avviamo la iso sulla macchina che fungerà da server PXE e diamo il comando:

```
sudo eggs cuckoo
```

A questo punto avviamo gli altri computer via PXE

![boot cli](/images/matteo-pxe.png)

Il gioco è fatto!

# Abbreviamo la corsa...

Questa mattina, allo scopo di scrivere questo articolo ho aggiornato sia la versione di ubuntu che quella di xubuntu, aggiungendo a quest'ultima i pacchetti per la lingua italiana.

Potete trovare entrambe le iso sulla pagina [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/ISOS/ubuntu/jammy/).



