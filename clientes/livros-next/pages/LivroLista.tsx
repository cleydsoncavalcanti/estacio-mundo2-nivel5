// LivroLista.tsx
import React, { useState, useEffect } from "react";
import LinhaLivro from "@/componentes/LinhaLivro"; // Assuming LinhaLivro is in the 'components' folder
import ControleLivro from "@/classes/controle/ControleLivros";

import Menu from "@/componentes/Menu";

const LivroLista = () => {
  const [livros, setLivros] = useState([
    {
      codigo: 0,
      codEditora: 0,
      título: "",
      resumo: "",
      autores: [""],
    },
  ]);
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

  const handleExcluir = (codigo: number) => {
    // Implement the logic to handle book deletion here
    console.log(`Book with code ${codigo} will be deleted.`);
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <>
      <Menu />
      <div className="container mt-3">
        <h1>Catálogo de Livros</h1>
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
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => handleExcluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LivroLista;
