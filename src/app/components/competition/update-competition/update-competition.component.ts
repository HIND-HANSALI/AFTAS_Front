import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/app/models/Competition';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-update-competition',
  templateUrl: './update-competition.component.html',
  styleUrls: ['./update-competition.component.css']
})
export class UpdateCompetitionComponent  {
  newCompetition: Competition = {
    id: 0,
    code: '',
    date: new Date(),
    startTime: { hours: 0, minutes: 0 },
    endTime: { hours: 0, minutes: 0 },
    totalMember: 0,
    location: '',
    amount: 0
  };


  constructor(
    private competitionService: CompetitionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Route Params:', this.route.snapshot.params);
    // Retrieve the competition code from the route parameters
    const id = +this.route.snapshot.params['id'];
    this.loadCompetition(id);
  }


  loadCompetition(id: number): void {
    this.competitionService.getCompetitionById(id).subscribe(
      (competition) => {
        console.log('Competition loaded successfully:', competition);
        // this.newCompetition = competition;
        this.newCompetition = competition.data;
      this.newCompetition.id = id;
        
      },
      (error) => {
        console.error(`Error loading competition with code ${id}:`, error);
      }
    );
  }

  updateCompetition(): void {

    if (this.newCompetition.id === undefined) {
      console.error('Competition ID is undefined. Cannot update.');
      return;
    }

    console.log('Form values before submission:', this.newCompetition);
    this.competitionService.updateCompetition(this.newCompetition.id, this.newCompetition).subscribe(
      (updatedCompetition) => {

        console.log('Competition updated successfully:', updatedCompetition);
        
        this.router.navigate(['/competitions']);
      },
      (error) => {
        console.error('Error updating competition:', error);
      }
    );
  }
  
}
