---
title: "Quickstart: Dalla sorgente all'uovo in pochi passi"
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Quickstart: Dalla sorgente all'uovo in pochi passi

Se vuoi toccare con mano la potenza di `eggs` senza perdersi in configurazioni complesse, questo percorso ti porta dalla verifica preliminare alla produzione della tua prima ISO personalizzata.

## 1. Verifica dei prerequisiti
Prima di iniziare, assicurati di trovarti su un sistema supportato (come Debian, Arch, Ubuntu, Fedora o Devuan) e di disporre dei privilegi di amministratore (`sudo`).

Verifica che il sistema sia aggiornato e pulito dai pacchetti superflui.

## 2. Installazione di eggs
Installa `eggs` attingendo al repository nativo della tua distribuzione (tramite il gestore pacchetti ufficiale o configurando il repository come visto nei capitoli precedenti).

Una volta completata l'installazione, verifica che il motore risponda correttamente richiamando lo stato:
```bash
sudo eggs
```

## 3. Configurazione rapida del repository
Per abilitare i canali ufficiali e ricevere gli aggiornamenti direttamente dal motore, esegui:
```bash
sudo eggs tool repo add
```

## 4. Pulizia prima della cova
Prima di congelare il sistema, è consigliabile ripulire le cache di sistema e i file temporanei accumulati durante l'uso quotidiano:
```bash
sudo eggs tool clean
```

## 5. Produzione della prima ISO
Ora il sistema è pronto. Lancia il comando di remastering per generare la tua prima immagine ISO ibrida:
```bash
sudo eggs remaster
```

Il processo analizzerà l'habitat, comprimerà il file system in un modulo SquashFS e collocherà l'immagine finale pronta all'uso all'interno della cartella `/home/eggs`.

Se desideri clonare esattamente la macchina corrente comprensiva di utenti e dati personali, utilizzerai la stessa base con l'opzione clone:
```bash
sudo eggs remaster --clone
```

Da qui, potrai scriverla su una chiavetta USB e testarla sul ferro vivo o in ambiente virtualizzato.