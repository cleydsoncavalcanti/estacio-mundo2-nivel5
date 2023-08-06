import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Array<Livro> = [
  { codigo:1,
    codEditora: 1,
    titulo: 'Use a cabeça: Java',
    resumo:'Começar a aprender a linguagem em um livro como os do Deitel é um tiro no pé, certeza de se tornar um programador burocrático. O Use a Cabeça consegue fazer uma ...',
    autores: ['Agatha Christie', 'William Shakespeare']},
   { codigo:2,
    codEditora: 2,
    titulo: 'Java: Como programar',
    resumo:'É um livro muito bom. Até mesmo se você NÃO quiser aprender Java! rs! Na época que o li estava estudando C#, mas seus conceitos de OOP me ajudaram MUITO.',
    autores:  ['Harold Robbins']},
   { codigo:3,
    codEditora: 3,
    titulo: 'Core Java for the Impatient',
    resumo:'Core Java for the Impatient, Third Edition, is a complete yet concise guide that reflects all changes through Java SE 17, Oracle\'s latest',
    autores:  ['Georges Simenon', 'Enid Blyton']},
  ];

  // Implemente o método obterLivros com o retorno do vetor livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Implemente o método incluir, recebendo um objeto do tipo Livro,
  // que terá o código trocado pelo código mais alto do vetor, incrementado de um,
  // e depois será adicionado ao vetor
  incluir(livro: Livro): void {
    const novoCodigo = this.livros.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  // Implemente o método excluir, recebendo um código numérico,
  // que irá encontrar o índice do livro com o código fornecido, através de findIndex,
  // e removê-lo com o uso de splice
  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}