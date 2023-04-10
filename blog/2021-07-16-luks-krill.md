---
authors: pieroproietti
slug: luks-krill
title: LUKS krill
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />


Cercando di capire come far funzinare krill con luks, vediamo come viene impostato luks per l'installazione fullencrypted su una VM con /dev/sda di 32 GB con Ubuntu.

## BIOS STANDARD 
![luks-standard](/images/luks-bios.png)
gpt

## fstab
```
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
/dev/mapper/vgkubuntu-root /               ext4    errors=remount-ro 0       1
# /boot was on /dev/sda3 during installation
UUID=6ed10a98-b94a-4ad9-9a4a-59d17511170d /boot           ext4    defaults        0       2
# /boot/efi was on /dev/sda2 during installation
UUID=CDA5-A018  /boot/efi       vfat    umask=0077      0       1
/dev/mapper/vgkubuntu-swap_1 none            swap    sw              0       0
```

Si usa LVM i dischi sono sia in /dev/vgname/root, /dev/vgname/swap_1 che su /dev/mapper/vgname-root,  /dev/mapper/vgname-swap_1


```
artisan@kde:~$ sudo pvscan 
  PV /dev/mapper/sda4_crypt   VG vgkubuntu       lvm2 [30,76 GiB / 32,00 MiB free]
  Total: 1 [30,76 GiB] / in use: 1 [30,76 GiB] / in no VG: 0 [0   ]

artisan@kde:~$ sudo vgscan 
  Found volume group "vgkubuntu" using metadata type lvm2

artisan@kde:~$ sudo lvscan 
  ACTIVE            '/dev/vgkubuntu/root' [<29,78 GiB] inherit
  ACTIVE            '/dev/vgkubuntu/swap_1' [976,00 MiB] inherit
```

Quello che non capisco è come vengono creati.


## /dev/sda (omterp disco)

```
Disk /dev/sda: 32 GiB, 34359738368 bytes, 67108864 sectors
Disk model: QEMU HARDDISK   
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A7049CC0-4048-4722-96CE-79D917814679

Dispositivo   Start     Fine  Settori  Size Tipo
/dev/sda1      2048     4095     2048    1M BIOS boot
/dev/sda2      4096  1054719  1050624  513M EFI System
/dev/sda3   1054720  2553855  1499136  732M Linux filesystem
/dev/sda4   2553856 67106815 64552960 30,8G Linux filesystem

```

### dev/sda1
```
Disk /dev/sda1: 1 MiB, 1048576 bytes, 2048 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

### dev/sda2
```
Disk /dev/sda2: 513 MiB, 537919488 bytes, 1050624 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x00000000
```

### dev/sda3
```
Disk /dev/sda3: 732 MiB, 767557632 bytes, 1499136 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

### dev/sda4
```
Disk /dev/sda4: 30,78 GiB, 33051115520 bytes, 64552960 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

```

### mount bios-standard

```
/dev/mapper/vgkubuntu-root on / type ext4 (rw,relatime,errors=remount-ro)
/dev/sda3 on /boot type ext4 (rw,relatime)
/dev/sda2 on /boot/efi type vfat (rw,relatime,fmask=0077,dmask=0077,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro)

```




## UEFI
![uefi](/images/uefi.png)

gpt 
```
Disk /dev/sda: 32 GiB, 34359738368 bytes, 67108864 sectors
Disk model: QEMU HARDDISK   
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 3CE9FDC3-8217-4A4B-A31F-8A8C39E37B80

Dispositivo   Start     Fine  Settori  Size Tipo
/dev/sda1      2048  1050623  1048576  512M EFI System
/dev/sda2   1050624  2549759  1499136  732M Linux filesystem
/dev/sda3   2549760 67106815 64557056 30,8G Linux filesystem
```

### dev/sda1
```
Disk /dev/sda1: 512 MiB, 536870912 bytes, 1048576 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x00000000

```

### dev/sda2
```
Disk /dev/sda2: 732 MiB, 767557632 bytes, 1499136 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

```

### dev/sda3
```
Disk /dev/sda3: 30,78 GiB, 33053212672 bytes, 64557056 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

```

# mount uefi

```
/dev/mapper/vgkubuntu-root on / type ext4 (rw,relatime,errors=remount-ro)
/dev/sda2 on /boot type ext4 (rw,relatime)
/dev/sda1 on /boot/efi type vfat (rw,relatime,fmask=0077,dmask=0077,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro)
```
