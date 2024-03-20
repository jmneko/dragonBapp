import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  httpClient = inject(HttpClient);

  private baseUrl: String = "https://dragonball-api.com/api/";

  constructor() { }

  getCharacters(page:number =1, limit: number = 10): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}characters?page=${page}&limit=${limit}`)
  }

  getPersonajeId(id: string): Observable<Personaje> {
    return this.httpClient.get<Personaje>(`${this.baseUrl}characters/${id}`)
  }

}
