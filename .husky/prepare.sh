#!/bin/sh
if ([ -z "${CI}" ] || [ "${CI}" = false ]) && [ -d './node_modules/husky' ]; then
    npx husky install
fi
