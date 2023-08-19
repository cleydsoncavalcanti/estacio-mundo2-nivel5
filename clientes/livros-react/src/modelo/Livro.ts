// clientes/livros-react/src/modelo/Livro.ts
import Editora from './Editora'; // Importe o modelo da Editora

class Livro {
    codigo: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
    editora: Editora;
  
    constructor(codigo: string, codEditora: number, titulo: string, resumo: string, autores: string[], editora: Editora) {
      this.codigo = codigo;
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
      this.editora = editora;
    }
  }
  
  export default Livro;