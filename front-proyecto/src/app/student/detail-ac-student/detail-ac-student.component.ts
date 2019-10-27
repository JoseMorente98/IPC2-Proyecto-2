import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActividadService } from 'src/app/_service/actividad.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-detail-ac-student',
  templateUrl: './detail-ac-student.component.html',
  styleUrls: ['./detail-ac-student.component.scss']
})
export class DetailAcStudentComponent implements OnInit {
  formData:FormGroup;
  public options = {
    position: ["bottom", "right"],
    timeOut: 2000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    lastOnBottom: false,
    preventDuplicates: true,
    animate: "scale",
    maxLength: 400
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private actividadService: ActividadService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.activatedRoute.snapshot.paramMap.get('id');
    this.initializeForm();
  }

  initializeForm() {
    this.formData = new FormGroup({
      'texto': new FormControl('', [Validators.required, Validators.maxLength(250)]),
      'idUsuario': new FormControl(+localStorage.getItem('currentId')),
      'idActividad': new FormControl(+this.activatedRoute.snapshot.paramMap.get('id')),
      'archivo': new FormControl(null),
    });
  }

  get texto() { return this.formData.get('texto'); }
  get idUsuario() { return this.formData.get('idUsuario'); }
  get idActividad() { return this.formData.get('idActividad'); }
  get archivo() { return this.formData.get('archivo'); }


  saveChanges() {
    this.create(this.formData.value)
  }

  create(data:any) {
    this.actividadService.createEntrega(data)
    .subscribe((res) => {
      console.log(res)
      if(res.data[0]._tiempo==0) {
        this.notificationsService.success('Exito :D', 'Tarea enviada con exito');
      } else {
        this.notificationsService.warn('Alerta D:', 'Ya no puedes enviar tarea se ha cerrado la asignacion.');
      }
      //$('#exampleModalAdd').modal('hide');
      this.initializeForm();
    }, (error) => {
      console.log(error);
      this.notificationsService.error('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }



}
