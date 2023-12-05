import { Component } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
@Component({
  selector: 'app-encuestas3',
  templateUrl: './encuestas3.component.html',
  styleUrls: ['./encuestas3.component.sass']
})
export class Encuestas3Component {

  q13: string = '';
  q14: string = '';
  q15: string = '';
  q16: string = '';
  q17: string = '';
  q18: string = '';

  constructor(private CursoService: CursoService) {}

  OnSave3() {
    const respuestas3 = {
      q13: this.q13,
      q14: this.q14,
      q15: this.q15,
      q16: this.q16,
      q17: this.q17,
      q18: this.q18,
    };

    console.log('Respuestas:', respuestas3);
    
    if (this.CursoService) {
      this.CursoService.guardarRespuestas3(respuestas3);
    }


}

}
