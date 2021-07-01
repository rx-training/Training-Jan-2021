import { Component, OnInit } from '@angular/core';
import {Hero} from '../templatedrivenform/Hero';
@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }


newHero() {
  this.model = new Hero(42, '', '');
}

skyDog(): Hero {
  const myHero =  new Hero(42, 'SkyDog',
                         'Fetch any object at any distance',
                         'Leslie Rollover');
  console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  return myHero;
}

//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}
showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; // Dr. IQ
}

}