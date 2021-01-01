import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/Core/services/authentication.service';
import { UsuariosService } from 'src/app/Core/services/usuarios.service';

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.css']
})
export class PostulantesComponent implements OnInit {

  perfilPostulante:FormGroup;
  idUsuario:string;

  @Output() acercaDeMi = new EventEmitter<string>()

  constructor(private authenticationService:AuthenticationService,
    private usuarioService:UsuariosService,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
    this.cargarValoresFormulario();
  }
  
  crearFormulario(){
      this.perfilPostulante = this.formBuilder.group({
        nombre: '',
        apellido:'',
        fechaDeNacimiento:'',
        nacionalidad:'',
        provincia:'',
        puesto:'',
        contacto:'',
        linkedin:'',
        portfolio:'',
        formacion:'',
        lenguajes:'',
        baseDeDatos:'',
        idiomas:''
      });
  }

  cargarValoresFormulario(){

    
    this.authenticationService.getStatus().subscribe((status)=>{
      this.idUsuario = status.uid;
      this.usuarioService.getUserByid(status.uid).subscribe(usuario=>{
     
        this.perfilPostulante.controls.nombre.setValue(usuario.nombre);
        this.perfilPostulante.controls.apellido.setValue(usuario.apellido);
        this.perfilPostulante.controls.nacionalidad.setValue(usuario.pais);
        this.perfilPostulante.controls.provincia.setValue(usuario.provincia);
        this.perfilPostulante.controls.puesto.setValue(usuario.puesto);
        this.perfilPostulante.controls.contacto.setValue(usuario.email);
        this.perfilPostulante.controls.linkedin.setValue(usuario.linkedin);
        this.perfilPostulante.controls.portfolio.setValue(usuario.portfolio);

        this.perfilPostulante.controls.formacion.setValue(usuario.formacion);
        this.perfilPostulante.controls.lenguajes.setValue(usuario.lenguajes);
        this.perfilPostulante.controls.baseDeDatos.setValue(usuario.baseDeDatos);
        this.perfilPostulante.controls.idiomas.setValue(usuario.idiomas);

      });
    });
    
  }

  onSubmit(){

    this.usuarioService.getUserByid(this.idUsuario).subscribe(usuario=>{
      usuario.nombre = this.perfilPostulante.controls.nombre.value;
      usuario.apellido = this.perfilPostulante.controls.apellido.value;
      usuario.pais = this.perfilPostulante.controls.nacionalidad.value;
      usuario.provincia = this.perfilPostulante.controls.provincia.value;
      usuario.puesto = this.perfilPostulante.controls.puesto.value;
      usuario.contacto = this.perfilPostulante.controls.contacto.value;
      usuario.linkedin = this.perfilPostulante.controls.linkedin.value;
      usuario.portfolio = this.perfilPostulante.controls.portfolio.value;
      usuario.formacion = this.perfilPostulante.controls.formacion.value;

      this.usuarioService.editUser(usuario);

    });


    
    

  }

}
