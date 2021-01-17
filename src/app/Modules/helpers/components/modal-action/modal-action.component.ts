import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-action',
  templateUrl: './modal-action.component.html',
  styleUrls: ['./modal-action.component.css']
})
export class ModalActionComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() cancelName:string;
  @Input() okName:string;
  @Input() actionModal:Function
  
  formRazon:FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formRazon = this.formBuilder.group({
      razon:[null, [Validators.required]]
    })
  }

  confirm(valueForm) {
    this.actionModal(valueForm);
    this.modal.dismiss('confirm click');
  }
  

  
}
