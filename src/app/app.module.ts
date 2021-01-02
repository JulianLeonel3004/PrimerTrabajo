import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeComponent } from './home/home.component';
// import { PerfilesComponent } from './ComponentesBorradores/ofertas/perfiles/perfiles.componentas/perfiles/perfiles.component';
// import { FormularioPostulanteComponent } from './formulariosLogin/formulario-postulante/formulario-postulante.component';
import { AppRoutes } from './app-routes';
import { MatSliderModule } from '@angular/material/slider';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './shared/header/header.component';
// import { InicioComponent } from './Modules/inicio/components/inicio/inicio.component';
// import { TablaComponent } from './Modules/inicio/components/inicio/tabla/tabla.component';
// import { PostulantesComponent } from './ComponentesBorradores/ofertas/perfiles/postulantes/postulantes.componenttulantes/postulantes.component';
// import { ReclutadoresComponent } from './ComponentesBorradores/ofertas/perfiles/reclutadores/reclutadores.componenttadores/reclutadores.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { searchPipe } from './Core/Pipes/search';
// import { NgxSpinnerModule } from "ngx-spinner";
// import { OfertasComponent } from './ComponentesBorradores/ofertas/ofertas.component';
@NgModule({
  declarations: [ 
    AppComponent,
    // HomeComponent,
    // PerfilesComponent,
    // FormularioPostulanteComponent,
    HeaderComponent,
    // InicioComponent,
    // TablaComponent,
    // PostulantesComponent,
    // ReclutadoresComponent,
    //searchPipe,
    // OfertasComponent
    
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    //NgbModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularFireModule.initializeApp(environment.firebase),

    
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,    
    AngularFireDatabaseModule,
    FormsModule,
   // NgxSpinnerModule,
  
  ],
  providers: [AngularFireDatabaseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

