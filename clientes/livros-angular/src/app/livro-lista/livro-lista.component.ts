import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro'; // Importe a classe Livro (certifique-se do caminho correto)
import { Editora } from '../editora'; // Importe a classe Editora (certifique-se do caminho correto)
import { ControleEditoraService } from '../controle-editora.service'; // Importe o serviço ControleEditoraService
import { ControleLivrosService } from '../controle-livros.service'; // Importe o serviço ControleLivrosService
@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = []; // Defina o atributo público editoras, inicializado com um vetor vazio
  livros: Array<Livro> = []; // Defina o atributo público livros, inicializado com um vetor vazio

  private servEditora: ControleEditoraService; // Defina o atributo privado servEditora para o serviço ControleEditoraService
  private servLivros: ControleLivrosService; // Defina o atributo privado servLivros para o serviço ControleLivrosService

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.servEditora = servEditora; // Injete o serviço ControleEditoraService no atributo privado servEditora
    this.servLivros = servLivros; // Injete o serviço ControleLivrosService no atributo privado servLivros
  }

  ngOnInit(): void {
    // No método ngOnInit, preencha o vetor editoras, invocando o método getEditoras de servEditora,
    // e o vetor livros, com a chamada para o método obterLivros de servLivros
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  // Acrescente o método excluir, estilo Arrow Function,
  // que deve receber o código do livro, do tipo number,
  // invocar o método excluir de servLivros,
  // e preencher novamente o vetor livros, com a chamada para o método obterLivros de servLivros
  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  // Acrescente o método obterNome, no estilo Arrow Function,
  // que deve receber codEditora, do tipo number,
  // invocar o método getNomeEditora de servEditora,
  // e retornar o nome da editora
  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
