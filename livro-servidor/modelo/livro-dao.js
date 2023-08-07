// modelo/livro-dao.js
const Livro = require('./livro-schema');
const mongoose = require('mongoose'); // Add this line to import mongoose

// Função para obter todos os livros
const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (error) {
    throw new Error('Erro ao obter os livros: ' + error.message);
  }
};

// Função para incluir um novo livro
const incluir = async (livroData) => {
  // try {
    console.log('livroData',livroData)
  const livro = new Livro({
    _id: new mongoose.Types.ObjectId(), // Explicitly set _id as a new ObjectId
    ...livroData,
  });
  await livro.save();
  // } catch (error) {
  //   throw new Error('Erro ao incluir o livro: ' + error.message);
  // }
};

// Função para excluir um livro por código (_id)
const excluir = async (codigo) => {
  console.log('codigo', codigo)
  // try {
    console.log('Deleting book with _id:', codigo);
    const result = await Livro.deleteOne({ _id: codigo });
    console.log('Delete operation result:', result);
    return result;
  // } catch (error) {
  //   throw new Error('Erro ao excluir o livro: ' + error.message);
  // }
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
