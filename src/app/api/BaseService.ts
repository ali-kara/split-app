import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../services/NotificationService';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public httpClient: HttpClient = inject(HttpClient);
  public toastr: NotificationService = inject(NotificationService);
  public isLoading : boolean = false;

  public delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
