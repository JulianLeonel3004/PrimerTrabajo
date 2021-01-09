import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-action',
  templateUrl: './modal-action.component.html',
  styleUrls: ['./modal-action.component.css']
})
export class ModalActionComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() actionModal:Function
  
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  confirm() {
    this.actionModal();
    this.modal.dismiss('confirm click');
  }
}
