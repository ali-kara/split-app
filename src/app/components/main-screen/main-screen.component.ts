import { Component, HostListener, ViewChild } from '@angular/core';
import { SplitComponent } from 'angular-split';
import { LiveDisplayComponent } from '../sales-info-screen/live-display/live-display.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent {
  @ViewChild(SplitComponent) split: SplitComponent | undefined;
  @ViewChild(LiveDisplayComponent) livedisplay : LiveDisplayComponent | undefined;


  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth + 'px';
    this.getScreenHeight = window.innerHeight + 'px';


    //this.livedisplay?.AliciKodu = "999";
    //this.livedisplay?.SatisFiyat = "423.42";
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth + 'px';
    this.getScreenHeight = window.innerHeight + 'px';

  }
}