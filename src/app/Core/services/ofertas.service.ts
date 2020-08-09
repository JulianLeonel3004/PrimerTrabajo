import { Injectable } from '@angular/core';
import { Oferta } from '../Modules/oferta';

@Injectable({
    providedIn: 'root'
  })
  export class OfertasService { 

    public getOfertas(){

        let oferta:Oferta = new Oferta();
        let ofertas:Array<Oferta> = new Array<Oferta>();

        oferta = new Oferta();
        oferta.enviarCV = "";
        oferta.ubicacion = "";
        oferta.requisitos = "";
        oferta.empresa = "";
        oferta.puesto = "";
        ofertas.push(oferta);

        return ofertas;
    }

    
  }