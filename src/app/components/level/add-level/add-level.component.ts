import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/models/Level';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent {
  newLevel: Level = {
    id:0,
    description: '',
    points: 0
  };
 

  constructor(private levelService: LevelService, private router: Router) {}

  createLevel(): void {
    this.levelService.saveLevel(this.newLevel).subscribe(
      (createdLevel) => {
        console.log('Level created successfully:', createdLevel);
        
       
        this.router.navigate(['/levels']);
      },
      (error) => {
        console.error('Error creating level:', error);
      }
    );
  }

}
