import { Component, OnInit } from '@angular/core';
import { AsignacionAuxiliarService } from 'src/app/_service/asignacion-auxiliar.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-cursos-assistant',
  templateUrl: './cursos-assistant.component.html',
  styleUrls: ['./cursos-assistant.component.scss']
})
export class CursosAssistantComponent implements OnInit {
  search:any;
  table:any[];
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
  constructor(
    private asignacionAuxiliarService: AsignacionAuxiliarService,
    private router: Router,
    private notificacionService: NotificationsService
  ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.asignacionAuxiliarService.getCursosByAux(+localStorage.getItem('currentId'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  getLink(ruta:string, estado:number) {
    if(estado==1) {
      this.router.navigate([ruta])
    } else {
      this.notificacionService.warn('Alerta D:', 'No puedes ingresar a la sección fuiste dado de baja.');      
    }
  }

}
