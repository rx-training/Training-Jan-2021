import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailValidation() : ValidatorFn {
    let reg = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value?.toString().match(reg)){
            return {email: control.value};
        }
        return null;
      };
}