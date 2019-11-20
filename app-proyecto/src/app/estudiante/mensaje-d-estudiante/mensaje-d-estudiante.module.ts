import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeDEstudiantePageRoutingModule } from './mensaje-d-estudiante-routing.module';

import { MensajeDEstudiantePage } from './mensaje-d-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeDEstudiantePageRoutingModule
  ],
  declarations: [MensajeDEstudiantePage]
})
export class MensajeDEstudiantePageModule {}
