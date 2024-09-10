import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarrouselComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    InicioComponent,
    CarrouselComponent,
    CardsComponent,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class InicioModule { }
