import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-vjs-player',
  template: `
    <video #target class="video-js vjs-theme-city" controls muted playsinline preload="none"></video>
  `,
  styleUrls: [
    './vjs-player.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      poster: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    // instantiate Video.js
    var src = this.options.sources[0].src; ///video url not youtube or vimeo,just video on server
    const onPlayerReady = () => {
      console.log('onPlayerReady', this);
      
      var canvas = document.createElement('canvas');
      canvas.width = 240; 
      canvas.height = 240;
      var context = canvas.getContext('2d');
      console.log(this.target.nativeElement)
      context.drawImage(this.target.nativeElement, 0, 0, canvas.width, canvas.height);
      this.player.poster(canvas.toDataURL('image/jpeg'));
    }
    // this.options.poster = this.options.sources[0].src.replace(/.mp4/,'.jpg')
    this.player = videojs(this.target.nativeElement, this.options, onPlayerReady);


    // var canvas = document.createElement('canvas');
    // canvas.width = 240; 
    // canvas.height = 240;
    // var context = canvas.getContext('2d');

    // this.player.addEventListener('loadeddata', function() {
    //     context.drawImage(this.player, 0, 0, canvas.width, canvas.height);
    //     this.player.poster(canvas.toDataURL('image/jpeg'));
    // });
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}