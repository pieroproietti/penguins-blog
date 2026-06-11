---
slug: /
sidebar_position: 1
title: oa-tools
---

# 🥚 oa-tools

**oa-tools** is the next-generation remastering suite, the architectural successor of [penguins-eggs](https://github.com/pieroproietti/penguins-eggs). It turns a running Linux system into a bootable hybrid ISO (UEFI + BIOS), powered by two static binaries:

- **`coa`** (Go) — the Mind: reads the Brain templates, compiles the flight plan, drives the whole process;
- **`oa`** (C) — the Arm: executes the plan close to the metal, delegating high-level tasks back to the Go worker (`coa ell`).

Supported today: **Alpine, Arch, Debian, Fedora, Manjaro, openSUSE** and derivatives.

> Source: [github.com/pieroproietti/oa-tools](https://github.com/pieroproietti/oa-tools) — this documentation mirrors the repository's `DOCS/` tree.

## Where to start

- New to the project? Read the [Philosophy](design/philosophy.md) — the three-actor model in two pages.
- Want the big picture of the orchestrator? [Architecture overview](architecture/overview.md).
- Curious about the C engine? [The C Arm: oa](architecture/oa.md) and its Go counterpart [coa ell](architecture/ell.md).
- Ready to use it? [Command reference](manual/commands.md) and [Building from source](development/building.md).
