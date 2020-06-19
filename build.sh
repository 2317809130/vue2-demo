#! /bin/sh
rm -rf node_modules
yarn install --registry=https://registry.npm.taobao.org
npm run build:ts
cp index.html ./dist/node
NODE_ENV=production node dist/node/genesis.build.js
rm -rf node_modules
yarn --prod --registry=https://registry.npm.taobao.org
