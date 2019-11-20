import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluacionEstudiantePage } from './evaluacion-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluacionEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluacionEstudiantePageRoutingModule {}
