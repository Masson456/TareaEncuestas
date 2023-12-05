import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  respuestas: any[] = [];
  respuestas2: any[] = [];
  respuestas3: any[] = [];
  respuestaEditando: any = null;
  modoEdicion = false;
  respuestaEditando2: any = null;
  modoEdicion2 = false;
  respuestaEditando3: any = null;
  modoEdicion3 = false;

  constructor(private cursoService: CursoService, private http: HttpClient) {}

  ngOnInit() {

    this.http.get<any[]>('http://localhost:3000/tarea').subscribe(
      (data) => {
        console.log('Datos del servidor:', data);
        this.respuestas = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );

    this.http.get<any[]>('http://localhost:3000/tarea').subscribe(
      (data) => {
        console.log('Datos del servidor:', data);
        this.respuestas2 = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );

    this.http.get<any[]>('http://localhost:3000/tarea').subscribe(
      (data) => {
        console.log('Datos del servidor:', data);
        this.respuestas3 = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  
  
  }

  
    //Weas respuesta 1
  borrarDatoEspecifico(id: number) {
    const url = `http://localhost:3000/tarea/${id}`;
    
    this.http.delete(url).subscribe(
      () => {
        const indice = this.respuestas.findIndex(respuesta => respuesta.id === id);
        if (indice !== -1) {
          this.respuestas.splice(indice, 1);
        }
      },
      (error) => {
        console.error('Error al borrar dato:', error);
      }
    );
  }

  activarEdicion(respuesta: any) {
    this.respuestaEditando = { ...respuesta };
    this.modoEdicion = true;
  }

  guardarCambiosEditados() {
    const url = `http://localhost:3000/tarea/${this.respuestaEditando.id}`;
    
    this.http.put(url, this.respuestaEditando).subscribe(
      () => {
        const indice = this.respuestas.findIndex(respuesta => respuesta.id === this.respuestaEditando.id);
        if (indice !== -1) {
          this.respuestas[indice] = { ...this.respuestaEditando };
        }

        this.respuestaEditando = null;
        this.modoEdicion = false;
      },
      (error) => {
        console.error('Error al guardar cambios:', error);
      }
    );
  }





  // Métodos respuesta 2
  borrarDatoEspecifico2(id: number) {
    const url = `http://localhost:3000/tarea/${id}`;
    
    this.http.delete(url).subscribe(
      () => {
        const indice = this.respuestas2.findIndex(respuesta2 => respuesta2.id === id);
        if (indice !== -1) {
          this.respuestas2.splice(indice, 1);
        }
      },
      (error) => {
        console.error('Error al borrar dato:', error);
      }
    );
  }

  activarEdicion2(respuesta2: any) {
    this.respuestaEditando2 = { ...respuesta2 };
    this.modoEdicion2 = true;
  }

  guardarCambiosEditados2() {
    const url = `http://localhost:3000/tarea/${this.respuestaEditando2.id}`;
    
    this.http.put(url, this.respuestaEditando2).subscribe(
      () => {
        const indice = this.respuestas2.findIndex(respuesta2 => respuesta2.id === this.respuestaEditando2.id);
        if (indice !== -1) {
          this.respuestas2[indice] = { ...this.respuestaEditando2 };
        }

        this.respuestaEditando2 = null;
        this.modoEdicion2 = false;
      },
      (error) => {
        console.error('Error al guardar cambios:', error);
      }
    );
  }











  // Métodos respuesta 3
  borrarDatoEspecifico3(id: number) {
    const url = `http://localhost:3000/tarea/${id}`;
    
    this.http.delete(url).subscribe(
      () => {
        const indice = this.respuestas3.findIndex(respuesta3 => respuesta3.id === id);
        if (indice !== -1) {
          this.respuestas3.splice(indice, 1);
        }
      },
      (error) => {
        console.error('Error al borrar dato:', error);
      }
    );
  }

  activarEdicion3(respuesta3: any) {
    this.respuestaEditando3 = { ...respuesta3 };
    this.modoEdicion3 = true;
  }

  guardarCambiosEditados3() {
    const url = `http://localhost:3000/tarea/${this.respuestaEditando3.id}`;
    
    this.http.put(url, this.respuestaEditando3).subscribe(
      () => {
        const indice = this.respuestas3.findIndex(respuesta3 => respuesta3.id === this.respuestaEditando3.id);
        if (indice !== -1) {
          this.respuestas3[indice] = { ...this.respuestaEditando3 };
        }

        this.respuestaEditando3 = null;
        this.modoEdicion3 = false;
      },
      (error) => {
        console.error('Error al guardar cambios:', error);
      }
    );
  }

}

