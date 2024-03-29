import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PlanetasComponent } from './pages/planetas/planetas.component';
import { VistaPersonajeComponent } from './pages/vista-personaje/vista-personaje.component';
import { VistaPlanetasComponent } from './pages/vista-planetas/vista-planetas.component';



const routes: Routes = [
  {path:"", pathMatch: 'full', redirectTo: 'home'},
  {path:"home", component: HomeComponent},
  {path:"personajes", component: PersonajesComponent},
  {path:"planetas", component: PlanetasComponent},
  {path:"personajes/:idpersonaje", component: VistaPersonajeComponent},
  {path:"planetas/:idplaneta", component: VistaPlanetasComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
