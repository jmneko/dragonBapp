import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Planeta } from '../interfaces/planeta.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  httpClient = inject(HttpClient);
  private baseUrl: string = "https://dragonball-api.com/api/";


  constructor() { }

  getAllPlanetas(page: number=1, limit: number = 10): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}planets?page=${page}&limit=${limit}`)
  }

  getPlanetaId(id: string): Observable<Planeta> {
    return this.httpClient.get<Planeta>(`${this.baseUrl}planets/${id}`);
  }


}
