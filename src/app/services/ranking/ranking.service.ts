import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ranking } from 'src/app/models/Ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private baseUrl = 'http://localhost:8080/api/competitions/register-member';
  private baseApi = 'http://localhost:8080/api/rankings/competitions';


  constructor(private httpClient: HttpClient) { }


  saveRanking(ranking: Ranking): Observable<Ranking> {
    return this.httpClient.post<Ranking>(this.baseUrl, ranking);
  }



  
  getResults(competitionId:number): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>(`${this.baseApi}/${competitionId}/podium`);
  }

}
