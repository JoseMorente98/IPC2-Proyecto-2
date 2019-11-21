import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/_service/actividad.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-entregada',
  templateUrl: './modal-entregada.component.html',
  styleUrls: ['./modal-entregada.component.scss'],
})
export class ModalEntregadaComponent implements OnInit {
  data2:any;
  data = {
    entregada: 2,
    nota: 0,
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
    this.data.id = this.navParams.get('value');
    this.getSingle(this.navParams.get('value'))
  }

  saveChanges() {
    this.update(this.data)
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
    this.foroService.calificar(data)
    .subscribe((res) => {
      this.modalController.dismiss(res);
      this.notificationsService.alertMessage('Exito :D', 'Actividad calificada con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  getSingle(id:any) {
    this.foroService.getSingleActividad(id)
    .subscribe((res) => {
      console.log(res)
      this.data2 = res;
    }, (error) => {
      console.log(error);
    })
  }

}
