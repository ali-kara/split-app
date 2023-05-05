import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    VideoScreenComponent,
    MainScreenComponent,
    SoldItemScreenComponent,
    SalesInfoScreenComponent,
    LoginScreenComponent,
    LiveDisplayComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
