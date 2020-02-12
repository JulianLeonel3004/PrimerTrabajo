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
  tiposDePerfiles = ["1","2"];
  simpleItems = [];
  verRegistro:boolean;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.simpleItems = [true, 'Two', 3];
    this.cargarTiposDePerfiles();
    this.verRegistro = false;
    this.cargarFormularios();
    
  }


  cargarTiposDePerfiles(){
    /*this.tiposDePerfiles = new Array<ItemsMultiSelect>();

    this.tiposDePerfiles.push({name:"Postulante",value:true});
    this.tiposDePerfiles.push({name:"Reclutador",value: false});*/

  }


  cargarFormularios(){
    this.registro = this.formbuilder.group({
      perfil:[null,Validators.required],
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
      
      perfil:[null,Validators.required],
      email:[
        null,[Validators.required, 
        Validators.maxLength(50), 
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]
      ],
      password:[null,[Validators.required, Validators.maxLength(50)]]
    });
  }


  mostrarRegistro(value:boolean){
    this.verRegistro = value;
  }

  onSubmitSesion(){
    console.log(this.inicioSesion);
    
  }


  onSubmitRegistro(){

  }

}
