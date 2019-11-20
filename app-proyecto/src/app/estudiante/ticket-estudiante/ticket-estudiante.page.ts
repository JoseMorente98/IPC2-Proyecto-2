import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/_service/ticket.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ModalController } from '@ionic/angular';
import { ModalTicketComponent } from './modal-ticket/modal-ticket.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-estudiante',
  templateUrl: './ticket-estudiante.page.html',
  styleUrls: ['./ticket-estudiante.page.scss'],
})
export class TicketEstudiantePage implements OnInit {
  parameter:any;
  search:any;
  table:any[];

  constructor(
    private ticketService: TicketService,
    private notificationsService: NotificacionService,
    private modalController: ModalController,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  getAll() {
    this.ticketService.getSingleByUsuario(+localStorage.getItem('currentId'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  delete(id:any) {
    this.ticketService.delete(id)
    .subscribe((res) => {
      this.getAll();
      this.notificationsService.alertMessage('Exito :D', 'Ticket eliminado con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  async presentModal(id?:number) {
    const modal = await this.modalController.create({
      component: ModalTicketComponent,
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

}
