import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListCompetitionComponent } from './components/competition/list-competition/list-competition.component';
import { AddCompetitionComponent } from './components/competition/add-competition/add-competition.component';
import { UpdateCompetitionComponent } from './components/competition/update-competition/update-competition.component';

const routes: Routes = [
  { path: 'competitions', component: ListCompetitionComponent },
  { path: '', component: NavbarComponent },
  { path: 'competitions/create', component: AddCompetitionComponent },
  { path: 'competitions/update', component: UpdateCompetitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
