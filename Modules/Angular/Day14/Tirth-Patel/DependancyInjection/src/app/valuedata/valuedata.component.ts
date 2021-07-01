import { Component, OnInit } from '@angular/core';
import { ValueDataService } from '../value-data.service';

@Component({
  selector: 'app-valuedata',
  templateUrl: './valuedata.component.html',
  styleUrls: ['./valuedata.component.css']
})
export class ValuedataComponent implements OnInit {

 constructor(private apiService: ValueDataService) { }

  ngOnInit() {
  }
   invokeApi(): void {
    this.apiService.get();
  }

}
