import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/_service/pregunta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { RespuestaService } from 'src/app/_service/respuesta.service';

@Component({
  selector: 'app-evaluacion-d-estudiante',
  templateUrl: './evaluacion-d-estudiante.page.html',
  styleUrls: ['./evaluacion-d-estudiante.page.scss'],
})
export class EvaluacionDEstudiantePage implements OnInit {
  table:any[];
  respuesta:any;

  constructor(
    private preguntaService: PreguntaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
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

  saveChanges(respuesta: string, data:any) {
    var respuestaTest = {
      respuesta: respuesta,
      punteo: 0,
      idPregunta: data.idPregunta,
      idEvaluacion: data.idEvaluacion,
      idUsuario: localStorage.getItem('currentId')
    }
    if(respuesta == data.correcta) {
      this.notificationService.alertMessage('Correcto :D', 'Su respuesta es correcta');
      respuestaTest.punteo = data.punteo;
      this.create(respuestaTest);
    } else {
      this.notificationService.alertMessage('Incorrecto D:', 'Su respuesta es incorrecta');
      respuestaTest.punteo = 0;
      this.create(respuestaTest);
    }
  }

  create(data:any) {
    this.respuestaService.create(data)
    .subscribe((res) => {
      console.log(res)
    }, (error) => {
      console.log(error);
      this.notificationService.alertToast('Ha ocurrido un error intente más tarde.');
    })
  }

}
