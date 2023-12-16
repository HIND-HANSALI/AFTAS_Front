import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListCompetitionComponent } from './components/competition/list-competition/list-competition.component';
import { AddCompetitionComponent } from './components/competition/add-competition/add-competition.component';
import { UpdateCompetitionComponent } from './components/competition/update-competition/update-competition.component';
import { ListFishComponent } from './components/fish/list-fish/list-fish.component';
import { AddFishComponent } from './components/fish/add-fish/add-fish.component';
import { UpdateFishComponent } from './components/fish/update-fish/update-fish.component';
import { UpdateLevelComponent } from './components/level/update-level/update-level.component';
import { ListLevelComponent } from './components/level/list-level/list-level.component';
import { AddLevelComponent } from './components/level/add-level/add-level.component';
import { ListHuntingComponent } from './components/hunting/list-hunting/list-hunting.component';
import { AddHuntingComponent } from './components/hunting/add-hunting/add-hunting.component';
import { UpdateHuntingComponent } from './components/hunting/update-hunting/update-hunting.component';
import { ListMemberComponent } from './components/member/list-member/list-member.component';
import { AddMemberComponent } from './components/member/add-member/add-member.component';
import { UpdateMemberComponent } from './components/member/update-member/update-member.component';
import { AddRankingComponent } from './components/ranking/add-ranking/add-ranking.component';
import { ListRankingComponent } from './components/ranking/list-ranking/list-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
   
  
    NavbarComponent,
    SidebarComponent,
    ListCompetitionComponent,
    AddCompetitionComponent,
    UpdateCompetitionComponent,
    ListFishComponent,
    AddFishComponent,
    UpdateFishComponent,
    UpdateLevelComponent,
    ListLevelComponent,
    AddLevelComponent,
    ListHuntingComponent,
    AddHuntingComponent,
    UpdateHuntingComponent,
    ListMemberComponent,
    AddMemberComponent,
    UpdateMemberComponent,
    AddRankingComponent,
    ListRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
