import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActividadService } from 'src/app/_service/actividad.service';
import { ModalController } from '@ionic/angular';
import { ModalActividadComponent } from './modal-actividad/modal-actividad.component';

@Component({
  selector: 'app-actividad-auxiliar',
  templateUrl: './actividad-auxiliar.page.html',
  styleUrls: ['./actividad-auxiliar.page.scss'],
})
export class ActividadAuxiliarPage implements OnInit {
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
    this.actividadService.getAll()
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
      component: ModalActividadComponent,
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
