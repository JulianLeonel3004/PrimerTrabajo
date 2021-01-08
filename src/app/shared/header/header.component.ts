import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Core/services/usuarios.service';
import { AuthenticationService } from 'src/app/Core/services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logeado:boolean;
  
  constructor(private route:Router, 
    private usuariosService:UsuariosService,
    private authenticationService:AuthenticationService,
    private angularFireAuth:AngularFireAuth) { }

  ngOnInit() {

    this.authenticationService.getStatus().subscribe((data)=>{
      this.logeado = data!=null?true:false;
    });
     
  }

  sesion(esInicio:boolean){
    this.route.navigate(['/sesion']);
    this.usuariosService.inicioSesion.emit(esInicio);
  }


  cerrarSesion(){
    this.authenticationService.logout().then(()=>{
      console.log("Deslogeado");
    }).catch((error)=>{
      console.log("Error: " + error);
    });
  }

  irAPerfil(){
    this.angularFireAuth.onAuthStateChanged(usuario=>{
      this.route.navigate(['/perfil/' +usuario.uid ])
   });
  }


}
