import { QuestionService } from './question-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService],

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';
}
