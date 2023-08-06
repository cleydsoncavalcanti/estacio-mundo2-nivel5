// modelo/conexao.js

const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// Replace 'mongodb://localhost:27017/livraria' with your actual MongoDB URL
mongoose.connect('mongodb://localhost:27017/livraria', options);

module.exports = mongoose;
