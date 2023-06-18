import { Component, HostListener } from '@angular/core';
import { Subscription, fromEvent, map, merge, of } from 'rxjs';
import { BaseService } from './api/BaseService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends BaseService {
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;


ngOnInit(): void {
    this.checkNetworkStatus();
}

ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
}

// To check internet connection stability
checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
  fromEvent(window, 'offline')
)
  .pipe(map(() => navigator.onLine))
  .subscribe(status => {
    if(status)
    this.toastr.showSuccess('Bağlantı Sağlandı','Bağlantı Durumu');
  else  
this.toastr.showError('Bağlantı Koptu !!','Bağlantı Durumu');

    this.networkStatus = status;
  });
}}