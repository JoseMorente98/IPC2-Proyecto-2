import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregadaAuxiliarPageRoutingModule } from './entregada-auxiliar-routing.module';

import { EntregadaAuxiliarPage } from './entregada-auxiliar.page';
import { ModalEntregadaComponent } from './modal-entregada/modal-entregada.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    EntregadaAuxiliarPageRoutingModule
  ],
  declarations: [
    EntregadaAuxiliarPage,
    ModalEntregadaComponent
  ], entryComponents: [
    ModalEntregadaComponent
  ]
})
export class EntregadaAuxiliarPageModule {}
