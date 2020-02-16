import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { FormularioPostulanteComponent } from './formulariosLogin/formulario-postulante/formulario-postulante.component';
import { AppRoutes } from './app-routes';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { TablaComponent } from './inicio/tabla/tabla.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    PerfilesComponent,
    FormularioPostulanteComponent,
    HeaderComponent,
    InicioComponent,
    TablaComponent
    
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgSelectModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

