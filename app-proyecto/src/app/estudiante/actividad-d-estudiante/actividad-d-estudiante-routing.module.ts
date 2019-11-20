import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadDEstudiantePage } from './actividad-d-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadDEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadDEstudiantePageRoutingModule {}
