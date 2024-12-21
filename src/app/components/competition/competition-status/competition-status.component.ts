import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-competition-status',
  templateUrl: './competition-status.component.html',
  styleUrls: ['./competition-status.component.css']
})
export class CompetitionStatusComponent {

  competitions: any[] = [];
  pastCompetitions: any[] = [];
  ongoingCompetitions: any[] = [];
  futureCompetitions: any[] = [];
  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit() {
    this.getCompetitions();
  }

  private getCompetitions() {
    this.competitionService.getAllCompetitions().subscribe((data: any) => {
      this.competitions = data.data;
      this.filterCompetitions();
    });
  }

  private filterCompetitions() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();


    this.pastCompetitions = this.competitions.filter(comp => new Date(comp.date) < currentDate);
    // this.ongoingCompetitions = this.competitions.filter(comp => new Date(comp.date) == currentDate);
    this.ongoingCompetitions = this.competitions.filter(comp => {
      const compDate = this.convertToLocalDate(comp.date);
      return compDate.getFullYear() === currentYear &&
             compDate.getMonth() === currentMonth &&
             compDate.getDate() === currentDay;
    });
    this.futureCompetitions = this.competitions.filter(comp => new Date(comp.date) > currentDate);
  }

  public convertToLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    // Months are 0-indexed in JavaScript Date, so we subtract 1
    return new Date(year, month - 1, day);
  }
  
  public formatDate (dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    // Les mois sont indexés à partir de 0 dans Date, alors nous soustrayons 1
    return new Date(year, month - 1, day);
  }
 
}
