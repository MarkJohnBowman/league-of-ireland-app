import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [IonicModule, RouterLink],
  templateUrl: './home.page.html', 
  styleUrls: ['./home.page.scss'],   
})
export class HomePage {
  deviceInfo: any = {}; // Stores device info

  constructor() {}

  ngOnInit() {
    this.getDeviceInfo(); // Get device info
  }

  async getDeviceInfo() {
    
    this.deviceInfo = await Device.getInfo();//use capacitor device plugin
    console.log('Device Info:', this.deviceInfo); // For debugging, shows device info in console
  }
}
