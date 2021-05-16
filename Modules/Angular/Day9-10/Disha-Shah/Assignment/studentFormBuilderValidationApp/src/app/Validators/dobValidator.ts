import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// age of student should be between 5 to 20
export function dobValidator (minAge: number, maxAge: number): ValidatorFn{
    return (control: AbstractControl) => {
        let result: boolean = false;
        result = (new Date()).getFullYear()-(new Date(control.value)).getFullYear()>maxAge || (new Date()).getFullYear()-(new Date(control.value)).getFullYear()<minAge;
        return result ? { invalidAge: "invalid" } : null;
    };
}

