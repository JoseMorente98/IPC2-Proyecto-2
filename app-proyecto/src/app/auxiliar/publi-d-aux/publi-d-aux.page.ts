import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoService } from 'src/app/_service/foro.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { PublicacionService } from 'src/app/_service/publicacion.service';

@Component({
  selector: 'app-publi-d-aux',
  templateUrl: './publi-d-aux.page.html',
  styleUrls: ['./publi-d-aux.page.scss'],
})
export class PubliDAuxPage implements OnInit {
  parameter:any;
  search:any;
  data:any;
  table:any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private publicacionService: PublicacionService,
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
    this.getAllComentarios();
  }

  getAll() {
    this.publicacionService.getSingle(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      console.log(res);
      this.data = res;
    }, (error) => {
      console.log(error);
    })
  }

  getAllComentarios() {
    this.publicacionService.getComentarios(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      console.log(res);
      this.table = [];
      this.table = res;
      this.table.reverse();
    }, (error) => {
      console.log(error);
    })
  }


}
