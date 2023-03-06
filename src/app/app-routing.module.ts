import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { CriarContosComponent } from './componentes/corpo/criar-contos/criar-contos.component';
import { LerContosComponent } from './componentes/corpo/ler-contos/ler-contos.component';
import { ListarContosComponent } from './componentes/corpo/listar-contos/listar-contos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'criarConto',
    component: CriarContosComponent

  },
  {
    path: 'listarConto',
    component: ListarContosComponent

  },
  {
    path: 'lerConto/:contoId',
    component: LerContosComponent
  },
  {
    path: 'home',
    component: CorpoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
