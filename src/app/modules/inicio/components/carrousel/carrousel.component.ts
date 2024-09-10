import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})

export class CarrouselComponent {

  carrousel = [
    {
      //img-1
      imagen: "https://acdn.mitiendanube.com/stores/003/593/823/themes/new_linkedman/2-slide-1721073165947-4758088217-5e2479a454095108688885191e24021e1721073168-1920-1920.webp?441589851",

    }, {
      //RUTA
      imagen: "https://acdn.mitiendanube.com/stores/003/593/823/themes/new_linkedman/2-slide-1719495041702-445836998-cb7b629f7ba99bc40d3dbc867fa06bbc1719495155-1920-1920.webp?441589851",
    }, {
      //MTB-BIKE
      imagen: "https://acdn.mitiendanube.com/stores/003/593/823/themes/new_linkedman/2-slide-1719495041703-1963737816-72c539866b570a7394910e36696324e21719495158-1920-1920.webp?441589851",

    },
  ]
}



