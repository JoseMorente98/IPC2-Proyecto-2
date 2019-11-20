import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeDAuxiliarPageRoutingModule } from './mensaje-d-auxiliar-routing.module';

import { MensajeDAuxiliarPage } from './mensaje-d-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeDAuxiliarPageRoutingModule
  ],
  declarations: [MensajeDAuxiliarPage]
})
export class MensajeDAuxiliarPageModule {}
