import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../Core/Modules/oferta';
import { OfertasService } from '../../Core/services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertas:Array<Oferta> = new Array<Oferta>();

  constructor(private ofertasServices:OfertasService) { }

  ngOnInit() {

    this.ofertas = this.ofertasServices.getOfertas();
    
  }

}
