import {Action} from '@ngrx/store';
import {YoutubeItem} from '../model/youtube-item';


export const SEARCH = 'SEARCH';
export const YOUTUBE_SEARCH_LOADED = 'YOUTUBE_SEARCH_LOADED';
export const SELECT_VIDEO = 'SELECT_VIDEO';


export interface State {
  videos: Array<YoutubeItem>;
  selectedId: string;
}

const initialState = {
  videos: [],
  selectedId: null

}


export function youtubeReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case YOUTUBE_SEARCH_LOADED:
      return {
        videos: action.payload,
        selectedId: null
      };
    case SELECT_VIDEO:
      return {
        selectedId: action.payload,
        videos: [...state.videos]
      }
    default:
      return state;
  }

}
