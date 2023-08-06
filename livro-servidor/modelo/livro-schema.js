// modelo/livro-schema.js

const mongoose = require('./conexao'); // Import the mongoose instance
const Schema = mongoose.Schema; // Get the Schema class from mongoose

// Define a estrutura do modelo usando o Mongoose
const LivroSchema = new Schema({
  titulo: { type: String, required: false },
  codEditora: { type: Number, required: false },
  resumo: { type: String, required: false },
  autores: { type: [String], required: false },
});

// Cria o modelo a partir do esquema e o exporta
module.exports = mongoose.model('Livro', LivroSchema);
