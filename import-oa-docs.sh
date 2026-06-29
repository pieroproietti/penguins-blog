#!/bin/bash
# Import penguins-eggs documentation into the blog mirror (./penguins-eggs).
# Usage: ./import-oa-docs.sh [path-to-penguins-eggs-DOCS]
#
# The source of truth is penguins-eggs/DOCS; never edit ./penguins-eggs by hand.
# Blog-specific files (index.md, _category_.json) are preserved.
set -e

SRC="${1:-$HOME/forge/penguins-eggs/DOCS}"
DEST="$(cd "$(dirname "$0")" && pwd)/penguins-eggs"

if [ ! -d "$SRC/architecture" ]; then
    echo "❌ Sorgente non valida: $SRC (manca architecture/)" >&2
    exit 1
fi

for dir in architecture design development manual; do
    rsync -a --delete --exclude '_category_.json' "$SRC/$dir/" "$DEST/$dir/"
done

# Root-level docs (skip README.md — the blog has its own index.md)
rsync -a --exclude 'README.md' --include '*.md' --exclude '*' "$SRC/" "$DEST/"

echo "✅ Mirror penguins-eggs sincronizzato da $SRC"
echo "   Ricorda: pnpm build per verificare prima del commit."
