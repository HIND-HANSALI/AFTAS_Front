import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competition } from 'src/app/models/Competition';
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private baseURL = 'http://localhost:8080/api/competitions';
  constructor(private httpClient:HttpClient) { }

  
  getAllCompetitions(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }
  
  saveCompetition(competition: Competition): Observable<Competition> {
    return this.httpClient.post<Competition>(`${this.baseURL}`, competition);
  }
}
