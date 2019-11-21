import { Component, OnInit, ViewChild } from '@angular/core';
import { ReporteService } from 'src/app/_service/reporte.service';
import { NotificationsService } from 'angular2-notifications';
import { CursoService } from 'src/app/_service/curso.service';
import { SeccionService } from 'src/app/_service/seccion.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reporte6',
  templateUrl: './reporte6.component.html',
  styleUrls: ['./reporte6.component.scss']
})
export class Reporte6Component implements OnInit {
  @ViewChild('barCanvas', {static: false}) barCanvas;
  private pieChart: any;
  public pieChartLabels:any[];
  public pieChartData:any=[];
  table:any[];
  cursos:any[];
  secciones:any[];
  data = {
    idCurso : '',
    semestre : '',
    anio : '',
    idSeccion : '',
    horaInicio : '',
    horaFin : '',
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
    private cursosService: CursoService,
    private seccionService: SeccionService
  ) { }

  ngOnInit() {
    this.getAll();
    this.getAllSecciones();
  }

  consultar() {
    this.create(this.data);
  }

  create(data:any) {
    this.reporteService.getReporte7(data)
    .subscribe((res) => {
     console.log(res);
     this.table = [];
     this.table = res;
     this.pieChartLabels = [];
     this.pieChartData = [];
     res.forEach(element => {
       this.pieChartLabels.push(element.tipo);
       this.pieChartData.push(element.cantidad);
     });
     this.loadStatisticBar();
    }, (error) => {
      console.log(error);
      this.notificationsService.error('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  getAll() {
    this.cursosService.getAll()
    .subscribe((res) => {
      this.cursos = [];
      console.log(res);
      this.cursos = res;
    }, (error) => {
      console.log(error);
    })
  }

  getAllSecciones() {
    this.seccionService.getAll()
    .subscribe((res) => {
      this.secciones = [];
      console.log(res);
      this.secciones = res;
    }, (error) => {
      console.log(error);
    })
  }

  public loadStatisticBar() {
    console.log(this.barCanvas)
    this.pieChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
            labels: this.pieChartLabels,
            datasets: [{
                data: this.pieChartData,
                backgroundColor: [
                    '#E51625',
                    '#2B5FD3',
                    '#2B5FD3',
                ]
            }]
        }
    });
  }

}
