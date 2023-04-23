import { Component, HostListener, ViewChild } from '@angular/core';
import { SplitComponent } from 'angular-split';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent {
  @ViewChild(SplitComponent) split: SplitComponent | undefined;

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
}
