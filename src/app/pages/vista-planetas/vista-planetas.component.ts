import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from 'src/app/interfaces/planeta.interfaces';
import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-vista-planetas',
  templateUrl: './vista-planetas.component.html',
  styleUrls: ['./vista-planetas.component.css']
})
export class VistaPlanetasComponent {

  
  unPlaneta: Planeta | any;
  datosPlaneta: Planeta[] = [];
  personajeHover: string | null = null;

  activatedRoute = inject(ActivatedRoute);
  planetaServices = inject(PlanetasService);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = String(params.idplaneta);
      this.unPlaneta = this.planetaServices.getPlanetaId(id).subscribe((response) => {
        this.unPlaneta = response;
        this.datosPlaneta = [response];
        console.log(this.unPlaneta)
      })
    })
  } 

  mostrarImagenPersonaje(nombre: string) {
    this.personajeHover = nombre;
  } 

  ocultarImagenPersonaje() {
    this.personajeHover = null;
  }

}
