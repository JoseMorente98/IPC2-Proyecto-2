import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaAuxiliarPageRoutingModule } from './asistencia-auxiliar-routing.module';

import { AsistenciaAuxiliarPage } from './asistencia-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaAuxiliarPageRoutingModule
  ],
  declarations: [AsistenciaAuxiliarPage]
})
export class AsistenciaAuxiliarPageModule {}
