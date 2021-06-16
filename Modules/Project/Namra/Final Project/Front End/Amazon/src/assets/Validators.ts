import { FormControl, ValidatorFn, AbstractControl  } from "@angular/forms";

// export function EmailValidator(control : FormControl) : {[s : string] : boolean}{
//     var letters = /^[A-Za-z0-9]*@[a-z]+[.][a-z]+$/
//     if(!control.value.match(letters))
//     {
//         return {'invalidString' : true}
//     }   
// } 
// export function  demoName(control : FormControl) : {[s : string] : boolean}{
//     var letters = /^[A-Za-z]*$/
//     if(!control.value.match(letters))
//     {
//         return {'invalidString' : true}
//     }   
// }
export function DOBValidatior(minAge : number, maxAge : number) : ValidatorFn{
    return (control : AbstractControl)=> {
        let result : boolean = false;
        result = (new Date()).getFullYear() - (new Date(control.value)).getFullYear() > maxAge || (new Date()).getFullYear() - (new Date(control.value)).getFullYear() < minAge;
        return result ? {invalidAge : 'invalid'} : null;
    };
}

