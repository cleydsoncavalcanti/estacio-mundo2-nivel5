// livro-servidor/app.js

const express = require('express');
const bodyParser = require('body-parser'); // Import the body-parser middleware

const app = express();
const mongoose = require('mongoose');
const db = require('./modelo/conexao');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/testar-conexao', (req, res) => {
  if (db.connection.readyState === 1) {
    res.send('Conexão com o MongoDB estabelecida com sucesso!');
  } else {
    res.send('Erro ao conectar com o MongoDB.');
  }
});


// Importar o roteador contendo as rotas de gerenciamento dos livros
const indexRouter = require('./routes/index');

// Usar o roteador para adicionar as rotas ao servidor
app.use('/', indexRouter);

// Outras configurações e rotas do seu aplicativo...

// Definir a porta utilizada como 3030
const port = 3030;
app.set('port', port);

// Iniciar o servidor
const server = app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});

module.exports = app;
