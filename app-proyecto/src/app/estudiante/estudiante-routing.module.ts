import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantePage } from './estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantePage,
    children: [
      {
        path: 'curso-estudiante',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./curso-estudiante/curso-estudiante.module').then(m => m.CursoEstudiantePageModule)
          }
        ]
      },
      {
        path: 'mi-curso-estudiante',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./mi-curso-estudiante/mi-curso-estudiante.module').then(m => m.MiCursoEstudiantePageModule)
          }
        ]
      },
      {
        path: 'ticket-estudiante',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./ticket-estudiante/ticket-estudiante.module').then( m => m.TicketEstudiantePageModule)
          }
        ]
      },
      {
        path: 'publi-estudiante',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./publi-estudiante/publi-estudiante.module').then( m => m.PubliEstudiantePageModule)
          }
        ]
      },
      /*{
        path: 'promocion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./promocion/promocion.module').then(m => m.PromocionPageModule)
          }
        ]
      },
      {
        path: 'informacion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./informacion/informacion.module').then(m => m.InformacionPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },*/
      {
        path: '',
        redirectTo: '/estudiante/curso-estudiante',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/estudiante/curso-estudiante',
    pathMatch: 'full'
  },
  {
    path: 'actividad-estudiante/:id',
    loadChildren: () => import('./actividad-estudiante/actividad-estudiante.module').then( m => m.ActividadEstudiantePageModule)
  },
  {
    path: 'foro-estudiante/:id',
    loadChildren: () => import('./foro-estudiante/foro-estudiante.module').then( m => m.ForoEstudiantePageModule)
  },
  {
    path: 'evaluacion-estudiante/:id',
    loadChildren: () => import('./evaluacion-estudiante/evaluacion-estudiante.module').then( m => m.EvaluacionEstudiantePageModule)
  },
  {
    path: 'foro-d-estudiante/:id',
    loadChildren: () => import('./foro-d-estudiante/foro-d-estudiante.module').then( m => m.ForoDEstudiantePageModule)
  },
  {
    path: 'mensaje-estudiante',
    loadChildren: () => import('./mensaje-estudiante/mensaje-estudiante.module').then( m => m.MensajeEstudiantePageModule)
  },
  {
    path: 'mensaje-d-estudiante/:id',
    loadChildren: () => import('./mensaje-d-estudiante/mensaje-d-estudiante.module').then( m => m.MensajeDEstudiantePageModule)
  },
  {
    path: 'evaluacion-d-estudiante/:id',
    loadChildren: () => import('./evaluacion-d-estudiante/evaluacion-d-estudiante.module').then( m => m.EvaluacionDEstudiantePageModule)
  },
  {
    path: 'actividad-d-estudiante/:id',
    loadChildren: () => import('./actividad-d-estudiante/actividad-d-estudiante.module').then( m => m.ActividadDEstudiantePageModule)
  },
  {
    path: 'publi-d-estudiante/:id',
    loadChildren: () => import('./publi-d-estudiante/publi-d-estudiante.module').then( m => m.PubliDEstudiantePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantePageRoutingModule {}
