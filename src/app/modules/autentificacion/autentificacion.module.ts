import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciosesionComponent } from './inicio-secion/inicio-secion.component';
import { RegistroComponent } from './registro/registro.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    IniciosesionComponent,
    RegistroComponent
    
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
   MatFormFieldModule,
    
  ],
  exports:[
    IniciosesionComponent,
    RegistroComponent,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class AutentificacionModule { }
