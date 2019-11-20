import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadDEstudiantePageRoutingModule } from './actividad-d-estudiante-routing.module';

import { ActividadDEstudiantePage } from './actividad-d-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadDEstudiantePageRoutingModule
  ],
  declarations: [ActividadDEstudiantePage]
})
export class ActividadDEstudiantePageModule {}
