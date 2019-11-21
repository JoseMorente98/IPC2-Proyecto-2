import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizAuxiliarPageRoutingModule } from './quiz-auxiliar-routing.module';

import { QuizAuxiliarPage } from './quiz-auxiliar.page';
import { ModalQuizComponent } from './modal-quiz/modal-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizAuxiliarPageRoutingModule
  ],
  declarations: [
    QuizAuxiliarPage,
    ModalQuizComponent
  ], entryComponents:[
    ModalQuizComponent

  ]
})
export class QuizAuxiliarPageModule {}
