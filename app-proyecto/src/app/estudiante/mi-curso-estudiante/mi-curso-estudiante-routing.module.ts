import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiCursoEstudiantePage } from './mi-curso-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: MiCursoEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiCursoEstudiantePageRoutingModule {}
