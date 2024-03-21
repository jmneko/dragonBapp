import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interfaces';
import { DragonballService } from 'src/app/services/dragonball.service';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.component.html',
  styleUrls: ['./vista-personaje.component.css']
})
export class VistaPersonajeComponent {

  @Input() personajeActual: Personaje | any;
  personajeSolo: Personaje | any;

  activatedRoute = inject(ActivatedRoute);
  personajesServices = inject(DragonballService);


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = String(params.idpersonaje);
      this.personajeSolo = this.personajesServices.getPersonajeId(id).subscribe((response) => {
        this.personajeSolo = response;
      })
    })
  }

}
