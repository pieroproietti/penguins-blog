#!/bin/bash
# Import oa-tools documentation into the blog mirror (./oa-tools).
# Usage: ./import-oa-docs.sh [path-to-oa-tools-DOCS]
#
# The source of truth is oa-tools/DOCS; never edit ./oa-tools by hand.
# Blog-specific files (index.md, _category_.json) are preserved.
set -e

SRC="${1:-$HOME/forge/penguins-eggs/DOCS}"
DEST="$(cd "$(dirname "$0")" && pwd)/oa-tools"

if [ ! -d "$SRC/architecture" ]; then
    echo "❌ Sorgente non valida: $SRC (manca architecture/)" >&2
    exit 1
fi

for dir in architecture design development manual; do
    rsync -a --delete --exclude '_category_.json' "$SRC/$dir/" "$DEST/$dir/"
done

# Root-level docs (skip README.md — the blog has its own index.md)
rsync -a --exclude 'README.md' --include '*.md' --exclude '*' "$SRC/" "$DEST/"

echo "✅ Mirror oa-tools sincronizzato da $SRC"
echo "   Ricorda: pnpm build per verificare prima del commit."
