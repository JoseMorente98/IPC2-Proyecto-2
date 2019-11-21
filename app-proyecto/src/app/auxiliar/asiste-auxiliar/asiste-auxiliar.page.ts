import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/_service/asistencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { AsignacionEstudianteService } from 'src/app/_service/asignacion-estudiante.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asiste-auxiliar',
  templateUrl: './asiste-auxiliar.page.html',
  styleUrls: ['./asiste-auxiliar.page.scss'],
})
export class AsisteAuxiliarPage implements OnInit {
  parameter:any;
  selectItem:any = 'estudiante';
  idDetalleCurso:any;
  table:any[];
  estudiante:any[];

  constructor(
    private asistenciaService: AsistenciaService,
    private asignacionEstudianteService: AsignacionEstudianteService,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificacionService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
    this.idDetalleCurso = this.activatedRoute.snapshot.paramMap.get('id2');
    this.getAll();
  }

  create() {
    let data = {
      idDetalleCurso: +this.activatedRoute.snapshot.paramMap.get('id')
    }
    this.asistenciaService.create(data)
    .subscribe((res) => {
      this.notificationsService.alertMessage('Exito :D', 'Asistencia agregado con éxito.');
      this.getAll();
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  segmentChanged(ev: any) {
    this.selectItem = ev.detail.value;
    console.log('Segment changed', ev);
    if(this.selectItem == 'asistencia') {
      this.getAllSecond()
    } else {
      this.getAll();
    }
  }

  getAllSecond() {
    this.asistenciaService.getAsistencia(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.estudiante = [];
      console.log(res);
      this.estudiante = res;
    }, (error) => {
      console.log(error);
    })
  }

  getAll() {
    this.asignacionEstudianteService.getStudentByCurso(+this.activatedRoute.snapshot.paramMap.get('id2'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  createAsistencia(id:number, tipo:string) {
    let data = {
      idAsistencia: +this.activatedRoute.snapshot.paramMap.get('id'),
      idUsuario: id,
      tipo: tipo,
    }
    this.asistenciaService.createAsistencia(data)
    .subscribe((res) => {
      this.notificationsService.alertMessage('Exito :D', 'Asistencia agregada con éxito.');
      this.getAll();
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }
}
