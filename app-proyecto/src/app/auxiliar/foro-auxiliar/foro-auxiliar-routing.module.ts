import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoAuxiliarPage } from './foro-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: ForoAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoAuxiliarPageRoutingModule {}
