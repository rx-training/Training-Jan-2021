import { AbstractControl, ValidatorFn } from "@angular/forms";

export function stringValidation(reg : RegExp) : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value?.toString().match(reg)){
            return {str: control.value};
        }
        return null;
    };
}