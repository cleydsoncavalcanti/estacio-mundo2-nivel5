const express = require('express');
const router = express.Router();
const LivroDAO = require('../modelo/livro-dao');
const mongoose = require('mongoose');

// Rota para obter todos os livros (modo GET)
router.get('/', async (req, res) => {
  try {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter os livros.' });
  }
});

// Rota para incluir um novo livro (modo POST)
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    await LivroDAO.incluir(req.body);
    res.json({ message: 'Livro incluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao incluir o livro.' });
  }
});

// Rota para excluir um livro por código (_id) (modo DELETE)
router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    const objectId = new mongoose.Types.ObjectId(codigo); // Create a new instance of ObjectId
    const result = await LivroDAO.excluir(objectId);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }
    res.json({ message: 'Livro excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir o livro.' });
  }
});

module.exports = router;
