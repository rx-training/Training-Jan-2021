import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/Heroes/hero';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  @Input() hero: Hero | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
