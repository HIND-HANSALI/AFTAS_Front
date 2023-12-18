import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/Ranking';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { MemberService } from 'src/app/services/member/member.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent {
  
  newRanking: Ranking = {
    id: 0,
    memberId:0,
    competitionId:0

  };
  members: any[] = [];
  competitions: any[] = [];

  selectedMember:number =0 ;
  selectedCompetition:number =0 ;

  successmsg:string='';

  constructor(
   
    private router: Router,
    private memberService: MemberService,
    private competitionService: CompetitionService,
    private rankingService: RankingService,
   
  ) { }
  

  ngOnInit(): void {
    this.getMembers();
    this.getCompetitions();
   
  }
  private getMembers(){
    this.memberService. getAllMembers().subscribe((data:any) => {
      this.members = data.data;
      console.log('Members data:', this.members); 
    });

  }
  private getCompetitions(){
    this.competitionService. getAllCompetitions().subscribe((data:any) => {
      this.competitions = data.data;
      console.log('Competitions:', this.competitions);
    });

  }

  createRanking(): void {

      this.newRanking.memberId = this.selectedMember;
    this.newRanking.competitionId = this.selectedCompetition;

      // console.log(`View member with number ${rankingData}`);
      this.rankingService.saveRanking(this.newRanking).subscribe(
        (createdRanking:Ranking) => {
          this.successmsg="Ranking created successfully";
          console.log('Ranking created successfully:', createdRanking);
          
        },
        (error: HttpErrorResponse) => {
          console.error('Error creating ranking:', error);
        }
      );
    
  }

}
