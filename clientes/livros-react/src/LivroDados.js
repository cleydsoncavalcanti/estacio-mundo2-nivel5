// clientes/livros-react/src/LivroDados.js
import React, { useState } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import { useNavigate } from 'react-router-dom';

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  };

  const incluir = async (event) => {
    event.preventDefault();
    const autoresArray = autores.split('\n');
    const livro = {
      codigo: '',
      titulo: titulo,
      resumo: resumo,
      autores: autoresArray,
      codEditora: codEditora,
    };
    await controleLivro.incluir(livro);
    navigate('/');
  };

  return (
    <main className="container">
      <h1 className="my-4">Novo Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <input
            type="text"
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (separados por linha):</label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="codEditora">Editora:</label>
          <select
            className="form-control"
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
