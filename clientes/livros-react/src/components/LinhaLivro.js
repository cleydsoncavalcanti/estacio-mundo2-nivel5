// clientes/livros-react/src/components/LinhaLivro.js

import React from 'react';
import ControleEditora from '../controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td className="mx-2 my-3 px-3 d-flex flex-column">
        <a href={'/livro/' + livro.codigo}>
          {livro.titulo}
        </a>
        <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}
          style={{ 'max-width': '100px' }} >
          Excluir
        </button>
      </td><td className="mx-2 my-3 px-3">{livro.resumo}</td><td className="mx-2 my-3 px-3">{nomeEditora}</td><td className="mx-2 my-3 px-3">
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default LinhaLivro;