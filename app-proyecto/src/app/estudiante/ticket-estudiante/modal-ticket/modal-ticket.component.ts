import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TicketService } from 'src/app/_service/ticket.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';

@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.scss'],
})
export class ModalTicketComponent implements OnInit {
  data = {
    asunto: '',
    mensaje: '',
    estado: 0,
    idUsuario: localStorage.getItem('currentId'),
    id: 0
  }
  constructor(
    private modalController: ModalController,
    private ticketService: TicketService,
    private notificationsService: NotificacionService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    if(this.navParams.get('value')) {
      this.data.id = this.navParams.get('value')
      this.getSingle(this.data.id);
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  getSingle(id:any) {
    this.ticketService.getSingle(id)
    .subscribe((res) => {
      this.data = res;
      this.data.id = res.idTicket;
    }, (error) => {
      console.log(error);
    })
  }


  saveChanges() {
    if(this.data.asunto) {
      if(this.data.mensaje) {
        if(this.navParams.get('value')) {
          this.update(this.data);
        } else {
          this.create(this.data);
        }
      } else {
        this.notificationsService.alertToast('El mensaje es requerido.');
      }
    } else {
      this.notificationsService.alertToast('El asunto es requerido.');
    }
  }

  create(data:any) {
    this.ticketService.create(data)
    .subscribe((res) => {
      this.modalController.dismiss(res)
      this.notificationsService.alertMessage('Exito :D', 'Ticket agregado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  update(data:any) {
    this.ticketService.update(data)
    .subscribe((res) => {
      this.modalController.dismiss(res)
      this.notificationsService.alertMessage('Exito :D', 'Ticket actualizado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }
}
