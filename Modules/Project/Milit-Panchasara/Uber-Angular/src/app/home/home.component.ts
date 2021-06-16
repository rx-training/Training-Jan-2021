import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild('productsSection') productsSection: ElementRef;
  @ViewChild('tabListImage') tabListImage: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  changeBGImage(type) {

    //changes the background image on click
    switch (type) {
      case "earn":
          this.productsSection.nativeElement.style.backgroundImage = 'url("../../assets/img/Product-Masthead-Desktop.jpg")';
          this.tabListImage.nativeElement.src = '../../assets/img/Product-Masthead-Desktop.jpg';
          break;

      case "ride":
          this.productsSection.nativeElement.style.backgroundImage = 'url("../../assets/img/ride_2x.jpg")';
          this.tabListImage.nativeElement.src = '../../assets/img/ride_2x.jpg';
          break;

      case "eat":
          this.productsSection.nativeElement.style.backgroundImage = 'url("../../assets/img/eats-hero-desktop-6.jpg")';
          this.tabListImage.nativeElement.src = '../../assets/img/eats-hero-desktop-6.jpg';
          break;

      case "freight":
          this.productsSection.nativeElement.style.backgroundImage = 'url("../../assets/img/Freight_2x.jpg")';
          this.tabListImage.nativeElement.src = '../../assets/img/Freight_2x.jpg';
          break;

      case "business":
          this.productsSection.nativeElement.style.backgroundImage = 'url("../../assets/img/Business_2x.jpg")';
          this.tabListImage.nativeElement.src = '../../assets/img/Business_2x.jpg';
          break;

      case "transit":
          this.productsSection.nativeElement.style.backgroundImage = 'url("../../assets/img/Transit_2x.jpg")';
          this.tabListImage.nativeElement.src = '../../assets/img/Transit_2x.jpg';
          break;

      case "bike":
          this.productsSection.nativeElement.style.backgroundImage = 'url("../../assets/img/bikes_2x.jpg")';
          this.tabListImage.nativeElement.src = '../../assets/img/bikes_2x.jpg';
          break;
  
      default:
          break;
    }
  }

}
