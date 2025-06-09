import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-home',
  standalone: false,
  templateUrl: './body-home.component.html',
  styleUrl: './body-home.component.scss'
})
export class BodyHomeComponent implements OnInit, OnDestroy {

  backgroundImages = [
    '/assets/images/capa-album-caos.jpeg',
    '/assets/images/supernova.png',
    '/assets/images/djonga.webp',
    '/assets/images/Matue.webp',

    '/assets/images/major-rd.webp',
  ];
  currentImageIndex = 0;
  intervalId: any;

  ngOnInit(): void {
      this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  get currentBackground(): string {
    return `url(${this.backgroundImages[this.currentImageIndex]})`;
  }
}
