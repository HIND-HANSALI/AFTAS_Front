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
import { ListHuntingComponent } from './components/hunting/list-hunting/list-hunting.component';
import { AddHuntingComponent } from './components/hunting/add-hunting/add-hunting.component';
import { UpdateHuntingComponent } from './components/hunting/update-hunting/update-hunting.component';
import { ListMemberComponent } from './components/member/list-member/list-member.component';
import { AddMemberComponent } from './components/member/add-member/add-member.component';
import { AddRankingComponent } from './components/ranking/add-ranking/add-ranking.component';

const routes: Routes = [
  { path: 'huntings', component:ListHuntingComponent},
  { path: 'huntings/create', component: AddHuntingComponent},
  { path: 'members', component: ListMemberComponent},
  { path: 'members/create', component: AddMemberComponent},
  { path: 'rakings/create', component: AddRankingComponent}, // register Member in a competition
  
  { path: 'competitions', component: ListCompetitionComponent },
  { path: '', component: NavbarComponent },
  { path: 'competitions/create', component: AddCompetitionComponent },
  { path: 'competitions/update/:id', component: UpdateCompetitionComponent },


  { path: 'levels', component: ListLevelComponent},
  { path: 'levels/create', component: AddLevelComponent },
  { path: 'levels/update', component: UpdateLevelComponent },

  { path: 'fish', component: ListFishComponent },
  { path: 'fish/create', component: AddFishComponent},
  { path: 'fish/update', component: UpdateFishComponent},
  { path: '**', redirectTo: '/not-found' },

  // { path: 'huntings', component:ListHuntingComponent},
 
  { path: 'hunting/update', component: UpdateHuntingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
