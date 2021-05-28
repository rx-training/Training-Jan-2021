import { Component, OnInit } from '@angular/core';
import { ValueDataService } from '../value-data.service';

@Component({
  selector: 'app-value-data',
  templateUrl: './value-data.component.html',
  styleUrls: ['./value-data.component.css']
})
export class ValueDataComponent implements OnInit {

  constructor(private apiService: ValueDataService) { }

  ngOnInit() {
  }
   invokeApi(): void {
    this.apiService.get();
  }

}
