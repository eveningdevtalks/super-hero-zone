#!/bin/bash

echo "Building react app"
cd webapp
yarn
yarn build

echo "Switching directory to root"
cd ..

echo "Copy build files"
cp -r webapp/build www

echo "Building Api deps"
cd server
npm i

echo "Done"
