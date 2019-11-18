import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadService } from 'src/app/_service/actividad.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  search:any;
  table:any[];
  constructor(
    private actividadService: ActividadService
  ) { }

  ngOnInit() {
    this.getSingle(+localStorage.getItem('currentId'))
  }

  getSingle(id:any) {
    this.actividadService.getNotas(id)
    .subscribe((res) => {
      console.log(res)
      this.table = [];
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

}
