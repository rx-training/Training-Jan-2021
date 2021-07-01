import { AbstractControl, ValidatorFn } from "@angular/forms";

export function phoneValidation(reg : RegExp) : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value.toString().match(reg)){
            return {phone: control.value};
        }
        return null;
      };
}