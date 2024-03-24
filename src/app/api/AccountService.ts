import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map } from 'rxjs';
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

  // login(AliciAdi: string, Parola: string): any {
  //   debugger;

  //   return this.httpClient
  //     .post<Users>(this.apiUrl, {
  //       userfield: AliciAdi,
  //       passwordfield: Parola,
  //     })
  //     .pipe(
  //       map((user: any) => {
  //         // login successful if there's a jwt token in the response
  //         // if (user && user.token) {
  //         //   // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         //   localStorage.setItem('currentUser', JSON.stringify(user));
  //         // }
  //         localStorage.setItem('currentUser', JSON.stringify(user));

  //         return user;
  //       })
  //       // catchError(this.handleError)
  //     );
  // }

  login(AliciAdi: string, Parola: string) {
    return this.httpClient
      .post<BaseResponse>(this.apiUrl, {
        userfield: AliciAdi,
        passwordfield: Parola,
      })
      .subscribe(
        (data) => {
          console.log(data);

          if (data.success == true) {
            localStorage.setItem('currentUser', JSON.stringify(data.data));

            // return true;
          } else {
            console.log('Başarısız');
            // return false;
          }
        }
        //     .pipe(
        // map((user: any) => {
        //   // login successful if there's a jwt token in the response
        //   // if (user && user.token) {
        //   //   // store user details and jwt token in local storage to keep user logged in between page refreshes
        //   //   localStorage.setItem('currentUser', JSON.stringify(user));
        //   // }
        //   localStorage.setItem('currentUser', JSON.stringify(user));

        //   return user;
        // }
        // (error) => {
        //   console.log(error);
        //   // return false;
        // }
      );
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
