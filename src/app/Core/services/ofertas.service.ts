import { Injectable } from '@angular/core';
import { Oferta } from '../Modules/oferta';

@Injectable({
    providedIn: 'root'
  })
  export class OfertasService { 

    public getOfertas(){

        let oferta:Oferta = new Oferta();
        let ofertas:Array<Oferta> = new Array<Oferta>();

        oferta.enviarCV = "bteijeiro@tgv.com.ar";
        oferta.ubicacion = "Puerto Madero";
        oferta.requisitos = "Conocimientos: .NET, C#, ASP.NET, Java, JavaScript/Jquery/POO/AJAX/HTML5, Web Forms, Web Servers, SQL Server, Oracle, etc. ";
        oferta.empresa = "TGV";
        oferta.puesto = "Desarrollador";
        ofertas.push(oferta);


        oferta = new Oferta();
        oferta.enviarCV = "pcerezo@pedemonteasoc.com.ar";
        oferta.ubicacion = "Córdoba";
        oferta.requisitos = "Idioma: Inglés y/o Italiano,	Full – Time,	Estudiantes avanzados o egresados de carreras informáticas";
        oferta.empresa = "Empresa de Córdoba ( Reclutadora no especificó )";
        oferta.puesto = "PROGRAMADOR  JAVA – BACK END / PROGRAMADOR ANGULAR  8 – FRONT END";
        ofertas.push(oferta);

        return ofertas;
    }

    
  }