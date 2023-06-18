import { Injectable, VERSION, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DepoGiris } from '../models/DepoGiris';
import { API_CONSTANT } from '../core/api-contants';
import { BaseService } from './BaseService';

@Injectable({
  providedIn: 'root',
})
export class DepoGirisService extends BaseService {
  apiUrl: string = API_CONSTANT.API_BASE_URL + 'Trade/GetItemstoBeSold';

  getDepoGiris(): Observable<DepoGiris[]> {
    return this.httpClient.get<DepoGiris[]>(this.apiUrl);
  }
}
