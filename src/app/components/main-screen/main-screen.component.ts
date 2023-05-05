import { Component, HostListener, ViewChild } from '@angular/core';
import { SplitComponent } from 'angular-split';
import { VideoScreenComponent } from '../video-screen/video-screen.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent {
  @ViewChild(SplitComponent) split: SplitComponent | undefined;

  @ViewChild(VideoScreenComponent) _videoScreen:
    | VideoScreenComponent
    | undefined;

  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth + 'px';
    this.getScreenHeight = window.innerHeight + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth + 'px';
    this.getScreenHeight = window.innerHeight + 'px';
  }

  refreshButon() {
    this._videoScreen?.RefreshVideo("");
  }
}
