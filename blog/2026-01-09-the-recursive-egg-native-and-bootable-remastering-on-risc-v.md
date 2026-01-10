---
authors: pieroproietti
slug: the-recursive-egg-native-and-bootable-remastering-on-risc-v.md
title: 'The Recursive Egg: Native and Bootable Remastering on RISC-V'
lang: it
comments: true # giscus
enableComments: true
---
import Translactions from '@site/src/components/Translactions';
import Admonition from '@theme/Admonition';

<Translactions />

# L'Uovo Ricorsivo: Rimasterizzazione nativa e bootabile su RISC-V

**RISC-V** è la frontiera più entusiasmante dell'open source hardware, ma ammettiamolo: lavorarci può essere ancora frustrante. Bootloader che non si trovano, parametri di QEMU lunghi come un romanzo, installazioni manuali...

Oggi però **Penguins-Eggs** cambia le carte in tavola.

Con l'ultima release, abbiamo raggiunto la **piena ricorsività** su architettura `riscv64`. Cosa significa? Significa che puoi installare Debian o Ubuntu, personalizzarla e produrre una nuova ISO live installabile che si avvia automaticamente, senza hack manuali. 

Eggs rende il tuo sistema **riproduttivo**: dalla live ottenuta puoi installare un nuovo sistema e così via all'infinito.

In questo articolo, vi guiderò passo dopo passo nel processo: dall'installazione di una Debian Trixie "pulita" in QEMU, alla creazione della vostra distro RISC-V personalizzata.

## 1. Prepariamo il laboratorio
Per prima cosa, ci serve un ambiente di lavoro su Linux. Installeremo QEMU e le utility per l'emulazione (necessarie se state lavorando su un PC x86_64).

```bash
sudo apt install binfmt-support \
            qemu-efi-riscv64 \
            qemu-system-riscv64 \
            qemu-user-static \
            qemu-utils 
```

Creiamo una cartella di lavoro e prepariamo il disco virtuale e le variabili EFI (il "BIOS" del nostro sistema virtuale):

```bash
mkdir -p ~/riscv
cd ~/riscv

# Disco da 10GB
qemu-img create -f qcow2 debian-riscv.img 10G

# Variabili EFI
cp /usr/share/qemu-efi-riscv64/RISCV_VIRT_VARS.fd debian-efi-vars.fd
```

## 2. L'installazione Base (Debian Netinst)
Scaricate la ISO di **Debian Trixie (testing) per RISC-V** (la versione `netinst`) e avviamo l'installazione.

Ecco il comando "magico" per avviare QEMU. Notate l'uso di `virtio-blk-device`:

```bash
qemu-system-riscv64 \
    -machine virt \
    -cpu rv64 \
    -m 4G \
    -smp 2 \
    -drive if=pflash,format=raw,unit=0,file=/usr/share/qemu-efi-riscv64/RISCV_VIRT_CODE.fd,readonly=on \
    -drive if=pflash,format=raw,unit=1,file=./debian-efi-vars.fd \
    -device virtio-blk-device,drive=hd0 \
    -drive file=debian-riscv.img,format=qcow2,id=hd0,if=none \
    -device virtio-blk-device,drive=cd0 \
    -drive file=debian-13.2.0-riscv64-netinst.iso,format=raw,id=cd0,media=cdrom,readonly=on,if=none \
    -device virtio-net-device,netdev=net0 \
    -netdev user,id=net0 \
    -nographic
```

Seguite la classica installazione testuale di Debian. Al termine, avrete un sistema RISC-V funzionante.

## 3. Entriamo nel cuore del sistema (Chroot)
Ora viene il bello. Invece di riavviare la VM, monteremo il suo disco direttamente nel nostro sistema host per lavorarci comodamente. Grazie a `qemu-nbd`, possiamo montare il file `.qcow2` come se fosse un disco reale.

Create uno script `extract.sh` per automatizzare il montaggio:

```bash
#!/bin/bash
# Configurazione
export IMG=~/riscv/debian-riscv.img
export SRC=/var/tmp/debian-riscv-src
export DEST=~/riscv/chroot

# Montaggio disco
sudo modprobe nbd max_part=8
sudo qemu-nbd --connect=/dev/nbd0 "$IMG"
sleep 1
sudo mkdir -p "$SRC"
sudo mount /dev/nbd0p2 "$SRC" # Assumiamo p2 sia la root

# Clonazione nel folder di lavoro
mkdir -p "$DEST"
sudo rsync -aAXv "$SRC/" "$DEST/"

# Pulizia
sudo umount "$SRC"
sudo qemu-nbd --disconnect /dev/nbd0
```

Eseguitelo e avrete il filesystem della vostra Debian RISC-V nella cartella `~/riscv/chroot`.

## 4. "Covare" l'uovo con Penguins-Eggs
Ora entriamo nell'ambiente emulato (chroot). Su Debian recente, non serve nemmeno copiare i binari di QEMU statico, il kernel gestisce tutto magicamente.

```bash
cd ~/riscv/chroot

# Montiamo i filesystem di sistema
sudo mount -t proc /proc proc/
sudo mount -t sysfs /sys sys/
sudo mount --rbind /dev dev/

# Entriamo!
sudo QEMU_UNAME="6.12.57+deb13-riscv64" chroot . /bin/bash
```

Una volta dentro:
1.  Installate il pacchetto `.deb` di **penguins-eggs** (scaricatelo o compilatelo).
2.  Lanciate il comando di produzione:

```bash
eggs produce -n
```

In pochi minuti, `eggs` rimasterizzerà il sistema, comprimerà i dati e genererà una ISO avviabile completa di installer TUI (Krill).

**La novità tecnica:** Eggs ora rileva automaticamente l'architettura `riscv64` e configura GRUB con il flag `--removable`. Questo risolve il problema storico delle macchine virtuali e delle board che non trovano il bootloader al riavvio.

## 5. La prova del nove: Installare la nostra ISO
Funziona davvero? Proviamo a installare la ISO appena creata (`egg-of_debian...iso`) su un disco vergine.

**Attenzione:** Qui usiamo un trucco importante. Configuriamo QEMU con `virtio-scsi` invece di `virtio-blk`. Questo fa apparire il disco come `/dev/sda` (invece di `/dev/vda`), garantendo che l'installer Krill lo rilevi correttamente senza configurazioni manuali.

```bash
# Nuovo disco vuoto
cp /usr/share/qemu-efi-riscv64/RISCV_VIRT_VARS.fd naked-efi-vars.fd
qemu-img create -f qcow2 naked-riscv.img 10G

# Boot della nostra ISO
qemu-system-riscv64 \
  -nographic \
  -machine virt \
  -m 2G \
  -smp 4 \
  -drive if=pflash,format=raw,unit=0,file=/usr/share/qemu-efi-riscv64/RISCV_VIRT_CODE.fd,readonly=on \
  -drive if=pflash,format=raw,unit=1,file=./naked-efi-vars.fd \
  -device virtio-scsi-device,id=scsi0 \
  -drive file=naked-riscv.img,format=qcow2,id=hd0,if=none \
  -device scsi-hd,drive=hd0,bus=scsi0.0 \
  -drive file=egg-of_debian-trixie-naked_riscv64_XXXX.iso,format=raw,id=cd0,media=cdrom,readonly=on,if=none \
  -device scsi-cd,drive=cd0,bus=scsi0.0 \
  -device virtio-net-device,netdev=net0 \
  -netdev user,id=net0  
```

Se vedete il menu di GRUB e l'installer parte... complimenti! Avete appena creato la vostra distribuzione Linux per RISC-V.

## 6. Dal Virtuale al Reale: e le schede fisiche?
Una domanda legittima è: *ma questa ISO funzionerà sulla mia scheda VisionFive 2, Star64 o LicheePi 4A che usa U-Boot?*

La risposta è **sì**.

Non c'è bisogno di scrivere complessi script per U-Boot. Le moderne implementazioni di U-Boot su queste schede offrono un layer di compatibilità **UEFI standard**.

Qui entra in gioco l'importanza strategica del fix che abbiamo introdotto in Eggs (il flag `--removable`):
1.  Eggs installa GRUB nel percorso di fallback standard UEFI: `/EFI/BOOT/BOOTRISCV64.EFI`.
2.  Quando accendete la vostra scheda, U-Boot (che agisce come un BIOS) scansiona i dischi, trova questo file standard e lo avvia automaticamente.

Quindi, fintanto che la vostra scheda ha un firmware U-Boot aggiornato nella flash SPI, potrete avviare e installare la vostra distribuzione personalizzata esattamente come fareste su un normale PC, senza dover modificare una singola riga di codice o configurazione.

---

## Ubuntu 26.04 (Resolute Raccoon)
Oggi, 10 gennaio 2026, ho replicato con successo il lavoro di rimasterizzazione su Ubuntu 26.04 "Resolute Raccoon", ottenendo una ISO perfettamente avviabile e installabile.

Potete trovare i dettagli tecnici e la documentazione su [Ubuntu RISC-V](https://github.com/pieroproietti/penguins-eggs/blob/master/architectures/UBUNTU-RISCV.md).

Questo risultato è particolarmente significativo perché la prossima LTS, Ubuntu Resolute, impone requisiti molto più stringenti rispetto a Debian Trixie per quanto riguarda le specifiche dell'architettura RISC-V e la conformità UEFI.

### Conclusioni
Il supporto RISC-V in Penguins-Eggs non è più sperimentale: è solido e ricorsivo. Questo apre le porte alla creazione di sistemi custom per il crescente ecosistema hardware RISC-V, con la stessa semplicità e potenza che gli utenti di Eggs apprezzano su x86 e ARM.

Il codice è libero, l'uovo è tratto. Buon divertimento! 🐧🥚

Potete trovare le immagini ISO ottenute nel mio drive [ISOS-NAKED-RISCV64](https://drive.google.com/drive/folders/19ees30PC4u0XEqyw9TYYEmqEGVWvTOay) o sulla pagina [penguins-eggs](https://sourceforge.net/projects/penguins-eggs/) di sourceforge.
