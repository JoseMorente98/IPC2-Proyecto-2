import { Component, OnInit } from '@angular/core';
import { AsignacionEstudianteService } from 'src/app/_service/asignacion-estudiante.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';

@Component({
  selector: 'app-mi-curso-estudiante',
  templateUrl: './mi-curso-estudiante.page.html',
  styleUrls: ['./mi-curso-estudiante.page.scss'],
})
export class MiCursoEstudiantePage implements OnInit {
  search:any;
  table:any[];
  
  constructor(
    private asignacionStudentService: AsignacionEstudianteService,
    private notificationsService: NotificacionService
  ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.asignacionStudentService.getCursosByStudent(+localStorage.getItem('currentId'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  delete(idDetalleCurso:number, idAsignacionEstudiante:number) {
    let data = {
      idDetalleCurso: idDetalleCurso,
      idAsignacionEstudiante: idAsignacionEstudiante
    }
    this.asignacionStudentService.delete(data)
    .subscribe((res) => {
      console.log(res)
      if(res.data[0]._existe==0) {
        this.notificationsService.alertMessage('Exito :D', 'Se ha realizado la desasignación con éxito.');
      } else {
        this.notificationsService.alertMessage('Alerta D:', 'Ya no puedes desasignarte ha finalizado el tiempo de desasignación.');
      }
      this.getAll();
    }, (error) => {
      console.log(error);
      this.notificationsService.alertToast('Ha ocurrido un error intente más tarde.');
    })
  }

}
