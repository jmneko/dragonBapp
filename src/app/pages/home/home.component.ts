import { Component, inject } from '@angular/core';
import { DragonballService } from 'src/app/services/dragonball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  personajes: any[] = [];
  currentPage = 1;
  totalPages = 1;

  dragonballServices = inject(DragonballService);


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
