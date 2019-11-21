import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubliAuxiliarPageRoutingModule } from './publi-auxiliar-routing.module';

import { PubliAuxiliarPage } from './publi-auxiliar.page';
import { ModalPubliComponent } from './modal-publi/modal-publi.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SanitizerPipe } from 'src/app/_pipe/sanitizer.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubliAuxiliarPageRoutingModule,
    Ng2SearchPipeModule,

  ],
  declarations: [
    PubliAuxiliarPage,
    ModalPubliComponent,
    SanitizerPipe
  ], entryComponents: [
    ModalPubliComponent
  ]
})
export class PubliAuxiliarPageModule {}
