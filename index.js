const express = require('express');
const app = express();
const path = require('path');

let searchXML = require('./site_request.js');

app.use(express.static(path.join(__dirname, './XML/')));

app.listen(8080);

app.get('/esporte', async (req, res) => {
    await searchXML.esportes();
    res.contentType('application/rss+xml; charset=UTF-8');
    res.sendFile(__dirname+'/XML/esporte.xml');
});

app.get('/jornal', async (req, res) => {
    await searchXML.jornal();
    res.contentType('application/rss+xml; charset=UTF-8');
    res.sendFile(__dirname+'/XML/jornal.xml');
});

