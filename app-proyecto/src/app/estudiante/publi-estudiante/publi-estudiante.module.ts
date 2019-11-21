import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubliEstudiantePageRoutingModule } from './publi-estudiante-routing.module';

import { PubliEstudiantePage } from './publi-estudiante.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Sanitizer3Pipe } from 'src/app/_pipe/sanitizer3.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    PubliEstudiantePageRoutingModule
  ],
  declarations: [
    PubliEstudiantePage,
    Sanitizer3Pipe,
  ]
})
export class PubliEstudiantePageModule {}
