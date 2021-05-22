import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailValidation(reg : RegExp) : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value?.toString().match(reg)){
            return {email: control.value};
        }
        return null;
      };
}