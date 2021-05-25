import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-day4assignment-portfolio',
  templateUrl: './day4assignment-portfolio.component.html',
  styleUrls: ['./day4assignment-portfolio.component.css']
})
export class Day4assignmentPortfolioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
