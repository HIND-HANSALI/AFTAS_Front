import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/Competition';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-list-competition',
  templateUrl: './list-competition.component.html',
  styleUrls: ['./list-competition.component.css']
})
export class ListCompetitionComponent {
  
 currentPage = 1;
 itemsPerPage = 2; 

  competitions:any[]= [];
  constructor(private competitionService: CompetitionService,private router:Router) {  }

  ngOnInit() {
    this.getCompetitions();
    
   }
   private getCompetitions(){
    this.competitionService. getAllCompetitions().subscribe((data:any) => {
      this.competitions = data.data;
      console.log(data)
    });

  }

  editCompetition(id: number): void {
    this.router.navigate(['/competitions/update/', id]);
    console.log(`Edit competition with code ${id}`);
  }

  get totalPages(): number {
    return Math.ceil(this.competitions.length / this.itemsPerPage);
  }

  // Method to get competitions for the current page
  get paginatedCompetitions(): Competition[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.competitions.slice(startIndex, startIndex + this.itemsPerPage);
  }
  

  deleteCompetition(id: number): void {
    this.competitionService.deleteCompetition(id).subscribe(
      () => {
        console.log(`Competition with code ${id} deleted successfully.`);

        this.getCompetitions();
      },
      (error) => {
        console.error(`Error deleting competition with code ${id}:`, error);
      }
    );
  }
}
