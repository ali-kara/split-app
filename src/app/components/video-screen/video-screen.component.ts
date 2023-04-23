// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-video-screen',
//   templateUrl: './video-screen.component.html',
//   styleUrls: ['./video-screen.component.css'],
// })
// export class VideoScreenComponent {
//   public YT: any;
//   public video: any;
//   public player: any;
//   public reframed: Boolean = false;
//   showVideo = true;

//   isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//   /* 2. Initialize method for YT IFrame API */
//   init() {
//     // Return if Player is already created
//     if (window['YT']) {
//       this.startVideo();
//       return;
//     }

//     var tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     if (firstScriptTag.parentNode != null) {
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//     }

//     /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
//     window['onYouTubeIframeAPIReady'] = () => this.startVideo();

//   }

//   ngOnInit() {
//     this.video = 'r-lR3uHPP1Y';
//     this.init();
//   }

//   toggleVideo() {
//     if (this.showVideo) this.showVideo = false;
//     else {
//       this.showVideo = true;
//       setTimeout(() => {
//         this.init();
//       });
//     }
//   }

//   startVideo() {
//     this.reframed = false;
//     this.player = new window['YT'].Player('player', {
//       videoId: this.video,
//       playerVars: {
//         autoplay: 1,
//         modestbranding: 1,
//         controls: 1,
//         disablekb: 1,
//         rel: 0,
//         showinfo: 0,
//         fs: 0,
//         playsinline: 1,
//       },
//       events: {
//         onStateChange: this.onPlayerStateChange.bind(this),
//         onError: this.onPlayerError.bind(this),
//         onReady: this.onPlayerReady.bind(this),
//       },
//     });
//   }

//   /* 4. It will be called when the Video Player is ready */
//   onPlayerReady(event: any) {
//     if (this.isRestricted) {
//       event.target.mute();
//       event.target.playVideo();
//     } else {
//       event.target.playVideo();
//     }
//   }

//   /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
//   onPlayerStateChange(event: any) {
//     console.log(event);
//     switch (event.data) {
//       case window['YT'].PlayerState.PLAYING:
//         if (this.cleanTime() == 0) {
//           console.log('started ' + this.cleanTime());
//         } else {
//           console.log('playing ' + this.cleanTime());
//         }
//         break;
//       case window['YT'].PlayerState.PAUSED:
//         if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
//           console.log('paused' + ' @ ' + this.cleanTime());
//         }
//         break;
//       case window['YT'].PlayerState.ENDED:
//         console.log('ended ');
//         break;
//     }
//   }

//   cleanTime() {
//     return Math.round(this.player.getCurrentTime());
//   }

//   onPlayerError(event: any) {
//     switch (event.data) {
//       case 2:
//         console.log('' + this.video);
//         break;
//       case 100:
//         break;
//       case 101 || 150:
//         break;
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.css'],
})
export class VideoScreenComponent implements OnInit {
  videoId = 'r-lR3uHPP1Y';
  apiLoaded = false;

  constructor() {}
  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);

      this.apiLoaded = true;
    }
  }

  // ngAfterViewInit(): void {
  //   // var iframe = document.getElementById('widget2');

  //   var iframe = document.getElementById('script');

  //   console.log(iframe);

  //   if (iframe != null) {
  //     iframe.style.height = '100%';
  //     iframe.style.width = '100%';
  //   }
  // }
}
