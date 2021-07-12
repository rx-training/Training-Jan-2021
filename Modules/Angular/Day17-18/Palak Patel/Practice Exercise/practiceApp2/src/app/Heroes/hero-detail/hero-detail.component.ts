import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;

  @Input() hero: Hero | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')!;
    this.hero$ = this.service.getHero(id);
  }

  gotoHeroes(hero:Hero){
    const heroId=hero ? hero.id:null;
    this.router.navigate(['/heroes', {id:heroId, foo:'foo'}]);
  }

}