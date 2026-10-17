---
title: "Command Reference: La guida completa alla CLI di Eggs"
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Command Reference: La guida completa alla CLI di Eggs

 **`eggs`** è l'interfaccia a riga di comando primaria di `penguins-eggs` (il binario è disponibile anche con l'alias **`coa`**). Orchestra il parser e il planner in Go (`coa`), l'esecutore nativo in C (`oa`) e i moduli worker (`coa ell`).

> **Suggerimento:** ogni comando e sottocomando supporta il flag `--help`. Le pagine `man` e il completamento automatico per Bash, Zsh e Fish vengono generati in fase di build.

---

## 🧭 Panoramica Rapida dei Comandi

| Comando | `sudo` | Descrizione |
| :--- | :---: | :--- |
| **`eggs remaster`** | 🟢 Sì | Avvia il volo di rimasterizzazione e genera l'immagine ISO live ibrida. |
| **`eggs wizard`** | 🟢 Sì | Wizard TUI interattivo in 3 passi per scegliere modalità, compressione e avviare la cova. |
| **`eggs sysinstall`** | 🟡 Misto | Avvia l'installer di sistema su disco (`calamares` GUI o `krill` TUI). |
| **`eggs coexist`** | 🟡 Misto | Gestisce i dischi multi-boot Coexist e le installazioni per slot (`init`, `info`, `install`). |
| **`eggs config`** | 🟢 Sì | Interfaccia TUI a schede per configurare `/etc/penguins-eggs.d/custom.yaml` e le esclusioni. |
| **`eggs tools`** | 🟡 Misto | Utilità di manutenzione: `repo`, `clean`, `skel`, `grub40`, `build`. |
| **`eggs destroy`** | 🟢 Sì | Smonta in sicurezza i filesystem (`MNT_DETACH`) e pulisce l'area di lavoro (alias: `kill`). |
| **`eggs adapt`** | 🔴 No | Adatta dinamicamente la risoluzione video ospite all'interno di una macchina virtuale. |
| **`eggs export`** | 🟡 Misto | Trasferisce gli artefatti generati (`iso`, `pkg`, `log`) verso uno storage remoto Proxmox. |
| **`eggs mcp`** | 🟡 Misto | Gestisce il server Model Context Protocol (MCP) integrato per gli agenti IA. |
| **`eggs version`** | 🔴 No | Stampa la versione di `eggs` / `coa`, l'architettura target e il commit Git. |

---

## 🚀 1. Rimasterizzazione e Produzione ISO (`remaster` / `wizard`)

### `sudo eggs wizard`
Avvia un flusso interattivo guidato in **3 passi** nel terminale per selezionare la modalità di volo (*Standard Live*, *System Clone*, *Crypted Clone*), il profilo di compressione SquashFS (*Fast*, *Standard*, *Maximum*), rivedere il riepilogo e lanciare la creazione della ISO.

### `sudo eggs remaster [flags]`
Il cuore operativo del sistema: legge il profilo tramite il parser, genera `/tmp/coa/oa-plan.json` tramite il planner (previa verifica dello spazio libero su disco) ed esegue il motore C `oa` per produrre la ISO.

* **Flag principali:**
  * `-w`, `--wizard`: avvia il wizard interattivo a 3 passi prima del volo.
  * `--clone`: modalità **System Clone** — preserva gli account utente reali, le password e l'intero contenuto di `/home` all'interno della ISO (richiede autenticazione Polkit `AUTH_ADMIN`).
  * `--crypted`: modalità **Crypted Clone** — avvolge il filesystem SquashFS dentro un contenitore **LUKS2** (`root.img`, supportato sulla famiglia Debian; mutuamente esclusivo con `--clone`). Per l'automazione non interattiva è possibile passare la variabile d'ambiente `EGGS_LUKS_PASSPHRASE`.
  * `-c`, `--compression <fast|standard|max>`: imposta rapidamente il profilo di compressione SquashFS.
  * ``-t`, `--target-dir `<percorso>` ``: redirige l'albero di costruzione (`isodir`) e il file `.iso` finale su una directory o condivisione di rete esterna, creando automaticamente un symlink in `/home/eggs`.
  * ``--path `<percorso>` ``: definisce la directory di lavoro (default: `/home/eggs`).
  * ``--stop-after `<step>` ``: **[debug]** interrompe il volo subito dopo lo step indicato (es. `initramfs`), lasciando il chroot montato per l'ispezione manuale ma mantenendo intatto il task di cleanup.
  * `--debug`: stampa a schermo il piano di volo compilato (`oa-plan.json`) ed esce senza modificare il sistema.

#### Parametri crittografici in modalità `--crypted`
In modalità interattiva, `--crypted` apre un wizard TUI che permette di accettare i valori predefiniti o personalizzare ciascun parametro LUKS2:

| Parametro | Default | Opzioni alternative |
| :--- | :--- | :--- |
| **Cipher** | `aes-xts-plain64` | `serpent-xts-plain64`, `twofish-xts-plain64` |
| **Key size** | `512 bit` | `256 bit` |
| **Hash** | `sha256` | `sha512` |
| **Sector size** | `512 byte` | `4096 byte` |
| **PBKDF** | `argon2id` | `argon2i`, `pbkdf2` |

---

## 💿 2. Installazione sul Ferro (`sysinstall` e `coexist`)

### `sudo eggs sysinstall [calamares|krill]`
Orchestra l'installazione del sistema live sul disco fisso generando la directory `/etc/penguins-eggs.d/installer.d/` e avviando l'interfaccia scelta:
* `sudo eggs sysinstall calamares`: avvia l'installer grafico **Calamares** (supporta i template di branding dinamici `branding.desc.tmpl` e `slideshowAPI: 2`).
* `sudo eggs sysinstall krill`: avvia l'installer testuale nativo in Go **Krill** (Bubbletea). Supporta tre modalità:
  1. **Full Disk:** partiziona e formatta l'intero disco selezionato (`ext4` o `btrfs`, BIOS o UEFI).
  2. **Pre-partitioned Disk:** installa su partizioni esistenti, isolando e proteggendo automaticamente la partizione EFI di Windows in ambienti multi-ESP e permettendo di preservare una partizione `/home` separata senza riformattarla.
  3. **Coexist Multi-Boot:** installa il sistema in uno slot puro dedicato (`coexist-N`).
  *(Nota: se la live è stata generata con `--clone` o `--crypted`, Krill rileva automaticamente la natura clone del supporto e preserva gli utenti clonati saltando la schermata di creazione nuovo utente).*

### `eggs coexist`
Gestisce il multi-boot isolato basato sull'architettura [Pure Slots](./coexist.md):
* ``sudo eggs coexist init `<device>` ``: inizializza un disco con layout GPT UEFI (ESP da 512 MiB e slot ROOT uniformi `coexist-N`). Flag: ``--size `<GiB>` `` (default `10`), ``--fstype `<ext4|btrfs>` ``, `-y` / `--yes`.
* ``eggs coexist info `[device]` ``: mostra in modalità utente i dischi Coexist rilevati, i dettagli dell'ESP e lo stato degli slot (liberi o occupati).
* ``sudo eggs coexist install `[slot]` ``: avvia direttamente Krill in modalità Coexist per installare la distribuzione corrente nello slot scelto.

---

## ⚙️ 3. Configurazione e Manutenzione (`config`, `tools`, `destroy`)

### `sudo eggs config`
Apre una TUI interattiva organizzata in **3 schede** (navigabili con `Tab` / `Shift+Tab`):
1. **Settings:** modifica la password dell'utente live (default `evolution`), l'algoritmo di compressione SquashFS (`zstd`, `xz`, `lz4`, `gzip`), il livello di compressione (default `3` per `zstd`) e il prefisso del nome ISO. Salva in `/etc/penguins-eggs.d/custom.yaml`.
2. **Excludes:** visualizza e apre nell'editor (`$EDITOR` / `nano`) il file `/etc/penguins-eggs.d/custom.exclude.list` per aggiungere percorsi personalizzati da escludere dallo SquashFS.
3. **Save:** salva ed esce oppure annulla le modifiche.

### `eggs tools`
Racchiude le utilità di preparazione e ciclo vitale:
* `sudo eggs tools repo add` / `sudo eggs tools repo rm`: aggiunge (con chiavi GPG ufficiali) o rimuove il repository nativo di `penguins-eggs` per la distribuzione in uso.
* `sudo eggs tools clean`: svuota le cache dei gestori pacchetti (`apt`, `pacman`, `dnf`, ecc.), i log e i file temporanei prima della cova.
* ``sudo eggs tools skel `[-u <utente>]` ``: copia le configurazioni desktop/XDG dell'utente specificato (o corrente) dentro `/etc/skel`.
* ``eggs tools grub40 `<percorso/file.iso>` `[-w|--write]` ``: genera una voce di avvio *loopback* per GRUB2 che permette di avviare la ISO direttamente dal disco fisso senza USB. Senza `-w` stampa la configurazione a schermo (non richiede `sudo`); aggiungendo **`-w` / `--write`** (con `sudo`) la scrive in `/etc/grub.d/40_custom`. Ricorda poi di aggiornare GRUB (`sudo update-grub` o `grub-mkconfig`).
* `eggs tools build`: compila i sorgenti `oa`/`coa` e genera il pacchetto nativo della distribuzione corrente (`.deb`, `.rpm`, `.pkg.tar.zst`, `.apk`). **⚠️ Non eseguire MAI `eggs tools build` con `sudo`!**

### `sudo eggs destroy` (alias: `sudo eggs kill`)
Il distruttore sicuro: smonta l'albero dei mount point virtuali e degli overlay di `/home/eggs/liveroot` utilizzando la syscall `umount2()` con **`MNT_DETACH`** (lazy unmount per evitare blocchi del kernel) e rimuove la cartella di lavoro temporanea.

---

## 🌐 4. Utilità VM, Esportazione e Versione (`adapt`, `export`, `version`)

* `eggs adapt`: ridimensiona e adatta dinamicamente la risoluzione video della sessione grafica quando si esegue una live all'interno di una macchina virtuale (non richiede `sudo`).
* `sudo eggs export [iso|pkg|log] [--clean]`: trasferisce le ISO prodotte, i pacchetti compilati o i log di esecuzione verso uno storage array remoto Proxmox VE configurato (con `--clean` rimuove le build precedenti).
* `eggs version`: mostra la versione CalVer installata (es. `v26.10.14`), l'architettura della CPU e l'hash del commit Git.

---

## 🤖 5. Integrazione con Agenti IA (`eggs mcp`)

Gestisce il server **Model Context Protocol (MCP)** integrato in `coa` (vedi [Architettura MCP](./architecture/8.md)):
* `sudo eggs mcp enable`: crea `/etc/sudoers.d/penguins-eggs-mcp` e inietta automaticamente la configurazione del server MCP nei client IA rilevati (**Antigravity CLI, Claude Desktop, Cursor, Zed, VSCode Roo-Cline**).
* `sudo eggs mcp disable`: rimuove la configurazione MCP dai file JSON dei client e cancella la regola sudoers.
* `eggs mcp status`: verifica lo stato delle regole sudoers, dei client configurati e di eventuali processi daemon MCP attivi.
* `eggs mcp start`: avvia il listener interattivo JSON-RPC 2.0 su Stdio (invocato automaticamente dai client IA).
* `eggs mcp stop`: termina in modo pulito (`SIGTERM`) eventuali istanze `eggs mcp start` rimaste in background.
  