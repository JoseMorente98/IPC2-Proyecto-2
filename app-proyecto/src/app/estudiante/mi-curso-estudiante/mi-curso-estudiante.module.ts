import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiCursoEstudiantePageRoutingModule } from './mi-curso-estudiante-routing.module';

import { MiCursoEstudiantePage } from './mi-curso-estudiante.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MiCursoEstudiantePageRoutingModule
  ],
  declarations: [MiCursoEstudiantePage]
})
export class MiCursoEstudiantePageModule {}
