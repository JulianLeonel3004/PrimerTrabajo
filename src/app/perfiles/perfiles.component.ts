import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {

  acercaDeMi:string;

  constructor() { }

  ngOnInit() {
  }


  cargarAcercaDeMi(event:string){    
    this.acercaDeMi = event;
  }



}
