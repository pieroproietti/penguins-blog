---
sidebar_position: 1
title: penguins-gui
description: Minimal, independent desktop Graphical User Interface (GUI) for Penguins' Eggs written in Go with Fyne.
---

# penguins-gui

**penguins-gui** is a minimal, independent desktop Graphical User Interface (GUI) for [Penguins' Eggs](https://github.com/pieroproietti/penguins-eggs), developed in **Go** using the modern cross-platform **[Fyne](https://fyne.io)** toolkit.

It brings the power of `eggs` remastering directly to desktop environments, enabling users to launch remastering flights, monitor live execution logs, configure encryption passphrases visually, and run system setup tasks without touching the command line.

---

## 🏗️ Architectural Placement

`penguins-gui` is designed with strict modular separation:

```text
penguins-gui (Desktop GUI) -> eggs (CLI) -> coa (Go Orchestrator) -> oa (C Engine)
```

- **Zero Coupling**: `penguins-gui` does not import `eggs` internals. It operates strictly by orchestrating the official CLI and system utilities.
- **Privilege Separation**: Ordinary desktop sessions run as standard user space. Only the underlying commands requiring system mutations are elevated via `pkexec` (Polkit) or `sudo`.
- **Independent Lifecycle**: `penguins-gui` can be launched even on a fresh system where `penguins-eggs` has not yet been installed.

---

## 🚀 Core Features

### 1. Remastering Flights
From the main window, users can select one of three remastering modes and initiate the flight with a single click:
- **Standard Live**: Produces a clean, bootable live hybrid ISO with standard live credentials.
- **System Clone (`--clone`)**: Captures the running system, preserving real user accounts, credentials, and `/home` data.
- **Crypted Clone (`--crypted`)**: Generates a LUKS2-encrypted squashfs live image (Debian family). A dedicated graphical dialog prompts for the passphrase, automatically passing it via `EGGS_LUKS_PASSPHRASE`.

### 2. Live Execution Stream & ISO Discovery
- **Real-time Terminal Output**: Displays unified standard output and error streams in a live scrolling terminal view with **Clear** and **Copy** actions.
- **Artifact Discovery**: Once the build completes, the GUI scans `/home/eggs`, identifies the generated `.iso` image, and provides an **Open ISO Directory** button to open the folder directly in your desktop file manager via `xdg-open`.
- **Process Guard**: Prevents closing the window while a remastering flight is actively running to avoid orphaned chroot mounts.

---

## 🛠️ Automated Setup & Package Management

The **Edit** menu provides integrated helpers that make preparing a remastering host seamless:

### 📥 Install penguins-eggs CLI
- Can be invoked on a machine before `penguins-eggs` is installed.
- Automatically configures the official repository and signing GPG keys for your distribution (Debian/Ubuntu, Arch/Manjaro, Fedora, openSUSE, Alpine).
- Refreshes package caches and installs the `penguins-eggs` package.
- The GUI detects the new CLI immediately and unlocks remastering actions without requiring a restart.

### 🎨 Install Calamares (with Qt5/Qt6 Runtime Discovery)
- Installs the standard Calamares installer package via the native package manager.
- Inspects the installed Calamares binary using `ldd` to determine whether it is built against **Qt 5** or **Qt 6**.
- Automatically pulls and installs the matching QML and Quick Controls runtime dependencies required for smooth slideshows (supporting `slideshowAPI: 2`).

### ⚙️ System Utilities & Maintenance
- **Update /etc/skel** (`eggs tools skel`): Clones the visual and shell configuration of the current user into `/etc/skel`, ensuring new users and live sessions inherit the exact look and feel of the desktop.
- **Configure grub40** (`eggs tools grub40`): Generates or updates GRUB loopback configuration in `/etc/grub.d/40_custom` to boot ISO images directly from the local hard drive.
- **Clean System** (`eggs tools clean`): Cleans active logs and package manager caches (`apt`/`pacman`).
- **Destroy / Kill** (`eggs destroy`): Safely unmounts virtual filesystems (`MNT_DETACH`) and wipes temporary build nests after an interrupted flight.

---

## 📋 Requirements

- **Operating System**: Linux with an active X11 or Wayland desktop session.
- **Authentication**: Polkit (`pkexec`) or `sudo` for administrative actions.
- **Graphics & Toolkit**: OpenGL-capable display driver and distribution dependencies for [Fyne](https://docs.fyne.io/started/).
- **Dependencies**: `curl`, `gpg` (on Debian family), and `eggs` (can be installed via the GUI menu).

---

## 💻 Source Code & Packages

- **Source Repository**: [https://github.com/pieroproietti/penguins-gui](https://github.com/pieroproietti/penguins-gui)
- **Local Development**:
  ```bash
  git clone https://github.com/pieroproietti/penguins-gui.git
  cd penguins-gui
  go mod tidy
  go run .
  ```
- **Native Packaging**:
  Supports building native distribution packages (`.deb`, `.rpm`, `.pkg.tar.zst`):
  ```bash
  make build
  make package
  ```
