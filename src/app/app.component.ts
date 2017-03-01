import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {YoutubeItem} from './model/youtube-item';
import {SELECT_VIDEO, SEARCH, State} from './reducer/youtube.reducer';
import 'gsap';

interface AppState {
  counter: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  videos: Observable<any>;
  selected: Observable<string>;


  constructor(private store: Store<AppState>) {
    this.videos = store.select('youtube').map((data: any) => data.videos);
    this.selected = store.select('youtube').map((data: any) => data.selectedId);
  }

  search(term: string) {
    this.store.dispatch({type: SEARCH, payload: term});
  }

  selectItem(item: YoutubeItem) {
    this.store.dispatch({type: SELECT_VIDEO, payload: item.id.videoId});
  }






}
