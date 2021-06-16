import { Component, OnInit } from '@angular/core';

import { NewsContent } from '../Models/NewsContent';
import { NewscontentService } from '../newscontent.service';

@Component({
  selector: 'app-budegt2021',
  templateUrl: './budegt2021.component.html',
  styleUrls: ['./budegt2021.component.scss']
})
export class Budegt2021Component implements OnInit {
  newstype="BudgetNews"
BudgetNews:NewsContent[]=[];
  constructor(private service:NewscontentService) { }

  ngOnInit(): void {
    this.service.getHeaderWiseNews(3).subscribe(ele=>{this.BudgetNews=ele,console.log(ele)});
  }


}
