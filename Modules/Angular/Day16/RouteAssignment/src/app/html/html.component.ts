import { Component, OnInit } from '@angular/core';
import {SideNav} from '../../assets/SideNav.js';
declare const SideNav: any;
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HTMLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav()
  {
    SideNav();
  }
}
