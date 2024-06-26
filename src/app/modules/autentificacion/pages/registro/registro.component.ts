import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// servicio firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
// importamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';
// importamos componente de rutas de angular
import { Router } from '@angular/router'




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para los caracteres o no 
  hide = true;

  //importar interfa de usuaio 
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  //CREAMOS COLECCION DE USUARIOS, TIPO "USUARIO PARA ARRAYS (ARREGLOS"
  coleccionUsarios: Usuario[] = [];
  //iniciliza un servicio
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestone: FirestoreService,
    public servicioRutas: Router
  ) { }

  async guardarUsuario() {
    this.servicioFirestone.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);

      })
      .catch(error => {
        console.log('error =>', error)
      })
  }
}

async registrar() {
  const credenciales = {
    email: this.usuarios.email,
    password: this.usuarios.password

  }

  const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    //el metodo THEN es una promesa que devuelove el mismo valor si todo sale bien

    .then(res => {
      alert("se registro exittosamente")


      // el metodo NAIVIGATE nos redirecciona a otra vista 

      this.servicioRutas.navigate(['/inicio'])
    })
  this.limpiarInputs()
}
limpiarInputs() {
  const inputs = {
    //


    uid: this.usuarios.uid = '',
    nombre: this.usuarios.nombre = '',
    apellido: this.usuarios.apellido = '',
    email: this.usuarios.email = '',
    rol: this.usuarios.rol = '',
    password: this.usuarios.password = ''


  }
  alert("Registrado corerectamente")
}


