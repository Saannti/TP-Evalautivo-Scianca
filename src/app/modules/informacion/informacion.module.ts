import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { InformacionComponent } from './informacion/informacion.component';
import { LocalComponent } from './local/local.component';


@NgModule({
  declarations: [
    InformacionComponent,
    LocalComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ]
})
export class InformacionModule { }
