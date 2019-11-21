import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/_service/reporte.service';
import { NotificationsService } from 'angular2-notifications';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-reporte5',
  templateUrl: './reporte5.component.html',
  styleUrls: ['./reporte5.component.scss']
})
export class Reporte5Component implements OnInit {
  table:any[];
  usuarios:any[];
  data = {
    idUsuario : '',
  }
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
    private reporteService: ReporteService,
    private notificationsService: NotificationsService,
    private usuariosService: UsuarioService,
  ) { }

  ngOnInit() {
    this.getAll();
    //this.getAllSecciones();
  }

  consultar() {
    this.create(this.data);
  }

  create(data:any) {
    this.reporteService.getReporte6(data)
    .subscribe((res) => {
     console.log(res);
     this.table = [];
     this.table = res;
    }, (error) => {
      console.log(error);
      this.notificationsService.error('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  getAll() {
    this.usuariosService.getAll()
    .subscribe((res) => {
      this.usuarios = [];
      console.log(res);
      this.usuarios = res;
    }, (error) => {
      console.log(error);
    })
  }

}
