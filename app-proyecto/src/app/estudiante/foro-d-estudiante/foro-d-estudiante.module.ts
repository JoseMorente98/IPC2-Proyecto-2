import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoDEstudiantePageRoutingModule } from './foro-d-estudiante-routing.module';

import { ForoDEstudiantePage } from './foro-d-estudiante.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalForoComponent } from './modal-foro/modal-foro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ForoDEstudiantePageRoutingModule
  ],
  declarations: [
    ForoDEstudiantePage,
    ModalForoComponent
  ], entryComponents: [
    ModalForoComponent
  ]
})
export class ForoDEstudiantePageModule {}
