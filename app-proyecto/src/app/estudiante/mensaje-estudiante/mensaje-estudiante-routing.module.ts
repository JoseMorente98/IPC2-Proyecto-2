import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeEstudiantePage } from './mensaje-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeEstudiantePageRoutingModule {}
