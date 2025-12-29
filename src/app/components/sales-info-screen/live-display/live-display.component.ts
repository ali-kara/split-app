import { Component, Input, inject } from '@angular/core';

@Component({
  standalone: false,
selector: 'app-live-display',
  templateUrl: './live-display.component.html',
  styleUrls: ['./live-display.component.css'],
})
export class LiveDisplayComponent {
  @Input() public AliciKodu;
  @Input() public SatisFiyat;

  constructor() {
    this.AliciKodu = '---';
    this.SatisFiyat = '---.--';
  }
}

