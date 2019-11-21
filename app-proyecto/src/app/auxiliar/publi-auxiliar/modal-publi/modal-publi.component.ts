import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/_service/publicacion.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-publi',
  templateUrl: './modal-publi.component.html',
  styleUrls: ['./modal-publi.component.scss'],
})
export class ModalPubliComponent implements OnInit {
  data = {
    titulo: '',
    descripcion: '',
    imagen: '',
    video: '',
    idUsuario: +localStorage.getItem('currentId'),
    id: 0
  }

  constructor(
    private publicacionService: PublicacionService,
    private notificationsService: NotificacionService,
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  closeModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.data.id = this.navParams.get('value');
    if(this.navParams.get('value')) {
      this.getSingle(this.navParams.get('value'))
    } else {

    }
  }

  saveChanges() {
    if(this.navParams.get('value')) {
      this.update(this.data)
    } else {
      this.create(this.data);
    }
  }

  create(data:any) {
    console.log(data)
    this.publicacionService.create(data)
    .subscribe((res) => {
      this.modalController.dismiss(res) 
      this.notificationsService.alertMessage('Exito :D', 'Publicacion agregado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  update(data:any) {
    this.publicacionService.update(data)
    .subscribe((res) => {
      this.modalController.dismiss(res);
      this.notificationsService.alertMessage('Exito :D', 'Publicacion actualizado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  getSingle(id:any) {
    this.publicacionService.getSingle(id)
    .subscribe((res) => {
      this.data = res;
      this.data.id = res.idPublicacion;
    }, (error) => {
      console.log(error);
    })
  }

}
