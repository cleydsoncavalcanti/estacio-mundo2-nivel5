import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
    new Editora(1, 'Alta Books'),
    new Editora(2, 'Pearson'),
    new Editora(3, 'Addison Wesley'),
    // Adicione mais editoras aqui, se necessário
  ];

  class ControleEditora {
    getNomeEditora(codEditora: number): string | undefined {
      const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
      return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
  
    getEditoras(): Array<Editora> {
      return editoras;
    }
  }
  
  export default ControleEditora;