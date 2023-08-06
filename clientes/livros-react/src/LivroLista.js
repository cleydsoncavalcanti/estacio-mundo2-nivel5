import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import LinhaLivro from './components/LinhaLivro';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivro();

  useEffect(() => {
    const obterLivros = async () => {
      const listaLivros = controleLivro.obterLivros();
      setLivros(listaLivros);
      setCarregado(true);
    };

    obterLivros();
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main className='container mt-3'>
      <h1 className='my-3'>Catálogo de Livros</h1>
      <table className='table table-striped'>
        <thead className="thead-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
