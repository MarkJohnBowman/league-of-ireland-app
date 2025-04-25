import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create(); //Initialize storage
  }

  async saveTeam(team: any) {
    //Save team using its name as a key
    await this.storage.set(team.name, team);
  }

  async getAllKeys() {
    return await this.storage.keys();
  }
  
  async getTeam(key: string) {
    return await this.storage.get(key);
  }
  
  async removeTeam(key: string) {
    await this.storage.remove(key); //Deletes a team from storage
  }
  
}
