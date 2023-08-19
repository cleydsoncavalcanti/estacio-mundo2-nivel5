import React, { useState, useEffect } from "react";
import ControleLivros from "../classes/controle/ControleLivros";
import LinhaLivro from "../componentes/LinhaLivro";
import Livro from "../classes/modelo/Livro"; // Importe o modelo do Livro

const Livros = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]); // Defina o tipo do estado como Array<Livro>
  const controleLivro = new ControleLivros();

  useEffect(() => {
    const obterLivros = async () => {
      try {
        const listaLivros = await controleLivro.obterLivros();
        setLivros(listaLivros);
      } catch (error) {
        console.error("Erro ao obter os livros:", error);
      }
    };

    obterLivros();
  }, []);

  const excluir = async (codigo: string) => {
    try {
      await controleLivro.excluir(codigo);
      const listaLivros = await controleLivro.obterLivros(); // Não é necessário definir uma função adicional aqui
      setLivros(listaLivros);
    } catch (error) {
      console.error("Erro ao excluir o livro:", error);
    }
  };

  return (
    <main className="container mt-3">
      <h1 className="my-3">Catálogo de Livros</h1>
      <table className="table table-striped">
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

export default Livros;
