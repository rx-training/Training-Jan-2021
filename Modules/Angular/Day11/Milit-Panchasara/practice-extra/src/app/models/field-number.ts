import { FieldBase } from './field-base';

export class FieldNumber extends FieldBase<string> {
  controlType = 'number';
}