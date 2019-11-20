import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/_service/mensaje.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mensaje-auxiliar',
  templateUrl: './mensaje-auxiliar.page.html',
  styleUrls: ['./mensaje-auxiliar.page.scss'],
})
export class MensajeAuxiliarPage implements OnInit {

  table:any[];

  constructor(
    private mensajeService: MensajeService,
    private router: Router,
    private location: Location

  ) { }

  ngOnInit() {
    this.getAll();
  }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  getAll() {
    this.mensajeService.getAllReceiver(+localStorage.getItem('currentId'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

}
