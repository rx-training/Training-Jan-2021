import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name="Reema";
  title = 'practice';
  booklist : Array<any> = [];
  addbook(arr : Array<any>)
  {
    this.booklist = arr;
  }
}
