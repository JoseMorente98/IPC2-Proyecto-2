import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoAuxiliarPageRoutingModule } from './curso-auxiliar-routing.module';

import { CursoAuxiliarPage } from './curso-auxiliar.page';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    CursoAuxiliarPageRoutingModule
  ],
  declarations: [CursoAuxiliarPage]
})
export class CursoAuxiliarPageModule {}
