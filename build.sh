#!/bin/bash

echo "Building react app"
cd webapp
yarn
yarn build

echo "Switching directory to root"
cd ..

echo "Copy build files"
rm -rf www
cp -r webapp/build www

echo "Building Api deps"
cd server
npm i

echo "Done"
