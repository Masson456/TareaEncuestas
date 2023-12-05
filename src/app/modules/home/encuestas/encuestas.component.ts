import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

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

  constructor(private CursoService: CursoService) {}

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
    
    if (this.CursoService) {
      this.CursoService.guardarRespuestas(respuestas);
    }

   
}


}
