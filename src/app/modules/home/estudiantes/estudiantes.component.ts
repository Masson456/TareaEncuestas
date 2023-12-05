import { Component } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.sass']
})
export class EstudiantesComponent {

  respuestas: any[] = [];
  respuestas2: any[] = [];
  respuestas3: any[] = [];

  constructor(private CursoService: CursoService, private http: HttpClient) {
  }
 
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
}
