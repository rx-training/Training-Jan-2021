import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const ageValidator = (minAge: number, maxAge: number): ValidatorFn => control =>
    (new Date()).getFullYear()-(new Date(control.value)).getFullYear()>maxAge || (new Date()).getFullYear()-(new Date(control.value)).getFullYear()<minAge
        ? {inValidAge: {minAge}}
        : null
