interface StringValidator{
    isAcceptable(s: string):boolean;
}

let lettersRegExp=/^[A-Za-z]+$/;
let numberRegExp=/^[0-9]+$/;

class LetterOnlyValidator implements StringValidator{
    isAcceptable(s:string){
        return lettersRegExp.test(s);
    }
}