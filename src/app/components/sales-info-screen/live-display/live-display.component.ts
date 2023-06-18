import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-live-display',
  templateUrl: './live-display.component.html',
  styleUrls: ['./live-display.component.css'],
})
export class LiveDisplayComponent {
  AliciKodu: any;
  SatisFiyat: any;

  constructor() {
    this.AliciKodu = '---';
    this.SatisFiyat = '---.--';
  }
}
