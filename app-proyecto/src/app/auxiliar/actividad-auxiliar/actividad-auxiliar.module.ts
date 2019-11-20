import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadAuxiliarPageRoutingModule } from './actividad-auxiliar-routing.module';

import { ActividadAuxiliarPage } from './actividad-auxiliar.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ActividadAuxiliarPageRoutingModule
  ],
  declarations: [ActividadAuxiliarPage]
})
export class ActividadAuxiliarPageModule {}
