import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoService } from 'src/app/_service/foro.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalForoComponent } from './modal-foro/modal-foro.component';

@Component({
  selector: 'app-foro-d-estudiante',
  templateUrl: './foro-d-estudiante.page.html',
  styleUrls: ['./foro-d-estudiante.page.scss'],
})
export class ForoDEstudiantePage implements OnInit {
  table:any[];
  search:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foroService: ForoService,
    private router: Router,
    private location: Location,
    private modalController: ModalController
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
    this.foroService.getAllCommentsByForo(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.table = [];
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  async presentModal(id?:number) {
    const modal = await this.modalController.create({
      component: ModalForoComponent,
      componentProps: {
        value: +this.activatedRoute.snapshot.paramMap.get('id')
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
