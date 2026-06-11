#!/bin/bash
# Sync the oa-tools documentation mirror (./oa-tools) from the source repo.
# Usage: ./sync-oa-docs.sh [path-to-oa-tools-DOCS]
#
# The source of truth is oa-tools/DOCS; never edit ./oa-tools by hand.
# Blog-specific files (index.md, _category_.json) are preserved.
set -e

SRC="${1:-$HOME/oa-tools/DOCS}"
DEST="$(cd "$(dirname "$0")" && pwd)/oa-tools"

if [ ! -d "$SRC/architecture" ]; then
    echo "❌ Sorgente non valida: $SRC (manca architecture/)" >&2
    exit 1
fi

for dir in architecture design development manual; do
    rsync -a --delete --exclude '_category_.json' "$SRC/$dir/" "$DEST/$dir/"
done

echo "✅ Mirror oa-tools sincronizzato da $SRC"
echo "   Ricorda: pnpm build per verificare prima del commit."
