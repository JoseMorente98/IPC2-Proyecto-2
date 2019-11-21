import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/_service/evaluacion.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.scss']
})
export class Reporte4Component implements OnInit {
  table:any[];
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
    private reporteService: EvaluacionService,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit() {
    this.getAll();
    //this.getAllSecciones();
  }

  getAll() {
    this.reporteService.getAll()
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }


  
}
