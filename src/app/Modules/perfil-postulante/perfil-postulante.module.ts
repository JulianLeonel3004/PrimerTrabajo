import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPostulanteComponent } from './perfil-postulante/perfil-postulante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule, Routes } from '@angular/router';
import { ModalActionComponent } from '../helpers/Components/modal-action/modal-action.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelpersModule } from '../helpers/helpers.module';


const routes: Routes = [
  {
    path: '',
    component: PerfilPostulanteComponent
  }
];

@NgModule({
  declarations: [PerfilPostulanteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgbModule,
    HelpersModule,
    RouterModule.forChild(routes)
  ],
  exports:[PerfilPostulanteComponent],
  entryComponents:[
    ModalActionComponent
  ]
})
export class PerfilPostulanteModule { }
