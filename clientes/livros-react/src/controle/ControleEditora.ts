import Editora from '../modelo/Editora';


const baseURL = 'http://localhost:3030/livros';


const editoras: Array<Editora> = [
    new Editora(1, 'Alta Books'),
    new Editora(2, 'Pearson'),
    new Editora(123333445, 'Addison Wesley'),
    // Adicione mais editoras aqui, se necessário
  ];

  class ControleEditora {

    async obterEditoras(): Promise<Array<Editora>> {
      try {
        const response = await fetch(baseURL);
        const editorasMongo: Array<any> = await response.json();
        const editoras = editorasMongo.map(editoraMongo => {
          return new Editora(
            editoraMongo.codEditora,
            editoraMongo.nome,
          );
        });
        return editoras;
      } catch (error) {
        throw new Error('Erro ao obter os editoras: ' + (error as Error).message);
      }
    }
    
    getNomeEditora(codEditora: number): string | undefined {
      console.log('codEditora',codEditora)
      console.log('editoras',editoras)
      const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
      return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
  
    getEditoras(): Array<Editora> {
      return editoras;
    }
  }
  
  export default ControleEditora;