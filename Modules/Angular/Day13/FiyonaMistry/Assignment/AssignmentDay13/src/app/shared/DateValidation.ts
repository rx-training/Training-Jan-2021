import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dateValidation() : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const today = new Date().getTime();
        var date = new Date(control.value);
        
        if(!(control && date)) {
            return null;
        }
        return date.getTime() > today ? {invalidDate: {value :'You cannot use future dates' } } : null;
    };
}