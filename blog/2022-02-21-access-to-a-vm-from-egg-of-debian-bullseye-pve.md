---
authors: pieroproietti
slug: access-to-a-vm-from-egg-of-debian-bullseyes-pve
title: Access to a VM from egg-of-debian-bullseyes-pve
lang: it
---


# egg-of-debian-bullseye-pve

Possiamo utilizzare la nostra immagine iso in molteplici situazioni:

* sperimentare le possibilità della nostra iso creando all'interno di una installazione di Proxmox VE una VM abilitata per la virtualizzazione nested;
* utilizzare egg-of-debian-bullseye-pve per avviare un server Proxmox e montare una VM dello stesso.
* installazione Proxmox VE completa di Workstation;

## Primi passi

 Per sperimentare, la possibilità più semplice è quella di creare una VM con processore host, allo scopo di permettere la virtualizzazione nested.

Andiamo quindi a creare la nostra macchina, non servirà neppure un volume di installazione, in quanto utilizzeremo la VM solo in modalità live.

## Creazione di real-storage
Una volta avviata la nostra live con proxmox, dovremo naturalmente create uno storage reale, dove avremo i dischi e le iso delle nostre macchine virtuali.

Per simulare la presenza di uno storage sulla nostra live, andremo a montare con sshfs lo storage della installazione ospitante, normalmente presente in '''/var/lib/vz```

```
mkdir /real-storage
sshfs root@192.168.61.2:/var/lib/vz /real-storage
```
Vediamo cosa contiene il nostro storage:
```
dump  images  private  snippets  template
```

Non ci resta che montare questo real-storage sulla nostra live, attraverso l'interfaccia di Proxmox-VE.

Selezioniamo data center, quindi "Storage" e clicchiamo su Add. Andremo ad aggiungere lo storage come directory.

![add-real-storage](/images/proxmox-ve-live-add-real-storage.png)

Abbiamo visto che il nostro "real storage" contiene ```dump  images  private  snippets  template``` per cui nel nostro storage configuriamo:

Disk Imange, ISO image, tralasciando il resto.

![add-real-storage](/images/proxmox-ve-live-add-real-storage-2.png)

Queste sono le nostre immagini delle VM dell'ospite
![add-real-storage](/images/proxmox-ve-live-add-real-storage-3.png)

E quest'altre le varie immagini iso presenti sull'host
![add-real-storage](/images/proxmox-ve-live-add-real-storage-4.png)


## Creare una VM sulla live utilizzando lo storage-real

A questo punto non ci resta che copiare la configurazione della macchina che ci interessa, dall'installazione reale alla nostra home:

```
scp root@192.168.61.2:/etc/pve/qemu-server/300.conf .
```

ed otterremo il seguente file di configurazione:

```
bios: ovmf
boot: order=scsi0;ide2;net0
cores: 2
efidisk0: local:300/vm-300-disk-0.qcow2,efitype=4m,pre-enrolled-keys=1,size=528K
ide2: local:iso/archlinux-2022.02.01-x86_64.iso,media=cdrom
memory: 8192
meta: creation-qemu=6.1.1,ctime=1644734076
name: kisslinux
net0: virtio=96:2F:E5:8A:35:3D,bridge=vmbr0,firewall=1
numa: 0
ostype: l26
scsi0: local:300/vm-300-disk-1.qcow2,size=32G
scsihw: virtio-scsi-pci
smbios1: uuid=81f92f87-08cd-4e1b-bc0a-bc4f16d2f409
sockets: 2
vga: qxl
vmgenid: fa898e0a-1d56-4e1c-bbda-1aa489d5dae4
```
andiamo a sostituire, allo storage local lo storage real-storage, come nell'esempio seguente:

```
bios: ovmf
boot: order=scsi0;ide2;net0
cores: 2
efidisk0: real-storage:300/vm-300-disk-0.qcow2,efitype=4m,pre-enrolled-keys=1,size=528K
ide2: real-storage:iso/archlinux-2022.02.01-x86_64.iso,media=cdrom
memory: 8192
meta: creation-qemu=6.1.1,ctime=1644734076
name: kisslinux
net0: virtio=96:2F:E5:8A:35:3D,bridge=vmbr0,firewall=1
numa: 0
ostype: l26
scsi0: real-storage:300/vm-300-disk-1.qcow2,size=32G
scsihw: virtio-scsi-pci
smbios1: uuid=81f92f87-08cd-4e1b-bc0a-bc4f16d2f409
sockets: 2
vga: qxl
vmgenid: fa898e0a-1d56-4e1c-bbda-1aa489d5dae4
```

Copiamo la configurazione su /etc/pve/qemu-server ed opla, la nostra macchina è apparsa.

Per renderla avviabile, dal momento che non abbiamo ancora creato un bridge per la rete, per semplicità rimuoveremo la stessa.

La nostra immagine sta facendo girare una VM del sistema ospitante!
![proxmox-ve-lite-running-kisslinux](/images/proxmox-ve-live-running-kisslinux.png)

A che serve? Ancora non lo sò, ma è davvero carino e potente.

Per chi volesse sperimentare sull'argomento, è a disposizione una [egg-of-debian-bullseye-pve](https://sourceforge.net/projects/penguins-eggs/files/iso/proxmox-ve/) con la quale è stato eseguito l'esperimento ed, aventualmente, sono disponibili anche immagini di VM.

