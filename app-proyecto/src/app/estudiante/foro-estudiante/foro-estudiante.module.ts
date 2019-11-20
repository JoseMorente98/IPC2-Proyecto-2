import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoEstudiantePageRoutingModule } from './foro-estudiante-routing.module';

import { ForoEstudiantePage } from './foro-estudiante.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ForoEstudiantePageRoutingModule
  ],
  declarations: [ForoEstudiantePage]
})
export class ForoEstudiantePageModule {}
