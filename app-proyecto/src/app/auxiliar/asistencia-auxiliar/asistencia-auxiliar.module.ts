import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaAuxiliarPageRoutingModule } from './asistencia-auxiliar-routing.module';

import { AsistenciaAuxiliarPage } from './asistencia-auxiliar.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    AsistenciaAuxiliarPageRoutingModule
  ],
  declarations: [AsistenciaAuxiliarPage]
})
export class AsistenciaAuxiliarPageModule {}
