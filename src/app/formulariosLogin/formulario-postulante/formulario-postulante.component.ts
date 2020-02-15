import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-postulante',
  templateUrl: './formulario-postulante.component.html',
  styleUrls: ['./formulario-postulante.component.css']
})
export class FormularioPostulanteComponent implements OnInit {
 
  inicioSesion:FormGroup;
  registro:FormGroup;
  verRegistro:boolean;
  perfil:string;

  mensajePasswordInvalido:string = null;


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.cargarTiposDePerfiles();
    this.verRegistro = false;
    this.cargarFormularios();
    
  }


  cargarTiposDePerfiles(){
  }


  cargarFormularios(){
    this.registro = this.formbuilder.group({
      perfil:[null, Validators.required],
      nick:[null,[Validators.required,Validators.maxLength(50)]],
      email:[
        null,[ Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
          Validators.required]
        ],
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

  mostrarRegistro(value:boolean){
    this.verRegistro = value;
  }


  cargarPerfil(perfil:string){
    this.registro.controls.perfil.setValue(perfil);
  }


  
  onSubmitSesion(){

    console.log(this.inicioSesion);
    
  }

  onSubmitRegistro(){
    this.validarPassword();
    if(this.mensajePasswordInvalido!=null)
      return;
      
    
    
  }

}
