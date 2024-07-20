---
authors: pieroproietti
slug: ancora-su-raspberry
title: "ancora su raspberry"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />


# Creazione di una immagine raspberry custom

Lavorare con taspberry è bellissimo, tuttavia dal punto di vista della rimasterizzazione abbiamo un problema: la mancanza di grub e la presenza di uboot.

Non sarebbe nemmeno male, ma eggs è strutturato per lavorare con grub ed isolinux, calamares lo stesso, quindi sinora le immagini realizzate per amd64 
hanno girato esclusivamente su una versione di Proxmox VE come macchine virtualizzate su un Raspberry 4.

In questo modo abbiamo a disposizione una modalità di installazione standard ed in effetti inizializzando il lettore di CD con la notra immagine ISO riusciamo ad installare regolarmente il sistema con calamares.

Tuttavia, abbiamo bisogno di far girare il nostro lavoro su hardware reale e non emulato e ci scontriamo con l'assenza di un lettore CDROM, l'assenza di grub, etc.

Ho quindi provato a creare una immagine .img per rapberry `raspi.img` partendo dall'immagine lite, e metterla su chiavetta USB per vedere cosa succede.

# Scaricare immagine raspi 2024-07-04-raspios-bookworm-arm64-lite.img.xz

## decomprimere l'immagine
```
unxz 2024-07-04-raspios-bookworm-arm64-lite.img.xz -k
```
## Ridenominazione dell'immagine

```
mv 2024-07-04-raspios-bookworm-arm64-lite.img raspi.img
```
La nostra immagine root=PARTUUID=a3f161f3-02

## Aggiungere lo spazio necessario
Poichè il filesystem rootfs della mia raspberry ha circa 6GB di dati, mentre l'immagine lite ha circa 2,1 GB di spazio, occorre ingrandire l'immagine. Utilizzeremo il comando qemu-img resize:

```
qemu-img resize -f raw raspi.img +5G
```

## Associa il file .img a un dispositivo loop:
```
sudo losetup -fP raspi.img
```

## verifica
```
sudo losetup -a
```

## espansione della partizione con gparted
```
sudo gparted /dev/loop0
```

## Creazione dei dispositivi di mappatura delle partizioni:
```
sudo kpartx -av /dev/loop0
```

## Verifica i dispositivi di mappatura creati:
```
ls /dev/mapper
```


## monta rootfs
```
sudo mount /dev/mapper/loop0p2 /mnt/rootfs
```

## esegui copia
```
sudo rsync -aAXv /zfs/raspi_backup/rootfs/ /mnt/rootfs/
sudo nano /mnt/rootfs/etc/fstab
```
Ed impostare fstab come segue:

```
Proc            /proc           proc    defaults          0       0
PARTUUID=a3f161f3-01  /boot/firmware  vfat    defaults          0       2
PARTUUID=a3f161f3-02  /               ext4    defaults,noatime  0       1
```

## monta bootfs
```
sudo mount /dev/mapper/loop0p1 /mnt/bootfs
```

```
sudo rsync -aAXv /zfs/raspi_backup/bootfs/ /mnt/bootfs/
```

##  edit /mnt/bootfs/cmdline.txt
```
sudo nano /mnt/bootfs/cmdline.txt
```

edita cmdline e rimetti la partizione corretta
```
console=serial0,115200 console=tty1 root=PARTUUID=a3f161f3-02 rootfstype=ext4 fsck.repair=yes rootwait splash quiet splash plymouth.ignore-serial-console
```

## smonta
```
sudo umount /mnt/bootfs
sudo umount /mnt/rootfs
```

## Rimuovi i dispositivi di mappatura delle partizioni:
```
sudo kpartx -d /dev/loop0
```

## Rilascia il dispositivo loop:
```
sudo losetup -d /dev/loop0
```
# Scrittura dell'immagine su MMC o chiavetta
A questo punto non ci rimane altro che scrivere la nostra immagine su una microsd o una chiavetta USB. Utilizzeremeo `rpi-installer` selezionando immagine custom e quindi la nostra immagine `raspi.img`.

Terminata la scrittura non ci resta che avviare il nostro raspberry e goderci l'ebbrezza del boot con la nostra immagine.



