import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  Heros : Array<Hero> = [
    {
      Id : 1, 
      Name : 'Racer 1',
      LatestChampion : true,
      Rider : 'Honda'
    },
    {
      Id : 2, 
      Name : 'Racer 2',
      LatestChampion : false,
      Rider : 'Suzuki'
    },
    {
      Id : 3, 
      Name : 'Racer 3',
      LatestChampion : true,
      Rider : 'Jaguar'
    }
  ];
  GetHero()
  {
    return this.Heros;
  }
}
