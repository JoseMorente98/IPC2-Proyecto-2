import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeAuxiliarPageRoutingModule } from './mensaje-auxiliar-routing.module';

import { MensajeAuxiliarPage } from './mensaje-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeAuxiliarPageRoutingModule
  ],
  declarations: [MensajeAuxiliarPage]
})
export class MensajeAuxiliarPageModule {}
