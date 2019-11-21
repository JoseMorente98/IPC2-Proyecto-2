import { Component, OnInit } from '@angular/core';
import { ModalEntregadaComponent } from './modal-entregada/modal-entregada.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActividadService } from 'src/app/_service/actividad.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-entregada-auxiliar',
  templateUrl: './entregada-auxiliar.page.html',
  styleUrls: ['./entregada-auxiliar.page.scss'],
})
export class EntregadaAuxiliarPage implements OnInit {
  parameter:any;
  search:any;
  table:any[];

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private actividadService: ActividadService,
    private modalController: ModalController
  ) {
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.actividadService.getEntregadas(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  async presentModal(id?:number) {
    const modal = await this.modalController.create({
      component: ModalEntregadaComponent,
      componentProps: {
        idDetalleCurso: this.activatedRoute.snapshot.paramMap.get('id'),
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
