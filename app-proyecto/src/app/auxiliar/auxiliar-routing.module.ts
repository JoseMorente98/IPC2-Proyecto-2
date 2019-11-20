import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxiliarPage } from './auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: AuxiliarPage,
    children: [
      {
        path: 'curso-auxiliar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./curso-auxiliar/curso-auxiliar.module').then( m => m.CursoAuxiliarPageModule)
          }
        ]
      },
      {
        path: 'mensaje-auxiliar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./mensaje-auxiliar/mensaje-auxiliar.module').then( m => m.MensajeAuxiliarPageModule)
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
        redirectTo: '/auxiliar/curso-auxiliar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'foro-auxiliar/:id',
    loadChildren: () => import('./foro-auxiliar/foro-auxiliar.module').then( m => m.ForoAuxiliarPageModule)
  },
  {
    path: 'actividad-auxiliar/:id',
    loadChildren: () => import('./actividad-auxiliar/actividad-auxiliar.module').then( m => m.ActividadAuxiliarPageModule)
  },
  {
    path: 'evaluacion-auxiliar/:id',
    loadChildren: () => import('./evaluacion-auxiliar/evaluacion-auxiliar.module').then( m => m.EvaluacionAuxiliarPageModule)
  },
  {
    path: 'asistencia-auxiliar/:id',
    loadChildren: () => import('./asistencia-auxiliar/asistencia-auxiliar.module').then( m => m.AsistenciaAuxiliarPageModule)
  },
  {
    path: 'mensaje-d-auxiliar/:id',
    loadChildren: () => import('./mensaje-d-auxiliar/mensaje-d-auxiliar.module').then( m => m.MensajeDAuxiliarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxiliarPageRoutingModule {}
