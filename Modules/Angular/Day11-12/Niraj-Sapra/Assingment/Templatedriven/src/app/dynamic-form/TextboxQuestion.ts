import { QuestionBase } from './QuestionBase';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
}