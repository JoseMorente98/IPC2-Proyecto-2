import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { NotificacionService } from 'src/app/_service/notificacion.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-recovery2',
  templateUrl: './modal-recovery2.component.html',
  styleUrls: ['./modal-recovery2.component.scss'],
})
export class ModalRecovery2Component implements OnInit {
  private title:string = 'password';
  private passwordType:string = 'password';
  private passwordShow:boolean = false;
  private disabledBtn:boolean = false;
  data = {
    password: '',
    passwordRepeat: '',
    id: localStorage.getItem('currentId')
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
    if(this.data.password) {
      if(this.data.passwordRepeat) {
        if(this.data.password == this.data.passwordRepeat) {
          //actualiza
          this.create(this.data)
        } else {
          this.notificationsService.alertToast('Las contraseñas no son iguales')
        }
      } else {
        this.notificationsService.alertToast('La contraseña repetida es requerida')
      }
    } else {
      this.notificationsService.alertToast('La contraseña es requerida')
    }
  }

  create(data:any) {
    this.usuarioService.changePassword(data)
    .subscribe((res) => {
      console.log(res)
      //if(res.status==200) {
        this.notificationsService.alertMessage('Exito :D', 'Contraseña cambiada exitosamente.');
        //setTimeout(() => {
          //INICIAR SESION
          //this.router.navigate(['/login'])
          localStorage.setItem('currentEstado', '0')
          this.modalController.dismiss();
      this.disabledBtn = false;
    }, error => {
      this.disabledBtn = false;
      this.notificationsService.alertToast('Error D:' + error);
    })
  }

}
