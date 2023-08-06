// modelo/livro-schema.js

const mongoose = require('./conexao'); // Import the mongoose instance
const Schema = mongoose.Schema; // Get the Schema class from mongoose

// Define a estrutura do modelo usando o Mongoose
const LivroSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  titulo: { type: String, required: true },
  codEditora: { type: Number, required: true },
  resumo: { type: String, required: true },
  autores: { type: [String], required: true },
  // Outros campos do livro...
});

// Cria o modelo a partir do esquema e o exporta
module.exports = mongoose.model('Livro', LivroSchema);
