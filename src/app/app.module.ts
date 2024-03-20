import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlanetasComponent } from './pages/planetas/planetas.component';
import { HomeComponent } from './pages/home/home.component';
import { VistaPersonajeComponent } from './pages/vista-personaje/vista-personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    NavBarComponent,
    PlanetasComponent,
    HomeComponent,
    VistaPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
