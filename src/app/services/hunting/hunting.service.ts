import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hunting } from 'src/app/models/Hunting';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private baseURL = 'http://localhost:8080/api/huntings';

  constructor(private httpClient:HttpClient) { }

  
  getAllHuntings(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }
  
  saveHunting(hunting: Hunting): Observable<Hunting> {
    return this.httpClient.post<Hunting>(`${this.baseURL}`, hunting);
  } 
}
