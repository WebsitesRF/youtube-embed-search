import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {youtubeReducer} from './reducer/youtube.reducer';
import {EffectsModule} from '@ngrx/effects';
import {YoutubeSearch} from './effects/youtube.search';
import {YoutubeService} from './services/youtube.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {YoutubeListComponent} from './components/youtube-list/youtube-list.component';
import { YoutubeEmbedPlayerComponent } from './components/youtube-embed-player/youtube-embed-player.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component'

@NgModule({
  declarations: [
    AppComponent,
    YoutubeListComponent,
    YoutubeEmbedPlayerComponent,
    YoutubeEmbedPlayerComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({youtube: youtubeReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(YoutubeSearch)
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
