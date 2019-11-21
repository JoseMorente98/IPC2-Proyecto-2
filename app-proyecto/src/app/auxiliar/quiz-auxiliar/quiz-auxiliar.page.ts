import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/_service/pregunta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { RespuestaService } from 'src/app/_service/respuesta.service';
import { ModalController } from '@ionic/angular';
import { ModalQuizComponent } from './modal-quiz/modal-quiz.component';

@Component({
  selector: 'app-quiz-auxiliar',
  templateUrl: './quiz-auxiliar.page.html',
  styleUrls: ['./quiz-auxiliar.page.scss'],
})
export class QuizAuxiliarPage implements OnInit {
  table:any[];
  respuesta:any;

  constructor(
    private preguntaService: PreguntaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private modalController: ModalController,
    private notificationService: NotificacionService,
    private respuestaService: RespuestaService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  getAll() {
    this.preguntaService.getAleatorio(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalQuizComponent,
      componentProps: {
        idEvaluacion: this.activatedRoute.snapshot.paramMap.get('id')
      }
    });
    modal.onDidDismiss().then((data) => {
      //DATOS
      if(data.data) {
        this.getAll();
      }
    });
    return await modal.present();
  }

}
