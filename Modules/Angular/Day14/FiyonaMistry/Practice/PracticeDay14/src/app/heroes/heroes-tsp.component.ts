import { Component } from '@angular/core';

/**
 * A version of `HeroesComponent` that does not provide the `HeroService` (and thus relies on its
 * `Injectable`-declared provider) in order to function.
 *
 * TSP stands for Tree-Shakeable Provider.
 */
@Component({
  selector: 'app-heroes-tsp',
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})
export class HeroesTspComponent { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/