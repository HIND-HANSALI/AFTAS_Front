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

  getCompetitionById(id: number): Observable<Competition> {
    return this.httpClient.get<Competition>(`${this.baseURL}/${id}`);
  }

  updateCompetition(id: number, competition: Competition): Observable<Competition> {
    return this.httpClient.put<Competition>(`${this.baseURL}/${id}`, competition);
  }
  
  deleteCompetition(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
