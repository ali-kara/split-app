import { Component } from '@angular/core';

@Component({
  standalone: false,
selector: 'app-sales-info-screen',
  templateUrl: './sales-info-screen.component.html',
  styleUrls: ['./sales-info-screen.component.css'],
})
export class SalesInfoScreenComponent {
  durum = '';
  fiyat = '';

  getir() {}
}

