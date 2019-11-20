import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluacionEstudiantePageRoutingModule } from './evaluacion-estudiante-routing.module';

import { EvaluacionEstudiantePage } from './evaluacion-estudiante.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    EvaluacionEstudiantePageRoutingModule
  ],
  declarations: [EvaluacionEstudiantePage]
})
export class EvaluacionEstudiantePageModule {}
