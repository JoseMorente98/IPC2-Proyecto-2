import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { PreguntaService } from 'src/app/_service/pregunta.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';

@Component({
  selector: 'app-modal-quiz',
  templateUrl: './modal-quiz.component.html',
  styleUrls: ['./modal-quiz.component.scss'],
})
export class ModalQuizComponent implements OnInit {
  data = {
    tipoPregunta: '',
    pregunta: '',
    respuesta1: '',
    respuesta2: '',
    respuesta3: '',
    correcta: '',
    punteo: '',
    idEvaluacion: ''
  }

  constructor(
    private navParams: NavParams,
    private preguntaService: PreguntaService,
    private modalController: ModalController,
    private notificationsService: NotificacionService
  ) { }

  ngOnInit() {
    this.data.idEvaluacion = this.navParams.get('idEvaluacion')
  }

  saveChanges() {
    if(this.data.tipoPregunta=='Respuesta Multiple') {
      console.log(this.data)
      this.create(this.data)
    } else {
      this.data.respuesta1 = "Falso";
      this.data.respuesta2 = "Verdadero";
      this.create(this.data)
      console.log(this.data)
    }
    //this.create(this.formData.value)
  }

  create(data:any) {
    this.preguntaService.create(data)
    .subscribe((res) => {
      this.modalController.dismiss(res);
      this.notificationsService.alertMessage('Exito :D', 'Pregunta agregada con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

}
