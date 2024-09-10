import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-secion',
  templateUrl: './inicio-secion.component.html',
  styleUrls: ['./inicio-secion.component.css']
})
export class InicioSesionComponent {


  hide = true;
  constructor(
    public serviceAuth : AuthService,
    public FirestoreService: FirestoreService,
    public servicioRutas: Router

  ) { }


  usuarios: Usuario = {
    uid: '',
    nombre: ' ',
    apellido: '',
    email: ' ',
    rol: '',
    password: ''

  }

  async comparador() {
    //recibe la informacion cafada desde el navegador

    const credencailess = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }


    const res = await this.serviceAuth.iniciarSesion(credencailess.email, credencailess.password)

      .then(res => {
        alert('se pudo iniciar secion');

        this.servicioRutas.navigate(['/inicio'])
      })
      .catch(error => {
        alert('No se pudo iniciar secion' + error)

        this.limpiarInputs();
      })
  }
  limpiarInputs() {

  }
}