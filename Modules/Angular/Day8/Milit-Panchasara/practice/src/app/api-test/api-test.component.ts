import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../locationModel';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  locationData:LocationModel[] = [];
  constructor() { }

  async ngOnInit(): Promise<void> {
    let response = await fetch("https://localhost:44383/api/locations");
    let data:LocationModel[] = await response.json();
    this.locationData = data;
  }

}
