---
sidebar_position: 2
title: Primi Passi 🐣
description: Come installare eggs e produrre la tua prima ISO
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Primi Passi con eggs

In questa sezione vedremo come passare dal tuo sistema attuale alla tua prima immagine ISO avviabile.

---

## 📥 1. Installazione

Il modo più rapido per iniziare su sistemi **Almalinux, Arch, Debian, Devuan, Fedora, Manjaro, Opensuse, RHEL, Rocky ed Ubuntu** è lo script ufficiale `fresh-eggs:

```bash
git clone https://github.com/pieroproietti/fresh-eggs
cd fresh-eggs
sudo ./fresh-eggs.sh
```

E' possibile. ed è stata testata su quasi tutte le distribuzioni supportate. l'installazione come AppImage. In questo caso, basta scaricare l'utilima versione della AppImage direttamente dal [repository Ufficiale](https://appimage.github.io/penguins-eggs) ed avviarla.

:::tip Verifica l'installazione
Dopo l'installazione, controlla che tutto sia pronto digitando:
`eggs status`
:::

---

## 🧹 2. Preparazione (La Pulizia)

Prima di "covare" il tuo uovo, è fondamentale configurare eggs e pulire il sistema dai file inutili (cache dei pacchetti, file temporanei). Questo renderà la tua ISO molto più leggera e veloce da caricare.

```bash
sudo eggs dad --default
sudo eggs tools clean
```

---

## 🥚 3. Produzione: Il tuo primo uovo

Esistono due modi principali per creare la tua ISO. Se sei all'inizio, ti consiglio la modalità **Standard**.

### Modalità Standard (Consigliata)
Crea una ISO pulita del tuo sistema, ideale da condividere, perché **non include** i tuoi dati personali (password, documenti, foto).
```bash
sudo eggs produce
```

### Modalità Clone (Backup personale)
Se invece vuoi un backup esatto del tuo PC, inclusi tutti i tuoi file nella cartella `/home`, usa il flag `--clone`:
```bash
sudo eggs produce --clone
```

---
import Translactions from '@site/src/components/Translactions';

<Translactions />

## 📂 4. Dove trovo la mia ISO?

Al termine del processo (che può durare da pochi minuti a mezz'ora a seconda della potenza del tuo PC), la tua ISO ti aspetta nel **Nido**:

```bash
cd /home/eggs
ls -lh
```

:::info Prossimo Passo
Ora che hai la tua ISO, puoi provarla su una macchina virtuale o passare al livello successivo: [Personalizzare il sistema con il Wardrobe](./wardrobe).
:::