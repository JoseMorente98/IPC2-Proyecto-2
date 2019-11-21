import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { NotificacionService } from '../_service/notificacion.service';
import { ModalController } from '@ionic/angular';
import { ModalRegisterComponent } from './modal-register/modal-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data = {
    email: '',
    password: ''
  }
  private disabledBtn:boolean = false;
  private passwordType:string = 'password';
  private passwordShow:boolean = false;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificacionService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
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

  authentication() {
    if(this.data.email) {
      if(this.data.password) {
        this.disabledBtn = true;
        this.logIn();
      } else {
        this.notificationService.alertToast("La contraseña es requerida.");
      }
    } else {
      this.notificationService.alertToast("El correo es requerido.");
    }
  }

  logIn() {
    console.log(this.data)
    this.authService.auth(this.data)
    .subscribe((res) => {
      if(res.length > 0) {
        localStorage.setItem("currentId", res[0].idUsuario);      
        localStorage.setItem("currentNombre", res[0].nombre);         
        localStorage.setItem("currentApellido", res[0].apellido);         
        localStorage.setItem("currentEstado", res[0].estado);         

        switch(res[0].idTipoUsuario) {
          case 1:
            this.router.navigate(['admin']);
            localStorage.setItem("currentTypeName", res[0].tipo);         
            break;
          case 2:
            if(res.length > 1) {
              //DASHBOARD COMPARTIDO
              this.router.navigate(['auxiliar']);
            } else {
              //AUX
              this.router.navigate(['auxiliar']);
              localStorage.setItem("currentTypeName", res[0].tipo);
            }
            break;
          case 3:
            this.router.navigate(['estudiante']);
            localStorage.setItem("currentTypeName", res[0].tipo);
            break;
        }
      } else {
        this.disabledBtn = false;
        this.notificationService.alertToast('El correo o contraseña son incorrectos.');
      }
      this.disabledBtn = false;
    }, (err) => {
      this.disabledBtn = false;
      this.notificationService.alertToast('El correo o contraseña son incorrectos.');
      console.log(err);
    });
  }

  async presentModal(id:number) {
    const modal = await this.modalController.create({
      component: ModalRegisterComponent,
      componentProps: {
        value: id
      }
    });
    modal.onDidDismiss().then((data) => {
      //DATOS
    });
    return await modal.present();
  }

}
