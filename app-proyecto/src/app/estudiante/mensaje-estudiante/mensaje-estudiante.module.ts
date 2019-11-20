import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeEstudiantePageRoutingModule } from './mensaje-estudiante-routing.module';

import { MensajeEstudiantePage } from './mensaje-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeEstudiantePageRoutingModule
  ],
  declarations: [MensajeEstudiantePage]
})
export class MensajeEstudiantePageModule {}
