import { Component, OnInit } from '@angular/core';
import { AsignacionAuxiliarService } from 'src/app/_service/asignacion-auxiliar.service';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalRecoveryComponent } from 'src/app/login/modal-recovery/modal-recovery.component';

@Component({
  selector: 'app-curso-auxiliar',
  templateUrl: './curso-auxiliar.page.html',
  styleUrls: ['./curso-auxiliar.page.scss'],
})
export class CursoAuxiliarPage implements OnInit {
  search:any;
  table:any[];
  constructor(
    private asignacionAuxiliarService: AsignacionAuxiliarService,
    private router: Router,
    private notificacionService: NotificacionService,
    private location: Location,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    if(localStorage.getItem('currentEstado')=='1') {
      this.presentModal();
    }
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
      this.notificacionService.alertMessage('Alerta D:', 'No puedes ingresar a la sección fuiste dado de baja.');      
    }
  }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalRecoveryComponent
    });
    modal.onDidDismiss().then((data) => {
      //DATOS
    });
    return await modal.present();
  }

}
