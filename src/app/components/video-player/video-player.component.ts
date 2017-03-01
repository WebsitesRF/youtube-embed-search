import {Component, ElementRef, Input, OnInit} from '@angular/core';
import 'gsap';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {


  @Input()
  selected:string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  lastSelected: ClientRect;


  positionPlayer(target: HTMLElement) {

    let el: HTMLElement = this.el.nativeElement;

    const getPosition = (el) => {
      let _x = 0;
      let _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return {top: _y, left: _x};
    };


    const pos: any = target.getBoundingClientRect();
    this.lastSelected = pos;

    //evt.target.style.visibility = 'hidden';
    this.el.nativeElement.style.visibility = 'visible';
    //this.currentTarget = evt.target;

    //this.video.open();

    TweenMax.fromTo(el, 0.7, {
      x: pos.left + 'px',
      y: pos.top + window.scrollY + 'px',
      width: pos.width + 'px',
      height: pos.height + 'px'
    }, {x: '0px', y: window.scrollY + 'px', height: '100%', width: '100%', ease: 'Sine.easeOut'});


  }

  close() {
    const el: HTMLElement = this.el.nativeElement;
    const pos = this.lastSelected;
    //this.video.close();
    //this.currentTarget.style.visibility = 'visible';
    TweenMax.to(el, 0.7, {
      x: pos.left + 'px',
      y: pos.top + window.scrollY + 'px',
      width: pos.width + 'px',
      height: pos.height + 'px',
      ease: Back.easeIn,
      onComplete: () => {
        //this.video.nativeElement.style.visibility = 'hidden';
        this.el.nativeElement.style.visibility = 'hidden';
      }
    });
  }


}
