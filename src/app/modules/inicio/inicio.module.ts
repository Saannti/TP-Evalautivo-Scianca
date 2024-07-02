import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';


@NgModule({
  declarations: [
InicioComponent,
CardsComponent,
CarrouselComponent,




  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],

  exports:[
    CarrouselComponent,
    CardsComponent
  ]
})
export class InicioModule { }
