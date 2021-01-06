import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Core/services/authentication.service';
import { UsuariosService } from 'src/app/Core/services/usuarios.service';

@Component({
  selector: 'app-formulario-postulante',
  templateUrl: './formulario-postulante.component.html',
  styleUrls: ['./formulario-postulante.component.css']
})
export class FormularioPostulanteComponent implements OnInit {
 
  inicioSesion:FormGroup;
  registro:FormGroup;
  opcionSesion:boolean;
  perfil:string;

  mensajePasswordInvalido:string = null;

  constructor(private formbuilder:FormBuilder, 
    private authenticationService:AuthenticationService,
    private userService:UsuariosService,
    private router: Router) { }

  ngOnInit() {
    this.opcionSesion = true;
    this.cargarTiposDePerfiles();

    this.userService.inicioSesion.subscribe((value)=>{
      this.opcionSesion = value;
    });

    this.cargarFormularios();
    
  }


  login(){
  this.authenticationService.loginWithEmail(this.inicioSesion.controls.email.value,this.inicioSesion.controls.password.value)
   .then(()=>{
     alert("Logeado correctamente");
     this.router.navigate(['/']);
   })
   .catch(msjError=>{
     alert("Error: " + msjError);
   })
  }

  logout(){
    this.authenticationService.logout();
  }

  register(){
    this.authenticationService.registerWithEmail(this.registro.controls.email.value, this.registro.controls.password.value).then((data)=>{
      
      const user = {

        uid: data.user.uid,
        email: data.user.email,
        nombre: this.registro.controls.nombre.value,
        apellido: this.registro.controls.apellido.value,
        pais:  this.registro.controls.pais.value,
        provincia:  this.registro.controls.provincia.value,
        puesto:  this.registro.controls.puesto.value,
        linkedin: this.registro.controls.linkedin?this.registro.controls.linkedin.value:null,
        portfolio: this.registro.controls.portfolio?this.registro.controls.portfolio.value:null

      };
      this.userService.createUser(user).then(()=>{
        
        alert("Registrado Correctamente");
        
      });
      
    }).catch((error)=>{
      
      alert('ocurrió un error:' + error.message);
      
    });
  }


  cargarTiposDePerfiles(){
  }


  cargarFormularios(){
    this.registro = this.formbuilder.group({
      nombre:[null,[Validators.maxLength(50),Validators.required]],
      apellido:[null,[Validators.maxLength(50),Validators.required]],
      pais:[null,[Validators.maxLength(50),Validators.required]],
      provincia:[null,[Validators.maxLength(50),Validators.required]],
      puesto:[null,[Validators.maxLength(50),Validators.required]],
      email:[
        null,[ Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
          Validators.required]
        ],
      
      linkedin:[null,[Validators.maxLength(200)]],
      portfolio:[null,[Validators.maxLength(200)]],
      password:[null,[Validators.required,Validators.maxLength(50)]],
      password2:[null, [Validators.required,Validators.maxLength(50)]]

    });

    this.inicioSesion =  this.formbuilder.group({
      email:[
        null,[Validators.required, 
        Validators.maxLength(50), 
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]
      ],
      password:[null,[Validators.required, Validators.maxLength(50)]]
    });
  }

  validarPassword(){
    if(this.registro.controls.password2.value != this.registro.controls.password.value)
      this.mensajePasswordInvalido = "*Las contraseñas son distintas";
    else
      this.mensajePasswordInvalido = null;
      
  }

  mostrarSesion(value:boolean){
    this.opcionSesion = value;
  }


  cargarPerfil(perfil:string){
    this.registro.controls.perfil.setValue(perfil);
  }


  
  onSubmitSesion(){
    this.login();
    //console.log(this.inicioSesion);
  }

  onSubmitRegistro(){
    this.validarPassword();
    if(this.mensajePasswordInvalido==null)
      this.register();
  }

}
