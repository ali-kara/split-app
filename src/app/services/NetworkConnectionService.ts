import { Injectable } from '@angular/core';
import { Subscription, fromEvent, map, merge, of } from 'rxjs';
import { BaseService } from '../api/BaseService';

@Injectable({ providedIn: 'root' })
export class NetworkConnectionService extends BaseService {
  networkStatus$: Subscription = Subscription.EMPTY;

  public init() {
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
      .subscribe((status) => {
        if (status) {
          this.toastr.showSuccess('Bağlantı Sağlandı', 'Bağlantı Durumu');
          this.dialogService.close();
        } else {
          this.dialogService.showSuccess(
            'İnternet Bağlantınız Yok. Kontrol Ediniz',
            'İnternet !!'
          );
        }

        this.networkStatus = status;
      });
  }
}
