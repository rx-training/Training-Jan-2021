import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-facult',
  templateUrl: './facult.component.html',
  styleUrls: ['./facult.component.css']
})
export class FacultComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
