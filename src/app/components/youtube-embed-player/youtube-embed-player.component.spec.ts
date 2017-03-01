import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeEmbedPlayerComponent } from './youtube-embed-player.component';

describe('YoutubeEmbedPlayerComponent', () => {
  let component: YoutubeEmbedPlayerComponent;
  let fixture: ComponentFixture<YoutubeEmbedPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeEmbedPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeEmbedPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
