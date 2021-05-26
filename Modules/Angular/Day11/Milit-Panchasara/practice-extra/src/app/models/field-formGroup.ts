import { FormGroup } from '@angular/forms';
import { FieldBase } from './field-base';

export class FieldFormGroup extends FieldBase<FormGroup> {
  controlType = 'formGroup';
}