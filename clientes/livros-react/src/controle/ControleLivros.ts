// clientes/livros-react/src/controle/ControleLivros.ts

import Livro from '../modelo/Livro';
import LivroMongo from '../Interface/LivroMongo';

const baseURL = 'http://localhost:3030/livros';

class ControleLivro {
  async obterLivros(): Promise<Array<Livro>> {
    try {
      const response = await fetch(baseURL);
      const livrosMongo: Array<LivroMongo> = await response.json();
      const livros = livrosMongo.map(livroMongo => {
        return new Livro(
          livroMongo._id,
          livroMongo.codEditora,
          livroMongo.titulo,
          livroMongo.resumo,
          livroMongo.autores,{codEditora:1,nome:'Flor'}
        );
      });
      return livros;
    } catch (error) {
      throw new Error('Erro ao obter os livros: ' + (error as Error).message);
    }
  }

  async incluir(livro: Livro): Promise<void> {
    try {
      const livroMongo: any = {
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      };
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livroMongo),
      });
      if (!response.ok) {
        throw new Error('Erro ao incluir o livro.');
      }
    } catch (error) {
      throw new Error('Erro ao incluir o livro: ' + (error as Error).message);
    }
  }

  async excluir(codigo: string): Promise<void> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir o livro.');
      }
    } catch (error) {
      throw new Error('Erro ao excluir o livro: ' + (error as Error).message);
    }
  }
}

export default ControleLivro;
