---
title: arm64 on proxmox ve
layout: post
date: 2020-12-06 09:39:09
---

following
https://www.reddit.com/r/Proxmox/comments/ed2ldo/installing_and_launching_an_arm_vm_from_proxmox/


bios ovmf
1 core
1 socket



cd /etc/pve/qemu-server
nano 102.conf

inserire:
Change arch to aarch64

Add boot: dcn

```
arch: aarch64
bios: ovmf
boot: dcn
cores: 1
memory: 2048
name: debianArm64
net0: virtio=AA:2A:4D:35:CC:2B,bridge=vmbr0,firewall=1
numa: 0
ostype: l26
scsi0: local:102/vm-102-disk-0.qcow2,size=32G
scsi2: none,media=cdrom
scsihw: virtio-scsi-pci
serial0: socket
smbios1: uuid=1c3b7f02-8ffa-4588-96f9-07305a3a39db
sockets: 1
vga: serial0
vmgenid: 384a3fe9-4ed8-4ca4-b2d2-efb4151cc876

```qm set 102 -efidisk0 local:1,format=raw```
