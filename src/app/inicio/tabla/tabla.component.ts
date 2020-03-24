import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Core/services/usuarios.service';
import { Postulante } from 'src/app/Core/Modules/postulante';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  columnas:Array<string>;
  filas:Array<Postulante>;
  query:string;

  constructor(private usuariosService:UsuariosService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.inicializarTabla(); 
  }

  inicializarTabla(){

    let usuarios:Array<any>;

    this.columnas = new Array<string>();
    this.filas = new Array<Postulante>();
    let fila:Postulante;

    this.columnas.push("Nombre y Apellido");
    this.columnas.push("País");
    this.columnas.push("Provincia");
    this.columnas.push("Puesto");
    this.columnas.push("Contacto");
    this.columnas.push("Linkedin")
    this.columnas.push("Portfolio");


    this.usuariosService.getUsers().subscribe((users)=>{
      usuarios = users; 
      
      usuarios.forEach(usuario=>{
        fila = new Postulante();
        
        fila.nombre = usuario.nombre;
        fila.apellido = usuario.apellido;
        fila.pais = usuario.pais;
        fila.provincia = usuario.provincia;
        fila.puesto = usuario.puesto;
        fila.contacto = usuario.email;
        fila.linkedin = usuario.linkedin?usuario.linkedin:null;
        fila.portfolio = usuario.portfolio?usuario.portfolio:null;
  
        this.filas.push(fila);

        this.spinner.hide();
      });

    });

  }

}
