import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubliDEstudiantePage } from './publi-d-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: PubliDEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubliDEstudiantePageRoutingModule {}
