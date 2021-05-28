import { Component, Input } from '@angular/core';
import { CrudoperationService } from './crudoperation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CrudoperationService]
})
export class AppComponent {
  title = 'PracticeExercise';
  constructor(private service:CrudoperationService)
  {}
  // Storedata: any
  // ID:''
  // showData(data)
  // {  
  //   this.Storedata=data;
  //   this.ID=data.ID;
  // }
 


}
