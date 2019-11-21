import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaService } from 'src/app/_service/asistencia.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asistencia-auxiliar',
  templateUrl: './asistencia-auxiliar.page.html',
  styleUrls: ['./asistencia-auxiliar.page.scss'],
})
export class AsistenciaAuxiliarPage implements OnInit {
  parameter:any;
  table:any[];

  constructor(
    private asistenciaService: AsistenciaService,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificacionService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
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

  getAll() {
    this.asistenciaService.getSingle(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }
    
}
