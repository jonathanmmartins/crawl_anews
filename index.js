const express = require('express');
const app = express();
const path = require('path');

let searchXML = require('./site_request.js');

app.use(express.static(path.join(__dirname, './XML/')));

app.listen(8080);

app.get('/teste', (res) => {
  /*res.contentType('application/rss+xml');
    res.sendFile('/teste.xml');*/
    searchXML.esportes();
    res.sendStatus(200);  
});

