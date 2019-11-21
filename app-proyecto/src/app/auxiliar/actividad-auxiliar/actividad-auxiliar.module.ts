import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadAuxiliarPageRoutingModule } from './actividad-auxiliar-routing.module';

import { ActividadAuxiliarPage } from './actividad-auxiliar.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalActividadComponent } from './modal-actividad/modal-actividad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ActividadAuxiliarPageRoutingModule
  ],
  declarations: [
    ActividadAuxiliarPage,
    ModalActividadComponent
  ], entryComponents: [
    ModalActividadComponent
  ]
})
export class ActividadAuxiliarPageModule {}
