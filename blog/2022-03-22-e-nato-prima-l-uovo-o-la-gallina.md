---
authors: pieroproietti
slug: e-nato-prima-l-uovo-o-la-gallina
title: E' nato prima l'uovo o la gallina?
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions path="blog/e-nato-prima-l-uovo-o-la-gallina"/>


Quante volte da bambini ci siamo fatti questa domanda? Da grandi, forse abbiamo trovato anche la risposta: è nato prima l'uovo.

In questo caso, non stiamo parlando di biologia ma di sviluppo di software: eggs è un sistema di rimasterizzazione che consente di creare una live a partire da un sistema installato.

Hen, invece, la femmina del pinguino, è la macchina di sviluppo utilizzata per creare eggs.

Ed anche in questo caso, è nato prima l'uovo.

# penguin's eggs wardobe.d

Ultimamente sto sviluppando un sistema di customizzazioni dove tenere traccia ed automatizzare gli svariati passi che conducono ad una customizzazione.

Ho definito come wardrobe (guardaroba) l'armadio dove vengono custoditi e costumi di scena che l'uovo/pulcino - una volta installato - può indossare.

Così, se avviamo una configurazione naked, leggerissima, solo CLI e la installiamo con sudo eggs install (conosciuto anche come krill installer) otteniamo un sistema nudo che potrà essere customizzato in ogni direzione.

Il costume è appunto la customizzazione. Una sorta di riassunto dei passi che facciamo per creare e consolidare la nostra customizzazione.

Potremmo a partire dalla versione naked passare and una lamp, installando apache2, mysql e php, oppure installare una interfaccia grafica, come xfce3, kde, gnome o altre.

Sino a quando la nostra customizzazione non sarà spinta, diciamo che aggiungeremo solo delle nuove repository e, da queste, installeremo i pacchetti, il nostro costume sarà veramente leggero. Così leggero che le versioni minime di xfce4, kde e lamp le trovate direttamente nella "valigetta" di eggs. Ovvero, fuor di metafora sono comprese in eggs stesso e potrete passare da una versione naked and una con xfce attraverso il comando:
```
sudo eggs wardrobe wear --costume xfce4
```

Naturalmente è possibile anche vedere il contenuto di un costume, con il comando:
```
eggs wardrobe show --costume xfce4
```

e la lista dei costumi contenuti all'interno di eggs stesso:
```
eggs wardrobe list
```

# Scarichiamo un "armadio" più grande
Normalmente le nostre customizzazioni non sono solo semplici aggiunte di repositury e pacchetti, ma comprendono pure delle customizzazioni più profonde, necessitano di grafica, dischi immagine, etc.

Per questo, la nostra valigetta interna non basta, occorre un vero e proprio guardaroba: [penguins-eggs-wardrobe](https://github.com/pieroproietti/penguins-wardrobe).

Qui vedrete che ogni costume comprente una directory chiamata dirs che verrà sovrapposta alla radice del nostro sistema, andando a aggiornare/aggiungere qualsiasi file o configurazione - senza esagerare però - pur se ci troviamo all'interno di un sistema vergine e da configurare, sta tutto nelle nostre mani ed è possibile fare dei casini notevolissimi. D'altra parte, per customizzare, sovente, ci tocca andare a fondo e questa funzione è praticamente indispensabile.

Non solo il contenuto di dirs/ verrà copiato in /, ma il contenuto di /dirs/etc/skel verrà copiato come configurazione nella home dell'utente corrente, trascinandosi quindi tutte le nuove impostazioni. 

Ci sono casi in cui occorre anche portarsi dietro altro, un caso di questi sono i costumi gwaydroid e kwaydroid, in questo caso, all'interno sono presenti anche alcuni script per l'installazione dell'immagine Lineage-17.1 o da host nella nostra rete locale o liberamente scaricabile da sourceforge.

# bene, la nostra "gallina" è un costume!

hen la stazione di lavoro dalla quale "trasmetto" e sulla quale sviluppo eggs, è un costume!

Per installare il mio stesso sistema di sviluppo - icone e sfondi compresi - vi basta scaricare una versione naked di Debian, potete scegliere tra la stabile: bullseye e la unstable (bookworm), installare con il comando: sudo eggs install.

L'installazione è veramente semplice, utilizzando una TUI (Terminal User Interfaces) che sostanzialmente ricalca il funzionamento dell'installer calamares. Da questo nasce anche il nome dell'installer stesso che, viene denominato "krill".

Una volta riavviata la macchina, potete scaricare penguins-wardrobe con il comando: git clone https://github.com/pieroproietti/penguins-wardrobe e divertirvi ad assistere a diverse vestizioni del pinguino.

Con il comando eggs wardrobe list --wardrobe penguins-wardrobe potrete scoprire quali sono i vestiti disponibili, al momento tre: gwaydroid, kwaydroid ed hen.

Ecco il comando per vestire il vostro pinguino come chioccia:

```
git clone https://github.com/pieroproietti/penguins-wardrobe
sudo eggs wardrobe wear --wardrobe penguins-wardrobe --costume hen
```

![dressing he](/images/dressing-hen.png)

ed attendere la fine della vestizione:

![dressing hen installing packages](/images/dressing-hen-2.png)

Eccoci qua, si è proprio il nostro sistema iniziale completamente trasformato nella stazione di lavoro per sviluppare eggs!

![dressing hen enjoy](/images/dressing-hen-3.png)
