import { FormControl } from "@angular/forms";

export function OnlyCharactorAllowed(Control:FormControl):{[s:string]:boolean | null}
{
    var latter=/^[A-Za-z\s]*$/
    if(!Control.value?.match(latter))
    {
        return {'Nocharactor':true}
    }
    return null;
} 
export function OnlyDigitAllowed(Control:FormControl):{[s:string]:boolean | null}
{
    var Digit=/^[0-9\s]*$/
    if(!Control.value?.match(Digit))
    {
        return {'Nodigit':true}
    }
    
    return null;
    
}

export function DateCalculator(Control:FormControl):{[s:string]:boolean | null}
{
   var convertdate=new Date(Control.value).getDate();
   var current=new Date().getDate();
   if(convertdate<current)
   {
    return {'DateComperision':true}
   }
   else
    {
    return null;
    } 
   
}
