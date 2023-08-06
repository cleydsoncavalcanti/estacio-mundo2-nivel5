// modelo/livro-dao.js

const Livro = require('./livro-schema');

// Função para obter todos os livros
const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (error) {
    throw new Error('Erro ao obter os livros: ' + error.message);
  }
};

// Função para incluir um novo livro
const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (error) {
    throw new Error('Erro ao incluir o livro livro-dao: ' + error.message);
  }
};

// Função para excluir um livro por código (_id)
const excluir = async (codigo) => {
  try {
    return await Livro.deleteOne({ _id: codigo });
  } catch (error) {
    throw new Error('Erro ao excluir o livro: ' + error.message);
  }
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
