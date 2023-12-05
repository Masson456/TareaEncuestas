import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  respuestas: any[] = [];
  respuestas2: any[] = [];
  respuestas3: any[] = [];
  
  //respuestas 1
  guardarRespuestas(respuestas: any) {
    this.respuestas.push(respuestas);
  }
  
  obtenerRespuestas() {
    return this.respuestas;
  }

 //respuestas 2
  guardarRespuestas2(respuestas2: any) {
    this.respuestas2.push(respuestas2);
  }
  
  obtenerRespuestas2() {
    return this.respuestas2;
  }

   //respuestas 3
   guardarRespuestas3(respuestas3: any) {
    this.respuestas3.push(respuestas3);
  }
  
  obtenerRespuestas3() {
    return this.respuestas3;
  }



  
  public url = environment.serverdb + 'tarea'
  constructor(public http: HttpClient) { }

   cargar() {
    return this.http.get(this.url)

   }

  
  

}
