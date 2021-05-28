import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/lib/question-base';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() question: QuestionBase<string>;
  @Input() AdmissionForm: FormGroup;
  get isValid() { 
    return this.AdmissionForm.controls[this.question.key].valid; 
  }
}
