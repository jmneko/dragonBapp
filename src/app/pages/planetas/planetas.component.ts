import { Component, inject } from '@angular/core';
import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent {

  planetas: any[] = [];
  currentPage = 1;
  totalPages = 1;

  planetasServices = inject(PlanetasService);


  ngOnInit(): void {
    this.cargaPlanetas()
  };

  cargaPlanetas(page:number = 1) {
    this.planetasServices.getAllPlanetas(page).subscribe(response => {
      this.planetas = response.items;
      this.currentPage = response.meta.currentPage;
      this.totalPages = response.meta.totalPages;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.cargaPlanetas(this.currentPage + 1)
    }
  }

  previousPage() {
    if(this.currentPage > 1) {
      this.cargaPlanetas(this.currentPage - 1)
    }
  }

}
