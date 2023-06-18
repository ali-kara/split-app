import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/NotificationService';

export const AuthGuard = () => {
  const router = inject(Router);
  const notify = inject(NotificationService);

  if (localStorage.getItem('currentUser')) {
    // logged in so return true
    return true;
  }

  notify.showError('Sisteme Bağlı Değilsiniz.', '');

  // not logged in so redirect to login page with the return url

  //return router.parseUrl('/login');

  return router.navigate(['/login'], {
    queryParams: { returnUrl: /*state.url*/ '' },
  });
};
