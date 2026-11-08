---
title: "OADC 2026 - Appendix B: RISC-V and ARM64"
authors: pieroproietti
tags: [openkylin, penguins-eggs, riscv64, arm64, oadc2026]
description: "Multi-architecture support in penguins-eggs: engineering status for RISCV64 and ARM64, from Pure UEFI ISOs to raw disk images and hardware validation"
lang: en
enableComments: true
---

import Translations from '@site/src/components/Translations';

<Translations />

Bringing a universal remastering engine beyond `x86_64` requires adapting not just the compiler toolchain, but the entire boot sequence, partition layout, and image generation pipeline. Here is the current technical status of **RISCV64** and **ARM64** (`aarch64`) support inside `penguins-eggs`, along with our roadmap for bare-metal validation.

---

## 1. RISCV64 Architecture Support

Support and build pipelines for the `riscv64` architecture are already written, compiled, and integrated directly into the `penguins-eggs` codebase:

* **Compilation & Packaging (`build.go`):** The builder natively handles `riscv64` and its architecture-specific dependencies, including `gdisk` and `genimage`. In our CI pipeline (`.github/workflows/hammers.yml`), a dedicated `debian-riscv64` job cross-compiles the binary suite using `gcc-riscv64-linux-gnu` and `qemu-riscv64-static`.
* **Remastering & Bootloader:** During the remastering phase (`coa/pkg/cmd/remaster.go`), `eggs` includes dedicated logic for Device Tree Blob (DTB) management and hardware detection for **SpacemiT K1 / MuseBook M1** systems. It maps and copies UEFI binaries (`BOOTRISCV64.EFI`) in `bootloader-copy.sh`, supports the `riscv64-efi` GRUB target across Debian, Arch, Fedora, openSUSE, and Alpine templates, and configures pure UEFI boot via `xorriso`.
* **Krill Installer & Dedicated Hardware:** For bare-metal installation, our TUI installer (**Krill**) implements the specific 6-partition layout and `bootfs` structure required by SpacemiT K1 / MuseBook SoCs (`partition.go`), complete with NVMe bus scanning and U-Boot flashing routines (`spacemit/`).

---

## 2. ARM64 (`aarch64`) Architecture Support

The `arm64` architecture is fully supported and integrated across all stages of the build and remastering lifecycle:

* **Compilation & CI ("The Furnace"):** In `hammers.yml`, a dedicated `debian-arm64` pipeline compiles the project via cross-toolchain (`gcc-aarch64-linux-gnu`, `libcrypt-dev:arm64`, and `qemu-aarch64-static`) to produce native `.deb` packages:

```bash
make package GOOS=linux GOARCH=arm64 CC=aarch64-linux-gnu-gcc RUNNER=qemu-aarch64-static
```

* **Builder & Dependencies (`build.go`):** Dependency resolution for `arm64`, `armhf`, and `armel` is natively configured with `genimage` and `grub-efi-arm64-bin`, strictly adhering to standard Debian architecture naming conventions.
* **Bootloader & Remastering:** `eggs` handles the generation and copying of `BOOTAA64.EFI` (`grubaa64.efi`) via `bootloader-copy.sh:58-75` and enables *Pure UEFI boot* mode in `xorriso.go:69`. The `arm64-efi` GRUB target is integrated across all supported distribution families (Debian/Ubuntu/openKylin, Arch/Manjaro, Fedora, openSUSE, and Alpine), while `xz` SquashFS compression is automatically tuned to avoid x86 BCJ filters on ARM64.

---

## 3. Image Generation: Hybrid ISO vs. Raw Disk Image

While the high-level remastering philosophy remains identical across architectures, the final bootable artifact must adapt to how different platforms handle firmware and storage:

* **On ARM64 (Production-Ready):** Modern ARM64 platforms—including servers, QEMU/KVM virtual machines, Apple Silicon Macs running Linux, Raspberry Pi boards with EDK2 UEFI firmware, and Oracle Ampere instances—rely on standard AArch64 UEFI. Consequently, our standard `xorriso` pipeline (*Pure UEFI boot* via `BOOTAA64.EFI`) works natively out of the box.
Anche disponendo solo di una comune Raspberry 4, ho fatto numerosi test nel passato configurandola come un server proxmox grazie al progetto cinese 
* **On RISCV64 (Bridging Raw Images and UEFI ISOs):** Current first-generation RISC-V boards (such as the SpacemiT K1 / MuseBook M1) do not yet use standard UEFI firmware to boot from traditional CD-ROM ISO images. Instead, they rely on **U-Boot/OpenSBI** with a hardware-specific Device Tree (`.dtb`) and expect multi-partition raw disk images (`.raw` / `.img` containing `bootinfo`, `fsbl`, `env`, `opensbi`, `uboot`, `bootfs`, and `rootfs`) built via `genimage`.

  In `generate-plan.go`, `eggs` intercepts `riscv64` targets to replace the `xorriso` step with `make-img` (`genimage`). Our next milestone is refining and validating this dual output on real hardware: generating both **flashable `.img` raw disk images** for current U-Boot SBCs/laptops and **standard UEFI hybrid ISOs** for upcoming UEFI-compliant RISC-V systems.


The solution is naturally to use the ISO format for everyone, as I have been doing for years on ARM using a Raspberry Pi 4 and the work of Chinese developer **jiangcuo**, who in recent years managed the famous **Proxmox-Portéé ecosystem, now [pxvirt](https://github.com/jiangcuo/pxvirt).

---

## 4. Hardware Support: A Call for Silicon

Before concluding, I want to share a very concrete reality of independent open-source development.

Today, **our software is literally ahead of the hardware sitting on my desk**. Inside our codebase, support for both ARM64 and RISC-V 64 is already written, compiled, and integrated. We have built the cross-compilation pipelines, configured the Pure UEFI bootloaders—`BOOTAA64.EFI` and `BOOTRISCV64.EFI`—and even implemented dedicated partitioning layouts for early RISC-V hardware like the SpacemiT K1.

However, generating and validating live filesystems, SquashFS compression, and bare-metal installers through software emulation is a prohibitive task. Emulation hits a wall right where we need to test real-world machine behavior, firmware handoffs, and storage controllers.

I would like to close this talk with a direct invitation to the hardware manufacturers and ecosystem partners here today. To bring universal, one-command remastering for openKylin, Debian, Arch, Fedora, and openSUSE to your architectures, `penguins-eggs` only needs two physical machines on the testbench:

1. **An RVA23 and BRS (Boot and Runtime Services) compliant RISC-V system**—such as the upcoming **SpacemiT K3**—to validate direct, standard UEFI ISO booting on real silicon.
2. **An ARM64 SystemReady-compliant machine** for native verification of AArch64 live ISOs and bare-metal installations.

The code is ready. If you provide the silicon, I will make sure that any Linux developer or user can remaster, clone, and deploy their system on your hardware with a single command.

Thank you!
