import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadAuxiliarPage } from './actividad-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadAuxiliarPageRoutingModule {}
