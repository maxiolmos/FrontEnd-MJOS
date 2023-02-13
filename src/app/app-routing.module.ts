import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCursosComponent } from './components/cursos/edit-cursos.component';
import { NewCursosComponent } from './components/cursos/new-cursos.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { EditInfoGralComponent } from './components/info-gral/edit-info-gral.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'editinfogral/:id', component: EditInfoGralComponent},
  { path:'nuevaexp', component: NewExperienciaComponent},
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path:'nuevaedu', component: NewEducacionComponent},
  { path:'editedu/:id', component: EditEducacionComponent},
  { path:'nuevahabilidad', component: NewHabilidadesComponent},
  { path: 'edithab/:id', component: EditHabilidadesComponent},
  { path:'nuevocurso', component: NewCursosComponent},
  { path: 'editcurso/:id', component: EditCursosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
