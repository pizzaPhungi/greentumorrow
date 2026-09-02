#!/usr/bin/env bash
# Renames downloaded portraits into content/photos/ in the order the members
# appear on the site. Pass the files in that order:
#
#   ./scripts/name-portraits.sh ~/Downloads/img1.jpg ~/Downloads/img2.jpg ...
#
# Order: Marvin Elling, Nazli Ghazvanchahi, Markus Eblenkamp, Salma Gares,
#        Nana Kwabena Osei, Karim Alzahabi, Christoph Göbel, Duc Viet Phung
set -euo pipefail

names=(marvin-elling nazli-ghazvanchahi markus-eblenkamp salma-gares
       nana-kwabena-osei karim-alzahabi christoph-goebel duc-viet-phung)
dest="$(cd "$(dirname "$0")/.." && pwd)/content/photos"

if [ "$#" -ne "${#names[@]}" ]; then
  echo "Expected ${#names[@]} files, got $#." >&2
  printf '  %s\n' "${names[@]}" >&2
  exit 1
fi

for i in "${!names[@]}"; do
  src="$1"; shift
  [ -f "$src" ] || { echo "Not a file: $src" >&2; exit 1; }
  ext="${src##*.}"
  cp -- "$src" "$dest/${names[$i]}.${ext,,}"
  echo "  ${names[$i]}.${ext,,}  <-  $(basename -- "$src")"
done
echo "Done. Tell Claude, and the wiring follows."
