// LinhaLivro.tsx

import React from "react";
import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livro";

const LinhaLivro = ({
  livro,
  excluir,
}: {
  livro: Livro;
  excluir: (codigo: number) => void;
}) => {
  const controleEditora = new ControleEditora();
  const handleExcluirClick = () => {
    excluir(livro.codigo);
  };

  return (
    <tr>
      <td>
        <div className="d-flex flex-column">
          {livro.título}
          <button onClick={handleExcluirClick} className="btn btn-danger">
            Excluir
          </button>
        </div>
      </td>
      <td>{livro.resumo}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>{livro.autores.join(", ")}</td>
    </tr>
  );
};
export default LinhaLivro; // Export as default
