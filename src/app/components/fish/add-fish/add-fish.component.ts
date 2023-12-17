import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fish } from 'src/app/models/Fish';
import { Level } from 'src/app/models/Level';
import { FishService } from 'src/app/services/fish/fish.service';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.css']
})
export class AddFishComponent {
  newFish: Fish = {
    id: 0,
    name: '',
    averageWeight: 0,
    level_id: 0
  };
  levels: Level[] = [];
  error:string="";
  selectedLevel:number =0 ;

  constructor(
    private fishService: FishService,
    private levelService: LevelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void {
    this.levelService.getAllLevels().subscribe(
      (levels) => {
        this.levels = levels.data;
      },
      (error) => {
        console.error('Error loading levels:', error);
      }
    );
  }

  createFish(): void {
    console.log(this.selectedLevel)
    // Check if newFish.level is not null
    // if (this.newFish.level === null || this.newFish.level === undefined) {
    //   console.error('Error: Level is null or undefined.');
    //   return; // or handle the error in a way that fits your application
    // }
      this.newFish.level_id=this.selectedLevel
    
    console.log('Creating fish with data:', this.newFish);
    
    this.fishService.saveFish(this.newFish).subscribe(
      (createdFish) => {
        console.log('Fish created successfully:', createdFish);
        this.router.navigate(['/fish']);
      },
      (error) => {
        this.error=error.error.message;
        console.error('Error creating fish:',this.newFish);
      }
    );
  }

}
