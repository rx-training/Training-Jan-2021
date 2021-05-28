import { Component } from '@angular/core';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentServiceService]
})
export class AppComponent {
  title = 'Assignment';
}
