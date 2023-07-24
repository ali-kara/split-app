import { Injectable, inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AccountService } from '../api/AccountService';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  accountService : AccountService = inject(AccountService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    const token = this.accountService.getAuthToken();

   if (token) {
     // If we have a token, we set it to the header
     request = request.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
     });
  }

  return next.handle(request).pipe(
  	catchError((err) => {
   	 if (err instanceof HttpErrorResponse) {
       	 if (err.status === 401) {
       	 // redirect user to the logout page
     	}
 	 }
  	return throwError(err);
})
   )
  }
}