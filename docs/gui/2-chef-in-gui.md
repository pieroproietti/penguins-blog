---
sidebar_position: 3
title: "Cook: Chef dentro la GUI"
description: Come usare il Recipe Picker integrato in penguins-gui per esplorare, simulare con dry-run e applicare le ricette di penguins-chef.
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

# Cook: Penguins Chef dentro Penguins GUI 🍳🎨

L'integrazione nativa di **[`penguins-chef`](../chef/index.md)** all'interno di `penguins-gui` unisce i due mondi: puoi esplorare la dispensa delle ricette YAML, simularne l'effetto con *dry-run* e cucinarle sul tuo sistema direttamente con il mouse.

---

## 🎨 Il pulsante "Cook" e il Recipe Picker

Sulla barra degli strumenti principale di `penguins-gui` (e nel menu *Edit → Cook…*) è presente l'azione **Cook**, contrassegnata dall'icona della tavolozza dei colori.

Facendo clic su **Cook**, si apre la finestra interattiva **Penguins Chef — Recipe Picker**, che si espande sull'intera area della finestra (con controlli per ridurre a vista compatta, massimizzare o chiudere).

![Penguins Chef Recipe Picker in Penguins GUI](/images/penguins-chef-gui.png)

---

## 🗂️ Cosa trovi nella dispensa visiva

1. **Inizializzazione e aggiornamento automatico (`~/.chef`):**
   Se apri *Cook* per la prima volta e il repository locale delle ricette non è ancora presente, `penguins-gui` lo rileva e scarica automaticamente le ricette ufficiali mostrando una barra di avanzamento. In basso a sinistra trovi sempre il pulsante **⬇ Update Recipes** per sincronizzare la dispensa con un clic.
2. **Filtro istantaneo (*Filter recipes...*):**
   Digita il nome di un'applicazione o di uno strumento (es. `vscode`, `vlc`, `gimp`, `music`) per filtrare in tempo reale l'albero delle ricette.
3. **Navigazione per categorie sicure:**
   Le ricette sono raggruppate secondo le categorie standard FreeDesktop:
   - `development/` — compilatori, runtime e IDE (`devel`, `golang`, `vscode`);
   - `graphics/` — grafica e fotoritocco (`gimp`);
   - `multimedia/` — audio, video e workstation musicali (`vlc`, `music-pro`);
   - `office/` — produttività (`libreoffice`);
   - `education/`, `game/`, `network/`, `settings/`, `system/`, `utility/`.

   > **Filtro anti-Frankenstein:** All'interno di `penguins-gui`, le categorie strutturali di basso livello (`base`, `de`, `dm` e `costumes`) vengono **deliberatamente escluse** dalla lista. Poiché la GUI gira su un sistema che possiede già il proprio Display Manager e Desktop Environment attivi, questo filtro impedisce di sovrapporre ambienti grafici contrastanti. Per il provisioning da zero su una base *naked* a riga di comando, resta sempre disponibile la CLI completa di [`chef`](../chef/3-quickstart-e-cli.md).

4. **Anteprima YAML e Metadati Live:**
   Selezionando una ricetta nella colonna di sinistra, il pannello di destra mostra la descrizione, il percorso del file, le famiglie di distribuzioni supportate e il codice sorgente YAML completo della ricetta.

---

## 👁️ Dry-Run e Applicazione con un clic

Il principio fondamentale di `penguins-chef` — *non agire mai alla cieca* — è preservato integralmente nell'interfaccia grafica:

- **👁 Dry Run (Senza Root):** Avvia la simulazione della ricetta selezionata senza richiedere la password di amministratore e senza modificare alcun file. L'intero piano di esecuzione (verifica repository, pacchetti da installare, file di configurazione, servizi) viene stampato in tempo reale nel log principale di `penguins-gui`.
- **✓ Apply Recipe:** Una volta verificato il piano, premi *Apply Recipe* per richiedere l'elevazione dei privilegi (Polkit/`sudo`) e cucinare effettivamente la ricetta sul sistema.

---

## 🔄 Il flusso completo dalla scrivania

Grazie all'unione tra `penguins-gui`, `penguins-chef` e `penguins-eggs`, l'intero ciclo di creazione di una derivata Linux si compie senza mai uscire dall'interfaccia grafica:

```text
[ Sistema Desktop attivo ]
           │
           ▼
 1. Cook (Scegli, simuli con Dry-Run e applichi le ricette di Chef)
           │
           ▼
 2. Edit → Update /etc/skel (Propaghi il tema e le configurazioni utente)
           │
           ▼
 3. Create ISO (Eggs comprime il sistema in una ISO live avviabile)
           │
           ▼
 4. Boot ISO… (Configuri GRUB per testare subito la ISO al riavvio senza USB)
```
