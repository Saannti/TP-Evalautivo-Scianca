import { Component } from '@angular/core';
//import { Bicicletas } from 'src/app/models/bicicletas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {


  // PROPIEDAD PUBLICA (TIPO: ARRAYD)



  // constructor le da vida a las variables que creamos ("info")

  tipos = [
    {
      //Enduro
      nombre: "Enduro",
      ruta: "/enduro",
      imagen: "https://www.mundobici.co/wp-content/uploads/2019/11/Bike-trek-1.jpg"
    },

    {
      //Gravel
      nombre: "Gravel",
      ruta: "/gravel",
      imagen: "https://www.mundobici.co/wp-content/uploads/2019/11/eganbernalpinarello_0.jpg"
    },

    {
      //Cross-country
      nombre: "Cross Country",
      ruta: "/cross-country",
      imagen: "https://www.mundobici.co/wp-content/uploads/2019/11/specialized-s-works-epic-ht-prueba.jpg"
    },
  ]
informacion=[

  {
    img: "https://biciclub.com/wp-content/uploads/2023/11/0BP-NDT-_IPA8495-.jpg",
    pe: "Nuevo local",
    ruta: "/local"
  },
  {
    img: "https://biciclub.com/wp-content/uploads/2023/11/BP-NDT-_IPA8847-.jpg",
    pe: "Sobre Nosotros",
    ruta: "/informacion"
  },
]

}






