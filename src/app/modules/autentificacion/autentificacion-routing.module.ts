import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { IniciosesionComponent } from './inicio-secion/inicio-secion.component';
const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"inicio-sesion",component:IniciosesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
