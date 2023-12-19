import { Component } from '@angular/core';
import { Competition } from 'src/app/models/Competition';
import { Ranking } from 'src/app/models/Ranking';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-list-ranking',
  templateUrl: './list-ranking.component.html',
  styleUrls: ['./list-ranking.component.css']
})
export class ListRankingComponent {
  rankings: Ranking[] = [];
  competitions:Competition[]= [];
  selectedCompetitionId:number=0;

  constructor(private rankingService: RankingService,private competitionService:CompetitionService) {}

  ngOnInit(): void {
  
    this.getCompetitions();
  }
  

  submitHunting(): void {
    this.rankingService.getResults(this.selectedCompetitionId).subscribe(
      (data: any) => {
        this.rankings = data.data;
        console.log(data.data)
        console.log(data.data[0].id.competitionId)
      },
      error => console.error(error)
    );
   
  }

  private getCompetitions(){
    this.competitionService. getAllCompetitions().subscribe((data:any) => {
      this.competitions = data.data;
      console.log(data)
    });

}
}
