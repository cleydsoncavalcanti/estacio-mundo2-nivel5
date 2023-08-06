import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
    new Livro(1, 1, 'Use a cabeça: Java',
     'Começar a aprender a linguagem em um livro como os do Deitel é um tiro no pé, certeza de se tornar um programador burocrático. O Use a Cabeça consegue fazer uma ...',
      ['Agatha Christie', 'William Shakespeare']),
    new Livro(2, 2, 'Java: Como programar',
     'É um livro muito bom. Até mesmo se você NÃO quiser aprender Java! rs! Na época que o li estava estudando C#, mas seus conceitos de OOP me ajudaram MUITO.',
      ['Harold Robbins']),
    new Livro(3, 3, 'Core Java for the Impatient',
     'Core Java for the Impatient, Third Edition, is a complete yet concise guide that reflects all changes through Java SE 17, Oracle\'s latest',
      ['Georges Simenon', 'Enid Blyton']),
    // Adicione mais livros aqui, se necessário
  ];

  class ControleLivro {
    obterLivros(): Array<Livro> {
      return livros;
    }
  
    incluir(livro: Livro): void {
      const maxCodigo = Math.max(...livros.map(livro => livro.codigo));
      livro.codigo = maxCodigo + 1;
      livros.push(livro);
    }
  
    excluir(codigo: number): void {
      const index = livros.findIndex(livro => livro.codigo === codigo);
      if (index !== -1) {
        livros.splice(index, 1);
      }
    }
  }
  
  export default ControleLivro;