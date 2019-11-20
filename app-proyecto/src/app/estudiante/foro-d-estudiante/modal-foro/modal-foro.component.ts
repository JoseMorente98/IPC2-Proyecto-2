import { Component, OnInit } from '@angular/core';
import { ForoService } from 'src/app/_service/foro.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-foro',
  templateUrl: './modal-foro.component.html',
  styleUrls: ['./modal-foro.component.scss'],
})
export class ModalForoComponent implements OnInit {
  data = {
    comentario: '',
    idUsuario: localStorage.getItem('currentId'),
    idForo: ''
  }
  constructor(
    private foroService: ForoService,
    private notificationsService: NotificacionService,
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.data.idForo = this.navParams.get('value')
  }

  closeModal() {
    this.modalController.dismiss();
  }

  saveChanges() {
    if(this.data.comentario) {
      this.create(this.data)
    } else {
      this.notificationsService.alertToast('El comentario es requerido.')
    }
  }

  create(data:any) {
    this.foroService.createHilo(data)
    .subscribe((res) => {
      console.log(res)
      if(res.data[0]._tiempo==0) {
        this.notificationsService.alertMessage('Exito :D', 'Comentario agregado con éxito.');
      } else {
        this.notificationsService.alertMessage('Alerta D:', 'Ya no puedes comentar se ha cerrado la asignacion.');
      }
      this.modalController.dismiss(res)
    }, (error) => {
      console.log(error);
      this.notificationsService.alertToast('Ha ocurrido un error intente más tarde.');
    })
  }

}
