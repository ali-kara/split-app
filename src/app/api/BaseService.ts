import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../services/NotificationService';
import { HostListener, Injectable, inject } from '@angular/core';
import { DialogService } from '../services/DialogService.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public httpClient: HttpClient = inject(HttpClient);
  public toastr: NotificationService = inject(NotificationService);
  public dialogService: DialogService = inject(DialogService);

  public isLoading: boolean = false;
  public networkStatus: boolean = false;
  public getScreenWidth: any;
  public getScreenHeight: any;

  public delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  constructor() {
    this.getScreenHeight = window.innerHeight + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth + 'px';
    this.getScreenHeight = window.innerHeight + 'px';
  }
}
