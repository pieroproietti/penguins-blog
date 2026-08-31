---
slug: /
sidebar_position: 1
title: Penguins' Tailor & Wardrobe 👔
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# 👔 Penguins' Tailor & Wardrobe

**Penguins' Tailor** (`tailor`) è uno strumento CLI autonomo, moderno e veloce scritto in **Go** dedicato alla configurazione, allestimento e personalizzazione automatizzata di distribuzioni Linux attraverso ricette dichiarative YAML.

Lavora in stretta sinergia con **[Penguins' Wardrobe](https://github.com/pieroproietti/penguins-wardrobe)** (il guardaroba ufficiale dei costumi e degli accessori) e con **[Penguins' Eggs](https://penguins-eggs.net)** (lo strumento di rimasterizzazione e produzione ISO Live).

---

## 🎭 La Metafora dell'Atelier

L'intero ecosistema è concepito come un vero e proprio atelier sartoriale:

* **Il Sarto (`tailor`)**: l'eseguibile CLI che rileva l'hardware e la distribuzione in uso, scarica il guardaroba e applica i vestiti desiderati. Può lavorare sia con il guardaroba ufficiale che con atelier/fork di terze parti.
* **Costumi (`v2/costumes/`)**: le ricette complete per allestire un Desktop Environment (XFCE, Cinnamon, MATE, GNOME, ecc.) o una configurazione tematica (es. `colibri`, `duck`, `eagle`, `quirinux`, `chicks`, `gypaetus`, `seagull`).
* **Accessori (`v2/accessories/`)**: componenti software modulari e riutilizzabili (es. `base`, `eggs-dev`, `firmwares`, `flatpak`, `graphics`, `office`, `multimedia`, `waydroid`).
* **Preseed Debconf (`packages.preseed`)**: configurazione automatizzata a zero interazione per eliminare ogni prompt Debian/Debconf (Display Manager, licenze firmware proprietari, font Microsoft).
* **Temi / Vendors (`v2/vendors/`)**: personalizzazioni grafiche e di branding per il boot live (GRUB, Isolinux) e per l'installer [Calamares](https://calamares.io).
* **Sysroot Overlay (`sysroot/`)**: albero del filesystem sovrapposto direttamente su `/` (es. `/etc/skel/`, sfondi, icone), con sincronizzazione automatica dei permessi dell'utente non-root.

---

## 🔄 Il Flusso di Lavoro Modulare con Eggs

Grazie alla separazione tra **Tailor** (allestimento del sistema) ed **Eggs** (rimasterizzazione), il ciclo di vita per creare la propria distribuzione personalizzata (Respin) è completamente modulare:

```
[ Installazione Base Naked (CLI) ]
               │
               ▼
   tailor get [url] [-b branch]
   sudo tailor wear <costume>
               │
               ▼
[ Test e Personalizzazione Locale ]
               │
               ▼
      sudo eggs produce --theme ...
               │
               ▼
    [ Immagine ISO Live Pronta! ]
```

1. **Sistema Naked**: Si parte da un'installazione Linux minimale a riga di comando (Debian, Devuan, Ubuntu, Arch Linux).
2. **Vestizione (Tailor)**: Si indossa un costume dal guardaroba per installare pacchetti, configurare l'interfaccia e preparare l'ambiente.
3. **Produzione ISO (Eggs)**: Si utilizza `eggs` per generare l'immagine Live ISO avviabile (UEFI + BIOS) e installabile su disco fisso.

---

## 🛠️ Comandi Rapidi di `tailor`

| Comando | Descrizione |
| :--- | :--- |
| **`tailor get [url]`** | Clona o aggiorna il repository dei costumi in `~/.wardrobe`. |
| **`tailor list`** | Elenca tutti i costumi disponibili nel guardaroba locale. |
| **`tailor show <costume>`** | Mostra i metadati dettagliati, i pacchetti e gli accessori di un costume. |
| **`sudo tailor wear <costume>`** | Applica il costume al sistema con interfaccia TUI Split-Screen in tempo reale. |
| **`tailor wear <costume> --dry-run`** | Simula l'applicazione del costume senza modificare il sistema. |
| **`tailor export [pkg\|log]`** | Trasferisce pacchetti compilati o report di esecuzione via SSH. |
| **`tailor tools build`** | Compila ed esporta i pacchetti nativi di distribuzione (`.deb`, `.rpm`, `.pkg.tar.zst`, `.apk`). |
| **`sudo tailor tools repo [add\|rm]`** | Configura o rimuove i repository ufficiali di `penguins-eggs.net`. |

---

## 📚 Documentazione

* **[Guida Utente Completa di Tailor & Wardrobe](./wardrobe-users-guide)**: La guida esaustiva a comandi, anatomia delle ricette YAML v2, debconf preseeding, resilienza e creazione di nuovi costumi.
* **[Metodologia di Vestizione](./metodologia)**: Panoramica concettuale sulla filosofia di allestimento modulare.
* **[Repository GitHub Penguins' Tailor](https://github.com/pieroproietti/penguins-tailor)**: Codice sorgente e issue tracker del sarto.
* **[Repository GitHub Penguins' Wardrobe](https://github.com/pieroproietti/penguins-wardrobe)**: Il guardaroba ufficiale con tutte le ricette v2.
