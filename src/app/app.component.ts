import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private storageService: StorageService) {
    this.initApp();
  }

 async initApp(){
    await this.storageService.init();
 }

}
