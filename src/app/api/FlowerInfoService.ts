import { Injectable } from '@angular/core';
import { API_CONSTANT } from '../core/api-contants';
import { Cicek } from '../models/Cicek';
import { Observable } from 'rxjs';
import { BaseService } from './BaseService';

@Injectable({
  providedIn: 'root',
})
export class FlowerInfoService extends BaseService {
  apiUrl: string = API_CONSTANT.API_BASE_URL + 'Trade/GetFlowerInfo';

  getFlowerInfo(): Observable<Cicek> {
    return this.httpClient.get<Cicek>(this.apiUrl);
  }
}
