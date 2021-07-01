import { FormControl } from "@angular/forms";

export function OnlyCharactorAllowed(Control:FormControl):{[s:string]:boolean | null}
{
    var latter=/^[A-Za-z\s]*$/
    if(!Control.value.match(latter))
    {
        return {'Nocharactor':true}
    }
    return null;

} 
export function OnlyDigitAllowed(Control:FormControl):{[s:string]:boolean | null}
{
    var Digit=/^[0-9\s]*$/
    if(!Control.value.match(Digit))
    {
        return {'Nodigit':true}
    }
    return null;

}

export function AgeCalculator(Control:FormControl):{[s:string]:boolean | null}
{
   var convertdate=new Date(Control.value)
   var birthdayyear=convertdate.getFullYear()
   var current=new Date().getFullYear();
   var age=current-birthdayyear
   if((age<5 || age>20))
   {
    return {'AgeLimit':true}
   } 
   return null;
}
