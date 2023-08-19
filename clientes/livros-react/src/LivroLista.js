// clientes/livros-react/src/LivroLista.js
import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import LinhaLivro from './components/LinhaLivro';


const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivro();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const obterLivros = async () => {
      try {
        const listaLivros = await controleLivro.obterLivros();
        setLivros(listaLivros);
      } catch (error) {
        console.error('Erro ao obter os livros:', error.message);
      }
    };

    obterLivros();
  }, [carregado]);

  const excluir = async (codigo) => {
    try {
      await controleLivro.excluir(codigo);
      const obterLivros = async () => {
        try {
          const listaLivros = await controleLivro.obterLivros();
          setLivros(listaLivros);
        } catch (error) {
          console.error('Erro ao obter os livros:', error.message);
        }
      };

      obterLivros();

      setCarregado(false);
    } catch (error) {
      console.error('Erro ao excluir o livro:', error.message);
    }
    controleLivro.obterLivros();
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
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
