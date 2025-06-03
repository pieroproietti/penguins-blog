---
title: Il Rinascimento
slug: rinascimento
authors: pieroproietti
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

In case of problems with translation links, You can consult a detailed [README](https://github.com/pieroproietti/penguins-eggs#readme) in English on the repository.


# Il Rinascimento

In Italia abbiamo parecchio a cuore il Rinascimento, periodo storico in cui i Comuni, le Repubbliche marinare, la città di Firenze e Roma fiorivano attraendo artisti e producendo cultura.

Ecco, vorrei fare un parallelo con l'epoca d'oro di Remastesys e Systemback, e proporre penguins-eggs - e non solo - come il rinascimento, in minuscolo naturalmente, dei sistemi di rimasterizzazione.

In questo contesto **penguins-eggs** emerge come l'erede naturale di storici progetti come Remastersys e Systemback. Sviluppato da Piero Proietti, questo tool moderno e versatile rappresenta una soluzione completa per creare distribuzioni personalizzate e backup di sistema su un'ampia gamma di distribuzioni Linux.

## Che cos'è penguins-eggs?

Penguins-eggs è uno strumento di clonazione del sistema e rimasterizzazione delle distribuzioni, progettato per semplificare la creazione di immagini ISO live personalizzate. Il nome evoca l'idea della "riproduzione" applicata ai sistemi operativi: come un pinguino che "cova" le sue uova, il tool permette di "far schiudere" nuovi sistemi da quelli esistenti.

## Compatibilità Multi-Distribuzione

Una delle caratteristiche più distintive di penguins-eggs è la sua straordinaria compatibilità multi-distribuzione. Nato originariamente su Debian, oggi supporta:

- **Famiglia Debian/Ubuntu**: Debian, Devuan, Ubuntu e derivate (Linux Mint, LMDE, KDE neon)
- **Arch Linux**: Arch, Manjaro, EndeavourOS, Garuda
- **Enterprise Linux**: Fedora, Rocky Linux, AlmaLinux
- **openSUSE**: Supporto completo per la distribuzione openSUSE

Questa versatilità lo rende unico nel suo genere, eliminando la necessità di utilizzare strumenti diversi per distribuzioni diverse.

## Architetture Supportate

Penguins-eggs non si limita ai moderni sistemi a 64 bit, ma supporta anche:
- **amd64**: Per i sistemi desktop e server moderni
- **i386**: Per hardware più datato
- **arm64**: Per single-board computer come Raspberry Pi

## Funzionalità Principali

### Tre Modalità di Creazione ISO

**Modalità Standard** (`eggs produce`): Crea un'immagine live pulita, rimuovendo completamente i dati utente per garantire la privacy.

**Modalità Clone** (`eggs produce --clone`): Preserva dati utente e configurazioni del sistema, ideale per migrazioni complete.

**Modalità Clone Crittografato** (`eggs produce --cryptedclone`): Salva i dati utente in un volume LUKS crittografato all'interno dell'ISO, garantendo sicurezza e privacy.

### Compressione Intelligente

Il tool offre diversi livelli di compressione per ottimizzare le prestazioni:
- **Compressione rapida** (zstd): Per sviluppo e test veloci
- **Compressione standard** (xz): Bilanciamento tra velocità e dimensioni
- **Compressione massima** (xz con opzioni avanzate): Per distribuzioni finali

### Sistema di Installazione Dual

**Calamares**: Interfaccia grafica elegante e user-friendly per installazioni desktop.

**Krill**: Installer CLI/TUI sviluppato internamente, perfetto per installazioni server e scenari automatizzati. Krill permette di creare e installare sistemi completamente CLI senza ambiente grafico, ideali per server e deployment enterprise.

## Innovazioni Tecniche

### Wardrobe: Gestione delle Configurazioni

Il sistema "Wardrobe" consente di organizzare e gestire diverse configurazioni e personalizzazioni attraverso "costumi". Questo approccio modulare facilita la transizione tra diverse configurazioni (CLI minimal, desktop completo, server).

### Yolk: Repository Offline

Yolk è un repository locale integrato nell'ISO che contiene i pacchetti essenziali per l'installazione, garantendo la possibilità di installare il sistema anche senza connessione internet.

## Vantaggi Distintivi

**Velocità e Efficienza**: Utilizza livefs per l'acquisizione istantanea del sistema live, significativamente più veloce rispetto ai metodi tradizionali di copia dell'intero filesystem.

**Sicurezza**: Utilizza esclusivamente i pacchetti originali delle distribuzioni senza modificare le liste dei repository, garantendo integrità e affidabilità.

**Facilità d'Uso**: Comandi intuitivi come `eggs produce`, `eggs install`, e assistenti interattivi "mom" e "dad" per la configurazione guidata. L'installer krill permette installazioni CLI rapide anche senza interfaccia grafica.

**Open Source**: Completamente open source e attivamente sviluppato, con una community crescente su GitHub.

## Casi d'Uso Tipici

- **Backup e Disaster Recovery**: Creazione di snapshot completi del sistema
- **Distribuzione Personalizzata**: Sviluppo di spin personalizzate di distribuzioni esistenti
- **Migrazione di Sistema**: Trasferimento di configurazioni complete su nuovo hardware
- **Ambienti di Sviluppo**: Distribuzione di ambienti preconfigurati per team di sviluppo
- **Installazioni di Massa**: Deploy automatizzato tramite PXE per parchi macchine
- **Server CLI**: Creazione e installazione di sistemi server minimal senza interfaccia grafica, utilizzando l'installer TUI krill per deployment rapido e automatizzato

## Installazione e Utilizzo

L'installazione è semplificata attraverso lo script `get-eggs`, che gestisce automaticamente le dipendenze e i repository necessari per tutte le distribuzioni supportate:

```bash
git clone https://github.com/pieroproietti/get-eggs
cd get-eggs
sudo ./get-eggs.sh
```

Una volta installato, la creazione di un'ISO è immediata:

```bash
sudo eggs produce  # ISO standard
sudo eggs produce --clone  # Con dati utente
sudo eggs produce --cryptedclone  # Con dati crittografati
```

Per installazioni server CLI senza interfaccia grafica:

```bash
sudo eggs install  # Installazione interattiva con krill
sudo eggs install --unattended  # Installazione automatizzata
```

## Sviluppo e Community

Penguins-eggs è scritto principalmente in TypeScript, garantendo cross-platform compatibility e facilità di manutenzione. Il progetto è attivamente sviluppato e mantiene una presenza forte nella community Linux attraverso:

- Repository GitHub con documentazione completa
- Pacchetti nativi per tutte le distribuzioni supportate
- Blog ufficiale con tutorial e aggiornamenti
- Supporto community attraverso vari canali social e forum

## Conclusioni

Penguins-eggs rappresenta l'evoluzione naturale degli strumenti di rimasterizzazione Linux, combinando la semplicità d'uso di Remastersys con la potenza e flessibilità richieste dai moderni ambienti Linux. La sua capacità di funzionare trasversalmente su multiple distribuzioni e architetture, unita alla possibilità di creare e installare sia sistemi desktop che server CLI, lo rende uno strumento indispensabile per amministratori di sistema, sviluppatori e appassionati Linux.

Che si tratti di creare backup sicuri, distribuire ambienti personalizzati, installare server minimal o semplicemente sperimentare con Linux, penguins-eggs offre una soluzione moderna, efficiente e affidabile per tutte le esigenze di rimasterizzazione e deployment.

---

**Risorse Utili:**
- Repository GitHub: https://github.com/pieroproietti/penguins-eggs
- Sito ufficiale: https://penguins-eggs.net
- Documentazione: https://penguins-eggs.net/docs
- ISO di esempio: https://sourceforge.net/projects/penguins-eggs/files/ISOS/
