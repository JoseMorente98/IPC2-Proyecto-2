import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActividadService } from 'src/app/_service/actividad.service';

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
    private actividadService: ActividadService
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

}
