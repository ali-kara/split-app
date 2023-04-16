import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';
import { VideoScreenComponent } from './video-screen/video-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SoldItemScreenComponent } from './sold-item-screen/sold-item-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoScreenComponent,
    MainScreenComponent,
    SoldItemScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AngularSplitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
