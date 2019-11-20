import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketEstudiantePageRoutingModule } from './ticket-estudiante-routing.module';

import { TicketEstudiantePage } from './ticket-estudiante.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalTicketComponent } from './modal-ticket/modal-ticket.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    TicketEstudiantePageRoutingModule
  ],
  declarations: [
    TicketEstudiantePage,
    ModalTicketComponent
  ], entryComponents: [
    ModalTicketComponent
  ]
})
export class TicketEstudiantePageModule {}
