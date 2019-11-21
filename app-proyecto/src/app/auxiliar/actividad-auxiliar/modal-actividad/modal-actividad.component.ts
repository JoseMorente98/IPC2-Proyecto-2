import { Component, OnInit } from '@angular/core';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ActividadService } from 'src/app/_service/actividad.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-actividad',
  templateUrl: './modal-actividad.component.html',
  styleUrls: ['./modal-actividad.component.scss'],
})
export class ModalActividadComponent implements OnInit {
  data = {
    nombre: '',
    ponderacion: '',
    fechaLimite: '',
    idDetalleCurso: '',
    estado: '',
    id: 0
  }

  constructor(
    private foroService: ActividadService,
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
      this.notificationsService.alertMessage('Exito :D', 'Actividad agregado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  update(data:any) {
    this.foroService.update(data)
    .subscribe((res) => {
      this.modalController.dismiss(res);
      this.notificationsService.alertMessage('Exito :D', 'Actividad actualizado con éxito.');
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
