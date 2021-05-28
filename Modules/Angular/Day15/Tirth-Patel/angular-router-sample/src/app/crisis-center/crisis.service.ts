import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrisises(): Observable<Crisis[]> {
    const heroes = of(CRISES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getCrisis(id: number | string) {
    return this.getCrisises().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Crisis[]) => heroes.find(hero => hero.id === +id)!)
    );

}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/