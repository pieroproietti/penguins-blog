---
authors: pieroproietti
slug: customizzazione-del-desktop
title: Customizzazione del desktop
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Partiamo dal desktop standard ed andiamo a modificare, in maniera arbitraria sia lo sfondo che la posizione del menu portando il basso.
![desktop-custom](/images/matteo-customizzazione.png)


Se, però andiamo a creare un nuovo utente avremo però SEMPRE la configurazione di default.
![desktop-standard](/images/matteo-standard.png)

# Come modificare la configurazione di default

La configurazione di default in Linux risiede in /etc/skel ed è quindi qua che dobbiamo intervenire.

Abbiamo più strade:
* creare un clone, tutti gli utenti ed i dati verranno copiati; 
* copiare la home dell'utente configurato direttamente in /etc/skel;
* copiare in skel solo le modifiche necessarie alla nostra customizzazione.

# Creare un clone con eggs
Utilizzando in produce l'opzione --clone, le home degli utenti saranno salvate sulla iso e reinstallate con krill.
```
sudo eggs produce --fast --clone
```
Sicuramente la più semplice ed infallibile, lo svantaggio è che copia tutti i nostri dati. Si potrebbe, forse, creare un utente denominato skel ed aggiungere un parametro per clonare solo quello.

# Copiare tutto in /etc/skel
E' una soluzione un po' barbara ma ci può stare in alcuni casi. Semplicemente basterà un:
```
cp /home/artisan/* /etc/skel -R
```

# Copiare solo il necessario
eggs, sulla scia di remastersys possiede un comando ```eggs tools skel``` che permette la selezione dei file di customizzazione del desktop.

Questo è un problema abbastanza complesso, considerando che esistono numerosi desktop ed ognuno ha le proprie configurazioni. Per i più conosciuti però la situazione è abbastanza soddisfacente e, con il necessario feedback, può ancora migliorare.

Quindi dando: ```sudo eggs tools skel``` eggs selezionerà i file di xfce, kde o gnome a seconda del desktop presenete e li copierà in /etc/skel, evitando però  di copiare anche gli eventuali dati presenti nella home.

Ci possono però essere dei problemi, specie se si sono utilizzati icone ed background presenti solo nella home e non nelle directory canoniche: /usr/share/icons ed /usr/share/backgrounds.

# Mettere delle lezioni sul Desktop
In un caso come questo nel quale stiamo operando solo in italiano, si possono inserire le lezioni direttamente in /etc/skel/Scrivania, queste verrebbero copiate per ogni nuovo utente.

Anche qua, vale lo stesso discorso, si possono trovare soluzioni migliori solo con l’uso e l’esperienza. Ad esempio inserire le lezioni in una cartella come /usr/share/local/lezioni ed solo un link in /etc/skel/Scrivania ci risparmierrebbe copie multiple, ma questo è ben più valido per le icone ed i temi utilizzati - non di rado pesanti - a livello di occupazione disco.

# Conclusioni
Spero di essere stato abbastanza chiaro e che eggs possa esserti utile per l'installazione di Linux nelle scuole, per me sarebbe un grande onore rientrarci - in qualche modo - da "anziano" e, naturalmente, fonte di esperienze, suggerimenti e possibili collaborazioni.
