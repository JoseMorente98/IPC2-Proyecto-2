import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluacionAuxiliarPage } from './evaluacion-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluacionAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluacionAuxiliarPageRoutingModule {}
