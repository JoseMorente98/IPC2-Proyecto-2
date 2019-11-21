import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubliEstudiantePage } from './publi-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: PubliEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubliEstudiantePageRoutingModule {}
