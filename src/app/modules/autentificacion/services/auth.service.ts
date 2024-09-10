import { Injectable } from '@angular/core';
//Service en la nube  de autentificacion de firebase 
import { AngularFireAuth } from "@angular/fire/compat/auth";
// Accedemos directamente al servicio de firebase
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //refferenciar auth de firebase en el servicio
  constructor(public auth: AngularFireAuth) { }

  //Funcion para registro
  registrar(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  //funcion para inicio de sesion
  iniciarSesion(email: string, password: string) {

    //validar la informacion del usuario -> validar la existencia de los datos
    return this.auth.signInWithEmailAndPassword(email, password);

  }


  //funcion para cerrar sesion
  cerrarSesion() {
    //devuelve la promesa vacía
    return this.auth.signOut();
  }
  // funcion par tomar el uid
  async obtenerUid() {
    //NOS VA A GNERAR UNA PROMESA Y LA CONSTANTE LA VA A CAPTURAR
    const user = await this.auth.currentUser;


    /* si el usuario que se registra no respeta la estructura de la interfaz /
     si tuvo problemas para el registo */
    if (user == null) {
      return null
    }
    else {
      return user.uid
    }
  }


}
