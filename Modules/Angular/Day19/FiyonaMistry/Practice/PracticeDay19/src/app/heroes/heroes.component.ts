import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];

  constructor(private service : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.service.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name : string){
    name = name.trim();
    if(!name){
      return 
    }
    this.service.addHero({name} as Hero).subscribe(hero => {this.heroes.push(hero)});
  }

  delete(hero : Hero){
    this.heroes = this.heroes.filter(h => h !== hero);
    this.service.deleteHero(hero.id).subscribe();
  }

}
