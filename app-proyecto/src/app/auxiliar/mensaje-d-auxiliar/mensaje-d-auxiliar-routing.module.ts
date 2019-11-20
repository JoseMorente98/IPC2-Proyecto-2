import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeDAuxiliarPage } from './mensaje-d-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeDAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeDAuxiliarPageRoutingModule {}
