import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditCursosComponent } from './components/edit-cursos.component';
import { NewCursosComponent } from './components/cursos/new-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    ContactoComponent,
    CursosComponent,
    EditCursosComponent,
    NewCursosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
