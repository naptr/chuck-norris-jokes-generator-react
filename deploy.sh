#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate to build output directory
cd dist

git init
git add -A
git commit -m "deploy"

# deploy to https://ziunadev.github.io/<REPO>
git push -f git@github.com:ziunadev/chuck-norris-jokes-generator-react.git main:gh-pages

cd -