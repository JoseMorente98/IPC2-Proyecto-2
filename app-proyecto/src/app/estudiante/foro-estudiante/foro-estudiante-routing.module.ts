import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoEstudiantePage } from './foro-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: ForoEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoEstudiantePageRoutingModule {}
