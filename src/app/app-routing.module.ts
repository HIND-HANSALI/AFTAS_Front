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
import { CompetitionStatusComponent } from './components/competition/competition-status/competition-status.component';
import { ListRankingComponent } from './components/ranking/list-ranking/list-ranking.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin/admin.guard';
import { juryGuard } from './guards/jury/jury.guard';
import { allRolesGuard } from './guards/allRoles/all-roles.guard';
import { MyCompetitionsComponent } from './components/competition/my-competitions/my-competitions.component';
import { memberGuardGuard } from './guards/member/member-guard.guard';
const routes: Routes = [
 
  { path: 'rankings', component:ListRankingComponent,canActivate: [allRolesGuard]},
  { path: '', component:CompetitionStatusComponent},
  { path: 'myCompetitions', component: MyCompetitionsComponent,canActivate: [memberGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  { path: 'huntings', component:ListHuntingComponent,canActivate: [juryGuard]},
  { path: 'huntings/create', component: AddHuntingComponent,canActivate: [juryGuard]},
  { path: 'members', component: ListMemberComponent,canActivate: [adminGuard]},
  { path: 'members/create', component: AddMemberComponent,canActivate: [adminGuard]},

  { path: 'rakings/create', component: AddRankingComponent,canActivate: [juryGuard]}, // register Member in a competition
 
  { path: 'competitions', component: ListCompetitionComponent,canActivate: [allRolesGuard]},
  { path: 'competitions/create', component: AddCompetitionComponent,canActivate: [juryGuard]},
  { path: 'competitions/update/:id', component: UpdateCompetitionComponent,canActivate: [juryGuard]},


  { path: 'levels', component: ListLevelComponent,canActivate: [adminGuard]},
  { path: 'levels/create', component: AddLevelComponent,canActivate: [adminGuard]},
  { path: 'levels/update', component: UpdateLevelComponent,canActivate: [adminGuard]},

  { path: 'fish', component: ListFishComponent,canActivate: [adminGuard]},
  { path: 'fish/create', component: AddFishComponent,canActivate: [adminGuard]},
  { path: 'fish/update', component: UpdateFishComponent,canActivate: [adminGuard]},
  { path: '**', redirectTo: '/not-found' },

  
 
  { path: 'hunting/update', component: UpdateHuntingComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
