import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxiliarPage } from './auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: AuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxiliarPageRoutingModule {}
