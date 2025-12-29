import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css'],
})
export class LoadingScreenComponent {
  @Input()
  isLoading: boolean = false;

  playSound() {
    var audio = new Audio('../../../../assets/sounds/notification.mp3');
    audio.play();
  }
}

