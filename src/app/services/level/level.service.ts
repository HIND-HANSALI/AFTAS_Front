import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from '../../models/Level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private baseURL = 'http://localhost:8080/api/levels';
  constructor(private httpClient:HttpClient) { }


  
  getAllLevels(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }
  
  saveLevel(level: Level): Observable<Level> {
    return this.httpClient.post<Level>(`${this.baseURL}`, level);
  }
}
