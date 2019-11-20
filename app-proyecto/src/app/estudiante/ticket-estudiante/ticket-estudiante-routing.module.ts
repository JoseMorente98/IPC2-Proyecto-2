import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketEstudiantePage } from './ticket-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: TicketEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketEstudiantePageRoutingModule {}
