import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {YoutubeItem} from "../model/youtube-item";


@Injectable()
export class YoutubeService {

  private BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';


  constructor(private http: Http) {

  }

  public search(term: string): Observable<YoutubeItem> {
    return this.http.get(`${this.BASE_URL}?q=${term}&part=snippet&maxResults=20&type=video&key=${this.API_TOKEN}`)
      .map(res => res.json())
      .map(json => json.items);
  }

}
