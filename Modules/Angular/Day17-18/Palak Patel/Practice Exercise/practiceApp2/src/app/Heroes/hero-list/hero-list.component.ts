import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero?: Hero;
  heroes : Hero[] = [];
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(private heroService: HeroService, private messageService: MessageService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getHeroes();
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params=> {
        this.selectedId = parseInt(params.get('id')!,10);
        return this.heroService.getHeroes();
      })
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
  }

}
