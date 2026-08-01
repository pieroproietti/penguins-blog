---
slug: /
sidebar_position: 1
title: penguins-eggs
---

# 🥚 penguins-eggs

**penguins-eggs** is the next-generation remastering suite, the architectural successor of [penguins-eggs-legacy](https://github.com/pieroproietti/penguins-eggs-legacy). It turns a running Linux system into a bootable hybrid ISO (UEFI + BIOS), powered by two static binaries:

- **`coa`** (Go) — the Mind: reads the Brain templates, compiles the flight plan, drives the whole process;
- **`oa`** (C) — the Arm: executes the plan close to the metal, delegating high-level tasks back to the Go worker (`coa ell`).

Supported today: **Alpine, Arch, Debian, Fedora, Manjaro, openSUSE** and derivatives.

> Source: [github.com/pieroproietti/penguins-eggs](https://github.com/pieroproietti/penguins-eggs) — this documentation mirrors the repository's `DOCS/` tree.

## Where to start

- New to the project? Read the [Manifestum](1-philosophy/1-manifestum.md) or [Philosophy](1-philosophy/2-philosophy.md) — origins and the three-actor model.
- Want the big picture of the orchestrator? [Architecture overview](3-developer-manual/architecture/1-overview.md).
- Curious about the C engine? [The C Arm: oa](3-developer-manual/architecture/3-oa.md) and its Go counterpart [coa ell](3-developer-manual/architecture/4-ell.md).
- Ready to use it? [Command reference](2-user-manual/2-commands.md) and [Building from source](3-developer-manual/architecture/2-building.md).
