import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {YoutubeService} from "../services/youtube.service";


@Injectable()
export class YoutubeSearch {
  constructor(
    private youtube: YoutubeService,
    private actions$: Actions
  ) { }

  @Effect() login$ = this.actions$
  // Listen for the 'LOGIN' action
    .ofType('SEARCH')
    .debounceTime(200)
    // Map the payload into JSON to use as the request body
    .map(action => JSON.stringify(action.payload))
    .switchMap(payload => this.youtube.search(payload)
      // If successful, dispatch success action with result
        .map(res => ({ type: 'YOUTUBE_SEARCH_LOADED', payload: res }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: 'YOUTUBE_SEARCH_FAILED' }))
    );
}
