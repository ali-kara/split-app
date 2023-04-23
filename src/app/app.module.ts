import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoScreenComponent } from './components/video-screen/video-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SoldItemScreenComponent } from './components/sold-item-screen/sold-item-screen.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SalesInfoScreenComponent } from './components/sales-info-screen/sales-info-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { TrackComponent } from './components/track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoScreenComponent,
    MainScreenComponent,
    SoldItemScreenComponent,
    SalesInfoScreenComponent,
    LoginScreenComponent,
    TrackComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    ReframeModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
