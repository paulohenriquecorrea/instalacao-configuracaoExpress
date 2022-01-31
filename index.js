// Express
const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Gerenciador Financeiro');
});

app.get('/contato', (req, res) => {
  res.send('Página de Contato');
});
app.listen(8080);

// SUBIR SERVIDOR NATIVO JS
// ============================
// var http = require('http');
// http
//   .createServer((req, res) => {
//     res.end('Gerenciador');
//   })
//   .listen(8080);
