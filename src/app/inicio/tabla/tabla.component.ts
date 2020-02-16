import { Component, OnInit } from '@angular/core';
import { Empleo } from 'src/app/Core/Modules/empleo';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  columnas:Array<string>;
  filas:Array<Empleo>;

  constructor() { }

  ngOnInit() {
    
    this.inicializarTabla(); 
  }

  inicializarTabla(){
    this.columnas = new Array<string>();
    this.filas = new Array<Empleo>();

    this.columnas.push("Empresa");
    this.columnas.push("País");
    this.columnas.push("Lugar");
    this.columnas.push("Puesto");
    this.columnas.push("Contacto");
    this.columnas.push("Reclutador");

    let empleo:Empleo = new Empleo();
    
    empleo.empresa = "Sofrecom";
    empleo.pais = "Argentina";
    empleo.lugar = "CABA";
    empleo.puesto = "Desarrollador .NET";
    empleo.contacto = "reclutador@gmail.com";
    empleo.reclutador = "Martín González";

    this.filas.push(empleo);

    empleo = new Empleo();

    empleo.empresa = "Deloitte";
    empleo.pais = "Argentina"
    empleo.lugar = "CABA";
    empleo.puesto = "Desarrollador ABAP";
    empleo.contacto = "reclutador@gmail.com";
    empleo.reclutador = "Martín González";


    this.filas.push(empleo);




  }

}
