---
title: 5 minuti con eggs
authors: pieroproietti
lang: it_IT
---

# Anche meno di 5 minuti...

Scaricate eggs da [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/), quindi installatela:

```
sudo dpkg -i eggs_9.4.3_amd64.deb
sudo apt install -f
```

OK, andiamo ad autoconfiguralo:

```
sudo eggs dad -d
```

Perfetto, se vogliamo calamares installer dobbiamo installarlo adesso:

```
sudo eggs calamares --install
```

Bene, pronti per fare l'uovo:

```
sudo eggs produce 
```

Se volete fare il backup del vostro systema, potente aggiungere --clone
```
sudo eggs produce --clone
```

Se volete, invece,  fare il backup del vostro server internet, ma non volete esporre i dati in chiaro, potente aggiungere --cryptedclone
```
sudo eggs produce --clone
```

Se volete la compressione massima e la rimozione di eggs e calamares installer a fine installazione, aggiungete: --max --release
```
sudo eggs produce --max --release
```

# Problemi?

Chiedete a mamma!

```
eggs mom
```

# Buon viaggio!