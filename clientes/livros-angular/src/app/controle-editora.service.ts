import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable()
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Editora Mundo Feliz' }
  ];

  // Implemente o método getEditoras com o retorno do vetor editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // Implemente o método getNomeEditora, recebendo codEditora, do tipo numérico,
  // e retornando o nome da editora, através de uma operação filter sobre o vetor editoras
  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(e => e.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}