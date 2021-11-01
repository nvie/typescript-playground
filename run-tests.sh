#!/bin/sh
set -eu

echo "Running tests with strict=false / strictNullChecks=false"
npx tsc --noemit -p tsconfig.0-0.json

echo "Running tests with strict=false / strictNullChecks=true"
npx tsc --noemit -p tsconfig.0-1.json

echo "Running tests with strict=true / strictNullChecks=false"
npx tsc --noemit -p tsconfig.1-0.json

echo "Running tests with strict=true / strictNullChecks=true"
npx tsc --noemit -p tsconfig.1-1.json
