import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { EvaluacionService } from 'src/app/_service/evaluacion.service';
import { RespuestaService } from 'src/app/_service/respuesta.service';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalEvaluacionComponent } from './modal-evaluacion/modal-evaluacion.component';

@Component({
  selector: 'app-evaluacion-auxiliar',
  templateUrl: './evaluacion-auxiliar.page.html',
  styleUrls: ['./evaluacion-auxiliar.page.scss'],
})
export class EvaluacionAuxiliarPage implements OnInit {
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
    private respuestaService: RespuestaService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController

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

  async presentModal(tipo:number, id?:number) {
    const modal = await this.modalController.create({
      component: ModalEvaluacionComponent,
      componentProps: {
        idDetalleCurso: this.activatedRoute.snapshot.paramMap.get('id'),
        value: id,
        tipo: tipo
      }
    });
    modal.onDidDismiss().then((data) => {
      //DATOS
      if(data.data) {
        this.getAll();
      }
    });
    return await modal.present();
  }

  async presentActionSheet(tipo:number, id?:number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.delete(id);
        }
      }, {
        text: 'Preguntas',
        icon: 'help',
        handler: () => {
          console.log('Share clicked');
          this.goToRoute('auxiliar/quiz-auxiliar/'+id)
        }
      }, {
        text: 'Configuración',
        icon: 'settings',
        handler: () => {
          console.log('Play clicked');
          this.presentModal(tipo, id);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  delete(id:any) {
    this.evaluacionService.delete(id)
    .subscribe((res) => {
      this.getAll();
      this.notificationsService.alertMessage('Exito :D', 'Evaluacion eliminada con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

}
