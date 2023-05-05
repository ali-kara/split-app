import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.css'],
})
export class VideoScreenComponent implements OnInit {
  videoId = 'r-lR3uHPP1Y';
  playerVars = {
    enablejsapi:1,
    modestbranding: 1,
    controls: 1,
    autoplay: 1,
    fs: 0,
    iv_load_policy: 3,
    rel: 0,
    showinfo: 0,
  };

  constructor() {}
  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  player: any;

  initPlayer(player: any) {
    this.player = player;
    this.resize();
  }

  resize() {
    var iframe = document.getElementById('widget2');
    console.log(iframe);
    if (iframe != null) {
      iframe.style.height = '100%';
      iframe.style.width = '100%';
    }
  }


  
  RefreshVideo(videoId : string) {
    this.videoId = videoId;
  }
}
