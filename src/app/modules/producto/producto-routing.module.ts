import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossCountryComponent } from './pages/cross-country/cross-country.component';
import { EnduroComponent } from './pages/enduro/enduro.component';
import { GravelComponent } from './pages/gravel/gravel.component';

const routes: Routes = [

  { path: "cross-country", component: CrossCountryComponent },

  { path: "enduro", component: EnduroComponent },

  { path: "gravel", component: GravelComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
