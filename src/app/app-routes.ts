import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PostulantesComponent } from './perfiles/postulantes/postulantes.component';
import { ReclutadoresComponent } from './perfiles/reclutadores/reclutadores.component';
import { AuthenticationGuard } from './Core/services/authentication.guard';
import { OfertasComponent } from './ofertas/ofertas.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'ofertas', component: OfertasComponent, canActivate:[AuthenticationGuard]},
  { path: 'sesion', component: HomeComponent},
  { path: 'perfil', component: PerfilesComponent ,

    children:[
      { path: 'postulante', component: PostulantesComponent },
      { path: 'reclutador', component: ReclutadoresComponent }
    ]
    
  }
  
];

export const AppRoutes = RouterModule.forRoot(appRoutes);