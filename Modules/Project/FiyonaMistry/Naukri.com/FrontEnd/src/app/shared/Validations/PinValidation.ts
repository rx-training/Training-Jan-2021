import { AbstractControl, ValidatorFn } from "@angular/forms";

export function pinValidation() : ValidatorFn {
    let reg = new RegExp(/^[0-9]{6}$/);
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value.toString().match(reg)){
            return {pin: control.value};
        }
        return null;
      };
}