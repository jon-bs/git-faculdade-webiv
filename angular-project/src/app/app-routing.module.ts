import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoSeachComponent } from './view/departamento/departamento-seach/departamento-seach.component';


const routes: Routes = [
  {
    component: DepartamentoSeachComponent,
    path: 'departamento'
  },
  // {
  //   component: DepartamentoFormComponet,
  //   path: 'departamento/cadastrar'
  // },
  // {
  //   component: DepartamentoFormComponent,
  //   path: 'departamento/alterar/:id'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
