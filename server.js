const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/liis-arts'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/liis-arts/'}),
);

app.listen(process.env.PORT || 8080);