import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: InicioComponent }
  
];

export const AppRoutes = RouterModule.forRoot(appRoutes);