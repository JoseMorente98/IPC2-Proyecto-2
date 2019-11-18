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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantePageRoutingModule {}
