import { Component } from '@angular/core';

@Component({
  selector: 'app-enduro',
  templateUrl: './enduro.component.html',
  styleUrls: ['./enduro.component.css']
})
export class EnduroComponent {



// constructor le da vida a las variables que creamos ("info")

cards = [
  {
    //Bici-1
    id: "",
    nombre: "S-WORKS TARMAC SL8 - SRAM RED ETAP AXS",
    precio: '$17.500.00000',
    talle: "TALLE: S/52/S2",
    imagen: "https://acdn.mitiendanube.com/stores/003/593/823/products/94924-02_tarmac-sl8-sw-etap-fogtnt-grngstprl-redgstprl_hero-ada7c0d927d937563817194907179505-320-0.webp",
    alt: ""
  },

  {
    //Bici-2
    id: "",
    nombre: "S-WORKS AETHOS - DURA-ACE DI2",
    precio: "$14.500.000,00",
    talle: "TALLE: M/54/S3",
    imagen: "https://acdn.mitiendanube.com/stores/003/593/823/products/screen-shot-2023-10-06-at-20-36-38-8e6cf6adb44baa914616966354208213-320-0.webp",
    alt: ""
  },

  {
    //Bici-3
    id: "",
    nombre: "EPIC WC PRO BRA",
    precio: "$11.125.000,00",
    talle: "TALLE: XL/58/S5",
    imagen: "https://acdn.mitiendanube.com/stores/003/593/823/products/whatsapp-image-2024-06-18-at-18-23-53-e5fcf5f995484e339417187711440935-640-0.webp",
    alt: ""
  },

  {
    //Bici-4
    id: "",
    nombre: "LEVO SL COMP CARBON",
    precio: "$8.279.982,00",
    talle: "TALLE: L/56/S4",
    imagen: "https://acdn.mitiendanube.com/stores/003/593/823/products/2021-turbo-levo-sl-comp-carbon_18103-a2a38a2eaaab60070417029369735342-320-0.webp",
    alt: ""
  },
  {
    //Bici-5
    id: "",
    nombre: "EPIC WORLD CUP EXPERT",
    precio: "$8.160.000,00",
    talle: "TALLE: L/56/S4",
    imagen: "https://acdn.mitiendanube.com/stores/003/593/823/products/93123-30_epic-wc-expert-carb-wht-prl_hero-487f652dfe9cf104e917156080615112-640-0.webp",
    alt: ""
  },

  {
    //Bici-6
    id: "",
    nombre: "EPIC PRO",
    precio: "$7.875.000,00",
    talle: "TALLE: L/56/S4",
    imagen: "https://acdn.mitiendanube.com/stores/003/593/823/products/90323-10_epic-pro-dunewht-grnt-dovgry_hero-4db39124678b77902617125977684954-640-0.webp",
    alt: ""
  },



]
}
