import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../models/field-base';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {  }

  @Input() field: FieldBase<string>;
  @Input() form: FormGroup;
  groupArray:string[] = [];

  get isValid() {
    switch(this.groupArray.length) {
      case 0:
        return ( this.form.controls[this.field.key].valid || !this.form.controls[this.field.key].touched);
        break;
      case 1:
        return ( this.form.get(this.groupArray[0]+'.'+this.field.key).valid || !this.form.get(this.groupArray[0]+'.'+this.field.key).touched);
        break;
      case 2:
        return ( this.form.get(this.groupArray[0]+'.'+this.groupArray[1]+'.'+this.field.key).valid || !this.form.get(this.groupArray[0]+'.'+this.groupArray[1]+'.'+this.field.key).touched);
        break;
      case 3:
        return ( this.form.get(this.groupArray[0]+'.'+this.groupArray[1]+'.'+this.groupArray[2]+'.'+this.field.key).valid || !this.form.get(this.groupArray[0]+'.'+this.groupArray[1]+'.'+this.groupArray[2]+'.'+this.field.key).touched);
        break;
      case 4:
          return ( this.form.get(this.groupArray[0]+'.'+this.groupArray[1]+'.'+this.groupArray[2]+'.'+this.groupArray[3]+'.'+this.field.key).valid || !this.form.get(this.groupArray[0]+'.'+this.groupArray[1]+'.'+this.groupArray[2]+'.'+this.groupArray[3]+'.'+this.field.key).touched);
          break;
    }
    return false;
  }

  get groupArrayLength() {
    this.groupArray = (this.field.groupKey == null || this.field.groupKey == '') ? [] : this.field.groupKey.split('.');
    return this.groupArray.length;
  }



}
