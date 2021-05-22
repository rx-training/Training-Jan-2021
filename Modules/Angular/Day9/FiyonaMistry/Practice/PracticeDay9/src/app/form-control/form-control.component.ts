import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  Name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  msg(){
    console.log(this.Name.value);
    alert(`Entered Name : ${this.Name.value}`);
  }

}
