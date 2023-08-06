const mongoose = require('mongoose');

// Configuração das opções para a conexão
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// Efetua a conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livraria', options);

module.exports = mongoose; // Export the mongoose instance
