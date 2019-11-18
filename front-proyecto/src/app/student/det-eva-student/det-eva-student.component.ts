import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { PreguntaService } from 'src/app/_service/pregunta.service';

//JQUERY
declare var $:any;

@Component({
  selector: 'app-det-eva-student',
  templateUrl: './det-eva-student.component.html',
  styleUrls: ['./det-eva-student.component.scss']
})
export class DetEvaStudentComponent implements OnInit {
  formData:FormGroup;
  search:any;
  parameter:any;
  table:any[];
  data = {
    id: 0,
    nombre: '',
    codigo: '',
    username: '',
    idTipoUsuario: ''
  }
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
    private preguntaService: PreguntaService,
    private notificationsService: NotificationsService
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.parameter = this.activatedRoute.snapshot.paramMap.get('type');
    this.getAll();
  }

  initializeForm() {
    this.formData = new FormGroup({
      'tipoPregunta': new FormControl('', [Validators.required]),
      'pregunta': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'respuesta1': new FormControl('', [Validators.maxLength(100)]),
      'respuesta2': new FormControl('', [Validators.maxLength(100)]),
      'respuesta3': new FormControl('', [Validators.maxLength(100)]),
      'correcta': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'punteo': new FormControl('', [Validators.maxLength(3)]),
      'idEvaluacion': new FormControl(this.activatedRoute.snapshot.paramMap.get('id')),
      'id': new FormControl(''),
    });
  }

  saveChanges() {
    if(this.formData.value.tipoPregunta=='Respuesta Multiple') {
      console.log(this.formData.value)
      this.create(this.formData.value)
    } else {
      this.formData.get('respuesta1').setValue("Falso");
      this.formData.get('respuesta2').setValue("Verdadero");
      this.create(this.formData.value)
      console.log(this.formData.value)
    }
    //this.create(this.formData.value)
  }

  saveChanges2() {
    if(this.formData.value.tipoPregunta=='Respuesta Multiple') {
      console.log(this.formData.value)
      this.create(this.formData.value)
    } else {
      this.formData.get('respuesta1').setValue("Falso");
      this.formData.get('respuesta2').setValue("Verdadero");
      this.update(this.formData.value)
      console.log(this.formData.value)
    }
  }

  getAll() {
    this.preguntaService.getAleatorio(+this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.table = [];
      console.log(res);
      this.table = res;
    }, (error) => {
      console.log(error);
    })
  }

  getSingle(id:any) {
    this.preguntaService.getSingle(id)
    .subscribe((res) => {
      console.log(res)
      this.formData.get('tipoPregunta').setValue(res.tipoPregunta);
      this.formData.get('pregunta').setValue(res.pregunta);
      this.formData.get('respuesta1').setValue(res.respuesta1);
      this.formData.get('respuesta2').setValue(res.respuesta2);
      this.formData.get('respuesta3').setValue(res.respuesta3);
      this.formData.get('correcta').setValue(res.correcta);
      this.formData.get('punteo').setValue(res.punteo);
      this.formData.get('idEvaluacion').setValue(res.idEvaluacion);
      this.formData.get('id').setValue(res.idPregunta);
      console.log(this.formData.value)
    }, (error) => {
      console.log(error);
    })
  }

  delete(id:any) {
    this.preguntaService.delete(id)
    .subscribe((res) => {
      this.getAll();
      this.notificationsService.success('Exito :D', 'Pregunta eliminada con éxito.');
    }, (error) => {
      console.log(error);
      this.notificationsService.error('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  create(data:any) {
    this.preguntaService.create(data)
    .subscribe((res) => {
      $('#exampleModalAdd').modal('hide');
      this.notificationsService.success('Exito :D', 'Pregunta agregada con éxito.');
      this.getAll();
      this.initializeForm();
    }, (error) => {
      console.log(error);
      this.notificationsService.error('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  update(data:any) {
    this.preguntaService.update(data)
    .subscribe((res) => {
      $('#exampleModalUpdate').modal('hide');
      this.notificationsService.success('Exito :D', 'Pregunta actualizada con éxito.');
      this.getAll();
      this.initializeForm();
    }, (error) => {
      console.log(error);
      this.notificationsService.error('Error D:', 'Ha ocurrido un error intente más tarde.');
    })
  }

  get tipoPregunta() { return this.formData.get('tipoPregunta'); }
  get pregunta() { return this.formData.get('pregunta'); }
  get respuesta1() { return this.formData.get('respuesta1'); }
  get respuesta2() { return this.formData.get('respuesta2'); }
  get respuesta3() { return this.formData.get('respuesta3'); }
  get correcta() { return this.formData.get('correcta'); }
  get punteo() { return this.formData.get('punteo'); }
  get id() { return this.formData.get('id'); }

}

