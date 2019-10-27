import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.scss']
})
export class IntermedioComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //this.activatedRoute.snapshot.paramMap.get('id');
  }

  getAuxiliar() {
    this.router.navigate(['auxiliar']);
    localStorage.setItem("currentTypeName", 'Auxiliar');
  }

  getStudent() {
    this.router.navigate(['estudiante']);
    localStorage.setItem("currentTypeName", 'Estudiante');
  }

}
