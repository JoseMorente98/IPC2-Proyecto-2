import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionService } from 'src/app/_service/publicacion.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ModalComentarioComponent } from './modal-comentario/modal-comentario.component';

@Component({
  selector: 'app-publi-d-estudiante',
  templateUrl: './publi-d-estudiante.page.html',
  styleUrls: ['./publi-d-estudiante.page.scss'],
})
export class PubliDEstudiantePage implements OnInit {
  parameter:any;
  search:any;
  data:any;
  meGusta:any;
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
    this.getMeGusta();
    this.getAllComentarios();
  }

  getAll() {
    this.publicacionService.getSingle(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      console.log(res);
      this.data = res;
    }, (error) => {
      console.log(error);
    })
  }

  getAllComentarios() {
    this.publicacionService.getComentarios(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      console.log(res);
      this.table = [];
      this.table = res;
      this.table.reverse();
    }, (error) => {
      console.log(error);
    })
  }

  getMeGusta() {
    this.publicacionService.getMeGusta(+localStorage.getItem('currentId'), +this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      console.log(res)
      this.meGusta = null;
      this.meGusta = res;
      console.log(this.meGusta)
    }, (error) => {
      console.log(error);
    })
  }

  create() {
    let data = {
      idUsuario: localStorage.getItem('currentId'),
      idPublicacion: +this.activatedRoute.snapshot.paramMap.get('id')
    }
    console.log(data)
    this.publicacionService.createMeGusta(data)
    .subscribe((res) => {
      console.log(res)
      this.notificationsService.alertMessage('Exito :D', 'Te gusta esta publicación.');
      this.getMeGusta();
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }


  delete(id:any) {
    this.publicacionService.deleteMeGusta(id)
    .subscribe((res) => {
      this.notificationsService.alertMessage('Exito :D', 'Ya no te gusta la publicación.');
      this.getMeGusta();
      this.meGusta = null;
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  async presentModal(id?:number) {
    const modal = await this.modalController.create({
      component: ModalComentarioComponent,
      componentProps: {
        value: +this.activatedRoute.snapshot.paramMap.get('id')
      }
    });
    modal.onDidDismiss().then((data) => {
      //DATOS
      if(data.data) {
        this.getAllComentarios();
      }
    });
    return await modal.present();
  }

}
