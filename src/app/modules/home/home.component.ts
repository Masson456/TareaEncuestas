import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  
  onPregunta(item: any){
    console.log(item)
  }
  

  constructor(
    public cursoService: CursoService, private http: HttpClient
  ){}


  cargar(): Observable<any[]> {
    // Lógica para cargar datos, por ejemplo, una llamada HTTP
    return this.http.get<any[]>('http://localhost:3000/tarea');
  }

}
