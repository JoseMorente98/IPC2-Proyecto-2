import { Component, OnInit } from '@angular/core';
import { AsignacionAuxiliarService } from 'src/app/_service/asignacion-auxiliar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoService } from 'src/app/_service/foro.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-foro-estudiante',
  templateUrl: './foro-estudiante.page.html',
  styleUrls: ['./foro-estudiante.page.scss'],
})
export class ForoEstudiantePage implements OnInit {
  parameter:any;
  search:any;
  table:any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private foroService: ForoService,
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

}
