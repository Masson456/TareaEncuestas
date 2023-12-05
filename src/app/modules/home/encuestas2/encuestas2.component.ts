import { Component } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-encuestas2',
  templateUrl: './encuestas2.component.html',
  styleUrls: ['./encuestas2.component.sass']
})
export class Encuestas2Component {

  q7: string = '';
  q8: string = '';
  q9: string = '';
  q10: string = '';
  q11: string = '';
  q12: string = '';

  constructor(private CursoService: CursoService, private http: HttpClient) {}

  OnSave2() {
    const respuestas2 = {
      q7: this.q7,
      q8: this.q8,
      q9: this.q9,
      q10: this.q10,
      q11: this.q11,
      q12: this.q12,
    };

    console.log('Respuestas:', respuestas2);

    this.http.post('http://localhost:3000/tarea', respuestas2).subscribe(
     (response) => {
       console.log('Datos enviados correctamente:', response);
      },
      (error) => {
        console.error('Error al enviar los datos:', error);
      }
    );
    
   // if (this.CursoService) {
     // this.CursoService.guardarRespuestas2(respuestas2);
    //}


}

}
