import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListCompetitionComponent } from './components/competition/list-competition/list-competition.component';
import { AddCompetitionComponent } from './components/competition/add-competition/add-competition.component';
import { UpdateCompetitionComponent } from './components/competition/update-competition/update-competition.component';
import { AddLevelComponent } from './components/level/add-level/add-level.component';
import { ListLevelComponent } from './components/level/list-level/list-level.component';
import { UpdateLevelComponent } from './components/level/update-level/update-level.component';
import { ListFishComponent } from './components/fish/list-fish/list-fish.component';
import { AddFishComponent } from './components/fish/add-fish/add-fish.component';
import { UpdateFishComponent } from './components/fish/update-fish/update-fish.component';

const routes: Routes = [
  { path: 'competitions', component: ListCompetitionComponent },
  // { path: '', component: NavbarComponent },
  { path: 'competitions/create', component: AddCompetitionComponent },
  { path: 'competitions/update', component: UpdateCompetitionComponent },


  { path: 'levels', component: ListLevelComponent},
  { path: 'levels/create', component: AddLevelComponent },
  { path: 'levels/update', component: UpdateLevelComponent },

  { path: 'fish', component: ListFishComponent },
  { path: 'fish/create', component: AddFishComponent},
  { path: 'fish/update', component: UpdateFishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
