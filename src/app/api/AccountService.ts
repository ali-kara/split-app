import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Users } from '../models/Users';
import { API_CONSTANT } from '../core/api-contants';
import { BaseResponse } from '../models/BaseResponse';
import { BaseService } from './BaseService';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService {
  getAuthToken() {
    return localStorage.getItem('token');
  }

  private userSubject: BehaviorSubject<Users | null>;
  apiUrl: string = API_CONSTANT.API_BASE_URL + 'User/Login';
  // httpClient: HttpClient = inject(HttpClient);

  constructor(private router: Router) {
    super();

    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    //this.user = this.userSubject.asObservable();
  }
  public get userValue() {
    return this.userSubject.value;
  }

  login(AliciAdi: string, Parola: string): Observable<BaseResponse> {
    return this.httpClient.post<BaseResponse>(this.apiUrl, {
      userfield: AliciAdi,
      passwordfield: Parola,
    });

    // return this.httpClient
    //   .post<BaseResponse>(this.apiUrl, {
    //     userfield: AliciAdi,
    //     passwordfield: Parola,
    //   })
    //   .subscribe((data) => {
    //     console.log(data);

    //     if (data.success == true) {
    //       localStorage.setItem('currentUser', JSON.stringify(data.data));
    //       console.log(JSON.stringify(data.data));

    //       // return true;
    //     } else {
    //       console.log('Başarısız');
    //       // return false;
    //     }
    //   });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getAll() {
    //return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    //return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
