import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/_service/mensaje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mensaje-d-auxiliar',
  templateUrl: './mensaje-d-auxiliar.page.html',
  styleUrls: ['./mensaje-d-auxiliar.page.scss'],
})
export class MensajeDAuxiliarPage implements OnInit {
  mensajes:any [];
  parameter:any;
  usuarioId:any = localStorage.getItem('currentId')
  data = {
    usuario1: localStorage.getItem('currentId'),
    usuario2: '',
    asunto: '',
    mensaje: '',
    file: null
  }
  
  constructor(
    private mensajeService: MensajeService,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificacionService,
    private router: Router,
    private location: Location
  ) { }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  ngOnInit() {
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.usuario2 = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllMessage(this.parameter);
  }

  getAllMessage(idUsuario1:number) {
    this.mensajeService.getAllMessages(+localStorage.getItem('currentId'), idUsuario1)
    .subscribe((res) => {
      this.mensajes = [];
      console.log(res);
      this.mensajes = res;
    }, (error) => {
      console.log(error);
    })
  }

  create(data:any) {
    this.mensajeService.create(data)
    .subscribe((res) => {
      this.notificationsService.alertMessage('Exito :D', 'Mensaje enviado con éxito.');
      this.getAllMessage(this.parameter);
      this.data.asunto = '';
      this.data.mensaje = '';
    }, (error) => {
      console.log(error);
      this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  saveChanges() {
    //console.log(this.formData.value)
    this.create(this.data)
  }

}
