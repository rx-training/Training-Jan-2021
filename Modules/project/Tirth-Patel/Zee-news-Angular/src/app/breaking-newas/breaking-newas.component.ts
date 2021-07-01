import { Component, OnInit } from '@angular/core';
import { NewsContent } from '../Models/NewsContent';
import { NewscontentService } from '../newscontent.service';

@Component({
  selector: 'app-breaking-newas',
  templateUrl: './breaking-newas.component.html',
  styleUrls: ['./breaking-newas.component.scss']
})
export class BreakingNewasComponent implements OnInit {
  newstype="Breakingnews";
breakingNewsList:NewsContent[]=[];
  constructor(private newscontentService : NewscontentService) { }

  ngOnInit(): void {
    this.newscontentService.getHeaderWiseNews(2).subscribe(ele=>{this.breakingNewsList = ele,console.log(ele)});
  }

}
