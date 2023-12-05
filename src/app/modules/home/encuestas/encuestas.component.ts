import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.sass']
})
export class EncuestasComponent {
  q1: string = '';
  q2: string = '';
  q3: string = '';
  q4: string = '';
  q5: string = '';
  q6: string = '';

  constructor(private CursoService: CursoService, private http: HttpClient) {}

  OnSave() {
 
    const respuestas = {
      q1: this.q1,
      q2: this.q2,
      q3: this.q3,
      q4: this.q4,
      q5: this.q5,
      q6: this.q6,
    };

    console.log('Respuestas:', respuestas);

    

   this.http.post('http://localhost:3000/tarea', respuestas).subscribe(
     (response) => {
       console.log('Datos enviados correctamente:', response);
      },
      (error) => {
        console.error('Error al enviar los datos:', error);
      }
    );
    
    //if (this.CursoService) {
      //this.CursoService.guardarRespuestas(respuestas);
    //}

   
}


}
