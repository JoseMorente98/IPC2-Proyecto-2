import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisteAuxiliarPage } from './asiste-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: AsisteAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisteAuxiliarPageRoutingModule {}
