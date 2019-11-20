import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadEstudiantePage } from './actividad-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadEstudiantePageRoutingModule {}
