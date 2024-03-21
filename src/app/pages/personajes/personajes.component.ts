import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interfaces';
import { DragonballService } from 'src/app/services/dragonball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  dragonballServices = inject(DragonballService);
  activerRoute = inject(ActivatedRoute);
  
  personajes: Personaje[] = [];
  currentPage = 1;
  totalPages = 1;
  

  ngOnInit(): void {
    this.cargaPersonajes();
  }

  cargaPersonajes(page:number = 1) {
    this.dragonballServices.getCharacters(page).subscribe(response => {
      this.personajes = response.items;
      this.currentPage = response.meta.currentPage;
      this.totalPages = response.meta.totalPages;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.cargaPersonajes(this.currentPage + 1)
    }
  }

  previousPage() {
    if(this.currentPage > 1) {
      this.cargaPersonajes(this.currentPage -1)
    }
  }

}
