//App routing 
import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TeamsPage } from './pages/teams/teams.page';
import { SavedTeamsPage } from './pages/saved-teams/saved-teams.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'teams', component: TeamsPage },
  { path: 'saved', component: SavedTeamsPage }
];
