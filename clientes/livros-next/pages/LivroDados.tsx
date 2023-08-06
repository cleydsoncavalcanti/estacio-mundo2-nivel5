import React, { useState } from "react";
import ControleLivro from "@/classes/controle/ControleLivros";
import ControleEditora from "@/classes/controle/ControleEditora";
import { useRouter } from "next/router";
import Menu from "@/componentes/Menu";
const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const router = useRouter(); // Obtenha o objeto de roteamento

  // Define the options for the editora combo (select)
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // State for form fields
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  // Navigate hook for navigation

  // Handle combo (select) change
  const tratarCombo = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  };

  // Handle form submit for livro inclusion
  const incluir = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const autoresArray = autores.split("\n");
    const livro = {
      codigo: 0,
      título: titulo,
      resumo: resumo,
      autores: autoresArray,
      codEditora: codEditora,
    };
    controleLivro.incluir(livro);
    router.push("/LivroLista");
  };

  return (
    <>
      <Menu />
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
    </>
  );
};

export default LivroDados;
