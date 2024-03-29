import { Component, Inject, inject } from '@angular/core';
import { BaseService } from 'src/app/api/BaseService';
import { FlowerInfoService } from 'src/app/api/FlowerInfoService';
import { Cicek } from 'src/app/models/Cicek';

@Component({
  selector: 'app-flower-info-screen',
  templateUrl: './flower-info-screen.component.html',
  styleUrls: ['./flower-info-screen.component.css'],
})
export class FlowerInfoScreenComponent extends BaseService {
  flowerInfoService: FlowerInfoService = inject(FlowerInfoService);

  cicekBilgi: Cicek | undefined;

  ngOnInit() {
    this.GetFlowerInfo();
  }

  GetFlowerInfo() {
    this.isLoading = true;
    this.flowerInfoService.getFlowerInfo().subscribe(
      (response) => {
        this.cicekBilgi = response;
        this.isLoading = false;
      },
      async (error) => {
        await this.delay(10000);
        this.GetFlowerInfo();
      }
    );
  }

  askForAudioPermission() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        // User granted permission, you can proceed with audio playback logic here
        console.log('Audio permission granted');
        stream.getTracks().forEach((track) => track.stop()); // Stop the stream as it's no longer needed
      })
      .catch((error) => {
        // User denied permission or an error occurred
        console.error('Error getting audio permission:', error);
      });
  }
}
