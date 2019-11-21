import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubliDAuxPage } from './publi-d-aux.page';

const routes: Routes = [
  {
    path: '',
    component: PubliDAuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubliDAuxPageRoutingModule {}
