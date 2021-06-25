import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-sites',
  templateUrl: './partner-sites.component.html',
  styleUrls: ['./partner-sites.component.css']
})
export class PartnerSitesComponent implements OnInit {

  constructor() { }

  cards = [
    {
      img: '../../../assets/img/Footer/Jeevansaathi.com.png'
    },
    {
      img: '../../../assets/img/Footer/0d1327e2-5888-44c6-acf8-9d57850b16bf.jpg'
    },
    {
      img: '../../../assets/img/Footer/download (3).png'
    },
    {
      img: '../../../assets/img/Footer/images.jpg'
    },
    {
      img: '../../../assets/img/Footer/shiksha-logo.png'
    },
    {
      img: '../../../assets/img/Footer/Meritnation-logo.jpg'
    },
    {
      img: '../../../assets/img/Footer/download.jpg'
    },
    {
      img: '../../../assets/img/Footer/99acres.com-Logo-300x152.jpg'
    },
    {
      img: '../../../assets/img/Footer/mydala_owler_20160226_214954_original.png'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

}
