import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  name = "Milit";
  number1 = '';
  number2 = '';
  operation = 'addition';
  result = '';
  constructor() { }
  
  changeName(event: any) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  calculate() {
    if(this.number1 !== '' && this.number2 !== '') {
      switch (this.operation) {
        case 'addition':
          this.result = `Result: ${parseFloat(this.number1) + parseFloat(this.number2)}`;
          break;

        case 'substration':
          this.result = `Result: ${parseFloat(this.number1) - parseFloat(this.number2)}`;
          break;

        case 'multiplication':
          this.result = `Result: ${parseFloat(this.number1) * parseFloat(this.number2)}`;
          break;

        case 'divison':
          if(parseInt(this.number2) == 0) {
            
            this.result = 'Number 2 cannot be 0';
            break;
          }
          this.result = `Result: ${parseFloat(this.number1) / parseFloat(this.number2)}`;
          break;
      
        default:
          break;
      }
    }
  }

  ngOnInit(): void {
  }

}
