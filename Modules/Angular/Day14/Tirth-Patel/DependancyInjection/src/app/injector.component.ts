import { Component,Injector } from "@angular/core";
import { Hero } from "./heroes/hero";
import { HeroService } from "./heroes/hero.service";
import { heroServiceProvider } from "./heroes/hero.service.provider";
import { Logger } from "./logger.service";

@Component({
    selector: 'app-injectors',
    template: `
<h2>injections</h2>
<div id="hero">{{hero.name}}</div>`,
    providers: [heroServiceProvider, Logger]
})
export class InjectorComponent {
 
  
    heroService: HeroService
    hero: Hero;
    constructor(private injector:Injector ){
        this.heroService = this.injector.get(HeroService);
        this.hero = this.heroService.getHeroes()[0];
    }
}