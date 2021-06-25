import { AbstractControl, ValidatorFn } from "@angular/forms";

export function stringValidation() : ValidatorFn {
    let reg = new RegExp(/^[a-zA-Z]+$/);
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value?.toString().match(reg)){
            return {str: control.value};
        }
        return null;
    };
}