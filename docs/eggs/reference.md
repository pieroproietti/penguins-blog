---
title: "Command Reference: La guida completa alla CLI di Eggs"
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Command Reference: La guida completa alla CLI di Eggs

L'interfaccia a riga di comando di `penguins-eggs` orchestra il motore in Go (`coa`) e il sottosistema nativo in C (`oa`). Di seguito sono elencati i comandi, le opzioni e i sotto-comandi principali per il controllo completo del sistema.

---

## 1. Comando Principale
* `sudo eggs`
  * **Descrizione:** Mostra lo stato generale del sistema, i moduli attivi, la famiglia Linux rilevata e l'help interattivo.

---

## 2. Rimasterizzazione (`eggs remaster`)
Il comando centrale per congelare il sistema e generare l'immagine ISO ibrida.

* `sudo eggs remaster`
  * **Descrizione:** Avvia il processo di remastering standard. Il sistema viene generalizzato, ripulito e convertito in una live pulita.
* `sudo eggs remaster --clone`
  * **Descrizione:** Cattura l'esatta identità del sistema corrente, preservando utenti, password, configurazioni locali e dati personali.
* `sudo eggs remaster --crypted`
  * **Descrizione:** Confeziona un'immagine protetta da crittografia LUKS (supportata nativamente dalla famiglia Debian).
* `sudo eggs remaster --debug`
  * **Descrizione:** Stampa a schermo il piano di volo in formato JSON (`oa-plan.json`) senza avviare la compilazione, utile per analizzare il comportamento del motore.
* `sudo eggs remaster --stop-after <step>`
  * **Descrizione:** Interrompe il processo di remastering subito dopo uno step specifico (es. `initramfs`), lasciando il chroot montato per l'ispezione manuale.

---

## 3. Configurazione e Utility (`eggs config` / `eggs tools`)
* `sudo eggs config`
  * **Descrizione:** Apre l'interfaccia TUI interattiva per modificare parametri chiave quali algoritmo di compressione (`zstd`, `xz`, `lz4`, `gzip`), livello di compressione, prefisso del nome ISO e credenziali live.
* `sudo eggs tools repo add`
  * **Descrizione:** Configura e aggiunge automaticamente il repository nativo di `penguins-eggs` in base alla distribuzione in uso.
* `sudo eggs tools grub40 </path/to/my.iso>`
  * **Descrizione:** Genera una voce di loopback GRUB per avviare una qualsiasi ISO Linux direttamente da disco fisso (aggiungendo `--write` viene scritta in `/etc/grub.d/40_custom`).

---

## 4. Manutenzione e pulizia (`eggs destroy` / `eggs tools clean`)
* `sudo eggs destroy`
  * **Descrizione:** Esegue una pulizia di emergenza rimuovendo chroot rimasti appesi, directory di lavoro temporanee e mount point residui dopo un remaster interrotto.
* `sudo eggs tools clean`
  * **Descrizione:** Pulisce le cache dei gestori di pacchetti, i log e i file temporanei prima di procedere con la cova.

---

## 5. Installazione sul campo (`eggs sysinstall`)
I comandi per trasferire l'habitat dalla live al ferro vivo:

* `sudo eggs sysinstall calamares`
  * **Descrizione:** Avvia l'installer grafico Calamares (richiede un display server attivo).
* `sudo eggs sysinstall krill`
  * **Descrizione:** Avvia l'installer testuale (TUI) guidato per la gestione avanzata di partizioni e mount point.
* `sudo eggs sysinstall krill --coexist`
  * **Descrizione:** Attiva la modalità di coesistenza multi-boot per far convivere la live con sistemi operativi preesistenti sullo stesso disco.

---

## 6. Integrazione con Agenti IA (`eggs mcp`)
* `sudo eggs mcp enable`
  * **Descrizione:** Abilita il Model Context Protocol server in Go (`eggsmcp`), permettendo agli assistenti IA compatibili (come Claude, Cursor, Zed o Antigravity) di scoprire i comandi di `eggs`, ispezionare le configurazioni ed eseguire operazioni sul sistema su richiesta.
* `eggs mcp status`
  * **Descrizione:** Verifica lo stato dell'integrazione MCP attiva.
  