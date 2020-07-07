import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { APP_ROUTES } from './app.routes';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { HeaderComponent } from './components/todo/header.component';
import { ContenedorComponent } from './components/contenedor.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    RutinasComponent,
    HeaderComponent,
    ContenedorComponent,
  ],
  imports: [
    APP_ROUTES,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
