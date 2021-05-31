import { Component, OnChanges, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import 'slick-carousel';
import { IMovies } from '../models/IMovies';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void{}

}
