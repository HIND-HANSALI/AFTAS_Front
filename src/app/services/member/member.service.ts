import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseURL = 'http://localhost:8080/api/members';

  constructor(private httpClient:HttpClient) { }

  
  getAllMembers(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }
  
  saveMember(member: Member): Observable<Member> {
    return this.httpClient.post<Member>(`${this.baseURL}`,member);
  } 
}
