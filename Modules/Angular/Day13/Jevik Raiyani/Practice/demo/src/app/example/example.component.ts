import { Component, Input, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input() data : string; 

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
