import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from '../../models/Fish';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private baseURL = 'http://localhost:8080/api/fishes';

  constructor(private httpClient:HttpClient) { }

  
  getAllFishes(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }
  
  saveFishe(fish: Fish): Observable<Fish> {
    return this.httpClient.post<Fish>(`${this.baseURL}`, fish);
  } 
}
