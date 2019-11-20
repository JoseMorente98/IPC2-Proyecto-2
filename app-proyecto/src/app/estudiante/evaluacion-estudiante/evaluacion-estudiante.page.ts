import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { EvaluacionService } from 'src/app/_service/evaluacion.service';
import { Location } from '@angular/common';
import { RespuestaService } from 'src/app/_service/respuesta.service';

@Component({
  selector: 'app-evaluacion-estudiante',
  templateUrl: './evaluacion-estudiante.page.html',
  styleUrls: ['./evaluacion-estudiante.page.scss'],
})
export class EvaluacionEstudiantePage implements OnInit {
  parameter:any;
  selectItem:any = 'evaluacion';
  search:any;
  table:any[];

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificacionService,
    private evaluacionService: EvaluacionService,
    private respuestaService: RespuestaService
  ) { }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  goEvaluacion(id:number, data:any) {
    console.log(data)
    if(data=='1') {
      this.notificationsService.alertMessage('Alerta D:', 'La evaluación se encuentre deshabilitada.');
    } else {
      this.router.navigate(['/estudiante/evaluacion-d-estudiante/'+id])
    }
  }

  ngOnInit() {
    this.getAll()
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getAll() {
    this.evaluacionService.getByDetalleCurso(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.table = [];
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  getAllCalificacion() {
    this.respuestaService.getSingle(+localStorage.getItem('currentId'))
    .subscribe((res) => {
      this.table = [];
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.selectItem = ev.detail.value;
    if(this.selectItem == 'evaluacion') {
      this.getAll();
    } else {
      this.getAllCalificacion();
    }
  }

}
