import { Component, HostListener, ViewChild } from '@angular/core';
import { SplitComponent } from 'angular-split';
import { LiveDisplayComponent } from '../sales-info-screen/live-display/live-display.component';
import { BaseService } from 'src/app/api/BaseService';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent extends BaseService {
  @ViewChild(SplitComponent) split: SplitComponent | undefined;
  @ViewChild(LiveDisplayComponent) livedisplay:
    | LiveDisplayComponent
    | undefined;
}
