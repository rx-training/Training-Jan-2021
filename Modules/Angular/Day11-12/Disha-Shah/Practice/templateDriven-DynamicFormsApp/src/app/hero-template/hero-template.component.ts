import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-template',
  templateUrl: './hero-template.component.html',
  styleUrls: ['./hero-template.component.css']
})
export class HeroTemplateComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  newHero() {
    this.model = new Hero(42, '', '');
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
