---
title: "OADC 2026 - Preface"
authors: pieroproietti
tags: [openkylin, penguins-eggs, oadc2026]
description: "Key questions and storyline for the openKylin Open Source Forum at OADC 2026 in Zhengzhou"
lang: en
enableComments: true
---

import Translations from '@site/src/components/Translations';

<Translations />

## 1. How I first came across openKylin

As the author of `penguins-eggs`—a polymorphic remastering tool written in Go that turns running Linux systems into installable live ISOs—I am constantly looking for distributions that push the boundaries of the Linux ecosystem across `x86_64`, `ARM64`, and `RISC-V`.

I first came across **openKylin** while exploring the Chinese open-source landscape and its strong focus on independent desktop development and RISC-V hardware. Testing `penguins-eggs` on openKylin was a natural challenge: I wanted to verify if my family-based detection engine (which parses `/etc/os-release` to map distributions to core families like Debian, Arch, Alpine, and openSUSE) could seamlessly adapt to a flagship independent distribution.

---

## 2. How I used penguins-eggs to create two editions: Naked and XFCE4

Using `penguins-eggs` alongside its declarative provisioning engine (`penguins-chef`), I applied a modular approach to openKylin, first creating the `naked` version, just a remaster of the server edition capable to be installed, then creating `colibri` my custom workstation where I can develop penguins-eggs in my same familiar context but using different distros:

* **The `naked` Edition (Pure CLI Seed):** By stripping away the graphical layer down to a minimal, rock-solid core, I generated an ultra-lightweight command-line live ISO installable via **Krill** (our TUI system installer). This "Darwinian" seed contains only the essential structural genome of openKylin, making it ideal for servers, containers, virtual machines, or as a clean starting point for developers to build their own custom systems.
* **The `xfce4` Edition (Lightweight Desktop):** Starting from the minimal `naked` base (or directly remastering the system via YAML recipes), I dressed openKylin with **XFCE4** and the **Calamares** graphical installer. This edition offers a fast, traditional, and low-resource desktop environment that runs smoothly even on older hardware or resource-constrained virtual machines, while preserving full compatibility with openKylin's underlying repositories and kernel.

Furthermore, with the `--clone` flag (a "Lamarckian" remaster), any user working on these editions can encapsulate their personal `/home` and custom configurations into a protective ISO membrane, ready to be restored onto a new machine if their hardware fails.

I was also sorry to see that Plasma, GNOME, and other desktop environments are no longer supported; while I find it a real pity from my perspective, I fully understand the reasoning behind this choice.

---

## 3. The challenges encountered and how I tackled them

While openKylin belongs to the Debian family at its core, it introduces specific security and architectural mechanisms that required tailored engineering inside `penguins-eggs`:

* **Bypassing the Bootloader ESP Lock:** In openKylin, `/usr/sbin/grub-install` is replaced by a Python 3 wrapper that checks the EFI System Partition against a hardcoded UUID (`2C9D-17A5`), aborting third-party installations (`Krill` or `Calamares`) with the error: `Refusing to update an ESP belonging to another installation`. I solved this by having `eggs` automatically restore the original GNU GRUB binary (`/usr/sbin/grub-install.openkylin-original`) during installation, while removing OEM installer hooks (`/etc/grub.d/42_openkylin_multiboot` and `/etc/openkylin-installer`) and excluding them from the live ISO.
* **Live Initramfs & Virtualization Modules:** To guarantee reliable live booting across bare metal and hypervisors (KVM/QEMU/Proxmox), I configured `eggs` to explicitly inject `virtio_pci`, `virtio_blk`, `virtio_scsi`, `isofs`, and `overlay` modules into `/etc/initramfs-tools/modules` before generating the initramfs, and updated package dependencies to support `busybox-initramfs | busybox-static`.
* **Fixing Mouse Offset in Virtual Machines (`eggs adapt`):** When resizing a VM display via `xrandr` under SPICE, the cursor coordinate matrix did not recalculate automatically, causing a pointer offset. I updated `eggs adapt` to restart `spice-vdagent` immediately after running `xrandr`, realigning the mouse cursor on the fly without logging out.

---

## 4. What we achieved so far: the results of this work

Today, **openKylin is supported as a first-class citizen** in `penguins-eggs`:

1. **Native Support & Inheritance:** `openkylin` is natively mapped in `distro.go` and indexed in `index.yaml` to dynamically inherit Debian family templates, scripts, and `wardrobe` costumes.
2. **Continuous Automated Testing ("The Furnace"):** openKylin is integrated into my automated Proxmox VE CI pipeline (`furnace-openkylin.yml`), where every commit is validated through an end-to-end remastering process and a clean-snapshot boot test.
3. **Freedom to Remaster:** Any openKylin developer or user can now generate custom `naked` servers, lightweight `xfce4` or `ukui` customized  workstations, or full personal backups in minutes with a single command (`sudo eggs produce`).

