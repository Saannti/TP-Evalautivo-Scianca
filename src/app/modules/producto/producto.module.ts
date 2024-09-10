import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { EnduroComponent } from './pages/enduro/enduro.component';
import { GravelComponent } from './pages/gravel/gravel.component';
import { CrossCountryComponent } from './pages/cross-country/cross-country.component';


@NgModule({
  declarations: [
    EnduroComponent,
    GravelComponent,
    CrossCountryComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    EnduroComponent,
    GravelComponent,
    CrossCountryComponent
  ]
})
export class ProductoModule { }
