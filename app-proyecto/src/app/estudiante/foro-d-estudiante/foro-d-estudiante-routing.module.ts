import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoDEstudiantePage } from './foro-d-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: ForoDEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoDEstudiantePageRoutingModule {}
