import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hunting } from 'src/app/models/Hunting';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { FishService } from 'src/app/services/fish/fish.service';
import { HuntingService } from 'src/app/services/hunting/hunting.service';
import { MemberService } from 'src/app/services/member/member.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-add-hunting',
  templateUrl: './add-hunting.component.html',
  styleUrls: ['./add-hunting.component.css']
})
export class AddHuntingComponent {
  newHunting: Hunting = {
    id: 0,
    memberId:0,
    competitionId:0,
    fishId:0,
    numberOfFish:0,
    averageWeight:0

  };
  members: any[] = [];
  competitions: any[] = [];
  fishes: any[] = [];

  selectedMember:number =0 ;
  selectedCompetition:number =0 ;
  selectedFish:number =0 ;

  successmsg:string='';

  constructor(
   
    private router: Router,
    private memberService: MemberService,
    private competitionService: CompetitionService,
    private fishService:FishService,
    private huntingService:HuntingService

   
  ) { }
  

  ngOnInit(): void {
    this.getMembers();
    this.getCompetitions();
    this.getFishes();
   
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
  private getFishes(){
    this.fishService. getAllFishes().subscribe((data:any) => {
      this.fishes = data.data;
      console.log(data)
    });

  }

  createHunting(): void {

    this.newHunting.memberId = this.selectedMember;
    this.newHunting.competitionId = this.selectedCompetition;
    this.newHunting.fishId = this.selectedFish;

      // console.log(`View member with number ${rankingData}`);
      this.huntingService.saveHunting(this.newHunting).subscribe(
        (createdHunting) => {
          this.successmsg="Hunting created successfully";
          console.log('Hunting  created successfully:', createdHunting);
          
        },
        (error) => {
          console.error('Error creating Hunting :', error);
        }
      );
    
  }

}
