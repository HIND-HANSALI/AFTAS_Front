import { Component } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-list-competition',
  templateUrl: './list-competition.component.html',
  styleUrls: ['./list-competition.component.css']
})
export class ListCompetitionComponent {


  competitions:any[]= [];
  constructor(private competitionService: CompetitionService) {  }

  ngOnInit() {
    this.getCompetitions();
    
   }
   private getCompetitions(){
    this.competitionService. getAllCompetitions().subscribe((data:any) => {
      this.competitions = data.data;
      console.log(data)
    });

  }
}
