import { Component, OnInit } from '@angular/core';
import { ForoService } from 'src/app/_service/foro.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-foro-aux',
  templateUrl: './modal-foro-aux.component.html',
  styleUrls: ['./modal-foro-aux.component.scss'],
})
export class ModalForoAuxComponent implements OnInit {
  data = {
    titulo: '',
    descripcion: '',
    fechaFin: '',
    idDetalleCurso: '',
    id: 0
  }

  constructor(
    private foroService: ForoService,
    private notificationsService: NotificacionService,
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  closeModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.data.idDetalleCurso = this.navParams.get('idDetalleCurso');
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
    this.foroService.create(data)
    .subscribe((res) => {
      this.modalController.dismiss(res) 
      this.notificationsService.alertMessage('Exito :D', 'Foro agregado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  update(data:any) {
    this.foroService.update(data)
    .subscribe((res) => {
      this.modalController.dismiss(res);
      this.notificationsService.alertMessage('Exito :D', 'Foro actualizado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  getSingle(id:any) {
    this.foroService.getSingle(id)
    .subscribe((res) => {
      this.data = res;
      this.data.id = res.idForo;
    }, (error) => {
      console.log(error);
    })
  }

}
