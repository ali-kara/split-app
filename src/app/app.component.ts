import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Subscription, fromEvent, map, merge, of } from 'rxjs';
import { BaseService } from './api/BaseService';
import { NetworkConnectionService } from './services/NetworkConnectionService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  connectionService : NetworkConnectionService = inject(NetworkConnectionService);
  
    constructor()
    {
      this.connectionService.init();
    }
}