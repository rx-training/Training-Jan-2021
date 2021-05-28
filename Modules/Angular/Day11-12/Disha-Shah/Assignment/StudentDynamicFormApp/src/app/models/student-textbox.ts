import { StudentBase } from "./student-base";

export class TextboxStudent extends StudentBase<string> {
    controlType = 'textbox';
}