import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';

import { Subscription } from 'rxjs';
import { NewsContent } from 'src/app/Models/NewsContent';
import { NewsContentsService } from 'src/app/news-contents.service';
import { NewscontentService } from 'src/app/newscontent.service';
import { numberValidator } from 'src/app/Validators/validator';

@Component({
  selector: 'app-subnews2',
  templateUrl: './subnews2.component.html',
  styleUrls: ['./subnews2.component.scss']
})
export class Subnews2Component implements OnInit, OnDestroy {
 id:number = 0;
newscontent:NewsContent;
    

  constructor(private route: ActivatedRoute,private router:Router,private service:NewscontentService) {
    this.newscontent={
      contentId:0
    }

   }
  paramsSubscription!: Subscription;
GoHome(){
  this.router.navigate(['Home']);
}

  ngOnInit(): void {
    this.id =
      this.route.snapshot.params['id'];


    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    this.service.getNewsById(this.id).subscribe(ele=>{
this.newscontent=ele,console.log(ele)
    });
    console.log(this.newscontent)
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
