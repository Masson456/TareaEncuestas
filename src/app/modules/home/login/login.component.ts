import { Component } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  respuestas: any[] = [];
  respuestas2: any[] = [];
  respuestas3: any[] = [];
  respuestaEditando: any = null;
  modoEdicion = false;
  respuestaEditando2: any = null;
  modoEdicion2 = false;
  respuestaEditando3: any = null;
  modoEdicion3 = false;


  constructor(private CursoService: CursoService) {
    this.respuestas = this.CursoService.obtenerRespuestas();
    this.respuestas2 = this.CursoService.obtenerRespuestas2();
    this.respuestas3 = this.CursoService.obtenerRespuestas3();
  }
 

  //metodos respuesta 1
  borrarDatoEspecifico(id: number) {
    const indice = this.respuestas.findIndex(respuesta => respuesta.id === id);

    if (indice !== -1) {
      this.respuestas.splice(indice, 1);
    }
  }

  activarEdicion(respuesta: any) {
    this.respuestaEditando = { ...respuesta };
    this.modoEdicion = true;
  }

  guardarCambiosEditados() {
    const indice = this.respuestas.findIndex(respuesta => respuesta.id === this.respuestaEditando.id);

    if (indice !== -1) {
      this.respuestas[indice] = { ...this.respuestaEditando };
      this.respuestaEditando = null;
      this.modoEdicion = false;
    }
  }




  //metodos respuesta 2
  borrarDatoEspecifico2(id: number) {
    const indice = this.respuestas2.findIndex(respuesta2 => respuesta2.id === id);

    if (indice !== -1) {
      this.respuestas2.splice(indice, 1);
    }
  }

  activarEdicion2(respuesta2: any) {
    this.respuestaEditando2 = { ...respuesta2 };
    this.modoEdicion2 = true;
  }

  guardarCambiosEditados2() {
    const indice = this.respuestas2.findIndex(respuesta2 => respuesta2.id === this.respuestaEditando2.id);

    if (indice !== -1) {
      this.respuestas2[indice] = { ...this.respuestaEditando2 };
      this.respuestaEditando2 = null;
      this.modoEdicion2 = false;
    }
  }





   //metodos respuesta 3
   borrarDatoEspecifico3(id: number) {
    const indice = this.respuestas3.findIndex(respuesta3 => respuesta3.id === id);

    if (indice !== -1) {
      this.respuestas3.splice(indice, 1);
    }
  }

  activarEdicion3(respuesta3: any) {
    this.respuestaEditando3 = { ...respuesta3 };
    this.modoEdicion3 = true;
  }

  guardarCambiosEditados3() {
    const indice = this.respuestas3.findIndex(respuesta3 => respuesta3.id === this.respuestaEditando3.id);

    if (indice !== -1) {
      this.respuestas3[indice] = { ...this.respuestaEditando3 };
      this.respuestaEditando3 = null;
      this.modoEdicion3 = false;
    }
  }

}
