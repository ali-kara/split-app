import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';

import { VideoScreenComponent } from './components/video-screen/video-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SoldItemScreenComponent } from './components/sold-item-screen/sold-item-screen.component';
import { SalesInfoScreenComponent } from './components/sales-info-screen/sales-info-screen.component';

import { ToastrModule } from 'ngx-toastr';
import { LiveDisplayComponent } from './components/sales-info-screen/live-display/live-display.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { MenuScreenComponent } from './components/menu-screen/menu-screen.component';
import { SideMenuComponent } from './components/menu-screen/side-menu/side-menu.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { FlowerInfoScreenComponent } from './components/flower-info-screen/flower-info-screen.component';
import { PhotoScreenComponent } from './components/flower-info-screen/photo-screen/photo-screen.component';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { LoadingScreenComponent } from './components/shared/loading-screen/loading-screen.component';
import { NoInternetScreenComponent } from './components/shared/no-internet-screen/no-internet-screen.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    VideoScreenComponent,
    MainScreenComponent,
    SoldItemScreenComponent,
    SalesInfoScreenComponent,
    LoginScreenComponent,
    LiveDisplayComponent,
    MenuScreenComponent,
    SideMenuComponent,
    AdminScreenComponent,
    FlowerInfoScreenComponent,
    PhotoScreenComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSplitModule,
    YouTubePlayerModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
