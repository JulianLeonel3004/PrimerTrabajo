import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalActionComponent } from './Components/modal-action/modal-action.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ModalActionComponent],
  imports: [
    CommonModule,
    NgbModule   
  ],
  exports:[ModalActionComponent]

})
export class HelpersModule { }
