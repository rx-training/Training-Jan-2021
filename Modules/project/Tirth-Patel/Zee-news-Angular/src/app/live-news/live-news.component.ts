import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsContent } from '../Models/NewsContent';
import { NewscontentService } from '../newscontent.service';

@Component({
  selector: 'app-live-news',
  templateUrl: './live-news.component.html',
  styleUrls: ['./live-news.component.scss']
})
export class LiveNewsComponent implements OnInit {
  Url="assets/Pictures/img/News/915922-uppolicezee.webp";
NewsList:any;
newstype="Live"
LiveNews:NewsContent[]=[];
  constructor(private newsservice:NewscontentService,private router:Router) { 
    this.NewsList = newsservice.getNews().subscribe(ele=>{this.NewsList = ele ,console.log(ele)});
    newsservice.getHeaderWiseNews(1).subscribe(ele=>{this.LiveNews= ele,console.log(ele)})
  }

  ngOnInit(): void {
  }

  
}
