import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero : Hero | undefined;

  constructor(private router : ActivatedRoute, private service : HeroService, private location : Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() : void{
    const id = parseInt(this.router.snapshot.paramMap.get('id'), 10);
    this.service.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack() : void{
    this.location.back();
  }

  save() : void{
    if(this.hero){
      this.service.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
