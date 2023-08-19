import React, { useState, ChangeEvent, FormEvent } from "react";
import ControleLivros from "../classes/controle/ControleLivros";
import ControleEditora from "../classes/controle/ControleEditora";
import { useRouter } from "next/router";

const NovoLivro = () => {
  const router = useRouter();
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  };

  const incluir = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const autoresArray = autores.split("\n");
    const livro = {
      codigo: "",
      titulo: titulo,
      resumo: resumo,
      autores: autoresArray,
      codEditora: codEditora,
    };
    await controleLivro.incluir(livro);
    router.push("/");
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitulo(e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <input
            type="text"
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setResumo(e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (separados por linha):</label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setAutores(e.target.value)
            }
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

export default NovoLivro;
