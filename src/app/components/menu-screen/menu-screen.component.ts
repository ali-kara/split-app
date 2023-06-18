import { Component, ViewChild } from '@angular/core';
import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { VideoScreenComponent } from '../video-screen/video-screen.component';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.css'],
})
export class MenuScreenComponent {
  @ViewChild(VideoScreenComponent) _videoScreen:
    | VideoScreenComponent
    | undefined;

  @ViewChild(LoginScreenComponent) _loginScreen:
    | LoginScreenComponent
    | undefined;

  refreshButon() {
    console.log('Video Yenileniyor');
    this._videoScreen?.RefreshVideo('2n5r-FDrKtk');
  }

  logout() {
    this._loginScreen?.logout();
  }

  openChat() {}
}
