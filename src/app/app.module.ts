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
import { VistaPlanetasComponent } from './pages/vista-planetas/vista-planetas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    NavBarComponent,
    PlanetasComponent,
    HomeComponent,
    VistaPersonajeComponent,
    VistaPlanetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
