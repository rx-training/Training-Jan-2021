import { AbstractControl, ValidatorFn } from "@angular/forms";

export function phoneValidation() : ValidatorFn {
    let reg = new RegExp(/^[0-9]{10}$/);
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value.toString().match(reg)){
            return {phone: control.value};
        }
        return null;
      };
}