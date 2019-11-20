import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActividadService } from 'src/app/_service/actividad.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';

@Component({
  selector: 'app-actividad-d-estudiante',
  templateUrl: './actividad-d-estudiante.page.html',
  styleUrls: ['./actividad-d-estudiante.page.scss'],
})
export class ActividadDEstudiantePage implements OnInit {
  formData = {
    texto: '',
    idUsuario: +localStorage.getItem('currentId'),
    idActividad: 0,
    archivo: null
  }
  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private actividadService: ActividadService,
    private notificationsService: NotificacionService
  ) { }

  ngOnInit() {
    this.formData.idActividad = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getSingle(+this.activatedRoute.snapshot.paramMap.get('id'))
    this.getTarea(+this.activatedRoute.snapshot.paramMap.get('id'))
  }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  data:any;
  tarea:any;
  public options = {
    position: ["bottom", "right"],
    timeOut: 2000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    lastOnBottom: false,
    preventDuplicates: true,
    animate: "scale",
    maxLength: 400
  };

  saveChanges() {
    this.create(this.formData)
  }

  create(data:any) {
    this.actividadService.createEntrega(data)
    .subscribe((res) => {
      console.log(res)
      if(res.data[0]._tiempo==0) {
        this.notificationsService.alertMessage('Exito :D', 'Tarea enviada con exito');
        this.getTarea(+this.activatedRoute.snapshot.paramMap.get('id'))
      } else {
        this.notificationsService.alertMessage('Alerta D:', 'Ya no puedes enviar tarea se ha cerrado la asignacion.');
      }
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  getSingle(id:any) {
    this.actividadService.getSingle(id)
    .subscribe((res) => {
      console.log(res)
      this.data = res;
    }, (error) => {
      console.log(error);
    })
  }

  getTarea(id:any) {
    this.actividadService.getTarea(id, +localStorage.getItem('currentId'))
    .subscribe((res) => {
      console.log(res)
      this.tarea = res;
    }, (error) => {
      console.log(error);
    })
  }

}
