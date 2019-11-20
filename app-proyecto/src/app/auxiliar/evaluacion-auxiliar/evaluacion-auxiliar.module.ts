import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluacionAuxiliarPageRoutingModule } from './evaluacion-auxiliar-routing.module';

import { EvaluacionAuxiliarPage } from './evaluacion-auxiliar.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    EvaluacionAuxiliarPageRoutingModule
  ],
  declarations: [EvaluacionAuxiliarPage]
})
export class EvaluacionAuxiliarPageModule {}
