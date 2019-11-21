import { Component, OnInit } from '@angular/core';
import { AsignacionEstudianteService } from 'src/app/_service/asignacion-estudiante.service';
import { CursoDetalleService } from 'src/app/_service/curso-detalle.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { Router } from '@angular/router';
import { ModalRecoveryComponent } from 'src/app/login/modal-recovery/modal-recovery.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-curso-estudiante',
  templateUrl: './curso-estudiante.page.html',
  styleUrls: ['./curso-estudiante.page.scss'],
})
export class CursoEstudiantePage implements OnInit {
  search:any;
  table:any[];
  
  constructor(
    private asignacionStudentService: AsignacionEstudianteService,
    private cursoDetalleService: CursoDetalleService,
    private router: Router,
    private notificationsService: NotificacionService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    if(localStorage.getItem('currentEstado')=='1') {
      this.presentModal();
    }
    this.getAll()
  }
  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  getAll() {
    this.cursoDetalleService.getAll()
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  create(data:any) {
    this.asignacionStudentService.create(data)
    .subscribe((res) => {
      console.log(res.res[0]._existe)
      if(res.res[0]._existe==0) {
        this.notificationsService.alertMessage('Exito :D', 'Curso agregado con éxito.');
      } else if(res.res[0]._existe==1) {
        this.notificationsService.alertMessage('Alerta D:', 'Ya no puedes asignarte ha finalizado el tiempo de asignación.');
      } else {
        this.notificationsService.alertMessage('Advertencia D:', 'No puede asignarse al mismo curso varias veces.');
      }
      //this.getAll();*/
    }, (error) => {
      console.log(error);
      this.notificationsService.alertToast('Ha ocurrido un error intente más tarde.');
    })
  }

  saveChanges(id:number) {
    let data = {
      idAsignacionAuxiliar: id,
      idUsuario: localStorage.getItem('currentId'),
    }
    this.create(data);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalRecoveryComponent,
      componentProps: {
      }
    });
    modal.onDidDismiss().then((data) => {
      //DATOS
    });
    return await modal.present();
  }
  

}
