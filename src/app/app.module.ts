import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoGralComponent } from './components/info-gral/info-gral.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { EditCursosComponent } from './components/cursos/edit-cursos.component';
import { NewCursosComponent } from './components/cursos/new-cursos.component';
import { EditInfoGralComponent } from './components/info-gral/edit-info-gral.component';
import { interceptorProvider } from './service/interceptor.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoGralComponent,
    ExperienciaComponent,
    EducacionComponent,
    CursosComponent,
    HabilidadesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditHabilidadesComponent,
    NewHabilidadesComponent,
    EditCursosComponent,
    NewCursosComponent,
    EditInfoGralComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
