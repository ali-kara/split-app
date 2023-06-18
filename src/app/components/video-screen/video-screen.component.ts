import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.css'],
})
export class VideoScreenComponent implements OnInit {
  videoId = 'SSC0RkJuBVw';
  player!: YT.Player;
  apiLoaded = false;

  playervars = {
    "enablejsapi": 1,
    "modestbranding": 1,
    "controls": 0,
    "autoplay": 1,
    "fs":1,
    "iv_load_policy": 3,
    "rel": 0,
    "showinfo": 0
  }

  constructor() {}
  ngOnInit(): void {
    if (!this.apiLoaded) {
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.apiLoaded = true;

  }

  initPlayer(player: any) {

    this.player = player;   
    this.resize();
  }

  resize() {
    var iframe = document.getElementById('widget2');

    if (iframe != null) {
      iframe.style.height = '100%';
      iframe.style.width = '100%';
    }
  }

  RefreshVideo(videoId: string) {
    console.log(videoId);

    this.videoId = videoId;
  }
}
