import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Postulante } from 'src/app/Core/Modules/postulante';
import { UsuariosService } from 'src/app/Core/services/usuarios.service';

@Component({
  selector: 'app-perfil-postulante',
  templateUrl: './perfil-postulante.component.html',
  styleUrls: ['./perfil-postulante.component.css']
})
export class PerfilPostulanteComponent implements OnInit {

  postulante:Postulante;
  formPostulante:FormGroup;

  constructor(private usuariosService:UsuariosService, 
    private spinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    private formbuilder:FormBuilder) { }

  ngOnInit() {

    let uid = this.route.snapshot.params['uid'];

    this.inicalizarFormulario();

    this.spinnerService.show();

    this.usuariosService.getUserByid(uid).subscribe(postulante =>{
      this.postulante = postulante;
      this.cargarFormulario();
      this.spinnerService.hide();
    })

  }


  inicalizarFormulario(){
    this.formPostulante = this.formbuilder.group({
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
      portfolio:[null,[Validators.maxLength(200)]]

    });
  }


  cargarFormulario(){
    
    this.formPostulante.controls.nombre.setValue(this.postulante.nombre);
    this.formPostulante.controls.apellido.setValue(this.postulante.apellido);
    this.formPostulante.controls.pais.setValue(this.postulante.pais);
    this.formPostulante.controls.provincia.setValue(this.postulante.provincia);
    this.formPostulante.controls.puesto.setValue(this.postulante.puesto);
    this.formPostulante.controls.email.setValue(this.postulante.email);
    this.formPostulante.controls.linkedin.setValue(this.postulante.linkedin);
    this.formPostulante.controls.portfolio.setValue(this.postulante.portfolio);
  }

  mapearPostulante(){
    this.postulante.nombre =  this.formPostulante.controls.nombre.value;
    this.postulante.apellido =  this.formPostulante.controls.apellido.value;
    this.postulante.pais =  this.formPostulante.controls.pais.value;
    this.postulante.provincia =  this.formPostulante.controls.provincia.value;
    this.postulante.puesto =  this.formPostulante.controls.puesto.value;
    this.postulante.email =  this.formPostulante.controls.email.value;
    this.postulante.linkedin =  this.formPostulante.controls.linkedin.value;
    this.postulante.portfolio =  this.formPostulante.controls.portfolio.value;
  }

  onSubmit(){
    this.spinnerService.show();
    this.mapearPostulante();
    this.usuariosService.editUser(this.postulante)
    .then(()=>{
      alert("Edición Completa");
      this.spinnerService.hide();
    })
    .catch(err=>{
      alert("Error al editar: " + err);
      this.spinnerService.hide();
      
    })  
  }

}
