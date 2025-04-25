import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-saved-teams',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './saved-teams.page.html',
  styleUrls: ['./saved-teams.page.scss'],
})
export class SavedTeamsPage implements OnInit {
  savedTeams: any[] = []; //Holds saved items

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.loadSavedTeams();//Load saved teams
  }

  async loadSavedTeams() {
    const keys = await this.storageService.getAllKeys();
    const result = [];

    for (let key of keys) {
      const team = await this.storageService.getTeam(key);
      if (team) result.push(team);
    }

    this.savedTeams = result;
  }

  async deleteTeam(teamName: string) {
    await this.storageService.removeTeam(teamName); 
    this.loadSavedTeams(); // Refresh the saved teams list after deleting
  }
  
}
