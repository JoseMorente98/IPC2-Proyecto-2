import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregadaAuxiliarPage } from './entregada-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: EntregadaAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregadaAuxiliarPageRoutingModule {}
