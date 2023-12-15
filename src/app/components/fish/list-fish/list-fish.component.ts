import { Component } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-list-fish',
  templateUrl: './list-fish.component.html',
  styleUrls: ['./list-fish.component.css']
})
export class ListFishComponent {
  fishes:any[]= [];
  constructor(private fishService: FishService) {  }

  ngOnInit() {
    this.getFishes();
    
   }
   private getFishes(){
    this.fishService. getAllFishes().subscribe((data:any) => {
      this.fishes = data.data;
      console.log(data)
    });

  }
}
