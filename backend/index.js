'use strict';

const path = require('path');

const express = require('express');

const server = express();

server.use(express.static(path.join(__dirname, '../dist')));

server.get('/', function(request, response) {
    response.sendfile('index.html', { root: path.join(__dirname, '../dist') });
});

 server.get('/city/:id', function (request, response) {
     response.sendfile('index.html', { root: path.join(__dirname, '../dist') });
});

server.listen(5000, function(){
    console.log('server start');
});