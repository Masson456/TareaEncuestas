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

   
  public url = environment.serverdb + 'tarea'
  constructor(public http: HttpClient) { }

   cargar() {
   return this.http.get(this.url)

   }
 

  // Respuestas 1
  //guardarRespuestas(respuestas: any) {
    // Guardar localmente
    //this.respuestas.push(respuestas);

    // Enviar al servidor
    //this.http.post<any>('http://localhost:3000/tarea', respuestas).subscribe(
      //(data) => {
      //  console.log('Respuestas guardadas en el servidor:', data);
     // },
      //(error) => {
      //  console.error('Error al guardar respuestas en el servidor:', error);
     // }
   // );
 // }

  // Obtener respuestas del servidor
  //obtenerRespuestas() {
    //return this.http.get<any[]>("http://localhost:3000/tarea");
  //}


  
 //respuestas 2
  //guardarRespuestas2(respuestas2: any) {
   // this.respuestas2.push(respuestas2);
  //}
  
  //obtenerRespuestas2() {
   // return this.respuestas2;
  //}

   //respuestas 3
   //guardarRespuestas3(respuestas3: any) {
    //this.respuestas3.push(respuestas3);
  //}
  
 // obtenerRespuestas3() {
   // return this.respuestas3;
  //}



}
