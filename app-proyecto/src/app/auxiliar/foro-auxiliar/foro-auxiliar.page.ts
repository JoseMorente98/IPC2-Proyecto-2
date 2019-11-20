import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoService } from 'src/app/_service/foro.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalForoAuxComponent } from './modal-foro-aux/modal-foro-aux.component';

@Component({
  selector: 'app-foro-auxiliar',
  templateUrl: './foro-auxiliar.page.html',
  styleUrls: ['./foro-auxiliar.page.scss'],
})
export class ForoAuxiliarPage implements OnInit {
  parameter:any;
  search:any;
  table:any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private foroService: ForoService,
    private router: Router,
    private location: Location,
    private modalController: ModalController

  ) { }

  goToRoute(route:string) {
    this.router.navigate([`${route}`])
  }

  goToBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getAll()
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getAll() {
    this.foroService.getAllByAsignacion(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.table = [];
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  async presentModal(id?:number) {
    const modal = await this.modalController.create({
      component: ModalForoAuxComponent,
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
