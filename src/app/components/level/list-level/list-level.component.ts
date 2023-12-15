import { Component } from '@angular/core';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.css']
})
export class ListLevelComponent {
  levels:any[]= [];
  constructor(private levelService: LevelService) {  }

  ngOnInit() {
    this.getLevels();
    
   }
   private getLevels(){
    this.levelService. getAllLevels().subscribe((data:any) => {
      this.levels = data.data;
      console.log(data)
    });

  }

}
