import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

//FIREBASE -> IMPORTAMOS HERRAMIENTAS DE LA BASE DE DATOS
import { enviroment } from 'src/enviroments/environment'; //vincula la base de datos con la app
import { AngularFireModule } from '@angular/fire/compat';// Trabaja con las colecciones de informacion
import { AngularFireAuthModule } from '@angular/fire/compat/auth';//Trabaja con la autetificacion 
import { AngularFireStorageModule } from '@angular/fire/compat/storage';// Imagenes y Archivos


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //COMPENTES GLOBALES
    SharedModule,
    //VINCULACION CON FIREBASE
    AngularFireModule.initializeApp(enviroment.firebaseConfig), //Inicializa firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
