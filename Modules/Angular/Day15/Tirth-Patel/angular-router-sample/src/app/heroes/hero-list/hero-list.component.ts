
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { MessageService } from '../../message.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero?: Hero;
  selectedId = 0;

  hero$!: Observable<Hero>;
  heroes$!: Observable<Hero[]>;
  constructor(private route:ActivatedRoute,private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.heroService.getHeroes();
  }));



}}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
