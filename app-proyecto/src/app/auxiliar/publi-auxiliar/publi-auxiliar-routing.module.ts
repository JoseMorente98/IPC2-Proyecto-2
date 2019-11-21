import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubliAuxiliarPage } from './publi-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: PubliAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubliAuxiliarPageRoutingModule {}
