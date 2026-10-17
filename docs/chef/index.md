---
sidebar_position: 1
title: Introduzione a Penguins Chef
description: Il motore dichiarativo a ricette YAML per plasmare il proprio sistema Linux partendo da una base naked.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Penguins Chef: Cucinare il proprio Linux, ricetta per ricetta 👨‍🍳🐧

Spesso chi crea una *respin* o allestisce un sistema Linux su misura compie il percorso al contrario: parte da una ISO "completa" preparata da altri e passa ore a rimuovere software indesiderato, ripulire configurazioni e sperare di non aver spezzato qualche dipendenza nascosta.

È un approccio faticoso e poco pulito. La via organica di `penguins-eggs` ribalta il paradigma: **partire dal basso**, ovvero da un sistema essenziale a sola riga di comando (**`naked`**), e aggiungere esclusivamente ciò che serve, in modo chiaro, controllabile e ripetibile.

Per questo è nato **`penguins-chef`** (invocato da terminale con il comando **`chef`**): il compagno culinario leggero, modulare e deterministico per forgiare sistemi Linux su misura.

---

## 🎯 I tre pilastri di Penguins Chef

Invece di appoggiarsi a pesanti infrastrutture di *configuration management* (come Ansible, Puppet o Chef, che richiedono runtime Python/Ruby o agenti in background), `penguins-chef` è un **singolo binario Go autonomo a zero dipendenze** fondato su tre pilastri:

1. **Partenza `naked`:** Si inizia da una base minima capace di riprodursi (con `eggs` già a bordo), priva di ambienti grafici preimpostati o *bloatware*.
2. **Modularità totale:** Attraverso ricette YAML dichiarative (`version: 1`), si installa solo ciò che si desidera: Display Manager (`dm`), Desktop Environment (`de`), strumenti di sviluppo, grafica, multimedia e ufficio.
3. **Personalizzazione sartoriale (`costumes`):** Si definiscono sfondi, temi, configurazioni utente e overlay di sistema (`sysroot`) in modo pulito, atomico e replicabile su più famiglie di distribuzioni.

---

## 🔍 Perché non agire mai alla cieca: il Dry-Run

Uno dei principi cardine di `penguins-chef` è la **trasparenza preventiva**. Prima di modificare un singolo file o invocare il gestore pacchetti, puoi sempre ispezionare il piano di esecuzione completo con il flag `--dry-run`, **senza bisogno dei privilegi di root**:

```bash
chef apply ~/.chef/recipes/dm/lightdm.yaml --dry-run
```

Il motore analizza lo stato reale della macchina (o simula quello di un'altra distribuzione tramite `--family`) e mostra passo dopo passo:
- i repository che verrebbero configurati;
- la verifica preliminare della disponibilità dei pacchetti nei canali ufficiali;
- i pacchetti mancanti che verrebbero installati in un'unica transazione;
- i file di configurazione, l'hostname, i servizi di avvio e gli overlay `sysroot`.

---

## 🗺️ Esplora la documentazione di Chef

- **[Quickstart e Command Reference (`chef`)](./3-quickstart-e-cli.md):** Guida pratica dall'installazione del binario `chef` e la prima esecuzione di `chef get` fino alla produzione della ISO con `eggs remaster`, con l'elenco completo dei comandi CLI.
- **[Struttura delle Ricette, Categorie e Costumi](./2-ricette-e-costumi.md):** L'organizzazione FreeDesktop dell'albero `recipes/`, la composizione DRY con `include`, gli overlay `sysroot` e come scrivere le proprie ricette personalizzate.
- **[Architettura e Contratto di Esecuzione](./1-architettura-e-contratto.md):** Come funziona il motore interno, la pipeline verificabile in 8 passi, il supporto multi-famiglia e la gestione automatica dell'init system (`systemd` e `sysvinit`).
