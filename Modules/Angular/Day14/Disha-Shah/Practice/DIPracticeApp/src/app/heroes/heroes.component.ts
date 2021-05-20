import { Component, OnInit } from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [ heroServiceProvider ],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
