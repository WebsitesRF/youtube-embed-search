import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'youtube-embed-player',
  templateUrl: './youtube-embed-player.component.html',
  styleUrls: ['./youtube-embed-player.component.css']
})
export class YoutubeEmbedPlayerComponent implements OnInit, AfterViewInit {

  @ViewChild('player')
  player: ElementRef;

  ytPlayer: any;


  @Input()
  public set videoId(value: string) {
    this.play(value);
    this._videoId = value;
  }

  public get videoId(): string {
    return this._videoId;
  }

  private _videoId: string;

  constructor() {
  }

  ngOnInit() {
  }

  public pause() {
    this.ytPlayer.pauseVideo();
  }

  ngAfterViewInit(): void {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    setTimeout(() => {
      this.createPlayer();
    }, 2000);

  }


  createPlayer() {
    this.ytPlayer = new window['YT'].Player(this.player.nativeElement, {
      height: "100%",
      width: "100%",
      playerVars: {'autoplay': 0, 'controls': 1},
      events: {
        'onReady': function (event: any) {
        },
        'onStateChange': function (event: any) {
          console.log("Player State Changed ", event);
        }
      }
    });

  }

  play(videoId) {
    if (this.ytPlayer) {
      this.ytPlayer.loadVideoById(videoId);
    }

  }



}
