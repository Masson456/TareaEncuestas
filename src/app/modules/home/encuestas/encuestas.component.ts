import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.sass']
})
export class EncuestasComponent {
  formularioVisible: boolean = false;

  mostrarFormulario() {
    this.formularioVisible = true;
  }

  cerrarFormulario() {
    this.formularioVisible = false;
  }

  enviarFormulario() {
    
    this.formularioVisible = false;
  }


  formularioVisible2: boolean = false;

  mostrarFormulario2() {
    this.formularioVisible2 = true;
  }

  cerrarFormulario2() {
    this.formularioVisible2 = false;
  }

  enviarFormulario2() {
    
    this.formularioVisible2 = false;
  }

  
  formularioVisible3: boolean = false;

  mostrarFormulario3() {
    this.formularioVisible3 = true;
  }

  cerrarFormulario3() {
    this.formularioVisible3 = false;
  }

  enviarFormulario3() {
    
    this.formularioVisible3 = false;
  }





}
  


