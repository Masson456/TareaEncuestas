import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { Encuestas2Component } from './encuestas2/encuestas2.component';
import { Encuestas3Component } from './encuestas3/encuestas3.component';
import { LoginComponent } from './login/login.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';



const routes: Routes = [
  { path: '', component: HomeComponent, children: [ 
    {path: '', component: BodyComponent },
    {path: 'login', component: LoginComponent},
    {path: 'encuestas', component: EncuestasComponent},
    {path: 'encuestas2', component: Encuestas2Component},
    {path: 'encuestas3', component: Encuestas3Component},
    {path: 'estudiantes', component: EstudiantesComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
