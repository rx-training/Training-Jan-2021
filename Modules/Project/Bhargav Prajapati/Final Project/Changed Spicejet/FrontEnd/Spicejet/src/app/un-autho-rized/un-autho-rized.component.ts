import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-autho-rized',
  templateUrl: './un-autho-rized.component.html',
  styleUrls: ['./un-autho-rized.component.css']
})
export class UnAuthoRizedComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
  }

  Navigate()
  {
    this.router.navigateByUrl('');
  }

}
