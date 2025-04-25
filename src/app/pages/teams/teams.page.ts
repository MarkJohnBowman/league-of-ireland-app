//Teams Page
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams: any[] = []; //Holds the teams 
  isLoading = true;  //Shows loading spinner until data loads

  constructor(
    private teamService: TeamService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.loadTeams(); //Load teams
  }

  loadTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => {
        this.teams = data; //Save teams to local variable
        this.isLoading = false; //Stop loading spinner
      },
      error: (error) => {
        console.error('Error fetching teams:', error);
        this.isLoading = false; //Even if error, stop spinner
      }
    });
  }

  saveTeam(team: any) {
    //Save selected team to local storage
    this.storageService.saveTeam(team);
    console.log('Saved Team:', team);
  }
}
