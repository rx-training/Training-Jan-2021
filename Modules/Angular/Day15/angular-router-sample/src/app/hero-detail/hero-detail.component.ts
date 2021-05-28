import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers : [HeroService]
})
export class HeroDetailComponent implements OnInit {

  list : Array<Hero> = [];  
  constructor(private heroService : HeroService,private router : Router, private route : ActivatedRoute) {
    this.list = heroService.GetHero();
  }
  HeroIndex : number;
  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params : Params)=>{
        this.HeroIndex = params['id'];
      }
    );
  }

}
