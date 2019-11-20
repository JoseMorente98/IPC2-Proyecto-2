import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActividadService } from 'src/app/_service/actividad.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actividad-estudiante',
  templateUrl: './actividad-estudiante.page.html',
  styleUrls: ['./actividad-estudiante.page.scss'],
})
export class ActividadEstudiantePage implements OnInit {
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
