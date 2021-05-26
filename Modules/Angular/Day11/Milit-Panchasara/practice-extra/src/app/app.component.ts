import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldService } from './field.service';
import { FieldBase } from './models/field-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FieldService ]
})
export class AppComponent {
  title = 'practice-extra';
  formFields: Observable<FieldBase<any>[]>;

  constructor(service: FieldService) {  
    this.formFields = service.getFields();
  }
}
