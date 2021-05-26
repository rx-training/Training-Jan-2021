import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  item: {id:number, name:string} = {id:null,name:''};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      (params:Params) => {
        this.item.id = params['id'];
        this.item.name = params['name'];
      }
    )
  }

  // unsubscribe when component destroys
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
