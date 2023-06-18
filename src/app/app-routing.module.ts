import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { AuthGuard } from './guards/auth.guard';
import { SalesInfoScreenComponent } from './components/sales-info-screen/sales-info-screen.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';

const appRoutes: Routes = [
  { path: '', component: MainScreenComponent, canActivate: [AuthGuard] },
  { path: 'home', component: MainScreenComponent },
  { path: 'admin', component: AdminScreenComponent },
  { path: 'login', component: LoginScreenComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
