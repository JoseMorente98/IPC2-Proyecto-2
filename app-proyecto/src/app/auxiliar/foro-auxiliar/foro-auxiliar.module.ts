import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoAuxiliarPageRoutingModule } from './foro-auxiliar-routing.module';

import { ForoAuxiliarPage } from './foro-auxiliar.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalForoAuxComponent } from './modal-foro-aux/modal-foro-aux.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ForoAuxiliarPageRoutingModule
  ],
  declarations: [
    ForoAuxiliarPage,
    ModalForoAuxComponent
  ], entryComponents: [
    ModalForoAuxComponent
  ]
})
export class ForoAuxiliarPageModule {}
