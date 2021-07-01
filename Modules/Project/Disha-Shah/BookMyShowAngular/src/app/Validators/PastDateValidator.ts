import { AbstractControl, ValidatorFn } from "@angular/forms";

export function PastDateValidator(): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
        var date = control.value.split('-');
        var inputDate = new Date(parseInt(date[0]), parseInt(date[1])-1, date[2]);
        return (inputDate < new Date()) ? {pastDate: {value: control.value}} : null;
    }
}