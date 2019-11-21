import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisteAuxiliarPageRoutingModule } from './asiste-auxiliar-routing.module';

import { AsisteAuxiliarPage } from './asiste-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisteAuxiliarPageRoutingModule
  ],
  declarations: [AsisteAuxiliarPage]
})
export class AsisteAuxiliarPageModule {}
