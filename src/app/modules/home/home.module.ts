import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { FooterhomeComponent } from './footerhome/footerhome.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { Encuestas2Component } from './encuestas2/encuestas2.component';
import { Encuestas3Component } from './encuestas3/encuestas3.component';
import { SharedModule } from './shared/shared.module';
import { CursoService } from 'src/app/services/curso.service';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderhomeComponent,
    FooterhomeComponent,
    LoginComponent,
    BodyComponent,
    EncuestasComponent,
    Encuestas2Component,
    Encuestas3Component,
    EstudiantesComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
