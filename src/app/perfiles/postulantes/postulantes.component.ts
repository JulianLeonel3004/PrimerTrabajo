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
  textoAcercaDeMi:string;
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
        nombreYApellido: '',
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
        
        this.perfilPostulante.controls.nombreYApellido.setValue(usuario.nombre + ' ' + usuario.apellido);
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

        this.textoAcercaDeMi = usuario.acercaDeMi;
        this.enviarAcercaDeMi();
      });
    });
    
  }


  enviarAcercaDeMi(){
    this.acercaDeMi.emit(this.textoAcercaDeMi);
  }

  onSubmit(){
    
  }

}
