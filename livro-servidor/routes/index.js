const express = require('express');
const cors = require('cors');
const app = express();

// Configurar o sistema de CORS usando a biblioteca cors
app.use(cors());

// Importar e utilizar as rotas para gerenciamento dos livros
const livrosRouter = require('./livros');
app.use('/livros', livrosRouter);

// Outras configurações e rotas do seu aplicativo...

// Definir a porta utilizada como 3030
const port = 3030;
app.set('port', port);

// Iniciar o servidor
const server = app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});

module.exports = app;
