// livro-dados.component.ts

import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro'; // Importe a classe Livro (certifique-se do caminho correto)
import { Editora } from '../editora'; // Importe a classe Editora (certifique-se do caminho correto)
import { ControleEditoraService } from '../controle-editora.service'; // Importe o serviço ControleEditoraService
import { ControleLivrosService } from '../controle-livros.service'; // Importe o serviço ControleLivrosService
import { Router } from '@angular/router'; // Importe o Router

// livro-dados.component.ts

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, 0, '', '', []); // Defina o atributo público livro, do tipo Livro, instanciado via construtor padrão da classe Livro
  autoresForm: string = ''; // Defina o atributo público autoresForm, do tipo texto, inicializado vazio
  editoras: Array<Editora> = []; // Defina o atributo público editoras, do tipo Array<Editora>, inicializado com um vetor vazio

  private servEditora: ControleEditoraService; // Defina o atributo privado servEditora para o serviço ControleEditoraService
  private servLivros: ControleLivrosService; // Defina o atributo privado servLivros para o serviço ControleLivrosService
  private router: Router; // Defina o atributo privado router para o Router

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService,
    router: Router
  ) {
    this.servEditora = servEditora; // Injete o serviço ControleEditoraService no atributo privado servEditora
    this.servLivros = servLivros; // Injete o serviço ControleLivrosService no atributo privado servLivros
    this.router = router; // Injete o Router no atributo privado router
  }

  ngOnInit(): void {
    // No método ngOnInit, preencha o vetor editoras, invocando o método getEditoras de servEditora
    this.editoras = this.servEditora.getEditoras();
  }

  // Acrescente o método incluir, estilo Arrow Function,
  // que deve preencher o atributo autores, do livro, com o valor de autoresForm separado pelas quebras de linha,
  // através do método split, invocar o método incluir de servLivros, com a passagem do livro no parâmetro,
  // e navegar para a rota "/lista", através do método navigateByUrl do objeto router
  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').map((autor) => autor.trim()); // Corrigir o preenchimento dos autores
    console.log('this.livro',this.livro);
    // this.livro.codEditora = this.livro.codEditora.codEditora;
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}

