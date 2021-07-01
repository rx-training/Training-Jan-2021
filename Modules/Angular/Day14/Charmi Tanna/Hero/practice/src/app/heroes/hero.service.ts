import { Logger } from '../logger.service';
import { Injectable } from '@angular/core';
import { HEROES } from '../mock-hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private logger: Logger) {

   }
   getHeroes()
   { 
     this.logger.log('Getting heroes ...');
     return HEROES;
   }
}
