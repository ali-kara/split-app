import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepoGiris } from '../models/DepoGiris';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {}

  getDepoGiris(): Observable<DepoGiris[]> {
    return this.httpClient.get<DepoGiris[]>(this.apiUrl);
  }
}
