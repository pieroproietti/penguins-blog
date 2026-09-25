#!/bin/bash
# Import penguins-eggs documentation into the blog mirror (./penguins-eggs).
# Usage: ./import-penguins-eggs-docs.sh [path-to-penguins-eggs-DOCS]
#
# The source of truth is penguins-eggs/DOCS; never edit ./penguins-eggs by hand.
# Blog-specific files (index.md, _category_.json) are preserved.
set -e

SRC="${1:-$HOME/forge/penguins-eggs/DOCS}"
DEST="$(cd "$(dirname "$0")" && pwd)/penguins-eggs"

if [ ! -d "$SRC" ]; then
    echo "❌ Sorgente non valida: $SRC" >&2
    exit 1
fi

rsync -a --delete --exclude '_category_.json' --exclude 'index.md' --exclude 'README.md' "$SRC/" "$DEST/"

echo "✅ Mirror penguins-eggs sincronizzato da $SRC"
echo "   Ricorda: pnpm build per verificare prima del commit."
