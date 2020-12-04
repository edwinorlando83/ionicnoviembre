import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./seguridad/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cambiarpass',
    loadChildren: () => import('./seguridad/cambiarpass/cambiarpass.module').then( m => m.CambiarpassPageModule)
  },
  {
    path: 'principal/:nombre',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./seguridad/roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./seguridad/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'editarusuario/:correo',
    loadChildren: () => import('./editarusuario/editarusuario.module').then( m => m.EditarusuarioPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'agregarusuario',
    loadChildren: () => import('./seguridad/agregarusuario/agregarusuario.module').then( m => m.AgregarusuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
