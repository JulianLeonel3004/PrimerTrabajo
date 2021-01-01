import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Core/services/usuarios.service';
import { Postulante } from 'src/app/Core/Modules/postulante';
import { NgxSpinnerService } from 'ngx-spinner';
// import { FormularioPostulanteComponent } from 'src/app/formulariosLogin/formulario-postulante/formulario-postulante.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  columnas:Array<string>;
  filas:Array<Postulante>;
  query:string;
  page:number;
  pageSize:number;
  cantidadRegistros:number;

  constructor(private usuariosService:UsuariosService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.inicializarTabla(); 

    this.page = 1;
    this.pageSize = 30;
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

        if(fila.linkedin != null && ( fila.linkedin && fila.linkedin.substring(0,8).toLowerCase() != "https://" && fila.linkedin.substring(0,7).toLowerCase() != "http://") ){  
          fila.linkedin = "https://" + fila.linkedin;
        
        }
        if(fila.portfolio != null && ( fila.linkedin && fila.linkedin.substring(0,8).toLowerCase() != "https://" && fila.linkedin.substring(0,7).toLowerCase() != "http://")){
          fila.portfolio = "https://" + fila.portfolio;
        }
  
        this.filas.push(fila);

        this.spinner.hide();
      });


      this.cantidadRegistros = this.filas.length;

    });

  }

}
