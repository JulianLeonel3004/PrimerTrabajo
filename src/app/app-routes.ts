import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: '', loadChildren:() => import('./Modules/inicio/inicio.module').then(m => m.InicioModule)},
  {path: 'sesion', loadChildren:() => import('./Modules/home/home.module').then(m => m.HomeModule)}

  
];

export const AppRoutes = RouterModule.forRoot(appRoutes);