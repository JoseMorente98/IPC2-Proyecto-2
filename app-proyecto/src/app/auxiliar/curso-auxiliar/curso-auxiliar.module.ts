import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoAuxiliarPageRoutingModule } from './curso-auxiliar-routing.module';

import { CursoAuxiliarPage } from './curso-auxiliar.page';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalRecoveryComponent } from 'src/app/login/modal-recovery/modal-recovery.component';
import { ModalRecovery2Component } from 'src/app/login/modal-recovery2/modal-recovery2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    CursoAuxiliarPageRoutingModule
  ],
  declarations: [
    CursoAuxiliarPage,
    ModalRecovery2Component
  ], entryComponents: [
    ModalRecovery2Component
  ]
})
export class CursoAuxiliarPageModule {}
