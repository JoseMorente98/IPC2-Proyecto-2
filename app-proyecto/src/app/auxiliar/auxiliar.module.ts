import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxiliarPageRoutingModule } from './auxiliar-routing.module';

import { AuxiliarPage } from './auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxiliarPageRoutingModule
  ],
  declarations: [AuxiliarPage]
})
export class AuxiliarPageModule {}
