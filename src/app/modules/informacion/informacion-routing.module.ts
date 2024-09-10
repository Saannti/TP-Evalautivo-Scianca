import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './local/local.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  { path: "informacion", component: InformacionComponent},

  { path: "local", component: LocalComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionRoutingModule { }
