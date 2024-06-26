import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { InicioSecionComponent } from './pages/inicio-secion/inicio-secion.component';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    InicioSecionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
