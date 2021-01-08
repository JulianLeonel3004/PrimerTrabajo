import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TablaComponent } from './components/inicio/tabla/tabla.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { searchPipe } from '../../Core/Pipes/search';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  }
];


@NgModule({
  declarations: [InicioComponent,TablaComponent,searchPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class InicioModule { }
