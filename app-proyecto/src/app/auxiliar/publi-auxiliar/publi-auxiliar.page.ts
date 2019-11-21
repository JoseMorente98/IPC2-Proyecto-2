import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionService } from 'src/app/_service/publicacion.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalPubliComponent } from './modal-publi/modal-publi.component';
import { NotificacionService } from 'src/app/_service/notificacion.service';

@Component({
  selector: 'app-publi-auxiliar',
  templateUrl: './publi-auxiliar.page.html',
  styleUrls: ['./publi-auxiliar.page.scss'],
})
export class PubliAuxiliarPage implements OnInit {
  parameter:any;
  search:any;
  table:any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private publicacionService: PublicacionService,
    private router: Router,
    private location: Location,
    private modalController: ModalController,
    private notificationsService: NotificacionService

  ) { }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getAll()
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getAll() {
    this.publicacionService.getAll()
    .subscribe((res) => {
      this.table = [];
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  async presentModal(id?:number) {
    const modal = await this.modalController.create({
      component: ModalPubliComponent,
      componentProps: {
        value: id
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

  delete(id:any) {
    this.publicacionService.delete(id)
    .subscribe((res) => {
      this.getAll();
      this.notificationsService.alertMessage('Exito :D', 'Publicación eliminada con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

}
