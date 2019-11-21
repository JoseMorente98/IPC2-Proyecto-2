import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoEstudiantePageRoutingModule } from './curso-estudiante-routing.module';

import { CursoEstudiantePage } from './curso-estudiante.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalRecoveryComponent } from 'src/app/login/modal-recovery/modal-recovery.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    CursoEstudiantePageRoutingModule
  ],
  declarations: [
    CursoEstudiantePage,
    ModalRecoveryComponent
  ], entryComponents: [
    ModalRecoveryComponent
  ]
})
export class CursoEstudiantePageModule {}
