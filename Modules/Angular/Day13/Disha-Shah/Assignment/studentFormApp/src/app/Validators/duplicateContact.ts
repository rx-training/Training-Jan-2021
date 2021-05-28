import { AbstractControl, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

// emergency and reference contacts can't be duplicate
export function duplicateContact(field: string): ValidatorFn{
    return (control: AbstractControl) => {
        let result: boolean = false;

        // gets control of current input box
        console.log(control);

        // gets formgroup of current input box
        console.log(control.parent);
        
        const group = control.parent as FormGroup;
        if (group) {
            // gets formgroup of current input box
            console.log(group);

            // gets formarray of current input box
            console.log(group.parent);

            // gets array of all formgroup values of a formarray
            console.log(group.parent?.value);
            console.log(group.parent?.value.map((x: { [x: string]: any; }) => x[field]));
            console.log(control.value);

            // creating array of contact numbers using map on contact field control
            const values = group.parent?.value.map((x: { [x: string]: any; }) => x[field]);

            console.log(values);

            // creates array of values matching current control value
            console.log(values.filter((x: any) => x == control.value));

            // finds length of array having duplicate values
            console.log(values.filter((x: any) => x == control.value).length);
            console.log(values.filter((x: any) => x == control.value).length > 1);

            // returns true if there are duplicate values
            result = values.filter((x: any) => x == control.value).length > 1;
            console.log(result);
        }
        return result ? { duplicateContactError: "duplicate" } : null;
    };
}
