import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { every } from 'lodash';
import { BaseService } from 'src/app/api/BaseService';
import { VideoService } from 'src/app/api/VideoService.service';
import { API_CONSTANT } from 'src/app/core/api-contants';
import { VideoBilgi } from 'src/app/models/VideoBilgi';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.css'],
})
export class VideoScreenComponent extends BaseService{
  @ViewChild('player') player: YouTubePlayer | undefined;

  video : VideoService = inject(VideoService);

  videoBilgi : VideoBilgi | undefined;
  videoId: string | undefined = "zo9dJFo8H8g";
  // player!: YT.Player;
  apiLoaded = false;


  playervars = {
    // enablejsapi: 1,
    // modestbranding: 1,
    controls: 0,
    autoplay: 1,
    origin: 'http://localhost:4200' 
    // fs:1,
    // iv_load_policy: 3,
    // rel: 0,
    // showinfo: 0
  };


  ngOnInit(): void {
    this.getStreamInfo();  
    
    
    if (!this.apiLoaded) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
               console.log("api loaded");

    }

    
  }


  getStreamInfo()
  {
    this.video.getStreamInfo().subscribe(
      (response) => {
        this.videoBilgi = response;
        this.videoId = response.link;
        this.isLoading = false;
                console.log(response);

      },
      async (error) => {
        console.log(error);
        await this.delay(API_CONSTANT.RETRY_PERIOD);
        this.getStreamInfo();
      }
    );
  }

    // Autoplay
  onReady() {
   
       console.log("on ready");

    this.resize();    
    // this.player.mute();         
    // this.player.playVideo();  
    
          this.player?.playVideo();  

  }

  // Loop
  onStateChange(event : any) {
    console.log("state change", event);
    
    if (event.data === 0) {
      this.player?.playVideo();  
    }
  }

  resize() {
    var iframe = document.getElementById('widget2');

    if (iframe != null) {
      iframe.style.height = '100%';
      iframe.style.width = '100%';
    }
  }

  RefreshVideo(videoId: string) {
    this.videoId = videoId;
  }
}
