import { QuestionBase } from './QuestionBase';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
}