// server.js

'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const fs = require('fs');

let jsonServerConfigJson = fs.readFileSync('json-server.json');
let jsonServerConfig = JSON.parse(jsonServerConfigJson);
let jsonServerPort = jsonServerConfig.port;
console.log('Using port: ' + jsonServerPort);

let port = Number.parseInt(jsonServerPort);
server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running')
});