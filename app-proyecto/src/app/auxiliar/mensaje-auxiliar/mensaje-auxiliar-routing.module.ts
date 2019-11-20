import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeAuxiliarPage } from './mensaje-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeAuxiliarPageRoutingModule {}
