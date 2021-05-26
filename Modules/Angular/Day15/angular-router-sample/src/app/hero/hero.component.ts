import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {

  list: Array<Hero> = [];
  constructor(private heroService: HeroService, private router: Router, private route: ActivatedRoute) {
    this.list = heroService.GetHero();
   
  }
  flag = false;
  ngOnInit(): void {
    
  }
  GetData(index: number) {
    this.router.navigate(['', index], { relativeTo: this.route });
  }
}
