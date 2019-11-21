import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuxiliarAdminComponent } from './auxiliar-admin/auxiliar-admin.component';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { CursoComponent } from './curso/curso.component';
import { AsignacionCursoAdminComponent } from './asignacion-curso-admin/asignacion-curso-admin.component';
import { DetailCursoAdminComponent } from './detail-curso-admin/detail-curso-admin.component';
import { TicketAdminComponent } from './ticket-admin/ticket-admin.component';
import { ConAsignacionComponent } from './con-asignacion/con-asignacion.component';
import { Reporte2Component } from './reporte2/reporte2.component';
import { Reporte3Component } from './reporte3/reporte3.component';
import { Reporte4Component } from './reporte4/reporte4.component';
import { Reporte5Component } from './reporte5/reporte5.component';
import { Reporte6Component } from './reporte6/reporte6.component';
import { Reporte7Component } from './reporte7/reporte7.component';

@NgModule({
  declarations: [
    AdminComponent, 
    DashboardAdminComponent,
    UsuarioAdminComponent,
    AuxiliarAdminComponent,
    StudentAdminComponent,
    CursoComponent,
    AsignacionCursoAdminComponent,
    DetailCursoAdminComponent,
    TicketAdminComponent,
    ConAsignacionComponent,
    Reporte2Component,
    Reporte3Component,
    Reporte4Component,
    Reporte5Component,
    Reporte6Component,
    Reporte7Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    SimpleNotificationsModule.forRoot(),
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
