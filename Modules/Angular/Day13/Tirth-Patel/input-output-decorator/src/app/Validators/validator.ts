import { FormControl, FormControlDirective } from "@angular/forms";


const nameRegex = /^[a-zA-Z ]+$/;
const numberRegex  = /^[0-9]/;
function nameValidator(control : FormControl) :{[s:string]:boolean}{
 
    if(!nameRegex.test(control.value)){;
        return{"OnlyCharactersAllowed":true};
    }
    else{
        return null;
    }
} 
function numberValidator(control : FormControl) :{[s:string]:boolean}{

    if(!numberRegex.test(control.value)){;
        return{"OnlyNumbersAllowed":true};
    }
    else{
        return null;
    }
} 
function Datevalidator(control : FormControl) :{[s:string]:boolean}{
   
    var dob = new Date(control.value);
  

 if((dob.getFullYear() < 2016 && dob.getFullYear() > 2000)){
     return null;
 } 
   else{
       return {"InvalidDOB":true}
   } 
   
} 
export {nameRegex,nameValidator,numberValidator,Datevalidator}