import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'roles',
        children: [
          {
            path: '',
            loadChildren: () => import('../seguridad/roles/roles.module').then(m => m.RolesPageModule)
          }
        ]
      },
      {
        path: 'usuarios',
        children: [
          {
            path: '',
            loadChildren: () => import('../seguridad/lista-usuarios/lista-usuarios.module').then(m => m.ListaUsuariosPageModule)
          }
        ]
      },
      {
        path: 'acercade',
        children: [
          {
            path: '',
            loadChildren: () => import('../acercade/acercade.module').then(m => m.AcercadePageModule)
          }
        ]
      }  ,

      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: () => import('../configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
          }
        ]
      }  
      ,
      {
        path: '',
        redirectTo: '/tabs/usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
