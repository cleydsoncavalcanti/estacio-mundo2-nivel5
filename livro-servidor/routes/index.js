const express = require('express');
const router = express.Router();
const cors = require('cors');

// Configurar o sistema de CORS usando a biblioteca cors
router.use(cors());

// Importar e utilizar as rotas para gerenciamento dos livros
const livrosRouter = require('./livros');
router.use('/livros', livrosRouter);

// Exportar o roteador com as rotas configuradas
module.exports = router;
