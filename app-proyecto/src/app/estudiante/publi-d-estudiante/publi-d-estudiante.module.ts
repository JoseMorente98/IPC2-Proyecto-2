import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubliDEstudiantePageRoutingModule } from './publi-d-estudiante-routing.module';

import { PubliDEstudiantePage } from './publi-d-estudiante.page';
import { SanitizerPipe } from 'src/app/_pipe/sanitizer.pipe';
import { Sanitizer4Pipe } from 'src/app/_pipe/sanitizer4.pipe';
import { ModalComentarioComponent } from './modal-comentario/modal-comentario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubliDEstudiantePageRoutingModule
  ],
  declarations: [
    PubliDEstudiantePage,
    Sanitizer4Pipe,
    ModalComentarioComponent
  ], entryComponents: [
    ModalComentarioComponent
  ]
})
export class PubliDEstudiantePageModule {}
