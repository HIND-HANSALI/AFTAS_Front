import { Component } from '@angular/core';
import { HuntingService } from 'src/app/services/hunting/hunting.service';

@Component({
  selector: 'app-list-hunting',
  templateUrl: './list-hunting.component.html',
  styleUrls: ['./list-hunting.component.css']
})
export class ListHuntingComponent {

  huntings:any[]= [];
  
  constructor(private huntingService: HuntingService) {  }

  ngOnInit() {
    this.getHuntings();
    
   }
   private getHuntings(){
    this.huntingService. getAllHuntings().subscribe((data:any) => {
      this.huntings = data.data;
      console.log('Huntings data:', this.huntings); 
    });

  }
}
