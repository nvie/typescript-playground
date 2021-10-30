#!/bin/sh
set -eu

echo
echo "Running tests with strict=true"
npx tsc --noemit -p tsconfig.strict.json

echo
echo "Running tests with strict=false"
npx tsc --noemit -p tsconfig.nostrict.json
