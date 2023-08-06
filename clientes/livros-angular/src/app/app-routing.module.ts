// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component'; // Importe o LivroListaComponent (certifique-se do caminho correto)
import { LivroDadosComponent } from './livro-dados/livro-dados.component'; // Importe o LivroDadosComponent (certifique-se do caminho correto)

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent }, // Rota "lista" apontando para LivroListaComponent
  { path: 'dados', component: LivroDadosComponent }, // Rota "dados" apontando para LivroDadosComponent
  { path: '', redirectTo: '/lista', pathMatch: 'full' }, // Rota padrão redirecionando para "lista"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
