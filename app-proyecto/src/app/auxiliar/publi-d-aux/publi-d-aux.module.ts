import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubliDAuxPageRoutingModule } from './publi-d-aux-routing.module';

import { PubliDAuxPage } from './publi-d-aux.page';
import { SanitizerPipe } from 'src/app/_pipe/sanitizer.pipe';
import { Sanitizer2Pipe } from 'src/app/_pipe/sanitizer2.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubliDAuxPageRoutingModule
  ],
  declarations: [
    PubliDAuxPage,
    Sanitizer2Pipe
  ]
})
export class PubliDAuxPageModule {}
