import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {YoutubeItem} from "../../model/youtube-item";

@Component({
  selector: 'youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeListComponent implements OnInit {

  @Output()
  onVideo: EventEmitter<YoutubeItem> = new EventEmitter<YoutubeItem>();

  @Input()
  videos: Array<YoutubeItem>;

  @Output()
  onVideoSelected:EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {
  }

  select(video: YoutubeItem, event:Event) {
    this.onVideo.emit(video);
    this.onVideoSelected.emit(event);
  }

  ngOnInit() {
  }

}
