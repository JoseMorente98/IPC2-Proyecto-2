import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoAuxiliarPage } from './curso-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: CursoAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoAuxiliarPageRoutingModule {}
