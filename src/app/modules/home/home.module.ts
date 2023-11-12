import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { FooterhomeComponent } from './footerhome/footerhome.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { Encuestas2Component } from './encuestas2/encuestas2.component';
import { Encuestas3Component } from './encuestas3/encuestas3.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderhomeComponent,
    FooterhomeComponent,
    LoginComponent,
    BodyComponent,
    EncuestasComponent,
    Encuestas2Component,
    Encuestas3Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
