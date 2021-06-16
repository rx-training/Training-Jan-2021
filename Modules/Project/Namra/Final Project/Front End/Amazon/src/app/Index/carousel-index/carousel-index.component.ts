import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-carousel-index',
  templateUrl: './carousel-index.component.html',
  styleUrls: ['./carousel-index.component.css']
})
export class CarouselIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.checkCarosel();
  }
  flagCarousel = false;
  checkCarosel(){
    setTimeout(() => {
      if(window.innerHeight <= 1366 || window.innerWidth <= 1024)
      {
        this.flagCarousel = true;
      }
      else
      {
        this.flagCarousel = false;
      }  
      this.checkCarosel();
    }, 500);
  }
}
