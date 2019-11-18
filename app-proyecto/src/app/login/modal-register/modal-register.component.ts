import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
})
export class ModalRegisterComponent implements OnInit {
  private title:string = 'password';
  private passwordType:string = 'password';
  private passwordShow:boolean = false;
  private disabledBtn:boolean = false;
  data = {
    nombre: '',
    apellido: '',
    idTipoUsuario: '3',
    carnet: '',
    email: '',
    password: ''
  }
  data2 = {
    email: ''
  }
  constructor(
    private usuarioService: UsuarioService,
    private notificationsService: NotificacionService,
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.navParams.get('value') 
    if(this.navParams.get('value') == '1'){
      this.title = 'Registrarme'
    } else {
      this.title = 'Recuperar Contraseña'
    }
  }

  //CERRAR MODAL
  closeModal() {
    this.modalController.dismiss();
  }

  //TOGGLE PASSWORD
  togglePassword() {
    if(this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  saveChanges() {
    if(this.data.nombre) {
      if(this.data.apellido) {
        if(this.data.carnet) {
          if(this.data.email) {
            if(this.data.password) {
              this.disabledBtn = true;
              this.create(this.data)
            } else {
              this.notificationsService.alertToast('El password es requerido');
            }
          } else {
            this.notificationsService.alertToast('El email es requerido');
          }
        } else {
          this.notificationsService.alertToast('El carnet es requerido');
        }
      } else {
        this.notificationsService.alertToast('El apellido es requerido');
      }
    } else {
      this.notificationsService.alertToast('El nombre es requerido');
    }
  }

  saveChanges2() {
    if(this.data2.email) {
      this.disabledBtn = true;
      this.recovery(this.data2);
    } else {
      this.notificationsService.alertToast('El email es requerido');
    }
  }

  create(data:any) {
    this.usuarioService.create(data)
    .subscribe((res) => {
      console.log(res)
      if(res.status==200) {
        this.notificationsService.alertMessage('Exito :D', 'Usuario registrado exitosamente.');
        setTimeout(() => {
          //INICIAR SESION
          //this.router.navigate(['/login'])
          this.modalController.dismiss();
        }, 1000);
      } else {
        this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');        
      }
      this.disabledBtn = false;
    }, error => {
      this.disabledBtn = false;
      this.notificationsService.alertToast('Error D:' + error);
    })
  }

  recovery(data:any) {
    this.usuarioService.resetpassword(data)
    .subscribe((res) => {
      console.log(res)
      if(res.status==200) {
        this.notificationsService.alertMessage('Exito :D', 'Se ha enviado un correo con su nueva contraseña.');
        setTimeout(() => {
          //INICIAR SESION
          //this.router.navigate(['/login'])
          this.modalController.dismiss();
        }, 1000);
      } else {
        this.notificationsService.alertMessage('Error D:', 'Ha ocurrido un error intente más tarde.');        
      }
      this.disabledBtn = false;
    }, error => {
      this.disabledBtn = false;
      this.notificationsService.alertToast('El usuario no esta registrado en el sistema.');
    })
  }

}
