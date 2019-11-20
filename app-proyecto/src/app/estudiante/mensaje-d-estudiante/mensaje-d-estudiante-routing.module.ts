import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeDEstudiantePage } from './mensaje-d-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeDEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeDEstudiantePageRoutingModule {}
